<!-- libs/helix-svelte/src/PageFooter.svelte -->
<!-- No upstream component; composed from @cloudvoyant/helix page classes, mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { Ark } from '@ark-ui/svelte/factory';
  import { pageFooterBase, cn } from '@cloudvoyant/helix';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = {
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLElement>;

  let { class: className = '', children, ...rest }: Props = $props();

  const classes = $derived(cn(pageFooterBase, className));
</script>

<Ark as="footer" data-slot="page-footer" class={classes} {...rest}>
  {@render children?.()}
</Ark>
