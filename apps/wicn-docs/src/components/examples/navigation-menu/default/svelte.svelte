<!-- apps/wicn-docs/src/components/examples/navigation-menu/default/svelte.svelte -->
<script lang="ts">
  import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from 'wicn-svelte';
</script>

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
