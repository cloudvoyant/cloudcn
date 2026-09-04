// libs/vortex-react/src/badge.tsx
// Closely based on: @ark-ui/react/factory (Ark UI)
import { ark, type HTMLArkProps } from '@ark-ui/react/factory';
import { badgeVariants, cn } from '@cloudvoyant/vortex-ui';
import type { BadgeProps as BadgePropsBase } from '@cloudvoyant/vortex-ui';

export type BadgeProps = HTMLArkProps<'span'> & BadgePropsBase;

export function Badge({ className, variant, color, size, ...props }: BadgeProps) {
  return <ark.span className={cn(badgeVariants({ variant, color, size }), className)} {...props} />;
}
