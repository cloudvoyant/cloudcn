// libs/cloudcn-react/src/card/header.tsx
// Closely based on: Chakra UI Card, built on @ark-ui/react/factory (Ark UI)
import { ark, type HTMLArkProps } from '@ark-ui/react/factory';
import { cardHeaderBase, cn } from 'cloudcn-core';

export type CardHeaderProps = HTMLArkProps<'div'>;

export function CardHeader({ className, ...props }: CardHeaderProps) {
  return <ark.div className={cn(cardHeaderBase, className)} {...props} />;
}
