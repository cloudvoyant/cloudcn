<!-- libs/wicn-svelte/src/navigation-menu/NavigationMenuViewportPositioner.svelte -->
<!-- Closely based on: @ark-ui/svelte/navigation-menu (Ark UI), mirrored from wicn-react -->
<script lang="ts">
  import {
    NavigationMenuViewportPositioner,
    type NavigationMenuViewportPositionerProps,
  } from '@ark-ui/svelte/navigation-menu';
  import { navigationMenuViewportPositionerBase, cn } from 'wicn-core';

  let { class: className = '', children, ...rest }: NavigationMenuViewportPositionerProps = $props();

  const classes = $derived(cn(navigationMenuViewportPositionerBase, className));
</script>

<NavigationMenuViewportPositioner class={classes} {...rest}>
  {@render children?.()}
</NavigationMenuViewportPositioner>
