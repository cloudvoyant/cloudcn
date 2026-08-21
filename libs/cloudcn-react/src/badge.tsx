// libs/cloudcn-react/src/badge.tsx
// Source: @ark-ui/react/factory (Ark UI)
import { ark, type HTMLArkProps } from '@ark-ui/react/factory';
import { badgeVariants, cn } from 'cloudcn-core';
import type { BadgeProps as BadgePropsBase } from 'cloudcn-core';

export type BadgeProps = HTMLArkProps<'span'> & BadgePropsBase;

export function Badge({ className, variant, color, size, ...props }: BadgeProps) {
  return <ark.span className={cn(badgeVariants({ variant, color, size }), className)} {...props} />;
}
