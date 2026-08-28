<!-- libs/helix-svelte/src/number-input/NumberInputValueText.svelte -->
<script lang="ts">
  import { NumberInputValueText, useNumberInputContext, type NumberInputValueTextProps } from '@ark-ui/svelte/number-input';
  import { numberInputValueTextBase, cn } from '@cloudvoyant/helix';
  let { class: className = '', children, ...rest }: NumberInputValueTextProps = $props();
  const classes = $derived(cn(numberInputValueTextBase, className));
  const numberInput = useNumberInputContext();
</script>

<NumberInputValueText class={classes} {...rest}>
  {#if children}
    {@render children()}
  {:else}
    {numberInput().value}
  {/if}
</NumberInputValueText>
