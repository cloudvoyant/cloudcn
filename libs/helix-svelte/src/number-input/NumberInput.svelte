<!-- libs/helix-svelte/src/number-input/NumberInput.svelte -->
<script lang="ts">
  import { NumberInputRoot, type NumberInputRootProps } from '@ark-ui/svelte/number-input';
  import { numberInputRootBase, numberInputStepperBase, cn } from '@cloudvoyant/helix';
  import NumberInputControl from './NumberInputControl.svelte';
  import NumberInputDecrement from './NumberInputDecrement.svelte';
  import NumberInputIncrement from './NumberInputIncrement.svelte';
  import NumberInputInput from './NumberInputInput.svelte';

  type Props = NumberInputRootProps & { size?: 'sm' | 'md' | 'lg' };

  let { class: className = '', size = 'md', children, value = $bindable(), ...rest }: Props = $props();

  const classes = $derived(cn(numberInputRootBase, className));
</script>

<NumberInputRoot class={classes} bind:value {...rest}>
  <NumberInputControl>
    <NumberInputInput {size} />
    <div class={numberInputStepperBase}>
      <NumberInputIncrement />
      <NumberInputDecrement />
    </div>
  </NumberInputControl>
  {@render children?.()}
</NumberInputRoot>
