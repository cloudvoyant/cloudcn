// libs/cloudcn-react/src/item.tsx
// Source: cloudcn example-item primitive, built on @ark-ui/react/factory (Ark UI)
import { ark, type HTMLArkProps } from '@ark-ui/react/factory';
import { itemVariants, cn } from 'cloudcn-core';
import type { ItemProps as ItemPropsBase } from 'cloudcn-core';

export type ItemProps = HTMLArkProps<'div'> & ItemPropsBase;

export function Item({ className, variant, ...props }: ItemProps) {
  return <ark.div className={cn(itemVariants({ variant }), className)} {...props} />;
}
