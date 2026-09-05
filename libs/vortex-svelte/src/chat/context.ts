// libs/vortex-svelte/src/chat/context.ts
// Closely based on: @cloudvoyant/vortex-react chat/context.ts, adapted to
// Svelte context (getter form so the value stays reactive under runes).
// Thread-variant context provided by Chat/AgentChat and consumed by
// ChatMessage. The variant is exposed as a getter so consumers stay reactive
// via $derived.
import { getContext, setContext } from 'svelte';
import type { ChatThreadVariant } from '@cloudvoyant/vortex-ui';

export interface ChatContextValue {
  threadVariant: () => ChatThreadVariant;
}

const CHAT_CONTEXT_KEY = Symbol('vortex-chat-context');

export function setChatContext(threadVariant: () => ChatThreadVariant): void {
  setContext<ChatContextValue>(CHAT_CONTEXT_KEY, { threadVariant });
}

export function getChatContext(): ChatContextValue | undefined {
  return getContext<ChatContextValue>(CHAT_CONTEXT_KEY);
}
