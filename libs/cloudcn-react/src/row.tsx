// libs/cloudcn-react/src/row.tsx
// Closely based on: Chakra UI Flex (direction="row"), built on @ark-ui/react/factory (Ark UI)
import { ark, type HTMLArkProps } from '@ark-ui/react/factory';
import { rowBase, cn } from 'cloudcn-core';

export type RowProps = HTMLArkProps<'div'>;

export function Row({ className, ...props }: RowProps) {
  return <ark.div className={cn(rowBase, className)} {...props} />;
}
