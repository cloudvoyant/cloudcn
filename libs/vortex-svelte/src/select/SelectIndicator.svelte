<!-- libs/vortex-svelte/src/select/SelectIndicator.svelte -->
<!-- Closely based on: Shark UI select (@ark-ui/svelte/select), mirrored from @cloudvoyant/vortex-react -->
<script lang="ts">
  import { SelectIndicator, type SelectIndicatorProps } from '@ark-ui/svelte/select';
  import { selectIndicatorBase, cn } from '@cloudvoyant/vortex-ui';

  let { class: className = '', children, ...rest }: SelectIndicatorProps = $props();

  const classes = $derived(cn(selectIndicatorBase, className));
</script>

<SelectIndicator class={classes} {...rest}>
  {@render children?.()}
</SelectIndicator>
