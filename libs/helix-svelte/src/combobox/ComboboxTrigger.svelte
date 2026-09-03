<!-- libs/helix-svelte/src/combobox/ComboboxTrigger.svelte -->
<!-- Closely based on: Shark UI combobox (@ark-ui/svelte/combobox), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { ComboboxTrigger, type ComboboxTriggerProps } from '@ark-ui/svelte/combobox';
  import { comboboxTriggerBase, cn } from '@cloudvoyant/helix';

  let { class: className = '', children, ...rest }: ComboboxTriggerProps = $props();

  const classes = $derived(cn(comboboxTriggerBase, className));
</script>

<ComboboxTrigger class={classes} {...rest}>
  {#if children}{@render children()}{/if}
</ComboboxTrigger>
