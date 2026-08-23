<!-- libs/wicn-svelte/src/navigation-menu/NavigationMenu.svelte -->
<!-- Closely based on: @ark-ui/svelte/navigation-menu (Ark UI), mirrored from wicn-react -->
<script lang="ts">
  import {
    NavigationMenuRoot,
    NavigationMenuViewport,
    NavigationMenuViewportPositioner,
    type NavigationMenuRootProps,
  } from '@ark-ui/svelte/navigation-menu';
  import {
    navigationMenuRootBase,
    navigationMenuViewportPositionerBase,
    navigationMenuViewportBase,
    cn,
  } from 'wicn-core';

  let {
    value,
    defaultValue,
    onValueChange,
    openDelay,
    closeDelay,
    class: className = '',
    children,
    ...rest
  }: NavigationMenuRootProps = $props();

  const classes = $derived(cn(navigationMenuRootBase, className));
</script>

<NavigationMenuRoot {value} {defaultValue} {onValueChange} {openDelay} {closeDelay} class={classes} {...rest}>
  {@render children?.()}
  <NavigationMenuViewportPositioner class={cn(navigationMenuViewportPositionerBase)}>
    <NavigationMenuViewport class={cn(navigationMenuViewportBase)} />
  </NavigationMenuViewportPositioner>
</NavigationMenuRoot>
