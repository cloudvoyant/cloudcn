<!-- libs/wicn-svelte/src/navigation-menu/NavigationMenuViewport.svelte -->
<!-- Closely based on: @ark-ui/svelte/navigation-menu (Ark UI), mirrored from wicn-react -->
<script lang="ts">
  import { NavigationMenuViewport, type NavigationMenuViewportProps } from '@ark-ui/svelte/navigation-menu';
  import { navigationMenuViewportBase, cn } from 'wicn-core';

  let { class: className = '', ...rest }: NavigationMenuViewportProps = $props();

  const classes = $derived(cn(navigationMenuViewportBase, className));
</script>

<NavigationMenuViewport class={classes} {...rest} />
