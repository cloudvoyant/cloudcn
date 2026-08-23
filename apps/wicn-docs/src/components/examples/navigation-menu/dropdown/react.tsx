// apps/wicn-docs/src/components/examples/navigation-menu/dropdown/react.tsx
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from 'wicn-react';

export default function ReactNavigationMenuDropdown() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem value="platform">
          <NavigationMenuTrigger>Platform</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="#">Analytics</NavigationMenuLink>
            <NavigationMenuLink href="#">Integrations</NavigationMenuLink>
            <NavigationMenuLink href="#">Automations</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem value="company">
          <NavigationMenuTrigger>Company</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="#">About</NavigationMenuLink>
            <NavigationMenuLink href="#">Careers</NavigationMenuLink>
            <NavigationMenuLink href="#">Contact</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
