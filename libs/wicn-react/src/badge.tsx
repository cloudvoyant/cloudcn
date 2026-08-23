// libs/wicn-react/src/badge.tsx
// Closely based on: @ark-ui/react/factory (Ark UI)
import { ark, type HTMLArkProps } from '@ark-ui/react/factory';
import { badgeVariants, cn } from 'wicn-core';
import type { BadgeProps as BadgePropsBase } from 'wicn-core';

export type BadgeProps = HTMLArkProps<'span'> & BadgePropsBase;

export function Badge({ className, variant, color, size, ...props }: BadgeProps) {
  return <ark.span className={cn(badgeVariants({ variant, color, size }), className)} {...props} />;
}
