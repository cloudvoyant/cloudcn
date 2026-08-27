<!-- libs/wicn-svelte/src/navbar/NavbarRoot.svelte -->
<!-- Source: wicn-react navbar root (shadcnblocks navbar6/7, re-based on Ark UI) -->
<script lang="ts">
  import {
    navbarVariants,
    navbarContainerBase,
    navbarDensityVariants,
    navbarShrunkBase,
    cn,
    type NavbarDensity,
    type NavbarVariant,
  } from 'wicn-core';
  import { getNavbarContext, setNavbarContext } from './NavbarContext.svelte';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = {
    variant?: NavbarVariant;
    floating?: boolean;
    density?: NavbarDensity;
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLElement>;

  let {
    variant = 'sticky',
    floating = false,
    density = 'relaxed',
    class: className = '',
    children,
    ...rest
  }: Props = $props();

  const parent = getNavbarContext();
  let headerEl = $state<HTMLElement>();

  // Listen to the nearest scrollable ancestor (e.g. a demo container with
  // overflow-y-auto); fall back to the window. `position: sticky` sticks
  // relative to that same container, so data-scrolled stays in sync.
  $effect(() => {
    if (!headerEl) return;
    let target: Element | Window = window;
    for (let n: Element | null = headerEl; n; n = n.parentElement) {
      const oy = getComputedStyle(n).overflowY;
      if (oy === 'auto' || oy === 'scroll' || oy === 'overlay') {
        target = n;
        break;
      }
    }
    const getY = () => (target === window ? window.scrollY : (target as Element).scrollTop);
    const onScroll = () => parent.setScrolled(getY() > 24);
    onScroll();
    (target as EventTarget).addEventListener('scroll', onScroll, { passive: true });
    return () => (target as EventTarget).removeEventListener('scroll', onScroll);
  });

  // Anchor the mobile overlay to the element that contains the bar (its
  // parent), so it covers the surrounding container rather than the window.
  $effect(() => {
    parent.setPortalEl(headerEl?.parentElement ?? undefined);
  });

  // The mobile overlay portals into the bar's scroll container (this header's
  // parent). Lock that container's scroll while the overlay is open so the
  // background can't be scrolled past it; Ark's body scroll lock is disabled.
  $effect(() => {
    if (!parent.open) return;
    const el = headerEl?.parentElement;
    if (!el) return;
    const prev = el.style.overflow;
    el.style.overflow = 'hidden';
    return () => {
      el.style.overflow = prev;
    };
  });

  setNavbarContext({
    get open() {
      return parent.open;
    },
    setOpen: parent.setOpen,
    get scrolled() {
      return parent.scrolled;
    },
    setScrolled: parent.setScrolled,
    get hovered() {
      return parent.hovered;
    },
    setHovered: parent.setHovered,
    get slots() {
      return parent.slots;
    },
    setSlot: parent.setSlot,
    get portalEl() {
      return parent.portalEl;
    },
    setPortalEl: parent.setPortalEl,
    get variant() {
      return variant;
    },
    get floating() {
      return floating;
    },
    get density() {
      return density;
    },
  });

  const scrolled = $derived(parent.scrolled);
  const hidden = $derived(variant === 'hide' && parent.scrolled && !parent.hovered);
  const shrunk = $derived(variant === 'shrink' && parent.scrolled);
  const classes = $derived(
    cn(
      navbarVariants({ variant, floating }),
      navbarContainerBase,
      navbarDensityVariants({ density }),
      shrunk && navbarShrunkBase,
      className,
    ),
  );
</script>

<header
  bind:this={headerEl}
  data-slot="navbar"
  data-scrolled={scrolled || undefined}
  data-hidden={hidden || undefined}
  data-shrunk={shrunk || undefined}
  class={classes}
  onmouseenter={() => parent.setHovered(true)}
  onmouseleave={() => parent.setHovered(false)}
  {...rest}
>
  {@render children?.()}
</header>
