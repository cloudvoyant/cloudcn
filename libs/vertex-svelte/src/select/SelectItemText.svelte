<!-- libs/vertex-svelte/src/select/SelectItemText.svelte -->
<!-- Closely based on: Shark UI select (@ark-ui/svelte/select), mirrored from @cloudvoyant/vertex-react -->
<script lang="ts">
  import { SelectItemText, type SelectItemTextProps } from '@ark-ui/svelte/select';
  import { selectItemTextBase, cn } from '@cloudvoyant/vertex-ui';

  let { class: className = '', children, ...rest }: SelectItemTextProps = $props();

  const classes = $derived(cn(selectItemTextBase, className));
</script>

<SelectItemText class={classes} {...rest}>
  {@render children?.()}
</SelectItemText>
