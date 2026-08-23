<!-- libs/wicn-svelte/src/navbar/NavbarRoot.svelte -->
<!-- Source: wicn-react navbar root (shadcnblocks navbar6/7, re-based on Ark UI) -->
<script lang="ts">
  import { navbarVariants, cn } from 'wicn-core';
  import { getNavbarContext } from './NavbarContext.svelte';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = {
    variant?: 'sticky' | 'floating';
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLElement>;

  let { variant = 'sticky', class: className = '', children, ...rest }: Props = $props();

  const navbar = getNavbarContext();
  const scrolled = $derived(navbar.scrolled);

  const classes = $derived(cn(navbarVariants({ variant }), className));
</script>

<header data-slot="navbar" data-scrolled={scrolled || undefined} class={classes} {...rest}>
  {@render children?.()}
</header>
