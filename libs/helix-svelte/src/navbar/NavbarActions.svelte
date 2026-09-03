<!-- libs/helix-svelte/src/navbar/NavbarActions.svelte -->
<!-- Source: @cloudvoyant/helix-react navbar actions (shadcnblocks navbar6/7, re-based on Ark UI) -->
<script lang="ts">
  import { Ark } from '@ark-ui/svelte/factory';
  import { navbarActionsBase, cn } from '@cloudvoyant/helix';
  import { getNavbarContext } from './NavbarContext.svelte.ts';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = {
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLDivElement>;

  let { class: className = '', children, ...rest }: Props = $props();

  const navbar = getNavbarContext();
  $effect(() => navbar.setSlot('actions', children));

  const classes = $derived(cn(navbarActionsBase, className));
</script>

<Ark as="div" data-slot="navbar-actions" class={classes} {...rest}>
  {#if children}{@render children()}{/if}
</Ark>
