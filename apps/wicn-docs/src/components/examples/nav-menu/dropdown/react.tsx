// apps/wicn-docs/src/components/examples/nav-menu/dropdown/react.tsx
import { NavMenu, NavMenuList, NavMenuItem, NavMenuTrigger, NavMenuContent, NavMenuLink } from 'wicn-react';

export default function ReactNavMenuDropdown() {
  return (
    <NavMenu>
      <NavMenuList>
        <NavMenuItem value="platform">
          <NavMenuTrigger>Platform</NavMenuTrigger>
          <NavMenuContent>
            <NavMenuLink href="#">Analytics</NavMenuLink>
            <NavMenuLink href="#">Integrations</NavMenuLink>
            <NavMenuLink href="#">Automations</NavMenuLink>
          </NavMenuContent>
        </NavMenuItem>
        <NavMenuItem value="company">
          <NavMenuTrigger>Company</NavMenuTrigger>
          <NavMenuContent>
            <NavMenuLink href="#">About</NavMenuLink>
            <NavMenuLink href="#">Careers</NavMenuLink>
            <NavMenuLink href="#">Contact</NavMenuLink>
          </NavMenuContent>
        </NavMenuItem>
      </NavMenuList>
    </NavMenu>
  );
}
