// libs/vertex-react/src/item.tsx
// Closely based on: vertex-ui example-item primitive, built on @ark-ui/react/factory (Ark UI)
import { ark, type HTMLArkProps } from '@ark-ui/react/factory';
import { itemVariants, cn } from '@cloudvoyant/vertex-ui';
import type { ItemProps as ItemPropsBase } from '@cloudvoyant/vertex-ui';

export type ItemProps = HTMLArkProps<'div'> & ItemPropsBase;

export function Item({ className, variant, ...props }: ItemProps) {
  return <ark.div className={cn(itemVariants({ variant }), className)} {...props} />;
}
