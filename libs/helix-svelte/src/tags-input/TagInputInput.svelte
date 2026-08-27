<!-- libs/helix-svelte/src/tags-input/TagInputInput.svelte -->
<!-- Closely based on: Shark UI tags input (@ark-ui/svelte/tags-input), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { TagsInputInput, type TagsInputInputProps } from '@ark-ui/svelte/tags-input';
  import { tagsInputInputBase, cn } from '@cloudvoyant/helix';

  let { class: className = '', ...rest }: TagsInputInputProps = $props();

  const classes = $derived(cn(tagsInputInputBase, className));
</script>

<TagsInputInput class={classes} {...rest} />
