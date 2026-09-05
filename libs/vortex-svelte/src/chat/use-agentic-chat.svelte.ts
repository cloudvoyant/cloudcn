// libs/vortex-svelte/src/chat/use-agentic-chat.svelte.ts
// Closely based on: @cloudvoyant/vortex-react agent-chat.tsx useAgenticChat,
// re-expressed with Svelte 5 runes over the same core agenticChatReducer.
// Svelte 5 runes mirror of vortex-react's useAgenticChat: wraps the core
// agenticChatReducer in $state and exposes the same mutators + dispatch.
import {
  agenticChatReducer,
  initialAgenticChatState,
  type AgenticChatState,
  type AgenticChatStatus,
  type ChatMessageData,
  type ChatStreamEvent,
} from '@cloudvoyant/vortex-ui';

export interface AgenticChatApi {
  readonly state: AgenticChatState;
  dispatch: (event: ChatStreamEvent) => void;
  addMessage: (message: ChatMessageData) => void;
  prependMessages: (messages: ChatMessageData[]) => void;
  setStreamingText: (text: string) => void;
  setStatus: (status: AgenticChatStatus) => void;
}

export function useAgenticChat(initial: AgenticChatState = initialAgenticChatState): AgenticChatApi {
  let state = $state<AgenticChatState>(initial);
  return {
    get state() {
      return state;
    },
    dispatch: (event) => {
      state = agenticChatReducer(state, event);
    },
    addMessage: (message) => {
      state = { ...state, messages: [...state.messages, message] };
    },
    prependMessages: (messages) => {
      state = { ...state, messages: [...messages, ...state.messages] };
    },
    setStreamingText: (text) => {
      state = { ...state, streamingText: text };
    },
    setStatus: (status) => {
      state = { ...state, status };
    },
  };
}
