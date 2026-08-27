<!-- libs/wicn-svelte/src/navbar/NavbarMenuIndicator.svelte -->
<!-- Closely based on: @ark-ui/svelte/navigation-menu (Ark UI), mirrored from wicn-react -->
<script lang="ts">
  import { NavigationMenuIndicator, type NavigationMenuIndicatorProps } from '@ark-ui/svelte/navigation-menu';
  import { navbarMenuIndicatorBase, cn } from 'wicn-core';

  let { class: className = '', ...rest }: NavigationMenuIndicatorProps = $props();

  const classes = $derived(cn(navbarMenuIndicatorBase, className));
</script>

<NavigationMenuIndicator class={classes} {...rest} />
