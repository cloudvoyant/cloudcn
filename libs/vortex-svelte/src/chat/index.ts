// libs/vortex-svelte/src/chat/index.ts
// Closely based on: @cloudvoyant/vortex-react chat/index.ts — the Svelte barrel
// mirrors the same export surface (components + shared core constants).
// Single source of truth for the default emoji set is @cloudvoyant/vortex-ui
// (shared with the React mirror); re-exported so both packages expose it.
export { DEFAULT_REACTION_EMOJIS } from '@cloudvoyant/vortex-ui';
export { default as Chat } from './Chat.svelte';
export { default as ChatThread } from './ChatThread.svelte';
export { default as ChatMessage } from './ChatMessage.svelte';
export { default as ChatMessageReaction } from './ChatMessageReaction.svelte';
export { default as ChatReactionsBar } from './ChatReactionsBar.svelte';
export { default as ReactionEmoji } from './ReactionEmoji.svelte';
export { default as ReactionRate } from './ReactionRate.svelte';
export { default as ChatInput } from './ChatInput.svelte';
export { default as TypingIndicator } from './TypingIndicator.svelte';
export { default as AgentChat } from './AgentChat.svelte';
export { default as AgentStreamingMessage } from './AgentStreamingMessage.svelte';
export { useAgenticChat, type AgenticChatApi } from './use-agentic-chat.svelte';
export { getChatContext, setChatContext, type ChatContextValue } from './context';
export { getAgentChatContext, setAgentChatContext } from './agent-context';
