// apps/docs/src/components/examples/agent-chat/streaming/react.tsx
import { useEffect, useRef } from 'react';
import { AgentChat, AgentStreamingMessage, ChatInput, ChatThread, useAgenticChat } from '@cloudvoyant/vortex-react';

const LOREM_LINES = [
  'Streaming is fun.',
  'Tokens arrive one by one.',
  'The caret blinks while it goes.',
  'Settled text joins the history.',
  'Done — send another message!',
];

export default function ReactAgentChatStreaming() {
  const chat = useAgenticChat();
  const timerRef = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (timerRef.current !== null) window.clearInterval(timerRef.current);
    },
    [],
  );

  const handleSend = (text: string) => {
    // A second send mid-stream would otherwise orphan the first interval, leaving
    // two loops dispatching text-delta into the same streamingText.
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
    chat.addMessage({ id: `user-${String(chat.messages.length)}`, variant: 'user', content: text, at: new Date() });
    chat.setStatus('waiting');
    let index = 0;
    timerRef.current = window.setInterval(() => {
      const line = LOREM_LINES[index];
      index += 1;
      if (line === undefined) {
        if (timerRef.current !== null) window.clearInterval(timerRef.current);
        timerRef.current = null;
        chat.dispatch({
          type: 'done',
          message: {
            id: `agent-${String(Date.now())}`,
            variant: 'agent',
            content: LOREM_LINES.join('\n'),
            at: new Date(),
          },
        });
        return;
      }
      chat.dispatch({ type: 'text-delta', text: (index === 1 ? '' : '\n') + line });
    }, 600);
  };

  return (
    <AgentChat chat={chat} className="h-80">
      <ChatThread messages={chat.messages} virtual />
      <AgentStreamingMessage />
      <ChatInput placeholder="Ask the agent…" onSend={handleSend} />
    </AgentChat>
  );
}
