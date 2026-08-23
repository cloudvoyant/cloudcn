// libs/wicn-react/src/sidebar/Menu.tsx
// Source: shadcn/ui sidebar (https://ui.shadcn.com/docs/components/base/sidebar),
//         re-based on Ark UI (drawer, tooltip, asChild factory)
import { ark, type HTMLArkProps } from '@ark-ui/react/factory';
import { sidebarStyles, cn } from 'wicn-core';

export function Menu({ className, ...props }: HTMLArkProps<'ul'>) {
  return (
    <ark.ul
      data-slot="sidebar-menu"
      data-sidebar="menu"
      className={cn(sidebarStyles.menuClass, className)}
      {...props}
    />
  );
}
