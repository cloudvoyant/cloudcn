<!-- libs/wicn-svelte/src/navigation-menu/NavigationMenuItem.svelte -->
<!-- Closely based on: @ark-ui/svelte/navigation-menu (Ark UI), mirrored from wicn-react -->
<script lang="ts">
  import { NavigationMenuItem, type NavigationMenuItemProps } from '@ark-ui/svelte/navigation-menu';
  import { navigationMenuItemBase, cn } from 'wicn-core';

  let { value, disabled = false, class: className = '', children, ...rest }: NavigationMenuItemProps = $props();

  const classes = $derived(cn(navigationMenuItemBase, className));
</script>

<NavigationMenuItem {value} {disabled} class={classes} {...rest}>
  {@render children?.()}
</NavigationMenuItem>
