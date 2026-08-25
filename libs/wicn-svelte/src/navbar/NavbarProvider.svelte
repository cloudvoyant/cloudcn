<!-- libs/wicn-svelte/src/navbar/NavbarProvider.svelte -->
<!-- Source: wicn-react navbar provider (shadcnblocks navbar6/7, re-based on Ark UI) -->
<script lang="ts">
  import { navbarProviderBase, cn } from 'wicn-core';
  import { setNavbarContext } from './NavbarContext.svelte';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = {
    defaultOpen?: boolean;
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLDivElement>;

  let { defaultOpen = false, class: className = '', children, ...rest }: Props = $props();

  const SCROLL_THRESHOLD = 24;
  let open = $state(defaultOpen);
  let scrolled = $state(false);
  let providerEl = $state<HTMLDivElement>();

  $effect(() => {
    if (!providerEl) return;
    let target: Element | Window = window;
    for (let n: Element | null = providerEl; n; n = n.parentElement) {
      const oy = getComputedStyle(n).overflowY;
      if (oy === 'auto' || oy === 'scroll' || oy === 'overlay') {
        target = n;
        break;
      }
    }
    const getY = () => (target === window ? window.scrollY : (target as Element).scrollTop);
    const onScroll = () => (scrolled = getY() > SCROLL_THRESHOLD);
    onScroll();
    (target as EventTarget).addEventListener('scroll', onScroll, { passive: true });
    return () => (target as EventTarget).removeEventListener('scroll', onScroll);
  });

  function setOpen(value: boolean) {
    open = value;
  }

  setNavbarContext({
    get open() {
      return open;
    },
    setOpen,
    get scrolled() {
      return scrolled;
    },
  });

  const classes = $derived(cn(navbarProviderBase, className));
</script>

<div bind:this={providerEl} data-slot="navbar-provider" class={classes} {...rest}>
  {@render children?.()}
</div>
