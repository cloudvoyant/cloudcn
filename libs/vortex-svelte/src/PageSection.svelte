<!-- libs/vortex-svelte/src/PageSection.svelte -->
<!-- No upstream component; composed from @cloudvoyant/vortex-ui page classes, mirrored from @cloudvoyant/vortex-react -->
<script lang="ts">
  import { Ark } from '@ark-ui/svelte/factory';
  import { pageSectionBase, cn } from '@cloudvoyant/vortex-ui';
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
  {@render children?.()}
</Ark>
