<!-- libs/wicn-svelte/src/navbar/NavbarRoot.svelte -->
<!-- Source: wicn-react navbar root (shadcnblocks navbar6/7, re-based on Ark UI) -->
<script lang="ts">
  import { navbarVariants, cn } from 'wicn-core';
  import { getNavbarContext } from './NavbarContext.svelte';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = {
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLElement>;

  let { class: className = '', children, ...rest }: Props = $props();

  const navbar = getNavbarContext();
  const scrolled = $derived(navbar.scrolled);
  const hidden = $derived(navbar.variant === 'hide' && navbar.scrolled && !navbar.hovered);

  const classes = $derived(cn(navbarVariants({ variant: navbar.variant, floating: navbar.floating }), className));
</script>

<header
  data-slot="navbar"
  data-scrolled={scrolled || undefined}
  data-hidden={hidden || undefined}
  class={classes}
  onmouseenter={() => navbar.setHovered(true)}
  onmouseleave={() => navbar.setHovered(false)}
  {...rest}
>
  {@render children?.()}
</header>
