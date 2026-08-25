// libs/wicn-react/src/navigation-menu.tsx
// Closely based on: @ark-ui/react/navigation-menu (Ark UI), styled per shadcn navigation-menu
import {
  NavigationMenuRoot as ArkNavigationMenuRoot,
  NavigationMenuList as ArkNavigationMenuList,
  NavigationMenuItem as ArkNavigationMenuItem,
  NavigationMenuTrigger as ArkNavigationMenuTrigger,
  NavigationMenuContent as ArkNavigationMenuContent,
  NavigationMenuLink as ArkNavigationMenuLink,
  NavigationMenuViewport as ArkNavigationMenuViewport,
  NavigationMenuViewportPositioner as ArkNavigationMenuViewportPositioner,
  NavigationMenuIndicator as ArkNavigationMenuIndicator,
  type NavigationMenuRootProps,
  type NavigationMenuListProps,
  type NavigationMenuItemProps,
  type NavigationMenuTriggerProps,
  type NavigationMenuContentProps,
  type NavigationMenuLinkProps,
  type NavigationMenuViewportProps,
  type NavigationMenuViewportPositionerProps,
  type NavigationMenuIndicatorProps,
} from '@ark-ui/react/navigation-menu';
import {
  navigationMenuRootBase,
  navigationMenuListBase,
  navigationMenuItemBase,
  navigationMenuTriggerStyle,
  navigationMenuContentBase,
  navigationMenuLinkBase,
  navigationMenuViewportPositionerBase,
  navigationMenuViewportBase,
  navigationMenuIndicatorBase,
  cn,
} from 'wicn-core';

export function NavigationMenu({ className, children, ...props }: NavigationMenuRootProps) {
  return (
    <ArkNavigationMenuRoot className={cn(navigationMenuRootBase, className)} {...props}>
      {children}
      <ArkNavigationMenuViewportPositioner className={cn(navigationMenuViewportPositionerBase)}>
        <ArkNavigationMenuViewport className={cn(navigationMenuViewportBase)} />
      </ArkNavigationMenuViewportPositioner>
    </ArkNavigationMenuRoot>
  );
}

export function NavigationMenuList({ className, children, ...props }: NavigationMenuListProps) {
  return (
    <ArkNavigationMenuList className={cn(navigationMenuListBase, className)} {...props}>
      {children}
    </ArkNavigationMenuList>
  );
}

export function NavigationMenuItem({ className, ...props }: NavigationMenuItemProps) {
  return <ArkNavigationMenuItem className={cn(navigationMenuItemBase, className)} {...props} />;
}

export function NavigationMenuTrigger({ className, children, ...props }: NavigationMenuTriggerProps) {
  return (
    <ArkNavigationMenuTrigger className={cn(navigationMenuTriggerStyle(), className)} {...props}>
      {children}
      <svg
        className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </ArkNavigationMenuTrigger>
  );
}

export function NavigationMenuContent({ className, children, ...props }: NavigationMenuContentProps) {
  return (
    <ArkNavigationMenuContent className={cn(navigationMenuContentBase, className)} {...props}>
      {children}
    </ArkNavigationMenuContent>
  );
}

export function NavigationMenuLink({ className, children, ...props }: NavigationMenuLinkProps) {
  return (
    <ArkNavigationMenuLink className={cn(navigationMenuLinkBase, className)} {...props}>
      {children}
    </ArkNavigationMenuLink>
  );
}

export function NavigationMenuViewport({ className, ...props }: NavigationMenuViewportProps) {
  return <ArkNavigationMenuViewport className={cn(navigationMenuViewportBase, className)} {...props} />;
}

export function NavigationMenuIndicator({ className, ...props }: NavigationMenuIndicatorProps) {
  return <ArkNavigationMenuIndicator className={cn(navigationMenuIndicatorBase, className)} {...props} />;
}

export {
  ArkNavigationMenuViewportPositioner as NavigationMenuViewportPositioner,
};
export type {
  NavigationMenuRootProps,
  NavigationMenuListProps,
  NavigationMenuItemProps,
  NavigationMenuTriggerProps,
  NavigationMenuContentProps,
  NavigationMenuLinkProps,
  NavigationMenuViewportProps,
  NavigationMenuViewportPositionerProps,
  NavigationMenuIndicatorProps,
};
