<!-- libs/helix-svelte/src/navbar/NavbarMenuViewportPositioner.svelte -->
<!-- Closely based on: @ark-ui/svelte/navigation-menu (Ark UI), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import {
    NavigationMenuViewportPositioner,
    type NavigationMenuViewportPositionerProps,
  } from '@ark-ui/svelte/navigation-menu';
  import { navbarMenuViewportPositionerBase, cn } from '@cloudvoyant/helix';

  let { class: className = '', children, ...rest }: NavigationMenuViewportPositionerProps = $props();

  const classes = $derived(cn(navbarMenuViewportPositionerBase, className));
</script>

<NavigationMenuViewportPositioner class={classes} {...rest}>
  {#if children}{@render children()}{/if}
</NavigationMenuViewportPositioner>
