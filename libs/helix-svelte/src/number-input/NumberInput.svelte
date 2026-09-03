<!-- libs/helix-svelte/src/number-input/NumberInput.svelte -->
<!-- Closely based on: Shark UI number input (@ark-ui/svelte/number-input), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { NumberInputRoot, type NumberInputRootProps } from '@ark-ui/svelte/number-input';
  import { numberInputRootBase, cn } from '@cloudvoyant/helix';

  let { class: className = '', children, ...rest }: NumberInputRootProps = $props();

  const classes = $derived(cn(numberInputRootBase, className));
</script>

<NumberInputRoot class={classes} {...rest}>
  {#if children}{@render children()}{/if}
</NumberInputRoot>
