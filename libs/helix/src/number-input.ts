// libs/helix/src/number-input.ts
import { cva, type VariantProps } from 'class-variance-authority';

export const numberInputRootBase = 'flex w-full flex-col items-start gap-2';
export const numberInputControlBase =
  'flex w-full items-center rounded-md border border-input bg-transparent shadow-xs transition-[box-shadow] outline-none focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/30 aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/24 data-invalid:border-destructive data-invalid:ring-[3px] data-invalid:ring-destructive/24';
export const numberInputScrubberBase =
  'flex size-6 shrink-0 cursor-ns-resize touch-none items-center justify-center select-none text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0';
export const numberInputValueTextBase = 'text-sm text-muted-foreground';
export const numberInputVariants = cva(
  'h-9 w-full min-w-0 flex-1 border-0 bg-transparent px-1 text-sm tabular-nums shadow-none outline-none ring-0 focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      size: { sm: 'h-8 text-xs', md: 'h-9 text-sm', lg: 'h-10 text-base' },
    },
    defaultVariants: { size: 'md' },
  },
);
export type NumberInputVariants = VariantProps<typeof numberInputVariants>;
export interface NumberInputProps {
  size?: NumberInputVariants['size'];
  className?: string;
}
