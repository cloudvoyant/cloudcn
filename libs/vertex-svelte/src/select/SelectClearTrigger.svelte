<!-- libs/vertex-svelte/src/select/SelectClearTrigger.svelte -->
<!-- Closely based on: Shark UI select (@ark-ui/svelte/select), mirrored from @cloudvoyant/vertex-react -->
<script lang="ts">
  import { SelectClearTrigger, type SelectClearTriggerProps } from '@ark-ui/svelte/select';
  import { selectClearTriggerBase, cn } from '@cloudvoyant/vertex-ui';

  let { class: className = '', children, ...rest }: SelectClearTriggerProps = $props();

  const classes = $derived(cn(selectClearTriggerBase, className));
</script>

<SelectClearTrigger aria-label="Clear selection" class={classes} {...rest}>
  {@render children?.()}
</SelectClearTrigger>
