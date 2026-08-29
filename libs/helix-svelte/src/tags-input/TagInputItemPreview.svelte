<!-- libs/helix-svelte/src/tags-input/TagInputItemPreview.svelte -->
<!-- Closely based on: Shark UI tags input (@ark-ui/svelte/tags-input), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { TagsInputItemPreview, type TagsInputItemPreviewProps } from '@ark-ui/svelte/tags-input';
  import { tagsInputItemPreviewBase, cn } from '@cloudvoyant/helix';

  let { class: className = '', children, ...rest }: TagsInputItemPreviewProps = $props();

  const classes = $derived(cn(tagsInputItemPreviewBase, className));
</script>

<TagsInputItemPreview class={classes} {...rest}>
  {@render children?.()}
</TagsInputItemPreview>
