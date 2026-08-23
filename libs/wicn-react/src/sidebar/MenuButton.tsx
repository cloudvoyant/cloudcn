// libs/wicn-react/src/sidebar/MenuButton.tsx
// Source: shadcn/ui sidebar (https://ui.shadcn.com/docs/components/base/sidebar),
//         re-based on Ark UI (drawer, tooltip, asChild factory)
import * as React from 'react';
import { ark, type HTMLArkProps } from '@ark-ui/react/factory';
import {
  TooltipRoot,
  TooltipTrigger,
  TooltipPositioner,
  TooltipContent as ArkTooltipContent,
} from '@ark-ui/react/tooltip';
import { sidebarMenuButtonVariants, sidebarStyles, cn } from 'wicn-core';
import { useSidebar } from './context';

export type MenuButtonProps = HTMLArkProps<'button'> & {
  asChild?: boolean;
  isActive?: boolean;
  tooltip?: string | React.ComponentProps<typeof ArkTooltipContent>;
} & React.ComponentProps<typeof sidebarMenuButtonVariants>;

export function MenuButton({
  asChild = false,
  isActive = false,
  variant = 'default',
  size = 'default',
  tooltip,
  className,
  children,
  ...props
}: MenuButtonProps) {
  const { isMobile, state } = useSidebar();

  const button = (
    <ark.button
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      asChild={asChild}
      type="button"
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </ark.button>
  );

  if (!tooltip || state !== 'collapsed' || isMobile) {
    return button;
  }

  const tooltipContent = typeof tooltip === 'string' ? { children: tooltip } : tooltip;

  return (
    <TooltipRoot openDelay={0} positioning={{ placement: 'right', gutter: 8 }}>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipPositioner>
        <ArkTooltipContent className={cn(sidebarStyles.tooltipContentClass)} {...tooltipContent} />
      </TooltipPositioner>
    </TooltipRoot>
  );
}
