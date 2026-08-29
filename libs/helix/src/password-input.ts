// libs/helix/src/password-input.ts
import { cva, type VariantProps } from 'class-variance-authority';

export const passwordInputRootBase = 'flex w-full flex-col gap-2';
export const passwordInputControlBase = 'relative flex w-full items-center';
export const passwordInputVariants = cva(
  'flex h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 text-sm shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/24 data-invalid:border-destructive data-invalid:ring-[3px] data-invalid:ring-destructive/24',
  {
    variants: {
      size: { sm: 'h-8 px-2.5 pe-8', md: 'h-9 pe-9', lg: 'h-10 pe-10' },
    },
    defaultVariants: { size: 'md' },
  },
);
export const passwordInputVisibilityTriggerBase =
  'absolute end-3 top-1/2 -translate-y-1/2 flex size-6 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0';
export const passwordInputIndicatorBase =
  'flex size-6 shrink-0 items-center justify-center text-muted-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0';
export type PasswordInputVariants = VariantProps<typeof passwordInputVariants>;
export interface PasswordInputProps {
  size?: PasswordInputVariants['size'];
  className?: string;
}
