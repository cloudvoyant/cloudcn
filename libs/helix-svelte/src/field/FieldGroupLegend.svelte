<!-- libs/helix-svelte/src/field/FieldGroupLegend.svelte -->
<script lang="ts">
  import { FieldsetLegend, type FieldsetLegendProps } from '@ark-ui/svelte/fieldset';
  import { fieldGroupLegendBase, cn } from '@cloudvoyant/helix';
  let { class: className = '', children, ...rest }: FieldsetLegendProps = $props();
  const classes = $derived(cn(fieldGroupLegendBase, className));
</script>

<FieldsetLegend class={classes} {...rest}>{@render children?.()}</FieldsetLegend>
