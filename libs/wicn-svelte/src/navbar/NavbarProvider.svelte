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

  $effect(() => {
    const onScroll = () => (scrolled = window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
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

<div data-slot="navbar-provider" class={classes} {...rest}>
  {@render children?.()}
</div>
