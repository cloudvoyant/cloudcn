// libs/cloudcn-react/src/card/title.tsx
// Source: Chakra UI Card, built on @ark-ui/react/factory (Ark UI)
import { ark, type HTMLArkProps } from '@ark-ui/react/factory';
import { cardTitleBase, cn } from 'cloudcn-core';

export type CardTitleProps = HTMLArkProps<'h3'>;

export function CardTitle({ className, ...props }: CardTitleProps) {
  return <ark.h3 className={cn(cardTitleBase, className)} {...props} />;
}
