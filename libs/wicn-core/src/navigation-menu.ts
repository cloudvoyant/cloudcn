// libs/wicn-core/src/navigation-menu.ts
// Closely based on: Ark UI navigation-menu (https://ark-ui.com/docs/components/navigation-menu),
//                   styled per shadcn navigation-menu (https://ui.shadcn.com/docs/components/base/navigation-menu).
// Shared class strings / cva / types. No framework imports.
import { cva } from 'class-variance-authority';

export const navigationMenuRootBase =
  'group/navigation-menu relative flex max-w-max flex-1 items-center justify-center';

export const navigationMenuListBase = 'group flex flex-1 list-none items-center justify-center gap-1';

export const navigationMenuItemBase = 'relative';

export const navigationMenuTriggerStyle = cva(
  'group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-accent/50 data-[state=open]:text-accent-foreground data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent',
);

export const navigationMenuContentBase =
  'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 left-0 top-0 w-full bg-popover p-2 text-popover-foreground md:absolute md:w-auto';

export const navigationMenuLinkBase =
  'data-[active=true]:bg-accent data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring';

export const navigationMenuViewportPositionerBase = 'absolute left-0 top-full z-50 w-full';

export const navigationMenuViewportBase =
  'origin-top-center absolute left-(--viewport-x) top-0 mt-1.5 h-(--viewport-height) w-(--viewport-width) overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md transition-[width,height] duration-200';

export const navigationMenuIndicatorBase =
  'data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-50 flex h-1.5 items-end justify-center overflow-hidden';
