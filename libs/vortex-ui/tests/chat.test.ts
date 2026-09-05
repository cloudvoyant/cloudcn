// libs/vortex-ui/tests/chat.test.ts
import { describe, expect, it } from 'vitest';
import { agenticChatReducer, initialAgenticChatState, type AgenticChatState } from '../src/chat';

const waitingState: AgenticChatState = { ...initialAgenticChatState, status: 'waiting' };

describe('agenticChatReducer', () => {
  it('appends text deltas and promotes waiting to streaming', () => {
    const withDelta = agenticChatReducer(waitingState, { type: 'text-delta', text: 'Hel' });
    expect(withDelta.streamingText).toBe('Hel');
    expect(withDelta.status).toBe('streaming');
    const appended = agenticChatReducer(withDelta, { type: 'text-delta', text: 'lo' });
    expect(appended.streamingText).toBe('Hello');
    expect(appended.status).toBe('streaming');
  });

  it('keeps explicit statuses on text deltas', () => {
    const retrying: AgenticChatState = { ...initialAgenticChatState, status: 'retrying' };
    const next = agenticChatReducer(retrying, { type: 'text-delta', text: 'x' });
    expect(next.status).toBe('retrying');
  });

  it('sets explicit statuses', () => {
    const next = agenticChatReducer(waitingState, { type: 'status', status: 'retrying' });
    expect(next.status).toBe('retrying');
  });

  it('cancels on error and clears the streaming buffer', () => {
    const streaming: AgenticChatState = { ...waitingState, status: 'streaming', streamingText: 'partial' };
    const next = agenticChatReducer(streaming, { type: 'error', message: 'boom' });
    expect(next.status).toBe('cancelled');
    expect(next.error).toBe('boom');
    expect(next.streamingText).toBe('');
  });

  it('commits the final message on done and clears the buffer', () => {
    const streaming: AgenticChatState = { ...waitingState, status: 'streaming', streamingText: 'full text' };
    const next = agenticChatReducer(streaming, {
      type: 'done',
      message: { id: 'a1', variant: 'agent', content: 'full text' },
    });
    expect(next.status).toBe('completed');
    expect(next.streamingText).toBe('');
    expect(next.messages).toHaveLength(1);
    expect(next.messages[0]).toMatchObject({ id: 'a1', variant: 'agent', content: 'full text' });
  });

  it('done without a message only resets streaming state', () => {
    const streaming: AgenticChatState = { ...waitingState, status: 'streaming', streamingText: 'discarded' };
    const next = agenticChatReducer(streaming, { type: 'done' });
    expect(next.status).toBe('completed');
    expect(next.streamingText).toBe('');
    expect(next.messages).toHaveLength(0);
  });

  it('clears a stale error when a retry succeeds', () => {
    const failed = agenticChatReducer(
      { ...waitingState, status: 'streaming', streamingText: 'partial' },
      {
        type: 'error',
        message: 'boom',
      },
    );
    expect(failed.error).toBe('boom');
    const retrying = agenticChatReducer(failed, { type: 'status', status: 'retrying' });
    expect(retrying.error).toBeUndefined();
    const streamed = agenticChatReducer(retrying, { type: 'text-delta', text: 'recovered' });
    expect(streamed.error).toBeUndefined();
    const settled = agenticChatReducer(streamed, {
      type: 'done',
      message: { id: 'a1', variant: 'agent', content: 'recovered' },
    });
    expect(settled.error).toBeUndefined();
    expect(settled.status).toBe('completed');
    expect(settled.streamingText).toBe('');
  });

  it('keeps error text when a later stream fails again', () => {
    const failed = agenticChatReducer(waitingState, { type: 'error', message: 'boom' });
    const retried = agenticChatReducer(failed, { type: 'status', status: 'retrying' });
    const failedAgain = agenticChatReducer(retried, { type: 'error', message: 'boom again' });
    expect(failedAgain.error).toBe('boom again');
    expect(failedAgain.status).toBe('cancelled');
  });

  it('clears error on done without an intervening status event', () => {
    const failed = agenticChatReducer(waitingState, { type: 'error', message: 'boom' });
    const settled = agenticChatReducer(failed, { type: 'done' });
    expect(settled.error).toBeUndefined();
    expect(settled.status).toBe('completed');
  });

  it('never mutates the previous state', () => {
    const before: AgenticChatState = {
      messages: [{ id: 'u1', variant: 'user', content: 'hi' }],
      status: 'waiting',
      streamingText: '',
    };
    const next = agenticChatReducer(before, {
      type: 'done',
      message: { id: 'a1', variant: 'agent', content: 'hello' },
    });
    expect(before.messages).toHaveLength(1);
    expect(next.messages).toHaveLength(2);
  });
});
