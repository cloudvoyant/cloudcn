<!-- libs/helix-svelte/src/number-input/NumberInput.svelte -->
<script lang="ts">
  import { NumberInputRoot, type NumberInputRootProps } from '@ark-ui/svelte/number-input';
  import { numberInputRootBase, cn } from '@cloudvoyant/helix';
  import NumberInputControl from './NumberInputControl.svelte';
  import NumberInputScrubber from './NumberInputScrubber.svelte';
  let { class: className = '', children, value = $bindable(), ...rest }: NumberInputRootProps = $props();
  const classes = $derived(cn(numberInputRootBase, className));
</script>

<NumberInputRoot class={classes} bind:value {...rest}>
  <NumberInputControl>
    <NumberInputScrubber aria-label="Adjust value" />
    {@render children?.()}
  </NumberInputControl>
</NumberInputRoot>
