<!-- libs/wicn-svelte/src/navbar/NavbarTrigger.svelte -->
<!-- Source: wicn-react navbar trigger (shadcnblocks navbar6/7, re-based on Ark UI collapsible) -->
<script lang="ts">
  import { navbarTriggerBase, cn } from 'wicn-core';
  import { getNavbarContext } from './NavbarContext.svelte';
  import type { Snippet } from 'svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';

  type Props = {
    'aria-label'?: string;
    class?: string;
    children?: Snippet;
  } & HTMLButtonAttributes;

  let {
    'aria-label': ariaLabel = 'Toggle navigation menu',
    class: className = '',
    children,
    ...rest
  }: Props = $props();

  const navbar = getNavbarContext();
  const open = $derived(navbar.open);

  const classes = $derived(cn(navbarTriggerBase, className));

  function toggle() {
    navbar.setOpen(!open);
  }
</script>

<button
  type="button"
  data-slot="navbar-trigger"
  aria-expanded={open}
  aria-controls="navbar-mobile"
  aria-label={ariaLabel}
  class={classes}
  onclick={toggle}
  {...rest}
>
  {#if children}
    {@render children()}
  {:else}
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  {/if}
</button>
