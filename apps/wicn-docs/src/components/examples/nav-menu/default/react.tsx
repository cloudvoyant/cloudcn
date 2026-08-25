// apps/wicn-docs/src/components/examples/nav-menu/default/react.tsx
import { NavMenu, NavMenuList, NavMenuItem, NavMenuTrigger, NavMenuContent, NavMenuLink } from 'wicn-react';

export default function ReactNavMenuDefault() {
  return (
    <NavMenu>
      <NavMenuList>
        <NavMenuItem value="getting-started">
          <NavMenuTrigger>Getting Started</NavMenuTrigger>
          <NavMenuContent>
            <NavMenuLink href="#">Installation</NavMenuLink>
            <NavMenuLink href="#">Components</NavMenuLink>
          </NavMenuContent>
        </NavMenuItem>
        <NavMenuItem value="docs">
          <NavMenuLink href="#">Docs</NavMenuLink>
        </NavMenuItem>
      </NavMenuList>
    </NavMenu>
  );
}
