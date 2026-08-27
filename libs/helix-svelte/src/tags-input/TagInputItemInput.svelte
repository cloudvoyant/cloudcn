<!-- libs/helix-svelte/src/tags-input/TagInputItemInput.svelte -->
<!-- Closely based on: Shark UI tags input (@ark-ui/svelte/tags-input), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { TagsInputItemInput, type TagsInputItemInputProps } from '@ark-ui/svelte/tags-input';
  import { tagsInputItemInputBase, cn } from '@cloudvoyant/helix';

  let { class: className = '', ...rest }: TagsInputItemInputProps = $props();

  const classes = $derived(cn(tagsInputItemInputBase, className));
</script>

<TagsInputItemInput class={classes} {...rest} />
