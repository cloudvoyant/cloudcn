// libs/vortex-react/src/chat/index.ts
// Single source of truth for the default emoji set is @cloudvoyant/vortex-ui
// (shared with the Svelte mirror); re-exported here to keep the React API.
export { DEFAULT_REACTION_EMOJIS } from '@cloudvoyant/vortex-ui';
export { Chat, type ChatProps } from './root';
export { ChatContext, useChatContext, type ChatContextValue } from './context';
export { ChatThread, type ChatThreadProps } from './thread';
export { ChatMessage, formatChatTime, type ChatMessageComponentProps } from './message';
export {
  ChatMessageReaction,
  ChatReactionsBar,
  ReactionEmoji,
  ReactionRate,
  type ChatMessageReactionProps,
  type ChatReactionsBarProps,
  type ReactionEmojiProps,
  type ReactionRateProps,
} from './reactions';
export { ChatInput, type ChatInputProps } from './input';
export { TypingIndicator, type TypingIndicatorProps } from './typing';
