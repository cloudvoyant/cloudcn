<!-- libs/wicn-svelte/src/nav-menu/NavMenuContent.svelte -->
<!-- Closely based on: @ark-ui/svelte/navigation-menu (Ark UI), mirrored from wicn-react -->
<script lang="ts">
  import { NavigationMenuContent, type NavigationMenuContentProps } from '@ark-ui/svelte/navigation-menu';
  import { navMenuContentBase, cn } from 'wicn-core';
  import { setNavMenuStyle } from './context.svelte';

  let { value, class: className = '', children, ...rest }: NavigationMenuContentProps = $props();

  const classes = $derived(cn(navMenuContentBase, className));
  setNavMenuStyle({ density: 'relaxed', variant: 'default', inContent: true });
</script>

<NavigationMenuContent {value} class={classes} {...rest}>
  {@render children?.()}
</NavigationMenuContent>
