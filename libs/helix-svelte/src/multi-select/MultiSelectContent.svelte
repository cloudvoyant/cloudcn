<!-- libs/helix-svelte/src/combobox/ComboboxContent.svelte -->
<!-- Closely based on: Shark UI combobox (@ark-ui/svelte/combobox), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { Portal } from '@ark-ui/svelte/portal';
  import { ComboboxPositioner, ComboboxContent, type ComboboxContentProps } from '@ark-ui/svelte/combobox';
  import { multiSelectContentBase, multiSelectPositionerBase, cn } from '@cloudvoyant/helix';

  let { class: className = '', children, ...rest }: ComboboxContentProps = $props();

  const classes = $derived(cn(multiSelectContentBase, className));
</script>

<Portal>
  <ComboboxPositioner class={multiSelectPositionerBase}>
    <ComboboxContent class={classes} {...rest}>
      {@render children?.()}
    </ComboboxContent>
  </ComboboxPositioner>
</Portal>
