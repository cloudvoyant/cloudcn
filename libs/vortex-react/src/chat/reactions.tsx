// libs/vortex-react/src/chat/reactions.tsx
// Closely based on: original composition — no chat primitive in
// Shark/Tark/Ark/Chakra/shadcn; Ark popover (@ark-ui/react/popover) + factory.
// Reaction display and picker menus. ChatMessageReaction is one pill (unicode
// emoji or thumbs icon + count); ReactionEmoji uses the Ark Popover state
// machine for the emoji grid; ReactionRate is a thumbs up/down group.
import { useState } from 'react';
import { ark, type HTMLArkProps } from '@ark-ui/react/factory';
import {
  chatReactionActiveBase,
  chatReactionBase,
  chatReactionMenuButtonBase,
  chatReactionMenuGridBase,
  chatReactionRateBase,
  chatReactionsBarBase,
  cn,
  DEFAULT_REACTION_EMOJIS,
  type ChatReactions,
} from '@cloudvoyant/vortex-ui';
import { Popover, PopoverContent, PopoverTitle, PopoverTrigger } from '../popover';
import { ThumbsDownIcon, ThumbsUpIcon } from './icons';

// `onToggle` is a DOM event name in React's attribute types; these components
// own it as the reaction-toggle callback, so the DOM member is omitted.
export type ChatMessageReactionProps = Omit<HTMLArkProps<'button'>, 'onToggle'> & {
  /** Unicode emoji key, or the icon keys `thumbs-up`/`thumbs-down`. */
  icon: string;
  count: number;
  active?: boolean;
  onToggle?: () => void;
};

export function ChatMessageReaction({
  icon,
  count,
  active = false,
  onToggle,
  className,
  ...props
}: ChatMessageReactionProps) {
  const isThumbsUp = icon === 'thumbs-up';
  const isThumbsDown = icon === 'thumbs-down';
  return (
    <ark.button
      type="button"
      aria-pressed={active}
      aria-label={isThumbsUp ? 'Thumbs up' : isThumbsDown ? 'Thumbs down' : `React with ${icon}`}
      onClick={onToggle}
      className={cn(chatReactionBase, active && chatReactionActiveBase, className)}
      {...props}
    >
      {isThumbsUp || isThumbsDown ? (
        isThumbsUp ? (
          <ThumbsUpIcon className="size-3.5" />
        ) : (
          <ThumbsDownIcon className="size-3.5" />
        )
      ) : (
        <span aria-hidden="true">{icon}</span>
      )}
      <span>{count}</span>
    </ark.button>
  );
}

export type ChatReactionsBarProps = Omit<HTMLArkProps<'div'>, 'onToggle'> & {
  reactions: ChatReactions;
  /** Icon keys the current user has toggled on (rendered with aria-pressed). */
  activeIcons?: string[];
  onToggle?: (icon: string) => void;
};

export function ChatReactionsBar({
  reactions,
  activeIcons = [],
  onToggle,
  className,
  ...props
}: ChatReactionsBarProps) {
  return (
    <ark.div className={cn(chatReactionsBarBase, className)} {...props}>
      {Object.entries(reactions).map(([icon, count]) => (
        <ChatMessageReaction
          key={icon}
          icon={icon}
          count={count}
          active={activeIcons.includes(icon)}
          onToggle={() => onToggle?.(icon)}
        />
      ))}
    </ark.div>
  );
}

export type ReactionEmojiProps = {
  emojis?: string[];
  onSelect: (emoji: string) => void;
  triggerLabel?: string;
  className?: string;
};

export function ReactionEmoji({
  emojis = DEFAULT_REACTION_EMOJIS,
  onSelect,
  triggerLabel = 'Add emoji reaction',
  className,
}: ReactionEmojiProps) {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={(details) => setOpen(details.open)}>
      <PopoverTrigger aria-label={triggerLabel} className={cn(chatReactionBase, className)}>
        <span aria-hidden="true">😊</span>
        <span aria-hidden="true">+</span>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverTitle className="sr-only">Emoji reactions</PopoverTitle>
        <ark.div className={chatReactionMenuGridBase}>
          {emojis.map((emoji) => (
            <ark.button
              key={emoji}
              type="button"
              aria-label={`React with ${emoji}`}
              className={chatReactionMenuButtonBase}
              onClick={() => {
                onSelect(emoji);
                setOpen(false);
              }}
            >
              {emoji}
            </ark.button>
          ))}
        </ark.div>
      </PopoverContent>
    </Popover>
  );
}

export type ReactionRateProps = Omit<HTMLArkProps<'div'>, 'onToggle'> & {
  value?: 'thumbs-up' | 'thumbs-down' | null;
  counts?: { up: number; down: number };
  onToggle: (icon: 'thumbs-up' | 'thumbs-down') => void;
};

export function ReactionRate({
  value = null,
  counts = { up: 0, down: 0 },
  onToggle,
  className,
  ...props
}: ReactionRateProps) {
  return (
    <ark.div role="group" aria-label="Rate this message" className={cn(chatReactionRateBase, className)} {...props}>
      <ChatMessageReaction
        icon="thumbs-up"
        count={counts.up}
        active={value === 'thumbs-up'}
        onToggle={() => onToggle('thumbs-up')}
      />
      <ChatMessageReaction
        icon="thumbs-down"
        count={counts.down}
        active={value === 'thumbs-down'}
        onToggle={() => onToggle('thumbs-down')}
      />
    </ark.div>
  );
}
