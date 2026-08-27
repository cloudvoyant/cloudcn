<!-- libs/helix-svelte/src/navbar/NavbarMenuList.svelte -->
<!-- Closely based on: @ark-ui/svelte/navigation-menu (Ark UI), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { NavigationMenuList, type NavigationMenuListProps } from '@ark-ui/svelte/navigation-menu';
  import { navbarMenuListBase, cn } from '@cloudvoyant/helix';

  let { class: className = '', children, ...rest }: NavigationMenuListProps = $props();

  const classes = $derived(cn(navbarMenuListBase, className));
</script>

<NavigationMenuList class={classes} {...rest}>
  {@render children?.()}
</NavigationMenuList>
