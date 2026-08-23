<!-- libs/wicn-svelte/src/navigation-menu/NavigationMenuIndicator.svelte -->
<!-- Closely based on: @ark-ui/svelte/navigation-menu (Ark UI), mirrored from wicn-react -->
<script lang="ts">
  import { NavigationMenuIndicator, type NavigationMenuIndicatorProps } from '@ark-ui/svelte/navigation-menu';
  import { navigationMenuIndicatorBase, cn } from 'wicn-core';

  let { class: className = '', ...rest }: NavigationMenuIndicatorProps = $props();

  const classes = $derived(cn(navigationMenuIndicatorBase, className));
</script>

<NavigationMenuIndicator class={classes} {...rest} />
