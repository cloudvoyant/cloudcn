// libs/vortex-react/src/chat/message.tsx
// Closely based on: original composition — no chat primitive in
// Shark/Tark/Ark/Chakra/shadcn; Ark factory (@ark-ui/react/factory).
// ChatMessage: role variants (user/agent/default), meta row (from · time),
// streaming caret, sending/error statuses, attachments, and reactions.
// Alignment and bubble styling resolve from the ChatContext thread variant:
// ios + user → right-aligned accent bubble; minimal → transparent, no labels.
import { ark, type HTMLArkProps } from '@ark-ui/react/factory';
import {
  chatMessageAttachmentsBase,
  chatMessageBodyBase,
  chatMessageBubbleVariants,
  chatMessageMetaBase,
  chatMessageVariants,
  chatStreamingCaretBase,
  cn,
  type ChatMessageProps as ChatMessageBaseProps,
} from '@cloudvoyant/vortex-ui';
import { useChatContext } from './context';
import { ChatReactionsBar } from './reactions';

export function formatChatTime(at: Date): string {
  return at.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
}

export type ChatMessageComponentProps = HTMLArkProps<'div'> &
  ChatMessageBaseProps & {
    /** Fires with the icon key when a reaction pill is clicked. */
    onReactionToggle?: (icon: string) => void;
    /** Icon keys the current user has toggled on. */
    activeReactionIcons?: string[];
  };

export function ChatMessage({
  variant = 'default',
  status = 'default',
  from,
  at,
  reactions,
  attachments,
  onReactionToggle,
  activeReactionIcons,
  className,
  children,
  ...props
}: ChatMessageComponentProps) {
  const ctx = useChatContext();
  const threadVariant = ctx?.threadVariant ?? 'slack';
  const align = threadVariant === 'ios' && variant === 'user' ? 'right' : 'left';
  const minimal = threadVariant === 'minimal';
  return (
    <ark.div
      data-variant={variant}
      data-status={status}
      className={cn(chatMessageVariants({ align }), className)}
      {...props}
    >
      <ark.div className={chatMessageBodyBase}>
        {from && !minimal ? (
          <ark.span className={chatMessageMetaBase}>
            {from}
            {at ? ` · ${formatChatTime(at)}` : ''}
          </ark.span>
        ) : null}
        <ark.div
          className={cn(
            chatMessageBubbleVariants({ variant: minimal ? 'agent' : variant }),
            minimal && 'bg-transparent px-0 py-0',
          )}
        >
          {children}
          {status === 'streaming' ? <ark.span aria-hidden="true" className={chatStreamingCaretBase} /> : null}
        </ark.div>
        {status === 'sending' ? <ark.span className={chatMessageMetaBase}>Sending…</ark.span> : null}
        {status === 'error' ? (
          <ark.span role="status" className="text-xs text-destructive">
            Failed to send
          </ark.span>
        ) : null}
        {attachments && attachments.length > 0 ? (
          <ark.ul className={chatMessageAttachmentsBase}>
            {attachments.map((attachment) => (
              <ark.li key={attachment.id}>
                {attachment.url ? <ark.a href={attachment.url}>{attachment.name}</ark.a> : attachment.name}
              </ark.li>
            ))}
          </ark.ul>
        ) : null}
        {reactions ? (
          <ChatReactionsBar reactions={reactions} activeIcons={activeReactionIcons} onToggle={onReactionToggle} />
        ) : null}
      </ark.div>
    </ark.div>
  );
}
