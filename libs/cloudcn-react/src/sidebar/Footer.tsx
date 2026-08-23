// libs/cloudcn-react/src/sidebar/Footer.tsx
// Source: shadcn/ui sidebar (https://ui.shadcn.com/docs/components/base/sidebar),
//         re-based on Ark UI (drawer, tooltip, asChild factory)
import type { HTMLArkProps } from '@ark-ui/react/factory';
import { sidebarStyles, cn } from 'cloudcn-core';
import { Col } from '../col';

export function Footer({ className, ...props }: HTMLArkProps<'div'>) {
  return (
    <Col
      data-slot="sidebar-footer"
      data-sidebar="footer"
      className={cn(sidebarStyles.footerClass, className)}
      {...props}
    />
  );
}
