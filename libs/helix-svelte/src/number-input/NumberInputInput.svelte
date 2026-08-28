<!-- libs/helix-svelte/src/number-input/NumberInputInput.svelte -->
<script lang="ts">
  import { NumberInputInput, type NumberInputInputProps } from '@ark-ui/svelte/number-input';
  import { numberInputVariants, cn } from '@cloudvoyant/helix';
  type Props = Omit<NumberInputInputProps, 'size'> & { size?: 'sm' | 'md' | 'lg'; class?: string };
  let { class: className = '', size = 'md', ...rest }: Props = $props();
  const classes = $derived(cn(numberInputVariants({ size }), className));
</script>

<NumberInputInput class={classes} {...rest} />
