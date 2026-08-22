// libs/cloudcn-react/src/sidebar/GroupLabel.tsx
// Source: shadcn/ui sidebar (https://ui.shadcn.com/docs/components/base/sidebar),
//         re-based on Ark UI (drawer, tooltip, asChild factory)
import { ark, type HTMLArkProps } from '@ark-ui/react/factory';
import { sidebarStyles, cn } from 'cloudcn-core';

export function GroupLabel({ className, asChild = false, ...props }: HTMLArkProps<'div'> & { asChild?: boolean }) {
  return (
    <ark.div
      data-slot="sidebar-group-label"
      data-sidebar="group-label"
      asChild={asChild}
      className={cn(sidebarStyles.groupLabelClass, className)}
      {...props}
    />
  );
}
