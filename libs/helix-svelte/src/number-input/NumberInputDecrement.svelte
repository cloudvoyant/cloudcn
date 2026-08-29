<!-- libs/helix-svelte/src/number-input/NumberInputDecrement.svelte -->
<script lang="ts">
  import { NumberInputDecrementTrigger, type NumberInputDecrementTriggerProps } from '@ark-ui/svelte/number-input';
  import { numberInputButtonBase, numberInputDecrementBase, cn } from '@cloudvoyant/helix';

  let { class: className = '', children, ...rest }: NumberInputDecrementTriggerProps = $props();

  const classes = $derived(cn(numberInputButtonBase, numberInputDecrementBase, className));
</script>

<NumberInputDecrementTrigger aria-label="Decrement" class={classes} {...rest}>
  {#if children}
    {@render children()}
  {:else}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
  {/if}
</NumberInputDecrementTrigger>
