<!-- libs/wicn-svelte/src/nav-menu/NavMenuItem.svelte -->
<!-- Closely based on: @ark-ui/svelte/navigation-menu (Ark UI), mirrored from wicn-react -->
<script lang="ts">
  import { NavigationMenuItem, type NavigationMenuItemProps } from '@ark-ui/svelte/navigation-menu';
  import { navMenuItemBase, cn, type NavMenuVariant } from 'wicn-core';
  import { getNavMenuStyle, setNavMenuStyle } from './context.svelte';

  let {
    value,
    disabled = false,
    variant = 'default',
    class: className = '',
    children,
    ...rest
  }: NavigationMenuItemProps & { variant?: NavMenuVariant } = $props();

  const parentStyle = getNavMenuStyle();
  setNavMenuStyle({
    get density() {
      return parentStyle.density;
    },
    get variant() {
      return variant;
    },
    get inContent() {
      return false;
    },
  });
  const classes = $derived(cn(navMenuItemBase, className));
</script>

<NavigationMenuItem {value} {disabled} data-variant={variant} class={classes} {...rest}>
  {@render children?.()}
</NavigationMenuItem>
