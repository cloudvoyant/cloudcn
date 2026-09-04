<!-- libs/vortex-svelte/src/Page.svelte -->
<!-- No upstream component; composed from @cloudvoyant/vortex-ui page classes, mirrored from @cloudvoyant/vortex-react -->
<script lang="ts">
  import { Ark } from '@ark-ui/svelte/factory';
  import { pageVariants, cn } from '@cloudvoyant/vortex-ui';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = {
    class?: string;
    variant?: 'default' | 'landing';
    children?: Snippet;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    class: className = '',
    variant = 'default',
    children,
    ...rest
  }: Props = $props();

  const rootClasses = $derived(cn(pageVariants({ variant }), className));
</script>

<Ark as="div" data-slot="page" class={rootClasses} {...rest}>
  {@render children?.()}
</Ark>
