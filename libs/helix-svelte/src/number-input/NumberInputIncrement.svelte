<!-- libs/helix-svelte/src/number-input/NumberInputIncrement.svelte -->
<!-- Closely based on: Shark UI number input (@ark-ui/svelte/number-input), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { NumberInputIncrementTrigger, type NumberInputIncrementTriggerProps } from '@ark-ui/svelte/number-input';
  import { numberInputTriggerBase, cn } from '@cloudvoyant/helix';

  let { class: className = '', children, ...rest }: NumberInputIncrementTriggerProps = $props();

  const classes = $derived(cn(numberInputTriggerBase, className));
</script>

<NumberInputIncrementTrigger aria-label="Increment" class={classes} {...rest}>
  {@render children?.()}
</NumberInputIncrementTrigger>
