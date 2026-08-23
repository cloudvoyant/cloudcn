<!-- libs/wicn-svelte/src/navigation-menu/NavigationMenuList.svelte -->
<!-- Closely based on: @ark-ui/svelte/navigation-menu (Ark UI), mirrored from wicn-react -->
<script lang="ts">
  import { NavigationMenuList, type NavigationMenuListProps } from '@ark-ui/svelte/navigation-menu';
  import { navigationMenuListBase, cn } from 'wicn-core';

  let { class: className = '', children, ...rest }: NavigationMenuListProps = $props();

  const classes = $derived(cn(navigationMenuListBase, className));
</script>

<NavigationMenuList class={classes} {...rest}>
  {@render children?.()}
</NavigationMenuList>
