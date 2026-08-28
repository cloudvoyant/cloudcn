// libs/helix/src/page.ts
// No direct upstream source: Page composes helix layout primitives (Row/Col/
// Container) and Ark UI scroll-area (via Scroll). Shared class strings / cva /
// types. The default variant is a CSS grid with named areas so the sticky
// gutters bottom out when the footer is reached; the landing variant stacks
// full-viewport sections above the footer.
import { cva, type VariantProps } from 'class-variance-authority';
import { colBase } from './layout';
import { cn } from './cn';

export const pageVariants = cva('min-h-svh w-full', {
  variants: {
    variant: {
      default:
        'grid grid-cols-[auto_minmax(0,1fr)_auto] grid-rows-[minmax(100svh,1fr)_auto] [grid-template-areas:"left_content_right"_"footer_footer_footer"]',
      landing: colBase,
    },
  },
  defaultVariants: { variant: 'default' },
});

export const pageGutterVariants = cva(
  'sticky top-0 h-svh w-4 shrink-0 self-start overflow-hidden p-0.5 md:w-56 md:p-2 lg:w-72 lg:p-3',
  {
    variants: {
      side: {
        left: '[grid-area:left]',
        right: '[grid-area:right]',
      },
    },
    defaultVariants: { side: 'left' },
  },
);

export const pageGutterContentVariants = cva('hidden h-full w-full flex-col md:flex', {
  variants: {
    align: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
    },
  },
  defaultVariants: { align: 'start' },
});

export const pageContentBase = 'min-w-0 [grid-area:content]';

export const pageFooterBase = 'w-full shrink-0 [grid-area:footer]';

export const pageSectionBase = cn(colBase, 'min-h-svh w-full');

export type PageVariants = VariantProps<typeof pageVariants>;
export type PageGutterVariants = VariantProps<typeof pageGutterVariants>;
export type PageGutterContentVariants = VariantProps<typeof pageGutterContentVariants>;
