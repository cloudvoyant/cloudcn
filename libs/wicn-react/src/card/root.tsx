// libs/wicn-react/src/card/root.tsx
// Closely based on: Chakra UI Card, built on @ark-ui/react/factory (Ark UI)
import { ark, type HTMLArkProps } from '@ark-ui/react/factory';
import { cardVariants, cn } from 'wicn-core';
import type { CardRootProps } from 'wicn-core';
import { CardOrientationContext } from './context';

export type CardProps = HTMLArkProps<'div'> & CardRootProps;

export function CardRoot({ className, variant, size, orientation, children, ...props }: CardProps) {
  const resolvedOrientation = orientation ?? 'vertical';
  return (
    <CardOrientationContext.Provider value={resolvedOrientation}>
      <ark.div className={cn(cardVariants({ variant, size, orientation: resolvedOrientation }), className)} {...props}>
        {children}
      </ark.div>
    </CardOrientationContext.Provider>
  );
}
