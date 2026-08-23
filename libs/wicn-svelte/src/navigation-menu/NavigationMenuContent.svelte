<!-- libs/wicn-svelte/src/navigation-menu/NavigationMenuContent.svelte -->
<!-- Closely based on: @ark-ui/svelte/navigation-menu (Ark UI), mirrored from wicn-react -->
<script lang="ts">
  import { NavigationMenuContent, type NavigationMenuContentProps } from '@ark-ui/svelte/navigation-menu';
  import { navigationMenuContentBase, cn } from 'wicn-core';

  let { value, class: className = '', children, ...rest }: NavigationMenuContentProps = $props();

  const classes = $derived(cn(navigationMenuContentBase, className));
</script>

<NavigationMenuContent {value} class={classes} {...rest}>
  {@render children?.()}
</NavigationMenuContent>
