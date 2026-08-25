<!-- libs/wicn-svelte/src/navbar/NavbarContainer.svelte -->
<!-- Source: wicn-react navbar container (shadcnblocks navbar6/7, re-based on Ark UI) -->
<script lang="ts">
  import { Ark } from '@ark-ui/svelte/factory';
  import { navbarContainerBase, navbarDensityVariants, navbarDensityShrunkVariants, cn } from 'wicn-core';
  import { getNavbarContext } from './NavbarContext.svelte';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = {
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLDivElement>;

  let { class: className = '', children, ...rest }: Props = $props();

  const navbar = getNavbarContext();
  const shrunk = $derived(navbar.density === 'shrink-on-scroll' && navbar.scrolled);
  const classes = $derived(
    cn(
      navbarContainerBase,
      navbarDensityVariants({ density: navbar.density }),
      shrunk && navbarDensityShrunkVariants({ density: navbar.density }),
      className,
    ),
  );
</script>

<Ark as="div" data-slot="navbar-container" data-shrunk={shrunk || undefined} class={classes} {...rest}>
  {@render children?.()}
</Ark>
