<!-- libs/helix-svelte/src/checkbox/CheckboxIndicator.svelte -->
<!-- Closely based on: Shark UI checkbox (@ark-ui/svelte/checkbox), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { CheckboxIndicator, type CheckboxIndicatorProps } from '@ark-ui/svelte/checkbox';
  import { checkboxIndicatorBase, cn } from '@cloudvoyant/helix';

  let { class: className = '', children, ...rest }: CheckboxIndicatorProps = $props();

  const classes = $derived(cn(checkboxIndicatorBase, className));
</script>

<CheckboxIndicator class={classes} {...rest}>
  {#if children}{@render children()}{/if}
</CheckboxIndicator>
