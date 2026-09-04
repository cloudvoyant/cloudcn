<!-- libs/vertex-svelte/src/number-input/NumberInput.svelte -->
<!-- Closely based on: Shark UI number input (@ark-ui/svelte/number-input), mirrored from @cloudvoyant/vertex-react -->
<script lang="ts">
  import { NumberInputRoot, type NumberInputRootProps } from '@ark-ui/svelte/number-input';
  import { numberInputRootBase, cn } from '@cloudvoyant/vertex-ui';

  let { class: className = '', children, ...rest }: NumberInputRootProps = $props();

  const classes = $derived(cn(numberInputRootBase, className));
</script>

<NumberInputRoot class={classes} {...rest}>
  {@render children?.()}
</NumberInputRoot>
