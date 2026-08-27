// libs/helix-react/src/container.tsx
// Closely based on: Chakra UI Container, built on @ark-ui/react/factory (Ark UI)
import { ark, type HTMLArkProps } from '@ark-ui/react/factory';
import { containerBase, cn } from '@cloudvoyant/helix';

export type ContainerProps = HTMLArkProps<'div'>;

export function Container({ className, ...props }: ContainerProps) {
  return <ark.div className={cn(containerBase, className)} {...props} />;
}
