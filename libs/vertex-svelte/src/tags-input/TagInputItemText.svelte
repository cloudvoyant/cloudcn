<!-- libs/vertex-svelte/src/tags-input/TagInputItemText.svelte -->
<!-- Closely based on: Shark UI tags input (@ark-ui/svelte/tags-input), mirrored from @cloudvoyant/vertex-react -->
<script lang="ts">
  import { TagsInputItemText, type TagsInputItemTextProps } from '@ark-ui/svelte/tags-input';
  import { tagsInputItemTextBase, cn } from '@cloudvoyant/vertex-ui';

  let { class: className = '', children, ...rest }: TagsInputItemTextProps = $props();

  const classes = $derived(cn(tagsInputItemTextBase, className));
</script>

<TagsInputItemText class={classes} {...rest}>
  {@render children?.()}
</TagsInputItemText>
