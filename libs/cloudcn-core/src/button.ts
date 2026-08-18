// libs/cloudcn-core/src/button.ts
import { cva, type VariantProps } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        rounded: 'rounded-full bg-primary text-primary-foreground hover:bg-primary/90',
        success: 'bg-success text-success-foreground hover:bg-success/90',
        danger: 'bg-danger text-danger-foreground hover:bg-danger/90',
        warn: 'bg-warn text-warn-foreground hover:bg-warn/90',
        info: 'bg-info text-info-foreground hover:bg-info/90',
        'outline-primary': 'border border-primary/40 bg-background text-primary hover:bg-primary/10',
        'outline-secondary':
          'border border-secondary-foreground/30 bg-background text-secondary-foreground hover:bg-secondary',
        'outline-success': 'border border-success/50 bg-background text-success hover:bg-success/10',
        'outline-danger': 'border border-danger/50 bg-background text-danger hover:bg-danger/10',
        'outline-warn': 'border border-warn/60 bg-background text-warn hover:bg-warn/15',
        'outline-info': 'border border-info/50 bg-background text-info hover:bg-info/10',
      },
      size: {
        sm: 'h-9 px-3',
        md: 'h-10 px-4 py-2',
        lg: 'h-11 px-8',
        icon: 'size-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export interface ButtonProps {
  variant?: ButtonVariants['variant'];
  size?: ButtonVariants['size'];
  className?: string;
}
