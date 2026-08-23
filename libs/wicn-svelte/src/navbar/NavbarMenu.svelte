<!-- libs/wicn-svelte/src/navbar/NavbarMenu.svelte -->
<!-- Source: wicn-react navbar menu (shadcnblocks navbar6/7, re-based on Ark UI) -->
<script lang="ts">
  import { Ark } from '@ark-ui/svelte/factory';
  import { navbarMenuBase, navbarMenuPlacementVariants, cn } from 'wicn-core';
  import NavigationMenu from '../navigation-menu/NavigationMenu.svelte';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = {
    placement?: 'left' | 'center' | 'right';
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLElement>;

  let { placement = 'center', class: className = '', children, ...rest }: Props = $props();

  const classes = $derived(cn(navbarMenuBase, navbarMenuPlacementVariants({ placement }), className));
</script>

<Ark as="nav" data-slot="navbar-menu" data-placement={placement} class={classes} {...rest}>
  <NavigationMenu>{@render children?.()}</NavigationMenu>
</Ark>
