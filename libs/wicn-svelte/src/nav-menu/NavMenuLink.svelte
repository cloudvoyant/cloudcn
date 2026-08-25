<!-- libs/wicn-svelte/src/nav-menu/NavMenuLink.svelte -->
<!-- Closely based on: @ark-ui/svelte/navigation-menu (Ark UI), mirrored from wicn-react -->
<script lang="ts">
  import { NavigationMenuLink, type NavigationMenuLinkProps } from '@ark-ui/svelte/navigation-menu';
  import { navMenuLinkBase, navMenuTriggerStyle, cn } from 'wicn-core';
  import { getNavMenuStyle } from './context.svelte';

  let { class: className = '', children, ...rest }: NavigationMenuLinkProps = $props();

  const style = getNavMenuStyle();
  const classes = $derived(
    style.inContent ? cn(navMenuLinkBase, className) : cn(navMenuTriggerStyle(style), className),
  );
</script>

<NavigationMenuLink class={classes} {...rest}>
  {@render children?.()}
</NavigationMenuLink>
