<!-- libs/wicn-svelte/src/nav-menu/NavMenu.svelte -->
<!-- Closely based on: @ark-ui/svelte/navigation-menu (Ark UI), mirrored from wicn-react -->
<script lang="ts">
  import {
    NavigationMenuRoot,
    NavigationMenuViewport,
    NavigationMenuViewportPositioner,
    type NavigationMenuRootProps,
  } from '@ark-ui/svelte/navigation-menu';
  import {
    navMenuRootBase,
    navMenuViewportPositionerBase,
    navMenuViewportBase,
    cn,
    type NavMenuDensity,
    type NavMenuVariant,
  } from 'wicn-core';
  import { setNavMenuStyle } from './context.svelte';

  let {
    value,
    defaultValue,
    onValueChange,
    openDelay,
    closeDelay,
    density = 'relaxed',
    class: className = '',
    children,
    ...rest
  }: NavigationMenuRootProps & { density?: NavMenuDensity } = $props();

  const classes = $derived(cn(navMenuRootBase, className));
  setNavMenuStyle({
    get density() {
      return density;
    },
    get variant() {
      return 'default' as NavMenuVariant;
    },
    get inContent() {
      return false;
    },
  });
</script>

<NavigationMenuRoot
  {value}
  {defaultValue}
  {onValueChange}
  {openDelay}
  {closeDelay}
  data-density={density}
  class={classes}
  {...rest}
>
  {@render children?.()}
  <NavigationMenuViewportPositioner class={cn(navMenuViewportPositionerBase)}>
    <NavigationMenuViewport class={cn(navMenuViewportBase)} />
  </NavigationMenuViewportPositioner>
</NavigationMenuRoot>
