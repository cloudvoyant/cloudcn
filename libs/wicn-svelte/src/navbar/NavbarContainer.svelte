<!-- libs/wicn-svelte/src/navbar/NavbarContainer.svelte -->
<!-- Source: wicn-react navbar container (shadcnblocks navbar6/7, re-based on Ark UI) -->
<script lang="ts">
  import { Ark } from '@ark-ui/svelte/factory';
  import { navbarContainerBase, cn } from 'wicn-core';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = {
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLDivElement>;

  let { class: className = '', children, ...rest }: Props = $props();

  const classes = $derived(cn(navbarContainerBase, className));
</script>

<Ark as="div" data-slot="navbar-container" class={classes} {...rest}>
  {@render children?.()}
</Ark>
