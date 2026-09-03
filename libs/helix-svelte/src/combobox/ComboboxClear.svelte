<!-- libs/helix-svelte/src/combobox/ComboboxClear.svelte -->
<!-- Closely based on: Shark UI combobox (@ark-ui/svelte/combobox), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { ComboboxClearTrigger, type ComboboxClearTriggerProps } from '@ark-ui/svelte/combobox';
  import { comboboxClearTriggerBase, cn } from '@cloudvoyant/helix';

  let { class: className = '', children, ...rest }: ComboboxClearTriggerProps = $props();

  const classes = $derived(cn(comboboxClearTriggerBase, className));
</script>

<ComboboxClearTrigger aria-label="Clear" class={classes} {...rest}>
  {#if children}{@render children()}{/if}
</ComboboxClearTrigger>
