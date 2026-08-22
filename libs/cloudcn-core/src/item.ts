// libs/cloudcn-core/src/item.ts
// Source: cloudcn-core (shared itemVariants cva — the example/content-box primitive).
// `plain` is used inside Container/Row/Col (styleless layout): it fills available
// width and has square corners. `surface` is used inside Stack/HStack/VStack
// (visual lists): rounded, bordered, themed surface.
import { cva, type VariantProps } from 'class-variance-authority';

export const itemVariants = cva('flex-1 w-full p-3 text-sm', {
  variants: {
    variant: {
      plain: '',
      surface: 'rounded-md border border-border bg-card text-card-foreground',
    },
  },
  defaultVariants: {
    variant: 'plain',
  },
});

export type ItemVariants = VariantProps<typeof itemVariants>;

export interface ItemProps {
  variant?: ItemVariants['variant'];
  className?: string;
}
