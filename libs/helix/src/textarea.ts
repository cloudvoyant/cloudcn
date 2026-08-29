// libs/helix/src/textarea.ts
import { cva, type VariantProps } from 'class-variance-authority';

export const textareaVariants = cva(
  'field-sizing-content flex min-h-16 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/24 data-invalid:border-destructive data-invalid:ring-[3px] data-invalid:ring-destructive/24',
  {
    variants: {
      size: { sm: 'text-xs px-2.5 py-1.5', md: 'text-sm px-3 py-2', lg: 'text-base px-3 py-2.5' },
    },
    defaultVariants: { size: 'md' },
  },
);
export type TextareaVariants = VariantProps<typeof textareaVariants>;
export interface TextareaProps {
  size?: TextareaVariants['size'];
  className?: string;
}
