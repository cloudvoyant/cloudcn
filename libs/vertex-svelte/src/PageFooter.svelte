<!-- libs/vertex-svelte/src/PageFooter.svelte -->
<!-- No upstream component; composed from @cloudvoyant/vertex-ui page classes, mirrored from @cloudvoyant/vertex-react -->
<script lang="ts">
  import { Ark } from '@ark-ui/svelte/factory';
  import { pageFooterBase, cn } from '@cloudvoyant/vertex-ui';
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
