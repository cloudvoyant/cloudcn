// libs/cloudcn-react/src/sidebar/GroupContent.tsx
// Source: shadcn/ui sidebar (https://ui.shadcn.com/docs/components/base/sidebar),
//         re-based on Ark UI (drawer, tooltip, asChild factory)
import { ark, type HTMLArkProps } from '@ark-ui/react/factory';
import { sidebarStyles, cn } from 'cloudcn-core';

export function GroupContent({ className, ...props }: HTMLArkProps<'div'>) {
  return (
    <ark.div
      data-slot="sidebar-group-content"
      data-sidebar="group-content"
      className={cn(sidebarStyles.groupContentClass, className)}
      {...props}
    />
  );
}
