<!-- libs/helix-svelte/src/field/FieldSetLegend.svelte -->
<!-- Closely based on: Shark UI field (@ark-ui/svelte/fieldset), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { FieldsetLegend, type FieldsetLegendProps } from '@ark-ui/svelte/fieldset';
  import { fieldsetLegendBase, cn } from '@cloudvoyant/helix';

  let { class: className = '', children, ...rest }: FieldsetLegendProps = $props();

  const classes = $derived(cn(fieldsetLegendBase, className));
</script>

<FieldsetLegend class={classes} {...rest}>
  {#if children}{@render children()}{/if}
</FieldsetLegend>
