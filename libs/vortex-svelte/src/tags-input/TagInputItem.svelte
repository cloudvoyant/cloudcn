<!-- libs/vortex-svelte/src/tags-input/TagInputItem.svelte -->
<!-- Closely based on: Shark UI tags input (@ark-ui/svelte/tags-input), mirrored from @cloudvoyant/vortex-react -->
<script lang="ts">
  import { TagsInputItem, type TagsInputItemProps } from '@ark-ui/svelte/tags-input';
  import { tagsInputItemBase, cn } from '@cloudvoyant/vortex-ui';

  let { class: className = '', children, ...rest }: TagsInputItemProps = $props();

  const classes = $derived(cn(tagsInputItemBase, className));
</script>

<TagsInputItem class={classes} {...rest}>
  {@render children?.()}
</TagsInputItem>
