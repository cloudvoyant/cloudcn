<!-- libs/helix-svelte/src/combobox/ComboboxContent.svelte -->
<!-- Closely based on: Shark UI combobox (@ark-ui/svelte/combobox), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { Portal } from '@ark-ui/svelte/portal';
  import { ComboboxPositioner, ComboboxContent, type ComboboxContentProps } from '@ark-ui/svelte/combobox';
  import { comboboxContentBase, comboboxPositionerBase, cn } from '@cloudvoyant/helix';

  let { class: className = '', children, ...rest }: ComboboxContentProps = $props();

  const classes = $derived(cn(comboboxContentBase, className));
</script>

<Portal>
  <ComboboxPositioner class={comboboxPositionerBase}>
    <ComboboxContent class={classes} {...rest}>
      {#if children}{@render children()}{/if}
    </ComboboxContent>
  </ComboboxPositioner>
</Portal>
