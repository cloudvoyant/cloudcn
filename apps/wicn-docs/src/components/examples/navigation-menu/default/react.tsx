// apps/wicn-docs/src/components/examples/navigation-menu/default/react.tsx
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from 'wicn-react';

export default function ReactNavigationMenuDefault() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem value="getting-started">
          <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="#">Installation</NavigationMenuLink>
            <NavigationMenuLink href="#">Components</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem value="docs">
          <NavigationMenuLink href="#">Docs</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
