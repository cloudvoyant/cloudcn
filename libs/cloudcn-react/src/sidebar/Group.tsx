// libs/cloudcn-react/src/sidebar/Group.tsx
// Source: shadcn/ui sidebar (https://ui.shadcn.com/docs/components/base/sidebar),
//         re-based on Ark UI (drawer, tooltip, asChild factory)
import { ark, type HTMLArkProps } from '@ark-ui/react/factory';
import { sidebarStyles, cn } from 'cloudcn-core';

export function Group({ className, ...props }: HTMLArkProps<'div'>) {
  return (
    <ark.div
      data-slot="sidebar-group"
      data-sidebar="group"
      className={cn(sidebarStyles.groupClass, className)}
      {...props}
    />
  );
}
