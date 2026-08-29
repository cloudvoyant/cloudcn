<!-- libs/helix-svelte/src/number-input/NumberInputScrubber.svelte -->
<script lang="ts">
  import { NumberInputScrubber, type NumberInputScrubberProps } from '@ark-ui/svelte/number-input';
  import { numberInputScrubberBase, cn } from '@cloudvoyant/helix';
  let { class: className = '', children, ...rest }: NumberInputScrubberProps = $props();
  const classes = $derived(cn(numberInputScrubberBase, className));
</script>

<NumberInputScrubber class={classes} {...rest}>{@render children?.()}</NumberInputScrubber>
