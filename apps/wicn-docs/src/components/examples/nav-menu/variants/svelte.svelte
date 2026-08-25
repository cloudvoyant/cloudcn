<!-- apps/wicn-docs/src/components/examples/nav-menu/variants/svelte.svelte -->
<script lang="ts">
  import { NavMenu, NavMenuList, NavMenuItem, NavMenuTrigger, NavMenuContent, NavMenuLink } from 'wicn-svelte';
</script>

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
      <NavMenuLink href="#">Blog</NavMenuLink>
    </NavMenuItem>
    <NavMenuItem variant="link" value="docs">
      <NavMenuLink href="#">Docs</NavMenuLink>
    </NavMenuItem>
  </NavMenuList>
</NavMenu>
