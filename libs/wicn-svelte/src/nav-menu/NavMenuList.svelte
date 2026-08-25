<!-- libs/wicn-svelte/src/nav-menu/NavMenuList.svelte -->
<!-- Closely based on: @ark-ui/svelte/navigation-menu (Ark UI), mirrored from wicn-react -->
<script lang="ts">
  import { NavigationMenuList, type NavigationMenuListProps } from '@ark-ui/svelte/navigation-menu';
  import { navMenuListBase, cn } from 'wicn-core';

  let { class: className = '', children, ...rest }: NavigationMenuListProps = $props();

  const classes = $derived(cn(navMenuListBase, className));
</script>

<NavigationMenuList class={classes} {...rest}>
  {@render children?.()}
</NavigationMenuList>
