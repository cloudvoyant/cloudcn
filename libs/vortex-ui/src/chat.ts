// libs/vortex-ui/src/chat.ts
// Chat component family: shared types, cva variants, base class strings, and the
// framework-agnostic streaming state machine (agenticChatReducer).
// Closely based on: no chat primitive exists in Shark/Tark/Ark/Chakra/shadcn —
// the framework packages compose it from sourced Ark primitives (factory,
// popover, field textarea, button). The streaming state machine is original and pure.
import { cva, type VariantProps } from 'class-variance-authority';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type ChatVariant = 'slack' | 'ios';
export type ChatThreadVariant = 'slack' | 'ios' | 'minimal';
export type ChatMessageVariant = 'user' | 'agent' | 'default';
export type ChatMessageStatus = 'default' | 'sending' | 'streaming' | 'error';
export type AgenticChatStatus = 'waiting' | 'streaming' | 'completed' | 'retrying' | 'cancelled';

export interface ChatAttachment {
  id: string;
  name: string;
  url?: string;
}

/** Reaction map: unicode-emoji key or the icon keys `thumbs-up`/`thumbs-down` → count. */
export type ChatReactions = Record<string, number>;

export interface ChatMessageData {
  id: string;
  variant: ChatMessageVariant;
  content: string;
  from?: string;
  at?: Date;
  status?: ChatMessageStatus;
  reactions?: ChatReactions;
  attachments?: ChatAttachment[];
}

// ---------------------------------------------------------------------------
// Streaming state machine (framework-agnostic; consumed by useAgenticChat)
// ---------------------------------------------------------------------------

export type ChatStreamEvent =
  | { type: 'text-delta'; text: string }
  | { type: 'status'; status: AgenticChatStatus }
  | { type: 'error'; message: string }
  | { type: 'done'; message?: ChatMessageData };

export interface AgenticChatState {
  messages: ChatMessageData[];
  status: AgenticChatStatus;
  streamingText: string;
  error?: string;
}

export const initialAgenticChatState: AgenticChatState = {
  messages: [],
  status: 'completed',
  streamingText: '',
};

/** Pure fold of ChatStreamEvent into AgenticChatState. `text-delta` appends to
 *  streamingText and promotes `waiting` → `streaming`; `done` optionally commits
 *  a final message (constructed by the caller, which owns id generation).
 *  Any new status or a completed stream clears `error` — a stale failure must
 *  not survive a retry on the public state. */
export function agenticChatReducer(state: AgenticChatState, event: ChatStreamEvent): AgenticChatState {
  switch (event.type) {
    case 'text-delta':
      return {
        ...state,
        status: state.status === 'waiting' ? 'streaming' : state.status,
        streamingText: state.streamingText + event.text,
      };
    case 'status':
      return { ...state, status: event.status, error: undefined };
    case 'error':
      return { ...state, status: 'cancelled', error: event.message, streamingText: '' };
    case 'done':
      return {
        ...state,
        status: 'completed',
        streamingText: '',
        error: undefined,
        messages: event.message ? [...state.messages, event.message] : state.messages,
      };
  }
}

// ---------------------------------------------------------------------------
// Variants + base class strings
// ---------------------------------------------------------------------------

export const chatRootBase = 'flex h-full min-h-0 flex-col bg-background';

export const chatThreadScrollBase = 'min-h-0 flex-1 overflow-y-auto overscroll-contain';

export const chatThreadVariants = cva('flex flex-col', {
  variants: {
    variant: {
      slack: 'gap-4 px-4 py-4',
      ios: 'gap-2 px-4 py-4',
      minimal: 'gap-3 px-4 py-4',
    },
  },
  defaultVariants: { variant: 'slack' },
});

export type ChatThreadVariants = VariantProps<typeof chatThreadVariants>;

/** Virtualized rows are absolutely positioned, so the thread variant's flex
 *  `gap` cannot separate them — each row carries the matching bottom padding. */
export const chatThreadVirtualRowVariants = cva('', {
  variants: {
    variant: {
      slack: 'pb-4',
      ios: 'pb-2',
      minimal: 'pb-3',
    },
  },
  defaultVariants: { variant: 'slack' },
});

export type ChatThreadVirtualRowVariants = VariantProps<typeof chatThreadVirtualRowVariants>;

export const chatMessageVariants = cva('flex w-full', {
  variants: {
    align: {
      left: 'justify-start',
      right: 'justify-end',
    },
  },
  defaultVariants: { align: 'left' },
});

export type ChatMessageVariants = VariantProps<typeof chatMessageVariants>;

export const chatMessageBubbleVariants = cva(
  'max-w-[85%] whitespace-pre-wrap break-words rounded-lg px-3 py-2 text-sm',
  {
    variants: {
      variant: {
        user: 'bg-primary text-primary-foreground',
        agent: 'bg-muted text-foreground',
        default: 'bg-muted text-foreground',
      },
    },
    defaultVariants: { variant: 'default' },
  },
);

export type ChatMessageBubbleVariants = VariantProps<typeof chatMessageBubbleVariants>;

export const chatMessageBodyBase = 'flex max-w-[85%] flex-col gap-1';
export const chatMessageMetaBase = 'text-xs text-muted-foreground';
export const chatMessageAttachmentsBase = 'flex flex-col gap-1 text-xs text-muted-foreground';
export const chatStreamingCaretBase =
  'ml-0.5 inline-block h-4 w-[2px] animate-pulse rounded-full bg-current align-middle';

export const chatReactionsBarBase = 'flex flex-wrap items-center gap-1';
export const chatReactionBase =
  'inline-flex items-center gap-1 rounded-full border border-border bg-background px-2 py-0.5 text-xs hover:bg-muted';
export const chatReactionActiveBase = 'border-primary/60 text-primary';
export const chatReactionMenuGridBase = 'grid grid-cols-6 gap-1';
export const chatReactionMenuButtonBase = 'rounded-md p-1 text-lg hover:bg-muted';
export const chatReactionRateBase = 'inline-flex items-center gap-1';

export const typingIndicatorBase = 'inline-flex items-center gap-1 rounded-lg bg-muted px-3 py-2';
export const typingDotBase = 'size-1.5 animate-bounce rounded-full bg-muted-foreground';
export const typingDotDelays = [0, 150, 300] as const;

export const chatInputBase = 'flex flex-col gap-1 border-t border-border bg-background p-2';
export const chatInputRowBase = 'flex items-end gap-2';
export const chatInputAttachmentsBase = 'flex flex-wrap gap-1 px-1';
export const chatInputAttachmentBase = 'inline-flex items-center gap-1 rounded-md bg-muted px-2 py-0.5 text-xs';
export const chatInputAttachmentDeleteBase = 'inline-flex text-muted-foreground hover:text-foreground';
export const chatInputTriggerBase =
  'inline-flex size-10 shrink-0 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground';

/** Default emoji set for the reaction picker, shared by both frameworks. */
export const DEFAULT_REACTION_EMOJIS = ['👍', '❤️', '😂', '😮', '😢', '🙏', '🎉', '🤔', '👀', '🚀', '🔥', '✅'];

export interface ChatMessageProps {
  variant?: ChatMessageVariant;
  status?: ChatMessageStatus;
  from?: string;
  at?: Date;
  reactions?: ChatReactions;
  attachments?: ChatAttachment[];
  className?: string;
}
