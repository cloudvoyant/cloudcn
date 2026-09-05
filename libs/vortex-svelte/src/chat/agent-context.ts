// libs/vortex-svelte/src/chat/agent-context.ts
// Closely based on: original composition — Svelte context over the mirrored
// agentic chat api, matching the getter pattern used by ./context.ts.
// AgentChat api context, consumed by AgentStreamingMessage. The api is exposed
// as a getter so replacing the `chat` prop keeps the context pointing at the
// current instance (the same reason the thread-variant context uses a getter).
import { getContext, setContext } from 'svelte';
import type { AgenticChatApi } from './use-agentic-chat.svelte';

const AGENT_CHAT_CONTEXT_KEY = Symbol('vortex-agent-chat-context');

export function setAgentChatContext(chat: () => AgenticChatApi): void {
  setContext<() => AgenticChatApi>(AGENT_CHAT_CONTEXT_KEY, chat);
}

export function getAgentChatContext(): (() => AgenticChatApi) | undefined {
  return getContext<() => AgenticChatApi>(AGENT_CHAT_CONTEXT_KEY);
}
