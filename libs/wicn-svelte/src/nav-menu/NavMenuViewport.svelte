<!-- libs/wicn-svelte/src/nav-menu/NavMenuViewport.svelte -->
<!-- Closely based on: @ark-ui/svelte/navigation-menu (Ark UI), mirrored from wicn-react -->
<script lang="ts">
  import { NavigationMenuViewport, type NavigationMenuViewportProps } from '@ark-ui/svelte/navigation-menu';
  import { navMenuViewportBase, cn } from 'wicn-core';

  let { class: className = '', ...rest }: NavigationMenuViewportProps = $props();

  const classes = $derived(cn(navMenuViewportBase, className));
</script>

<NavigationMenuViewport class={classes} {...rest} />
