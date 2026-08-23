<!-- libs/wicn-svelte/src/navbar/NavbarMobile.svelte -->
<!-- Source: wicn-react navbar mobile (shadcnblocks navbar6/7, re-based on Ark UI collapsible) -->
<script lang="ts">
  import { CollapsibleRoot, CollapsibleContent, type CollapsibleRootProps } from '@ark-ui/svelte/collapsible';
  import { navbarMobileBase, cn } from 'wicn-core';
  import { getNavbarContext } from './NavbarContext.svelte';

  let { class: className = '', children, ...rest }: CollapsibleRootProps = $props();

  const navbar = getNavbarContext();
  const open = $derived(navbar.open);

  const classes = $derived(cn(navbarMobileBase, className));
</script>

<CollapsibleRoot {open} onOpenChange={(details) => navbar.setOpen(details.open)} class={classes} {...rest}>
  <CollapsibleContent>
    <div data-slot="navbar-mobile" id="navbar-mobile">
      {@render children?.()}
    </div>
  </CollapsibleContent>
</CollapsibleRoot>
