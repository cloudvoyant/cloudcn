<!-- libs/helix-svelte/src/PageContent.svelte -->
<!-- No upstream component; composed from @cloudvoyant/helix page classes, mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { Ark } from '@ark-ui/svelte/factory';
  import { pageContentBase, cn } from '@cloudvoyant/helix';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = {
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLElement>;

  let { class: className = '', children, ...rest }: Props = $props();

  const classes = $derived(cn(pageContentBase, className));
</script>

<Ark as="main" data-slot="page-content" class={classes} {...rest}>
  {#if children}{@render children()}{/if}
</Ark>
