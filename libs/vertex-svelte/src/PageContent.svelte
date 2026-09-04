<!-- libs/vertex-svelte/src/PageContent.svelte -->
<!-- No upstream component; composed from @cloudvoyant/vertex-ui page classes, mirrored from @cloudvoyant/vertex-react -->
<script lang="ts">
  import { Ark } from '@ark-ui/svelte/factory';
  import { pageContentBase, cn } from '@cloudvoyant/vertex-ui';
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
  {@render children?.()}
</Ark>
