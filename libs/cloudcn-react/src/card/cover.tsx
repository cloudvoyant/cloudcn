// libs/cloudcn-react/src/card/cover.tsx
// Source: Chakra UI Card, built on @ark-ui/react/factory (Ark UI)
import { ark, type HTMLArkProps } from '@ark-ui/react/factory';
import { cardCoverVariants, cn } from 'cloudcn-core';
import type { CardCoverProps as CardCoverBaseProps } from 'cloudcn-core';
import { useCardOrientation } from './context';

export type CardCoverProps = HTMLArkProps<'div'> & CardCoverBaseProps;

export function CardCover({ className, variant, orientation, ...props }: CardCoverProps) {
  const contextOrientation = useCardOrientation();
  return (
    <ark.div
      className={cn(cardCoverVariants({ variant, orientation: orientation ?? contextOrientation }), className)}
      {...props}
    />
  );
}
