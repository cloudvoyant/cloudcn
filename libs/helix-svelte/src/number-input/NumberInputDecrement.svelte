<!-- libs/helix-svelte/src/number-input/NumberInputDecrement.svelte -->
<!-- Closely based on: Shark UI number input (@ark-ui/svelte/number-input), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { NumberInputDecrementTrigger, type NumberInputDecrementTriggerProps } from '@ark-ui/svelte/number-input';
  import { numberInputTriggerBase, cn } from '@cloudvoyant/helix';

  let { class: className = '', children, ...rest }: NumberInputDecrementTriggerProps = $props();

  const classes = $derived(cn(numberInputTriggerBase, className));
</script>

<NumberInputDecrementTrigger aria-label="Decrement" class={classes} {...rest}>
  {#if children}{@render children()}{/if}
</NumberInputDecrementTrigger>
