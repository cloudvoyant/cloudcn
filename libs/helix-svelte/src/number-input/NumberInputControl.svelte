<!-- libs/helix-svelte/src/number-input/NumberInputControl.svelte -->
<!-- Closely based on: Shark UI number input (@ark-ui/svelte/number-input), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { NumberInputControl, type NumberInputControlProps } from '@ark-ui/svelte/number-input';
  import { numberInputControlBase, cn } from '@cloudvoyant/helix';

  let { class: className = '', children, ...rest }: NumberInputControlProps = $props();

  const classes = $derived(cn(numberInputControlBase, className));
</script>

<NumberInputControl class={classes} {...rest}>
  {#if children}{@render children()}{/if}
</NumberInputControl>
