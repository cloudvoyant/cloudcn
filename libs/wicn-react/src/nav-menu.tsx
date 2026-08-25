// libs/wicn-react/src/nav-menu.tsx
// Closely based on: @ark-ui/react/navigation-menu (Ark UI), styled per shadcn navigation-menu
import * as React from 'react';
import {
  NavigationMenuRoot as ArkNavMenuRoot,
  NavigationMenuList as ArkNavMenuList,
  NavigationMenuItem as ArkNavMenuItem,
  NavigationMenuTrigger as ArkNavMenuTrigger,
  NavigationMenuContent as ArkNavMenuContent,
  NavigationMenuLink as ArkNavMenuLink,
  NavigationMenuViewport as ArkNavMenuViewport,
  NavigationMenuViewportPositioner as ArkNavMenuViewportPositioner,
  NavigationMenuIndicator as ArkNavMenuIndicator,
  type NavigationMenuRootProps as NavMenuRootProps,
  type NavigationMenuListProps as NavMenuListProps,
  type NavigationMenuItemProps as NavMenuItemProps,
  type NavigationMenuTriggerProps as NavMenuTriggerProps,
  type NavigationMenuContentProps as NavMenuContentProps,
  type NavigationMenuLinkProps as NavMenuLinkProps,
  type NavigationMenuViewportProps as NavMenuViewportProps,
  type NavigationMenuViewportPositionerProps as NavMenuViewportPositionerProps,
  type NavigationMenuIndicatorProps as NavMenuIndicatorProps,
} from '@ark-ui/react/navigation-menu';
import {
  navMenuRootBase,
  navMenuListBase,
  navMenuItemBase,
  navMenuTriggerStyle,
  navMenuContentBase,
  navMenuLinkBase,
  navMenuViewportPositionerBase,
  navMenuViewportBase,
  navMenuIndicatorBase,
  cn,
  type NavMenuDensity,
  type NavMenuVariant,
} from 'wicn-core';

interface NavMenuStyle {
  density: NavMenuDensity;
  variant: NavMenuVariant;
  inContent: boolean;
}

const NavMenuStyleContext = React.createContext<NavMenuStyle>({
  density: 'relaxed',
  variant: 'default',
  inContent: false,
});

export function NavMenu({
  density = 'relaxed',
  className,
  children,
  ...props
}: NavMenuRootProps & { density?: NavMenuDensity }) {
  return (
    <NavMenuStyleContext.Provider value={{ density, variant: 'default', inContent: false }}>
      <ArkNavMenuRoot data-density={density} className={cn(navMenuRootBase, className)} {...props}>
        {children}
        <ArkNavMenuViewportPositioner className={cn(navMenuViewportPositionerBase)}>
          <ArkNavMenuViewport className={cn(navMenuViewportBase)} />
        </ArkNavMenuViewportPositioner>
      </ArkNavMenuRoot>
    </NavMenuStyleContext.Provider>
  );
}

export function NavMenuList({ className, children, ...props }: NavMenuListProps) {
  return (
    <ArkNavMenuList className={cn(navMenuListBase, className)} {...props}>
      {children}
    </ArkNavMenuList>
  );
}

export function NavMenuItem({
  variant = 'default',
  className,
  ...props
}: NavMenuItemProps & { variant?: NavMenuVariant }) {
  const { density } = React.useContext(NavMenuStyleContext);
  return (
    <NavMenuStyleContext.Provider value={{ density, variant, inContent: false }}>
      <ArkNavMenuItem data-variant={variant} className={cn(navMenuItemBase, className)} {...props} />
    </NavMenuStyleContext.Provider>
  );
}

export function NavMenuTrigger({ asChild, className, children, ...props }: NavMenuTriggerProps) {
  const { density, variant } = React.useContext(NavMenuStyleContext);
  const chevron = (
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
  );
  return (
    <ArkNavMenuTrigger asChild={asChild} className={cn(navMenuTriggerStyle({ density, variant }), className)} {...props}>
      {asChild ? children : (<>{children}{chevron}</>)}
    </ArkNavMenuTrigger>
  );
}

export function NavMenuContent({ className, children, ...props }: NavMenuContentProps) {
  return (
    <NavMenuStyleContext.Provider value={{ density: 'relaxed', variant: 'default', inContent: true }}>
      <ArkNavMenuContent className={cn(navMenuContentBase, className)} {...props}>
        {children}
      </ArkNavMenuContent>
    </NavMenuStyleContext.Provider>
  );
}

export function NavMenuLink({ className, children, ...props }: NavMenuLinkProps) {
  const { density, variant, inContent } = React.useContext(NavMenuStyleContext);
  const classes = inContent
    ? cn(navMenuLinkBase, className)
    : cn(navMenuTriggerStyle({ density, variant }), className);
  return (
    <ArkNavMenuLink className={classes} {...props}>
      {children}
    </ArkNavMenuLink>
  );
}

export function NavMenuViewport({ className, ...props }: NavMenuViewportProps) {
  return <ArkNavMenuViewport className={cn(navMenuViewportBase, className)} {...props} />;
}

export function NavMenuIndicator({ className, ...props }: NavMenuIndicatorProps) {
  return <ArkNavMenuIndicator className={cn(navMenuIndicatorBase, className)} {...props} />;
}

export {
  ArkNavMenuViewportPositioner as NavMenuViewportPositioner,
};
export { navMenuTriggerStyle, type NavMenuDensity, type NavMenuVariant } from 'wicn-core';
export type {
  NavMenuRootProps,
  NavMenuListProps,
  NavMenuItemProps,
  NavMenuTriggerProps,
  NavMenuContentProps,
  NavMenuLinkProps,
  NavMenuViewportProps,
  NavMenuViewportPositionerProps,
  NavMenuIndicatorProps,
};
