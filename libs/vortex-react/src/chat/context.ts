// libs/vortex-react/src/chat/context.ts
// Closely based on: original composition — plain React context over the core
// ChatThreadVariant type (no chat primitive in Shark/Tark/Ark/Chakra/shadcn).
// Thread-variant context provided by Chat/AgentChat and consumed by ChatMessage
// for alignment and bubble styling.
import { createContext, useContext } from 'react';
import type { ChatThreadVariant } from '@cloudvoyant/vortex-ui';

export interface ChatContextValue {
  threadVariant: ChatThreadVariant;
}

export const ChatContext = createContext<ChatContextValue | null>(null);

export function useChatContext(): ChatContextValue | null {
  return useContext(ChatContext);
}
