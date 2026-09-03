<!-- libs/helix-svelte/src/tags-input/TagInputItem.svelte -->
<!-- Closely based on: Shark UI tags input (@ark-ui/svelte/tags-input), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { TagsInputItem, type TagsInputItemProps } from '@ark-ui/svelte/tags-input';
  import { tagsInputItemBase, cn } from '@cloudvoyant/helix';

  let { class: className = '', children, ...rest }: TagsInputItemProps = $props();

  const classes = $derived(cn(tagsInputItemBase, className));
</script>

<TagsInputItem class={classes} {...rest}>
  {#if children}{@render children()}{/if}
</TagsInputItem>
