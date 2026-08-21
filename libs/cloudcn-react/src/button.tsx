// libs/cloudcn-react/src/button.tsx
// Source: @ark-ui/react/factory (Ark UI)
import { ark, type HTMLArkProps } from '@ark-ui/react/factory';
import { buttonVariants, cn } from 'cloudcn-core';
import type { ButtonProps as ButtonPropsBase } from 'cloudcn-core';

export type ButtonProps = HTMLArkProps<'button'> & ButtonPropsBase;

export function Button({ className, variant, color, size, type = 'button', ...props }: ButtonProps) {
  return <ark.button type={type} className={cn(buttonVariants({ variant, color, size }), className)} {...props} />;
}
