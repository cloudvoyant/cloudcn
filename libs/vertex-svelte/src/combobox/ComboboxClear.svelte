<!-- libs/vertex-svelte/src/combobox/ComboboxClear.svelte -->
<!-- Closely based on: Shark UI combobox (@ark-ui/svelte/combobox), mirrored from @cloudvoyant/vertex-react -->
<script lang="ts">
  import { ComboboxClearTrigger, type ComboboxClearTriggerProps } from '@ark-ui/svelte/combobox';
  import { comboboxClearTriggerBase, cn } from '@cloudvoyant/vertex-ui';

  let { class: className = '', children, ...rest }: ComboboxClearTriggerProps = $props();

  const classes = $derived(cn(comboboxClearTriggerBase, className));
</script>

<ComboboxClearTrigger aria-label="Clear" class={classes} {...rest}>
  {@render children?.()}
</ComboboxClearTrigger>
