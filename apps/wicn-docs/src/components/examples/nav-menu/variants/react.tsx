// apps/wicn-docs/src/components/examples/nav-menu/variants/react.tsx
import { NavMenu, NavMenuList, NavMenuItem, NavMenuTrigger, NavMenuContent, NavMenuLink } from 'wicn-react';

export default function ReactNavMenuVariants() {
  return (
    <NavMenu>
      <NavMenuList>
        <NavMenuItem variant="link" value="getting-started">
          <NavMenuTrigger>Getting Started</NavMenuTrigger>
          <NavMenuContent>
            <NavMenuLink href="#">Installation</NavMenuLink>
            <NavMenuLink href="#">Components</NavMenuLink>
          </NavMenuContent>
        </NavMenuItem>
        <NavMenuItem variant="link" value="blog">
          {/* asChild lets the trigger render as a real link instead of a button. */}
          <NavMenuTrigger asChild>
            <a href="#">Blog</a>
          </NavMenuTrigger>
          <NavMenuContent>
            <NavMenuLink href="#">Articles</NavMenuLink>
            <NavMenuLink href="#">Tutorials</NavMenuLink>
          </NavMenuContent>
        </NavMenuItem>
        <NavMenuItem variant="link" value="docs">
          <NavMenuLink href="#">Docs</NavMenuLink>
        </NavMenuItem>
      </NavMenuList>
    </NavMenu>
  );
}
