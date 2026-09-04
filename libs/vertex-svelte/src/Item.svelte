<!-- libs/vertex-svelte/src/Item.svelte -->
<!-- Closely based on: vertex-ui example-item primitive, built on @ark-ui/svelte/factory (Ark UI), mirrored from @cloudvoyant/vertex-react -->
<script lang="ts">
  import { Ark } from '@ark-ui/svelte/factory';
  import { itemVariants, cn } from '@cloudvoyant/vertex-ui';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = {
    variant?: 'plain' | 'surface';
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLDivElement>;

  let { variant = 'plain', class: className = '', children, ...rest }: Props = $props();

  const classes = $derived(cn(itemVariants({ variant }), className));
</script>

<Ark as="div" class={classes} {...rest}>
  {@render children?.()}
</Ark>
