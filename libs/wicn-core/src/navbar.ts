// libs/wicn-core/src/navbar.ts
// Closely based on: shadcnblocks navbar6 / navbar7 (https://www.shadcnblocks.com/block/navbar6,
//                   https://www.shadcnblocks.com/block/navbar7), re-based on Ark UI
//                   (navigation-menu + collapsible). Shared class strings / cva. No framework imports.
import { cva } from 'class-variance-authority';

export const navbarVariants = cva('w-full', {
  variants: {
    variant: {
      sticky:
        'sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur transition-[box-shadow,height] duration-300 data-[scrolled=true]:bg-background/95 data-[scrolled=true]:shadow-md',
      floating:
        'fixed inset-x-0 top-4 z-50 mx-auto w-[calc(100%-2rem)] max-w-6xl rounded-full border border-border bg-background/80 backdrop-blur transition-[box-shadow] duration-300 data-[scrolled=true]:shadow-md',
    },
  },
  defaultVariants: {
    variant: 'sticky',
  },
});

export const navbarProviderBase = 'group/navbar';

export const navbarContainerBase = 'flex h-16 items-center justify-between gap-4 px-4 md:px-6';

export const navbarBrandBase = 'flex shrink-0 items-center gap-2';

export const navbarMenuBase = 'hidden items-center md:flex';

export const navbarMenuPlacementVariants = cva('', {
  variants: {
    placement: {
      left: 'justify-start',
      center: 'justify-center',
      right: 'justify-end',
    },
  },
  defaultVariants: {
    placement: 'center',
  },
});

export const navbarActionsBase = 'flex shrink-0 items-center gap-2';

export const navbarTriggerBase =
  'inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden';

export const navbarMobileBase = 'md:hidden';
