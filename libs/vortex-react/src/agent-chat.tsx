// libs/vortex-react/src/agent-chat.tsx
// Closely based on: original composition — no chat primitive in
// Shark/Tark/Ark/Chakra/shadcn; Ark factory (@ark-ui/react/factory) over the
// core agenticChatReducer, reusing the sourced ChatMessage.
// Agentic chat layer: useAgenticChat wraps the core agenticChatReducer in
// useState and exposes the mutators from the intent (addMessage,
// prependMessages, setStreamingText, setStatus) plus dispatch for stream
// events. AgentChat provides the api + thread-variant contexts;
// AgentStreamingMessage renders the in-flight assistant text with a caret,
// outside any virtualized list (the streaming tail must never be virtualized).
// Transport (fetch/SSE/abort) stays consumer-owned — wire it around dispatch.
import { createContext, useContext, useState } from 'react';
import { ark, type HTMLArkProps } from '@ark-ui/react/factory';
import {
  agenticChatReducer,
  chatRootBase,
  cn,
  initialAgenticChatState,
  type AgenticChatState,
  type AgenticChatStatus,
  type ChatMessageData,
  type ChatStreamEvent,
  type ChatThreadVariant,
} from '@cloudvoyant/vortex-ui';
import { ChatContext } from './chat/context';
import { ChatMessage } from './chat/message';

export interface AgenticChatApi extends AgenticChatState {
  dispatch: (event: ChatStreamEvent) => void;
  addMessage: (message: ChatMessageData) => void;
  prependMessages: (messages: ChatMessageData[]) => void;
  setStreamingText: (text: string) => void;
  setStatus: (status: AgenticChatStatus) => void;
}

export function useAgenticChat(initial: AgenticChatState = initialAgenticChatState): AgenticChatApi {
  const [state, setState] = useState<AgenticChatState>(initial);
  return {
    ...state,
    dispatch: (event) => setState((prev) => agenticChatReducer(prev, event)),
    addMessage: (message) => setState((prev) => ({ ...prev, messages: [...prev.messages, message] })),
    prependMessages: (messages) => setState((prev) => ({ ...prev, messages: [...messages, ...prev.messages] })),
    setStreamingText: (text) => setState((prev) => ({ ...prev, streamingText: text })),
    setStatus: (status) => setState((prev) => ({ ...prev, status })),
  };
}

const AgentChatContext = createContext<AgenticChatApi | null>(null);

export function useAgentChat(): AgenticChatApi | null {
  return useContext(AgentChatContext);
}

export type AgentChatProps = HTMLArkProps<'div'> & {
  /** The useAgenticChat() return value. */
  chat: AgenticChatApi;
  threadVariant?: ChatThreadVariant;
};

export function AgentChat({ chat, threadVariant = 'minimal', className, children, ...props }: AgentChatProps) {
  return (
    <AgentChatContext.Provider value={chat}>
      <ChatContext.Provider value={{ threadVariant }}>
        <ark.div className={cn(chatRootBase, className)} {...props}>
          {children}
        </ark.div>
      </ChatContext.Provider>
    </AgentChatContext.Provider>
  );
}

export type AgentStreamingMessageProps = HTMLArkProps<'div'> & {
  /** Standalone usage (outside AgentChat): provide text + streaming directly. */
  text?: string;
  streaming?: boolean;
};

export function AgentStreamingMessage({ text, streaming, className, ...props }: AgentStreamingMessageProps) {
  const chat = useAgentChat();
  const content = text ?? chat?.streamingText ?? '';
  const isStreaming =
    streaming ??
    (chat ? chat.status === 'streaming' || chat.status === 'waiting' || chat.status === 'retrying' : false);
  // The live region stays mounted even while empty: an aria-live node must be in
  // the DOM before its content changes, or the first announcement of every stream
  // is dropped. aria-busy marks the region as still updating while tokens arrive.
  return (
    <ark.div aria-live="polite" aria-busy={isStreaming} data-agent-streaming className={className} {...props}>
      {content === '' ? null : (
        <ChatMessage variant="agent" status={isStreaming ? 'streaming' : 'default'}>
          {content}
        </ChatMessage>
      )}
    </ark.div>
  );
}
