<!-- libs/vortex-svelte/src/select/SelectItemIndicator.svelte -->
<!-- Closely based on: Shark UI select (@ark-ui/svelte/select), mirrored from @cloudvoyant/vortex-react -->
<script lang="ts">
  import { SelectItemIndicator, type SelectItemIndicatorProps } from '@ark-ui/svelte/select';
  import { selectItemIndicatorBase, cn } from '@cloudvoyant/vortex-ui';

  let { class: className = '', children, ...rest }: SelectItemIndicatorProps = $props();

  const classes = $derived(cn(selectItemIndicatorBase, className));
</script>

<SelectItemIndicator class={classes} {...rest}>
  {@render children?.()}
</SelectItemIndicator>
