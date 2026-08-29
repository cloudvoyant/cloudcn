<!-- libs/helix-svelte/src/number-input/NumberInputIncrement.svelte -->
<script lang="ts">
  import { NumberInputIncrementTrigger, type NumberInputIncrementTriggerProps } from '@ark-ui/svelte/number-input';
  import { numberInputButtonBase, numberInputIncrementBase, cn } from '@cloudvoyant/helix';

  let { class: className = '', children, ...rest }: NumberInputIncrementTriggerProps = $props();

  const classes = $derived(cn(numberInputButtonBase, numberInputIncrementBase, className));
</script>

<NumberInputIncrementTrigger aria-label="Increment" class={classes} {...rest}>
  {#if children}
    {@render children()}
  {:else}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5v14" /></svg>
  {/if}
</NumberInputIncrementTrigger>
