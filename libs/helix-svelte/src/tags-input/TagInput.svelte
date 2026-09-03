<!-- libs/helix-svelte/src/tags-input/TagInput.svelte -->
<!-- Closely based on: Shark UI tags input (@ark-ui/svelte/tags-input), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import {
    TagsInputRoot,
    TagsInputHiddenInput,
    type TagsInputRootProps,
  } from '@ark-ui/svelte/tags-input';
  import { tagsInputRootBase, cn } from '@cloudvoyant/helix';

  let { class: className = '', editable = false, children, ...rest }: TagsInputRootProps = $props();

  const classes = $derived(cn(tagsInputRootBase, className));
</script>

<TagsInputRoot {editable} class={classes} {...rest}>
  {#if children}{@render children()}{/if}
  <TagsInputHiddenInput />
</TagsInputRoot>
