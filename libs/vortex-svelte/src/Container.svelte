<!-- libs/vortex-svelte/src/Container.svelte -->
<!-- Closely based on: Chakra UI Container, built on @ark-ui/svelte/factory (Ark UI), mirrored from @cloudvoyant/vortex-react -->
<script lang="ts">
  import { Ark } from '@ark-ui/svelte/factory';
  import { containerBase, cn } from '@cloudvoyant/vortex-ui';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = {
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLDivElement>;

  let { class: className = '', children, ...rest }: Props = $props();

  const classes = $derived(cn(containerBase, className));
</script>

<Ark as="div" class={classes} {...rest}>
  {@render children?.()}
</Ark>
