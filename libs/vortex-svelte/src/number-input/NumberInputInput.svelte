<!-- libs/vortex-svelte/src/number-input/NumberInputInput.svelte -->
<!-- Closely based on: Shark UI number input (@ark-ui/svelte/number-input), mirrored from @cloudvoyant/vortex-react -->
<script lang="ts">
  import { NumberInputInput, type NumberInputInputProps } from '@ark-ui/svelte/number-input';
  import { numberInputInputBase, cn } from '@cloudvoyant/vortex-ui';

  let { class: className = '', ...rest }: NumberInputInputProps = $props();

  const classes = $derived(cn(numberInputInputBase, className));
</script>

<NumberInputInput class={classes} {...rest} />
