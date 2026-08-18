// libs/cloudcn-react/src/button.tsx
import { ark, type HTMLArkProps } from '@ark-ui/react/factory';
import { buttonVariants, cn } from 'cloudcn-core';
import type { ButtonProps as ButtonPropsBase } from 'cloudcn-core';

export interface ButtonProps extends HTMLArkProps<'button'>, ButtonPropsBase {}

export function Button({ className, variant, size, type = 'button', ...props }: ButtonProps) {
  return <ark.button type={type} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
