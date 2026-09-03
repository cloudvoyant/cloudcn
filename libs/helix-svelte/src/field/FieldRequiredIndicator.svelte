<!-- libs/helix-svelte/src/field/FieldRequiredIndicator.svelte -->
<!-- Closely based on: Shark UI field (@ark-ui/svelte/field), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { FieldRequiredIndicator, type FieldRequiredIndicatorProps } from '@ark-ui/svelte/field';
  import { fieldRequiredIndicatorBase, cn } from '@cloudvoyant/helix';

  let { class: className = '', children, ...rest }: FieldRequiredIndicatorProps = $props();

  const classes = $derived(cn(fieldRequiredIndicatorBase, className));
</script>

<FieldRequiredIndicator class={classes} {...rest}>
  {#if children}{@render children()}{/if}
</FieldRequiredIndicator>
