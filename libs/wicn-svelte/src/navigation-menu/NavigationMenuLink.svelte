<!-- libs/wicn-svelte/src/navigation-menu/NavigationMenuLink.svelte -->
<!-- Closely based on: @ark-ui/svelte/navigation-menu (Ark UI), mirrored from wicn-react -->
<script lang="ts">
  import { NavigationMenuLink, type NavigationMenuLinkProps } from '@ark-ui/svelte/navigation-menu';
  import { navigationMenuLinkBase, cn } from 'wicn-core';

  let { class: className = '', children, ...rest }: NavigationMenuLinkProps = $props();

  const classes = $derived(cn(navigationMenuLinkBase, className));
</script>

<NavigationMenuLink class={classes} {...rest}>
  {@render children?.()}
</NavigationMenuLink>
