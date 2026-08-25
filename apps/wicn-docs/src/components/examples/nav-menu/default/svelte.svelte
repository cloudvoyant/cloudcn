<!-- apps/wicn-docs/src/components/examples/nav-menu/default/svelte.svelte -->
<script lang="ts">
  import { NavMenu, NavMenuList, NavMenuItem, NavMenuTrigger, NavMenuContent, NavMenuLink } from 'wicn-svelte';
</script>

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
