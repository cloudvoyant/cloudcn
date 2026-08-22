// libs/cloudcn-react/src/item.tsx
// Source: cloudcn example-item primitive, built on @ark-ui/react/factory (Ark UI)
import { ark, type HTMLArkProps } from '@ark-ui/react/factory';
import { itemBase, cn } from 'cloudcn-core';

export type ItemProps = HTMLArkProps<'div'>;

export function Item({ className, ...props }: ItemProps) {
  return <ark.div className={cn(itemBase, className)} {...props} />;
}
