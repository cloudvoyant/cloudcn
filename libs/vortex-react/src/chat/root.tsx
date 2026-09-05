// libs/vortex-react/src/chat/root.tsx
// Closely based on: original composition — no chat primitive in
// Shark/Tark/Ark/Chakra/shadcn; Ark factory (@ark-ui/react/factory).
// Chat: dumb/presentational root. Provides the thread-variant context and
// renders children inside the chat surface — the consumer owns all state.
import { ark, type HTMLArkProps } from '@ark-ui/react/factory';
import { chatRootBase, cn, type ChatVariant } from '@cloudvoyant/vortex-ui';
import { ChatContext } from './context';

export type ChatProps = HTMLArkProps<'div'> & { variant?: ChatVariant };

export function Chat({ variant = 'slack', className, children, ...props }: ChatProps) {
  return (
    <ChatContext.Provider value={{ threadVariant: variant }}>
      <ark.div className={cn(chatRootBase, className)} {...props}>
        {children}
      </ark.div>
    </ChatContext.Provider>
  );
}
