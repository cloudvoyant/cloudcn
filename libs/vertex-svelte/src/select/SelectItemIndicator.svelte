<!-- libs/vertex-svelte/src/select/SelectItemIndicator.svelte -->
<!-- Closely based on: Shark UI select (@ark-ui/svelte/select), mirrored from @cloudvoyant/vertex-react -->
<script lang="ts">
  import { SelectItemIndicator, type SelectItemIndicatorProps } from '@ark-ui/svelte/select';
  import { selectItemIndicatorBase, cn } from '@cloudvoyant/vertex-ui';

  let { class: className = '', children, ...rest }: SelectItemIndicatorProps = $props();

  const classes = $derived(cn(selectItemIndicatorBase, className));
</script>

<SelectItemIndicator class={classes} {...rest}>
  {@render children?.()}
</SelectItemIndicator>
