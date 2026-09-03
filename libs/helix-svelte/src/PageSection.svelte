<!-- libs/helix-svelte/src/PageSection.svelte -->
<!-- No upstream component; composed from @cloudvoyant/helix page classes, mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { Ark } from '@ark-ui/svelte/factory';
  import { pageSectionBase, cn } from '@cloudvoyant/helix';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = {
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLElement>;

  let { class: className = '', children, ...rest }: Props = $props();

  const classes = $derived(cn(pageSectionBase, className));
</script>

<Ark as="section" data-slot="page-section" class={classes} {...rest}>
  {#if children}{@render children()}{/if}
</Ark>
