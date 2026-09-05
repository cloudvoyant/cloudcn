// libs/vortex-react/src/chat/typing.tsx
// Closely based on: original composition — no chat primitive in
// Shark/Tark/Ark/Chakra/shadcn; Ark factory (@ark-ui/react/factory).
// TypingIndicator: three bouncing dots announced politely to screen readers.
import { ark, type HTMLArkProps } from '@ark-ui/react/factory';
import { cn, typingDotBase, typingDotDelays, typingIndicatorBase } from '@cloudvoyant/vortex-ui';

export type TypingIndicatorProps = HTMLArkProps<'div'> & { label?: string };

export function TypingIndicator({ label = 'Someone is typing', className, ...props }: TypingIndicatorProps) {
  return (
    <ark.div role="status" aria-label={label} className={cn(typingIndicatorBase, className)} {...props}>
      {typingDotDelays.map((delay) => (
        <ark.span key={delay} aria-hidden="true" className={typingDotBase} style={{ animationDelay: `${delay}ms` }} />
      ))}
    </ark.div>
  );
}
