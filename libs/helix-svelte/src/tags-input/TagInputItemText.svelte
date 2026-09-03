<!-- libs/helix-svelte/src/tags-input/TagInputItemText.svelte -->
<!-- Closely based on: Shark UI tags input (@ark-ui/svelte/tags-input), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { TagsInputItemText, type TagsInputItemTextProps } from '@ark-ui/svelte/tags-input';
  import { tagsInputItemTextBase, cn } from '@cloudvoyant/helix';

  let { class: className = '', children, ...rest }: TagsInputItemTextProps = $props();

  const classes = $derived(cn(tagsInputItemTextBase, className));
</script>

<TagsInputItemText class={classes} {...rest}>
  {#if children}{@render children()}{/if}
</TagsInputItemText>
