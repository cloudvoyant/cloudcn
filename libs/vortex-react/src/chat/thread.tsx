// libs/vortex-react/src/chat/thread.tsx
// Closely based on: original composition — no chat primitive in
// Shark/Tark/Ark/Chakra/shadcn; Ark factory (@ark-ui/react/factory) plus the
// optional @tanstack/react-virtual peer dep.
// ChatThread: scrollable message list. Renders JSX children (dumb chat) or a
// messages array (agentic). Manages its own native scroll container rather
// than Ark ScrollArea because onScrollTop (history loading) and TanStack
// Virtual both need the scrolling element directly. Virtualization is
// optional: @tanstack/react-virtual is an optional peer dependency loaded
// dynamically — until it resolves, the full list renders.
import { useCallback, useEffect, useRef, useState, type ReactNode, type RefObject } from 'react';
import { ark, type HTMLArkProps } from '@ark-ui/react/factory';
import {
  chatThreadScrollBase,
  chatThreadVariants,
  chatThreadVirtualRowVariants,
  cn,
  type ChatMessageData,
  type ChatThreadVariant,
} from '@cloudvoyant/vortex-ui';
import { ChatContext, useChatContext } from './context';
import { ChatMessage } from './message';

const SCROLL_TOP_THRESHOLD = 8;

function MessageFromData({
  message,
  renderMessage,
}: {
  message: ChatMessageData;
  renderMessage?: (message: ChatMessageData) => ReactNode;
}) {
  if (renderMessage) return <>{renderMessage(message)}</>;
  return (
    <ChatMessage
      variant={message.variant}
      status={message.status ?? 'default'}
      from={message.from}
      at={message.at}
      reactions={message.reactions}
      attachments={message.attachments}
    >
      {message.content}
    </ChatMessage>
  );
}

type VirtualizerModule = typeof import('@tanstack/react-virtual');

function useVirtualizerModule(enabled: boolean): VirtualizerModule | null {
  const [mod, setMod] = useState<VirtualizerModule | null>(null);
  useEffect(() => {
    if (!enabled) return;
    let cancelled = false;
    import('@tanstack/react-virtual')
      .then((m) => {
        if (!cancelled) setMod(m);
      })
      .catch(() => {
        // Optional peer dep missing — stay on the non-virtual fallback.
        console.warn(
          'ChatThread: install @tanstack/react-virtual to enable `virtual` threads; rendering the full list instead.',
        );
      });
    return () => {
      cancelled = true;
    };
  }, [enabled]);
  return mod;
}

type VirtualRowsProps = {
  mod: VirtualizerModule;
  scrollRef: RefObject<HTMLDivElement | null>;
  messages: ChatMessageData[];
  renderMessage?: (message: ChatMessageData) => ReactNode;
  estimateMessageSize?: () => number;
  threadVariant: ChatThreadVariant;
};

function VirtualRows({
  mod,
  scrollRef,
  messages,
  renderMessage,
  estimateMessageSize,
  threadVariant,
}: VirtualRowsProps) {
  const virtualizer = mod.useVirtualizer({
    count: messages.length,
    getScrollElement: () => scrollRef.current,
    estimateSize: estimateMessageSize ?? (() => 72),
    overscan: 6,
  });
  return (
    // The variant wrapper supplies the thread padding; the sized element stays
    // unpadded so getTotalSize() matches the scrollable content height, and each
    // row carries the variant's gap as bottom padding (absolute rows can't flex-gap).
    <ark.div className={cn(chatThreadVariants({ variant: threadVariant }))}>
      <ark.div style={{ height: `${virtualizer.getTotalSize()}px`, position: 'relative', width: '100%' }}>
        {virtualizer.getVirtualItems().map((item) => {
          const message = messages[item.index];
          return (
            <ark.div
              key={message.id}
              data-index={item.index}
              ref={virtualizer.measureElement}
              className={chatThreadVirtualRowVariants({ variant: threadVariant })}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                transform: `translateY(${item.start}px)`,
              }}
            >
              <MessageFromData message={message} renderMessage={renderMessage} />
            </ark.div>
          );
        })}
      </ark.div>
    </ark.div>
  );
}

export type ChatThreadProps = HTMLArkProps<'div'> & {
  /** Thread styling; falls back to the Chat/AgentChat context variant. */
  variant?: ChatThreadVariant;
  /** Data mode — render ChatMessageData items instead of children. */
  messages?: ChatMessageData[];
  /** Virtualize settled messages (requires the optional @tanstack/react-virtual peer dep). */
  virtual?: boolean;
  /** Row height estimate for the virtualizer. */
  estimateMessageSize?: () => number;
  /** Fires when scrolled to the very top — wire history loading here. */
  onScrollTop?: () => void;
  /** Custom renderer for data-mode messages (e.g. rich markdown for agents). */
  renderMessage?: (message: ChatMessageData) => ReactNode;
};

export function ChatThread({
  variant,
  messages,
  virtual = false,
  estimateMessageSize,
  onScrollTop,
  renderMessage,
  className,
  onScroll,
  children,
  ...props
}: ChatThreadProps) {
  const ctx = useChatContext();
  const threadVariant = variant ?? ctx?.threadVariant ?? 'slack';
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const atTopRef = useRef(false);
  const virtualMod = useVirtualizerModule(virtual && Boolean(messages));

  // Fires once per entry into the top zone, not on every scroll event inside it,
  // so the documented history-loading use case issues one fetch per gesture.
  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const atTop = el.scrollTop < SCROLL_TOP_THRESHOLD;
    if (atTop && !atTopRef.current) onScrollTop?.();
    atTopRef.current = atTop;
  }, [onScrollTop]);

  let content: ReactNode;
  if (messages) {
    content =
      virtualMod === null ? (
        <ark.div className={cn(chatThreadVariants({ variant: threadVariant }))}>
          {messages.map((message) => (
            <MessageFromData key={message.id} message={message} renderMessage={renderMessage} />
          ))}
        </ark.div>
      ) : (
        <VirtualRows
          mod={virtualMod}
          scrollRef={scrollRef}
          messages={messages}
          renderMessage={renderMessage}
          estimateMessageSize={estimateMessageSize}
          threadVariant={threadVariant}
        />
      );
  } else {
    content = <ark.div className={cn(chatThreadVariants({ variant: threadVariant }))}>{children}</ark.div>;
  }

  return (
    <ChatContext.Provider value={{ threadVariant }}>
      <ark.div
        ref={scrollRef}
        {...props}
        onScroll={(event) => {
          handleScroll();
          // Composed rather than overridden: `onScroll` is part of the public
          // div prop surface, and a bare spread would drop onScrollTop.
          onScroll?.(event);
        }}
        className={cn(chatThreadScrollBase, className)}
      >
        {content}
      </ark.div>
    </ChatContext.Provider>
  );
}
