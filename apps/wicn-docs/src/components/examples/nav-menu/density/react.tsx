// apps/wicn-docs/src/components/examples/nav-menu/density/react.tsx
import { NavMenu, NavMenuList, NavMenuItem, NavMenuTrigger, NavMenuContent, NavMenuLink } from 'wicn-react';

export default function ReactNavMenuDensity() {
  return (
    <NavMenu density="compact">
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
