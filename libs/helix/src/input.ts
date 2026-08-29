// libs/helix/src/input.ts
// Closely based on: Shark UI input (https://shark.vini.one/docs/components/input, @ark-ui/react/field).
import { cva, type VariantProps } from 'class-variance-authority';

export const inputVariants = cva(
  'flex w-full min-w-0 rounded-md border border-input bg-transparent px-3 text-sm shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/24 data-invalid:border-destructive data-invalid:ring-[3px] data-invalid:ring-destructive/24',
  {
    variants: {
      size: {
        sm: 'h-8 px-2.5',
        md: 'h-9',
        lg: 'h-10',
      },
      variant: {
        default: '',
        ghost:
          'border-0 bg-transparent px-0 shadow-none focus-visible:border-0 focus-visible:ring-0 aria-invalid:border-0 aria-invalid:ring-0 data-invalid:border-0 data-invalid:ring-0',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
  },
);

export type InputVariants = VariantProps<typeof inputVariants>;

export interface InputProps {
  size?: InputVariants['size'];
  variant?: InputVariants['variant'];
  className?: string;
}
