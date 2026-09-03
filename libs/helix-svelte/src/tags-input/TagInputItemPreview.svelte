<!-- libs/helix-svelte/src/tags-input/TagInputItemPreview.svelte -->
<!-- Closely based on: Shark UI tags input (@ark-ui/svelte/tags-input), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { TagsInputItemPreview, type TagsInputItemPreviewProps } from '@ark-ui/svelte/tags-input';

  let { class: className = '', children, ...rest }: TagsInputItemPreviewProps = $props();
</script>

<TagsInputItemPreview class={className} {...rest}>
  {#if children}{@render children()}{/if}
</TagsInputItemPreview>
