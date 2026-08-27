// libs/helix-react/src/item.tsx
// Closely based on: helix example-item primitive, built on @ark-ui/react/factory (Ark UI)
import { ark, type HTMLArkProps } from '@ark-ui/react/factory';
import { itemVariants, cn } from '@cloudvoyant/helix';
import type { ItemProps as ItemPropsBase } from '@cloudvoyant/helix';

export type ItemProps = HTMLArkProps<'div'> & ItemPropsBase;

export function Item({ className, variant, ...props }: ItemProps) {
  return <ark.div className={cn(itemVariants({ variant }), className)} {...props} />;
}
