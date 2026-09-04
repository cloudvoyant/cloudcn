<!-- libs/vortex-svelte/src/navbar/NavbarMenuContent.svelte -->
<!-- Closely based on: @ark-ui/svelte/navigation-menu (Ark UI), mirrored from @cloudvoyant/vortex-react -->
<script lang="ts">
  import { NavigationMenuContent, type NavigationMenuContentProps } from '@ark-ui/svelte/navigation-menu';
  import { navbarMenuContentBase, cn } from '@cloudvoyant/vortex-ui';
  import { setNavbarMenuStyle } from './NavbarMenuContext.svelte';

  let { value, class: className = '', children, ...rest }: NavigationMenuContentProps = $props();

  const classes = $derived(cn(navbarMenuContentBase, className));
  setNavbarMenuStyle({ density: 'relaxed', variant: 'default', inContent: true });
</script>

<NavigationMenuContent {value} class={classes} {...rest}>
  {@render children?.()}
</NavigationMenuContent>
