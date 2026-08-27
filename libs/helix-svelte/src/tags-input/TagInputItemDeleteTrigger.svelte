<!-- libs/helix-svelte/src/tags-input/TagInputItemDeleteTrigger.svelte -->
<!-- Closely based on: Shark UI tags input (@ark-ui/svelte/tags-input), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { TagsInputItemDeleteTrigger, type TagsInputItemDeleteTriggerProps } from '@ark-ui/svelte/tags-input';
  import { tagsInputItemDeleteTriggerBase, cn } from '@cloudvoyant/helix';

  let { class: className = '', children, ...rest }: TagsInputItemDeleteTriggerProps = $props();

  const classes = $derived(cn(tagsInputItemDeleteTriggerBase, className));
</script>

<TagsInputItemDeleteTrigger aria-label="Remove tag" class={classes} {...rest}>
  {@render children?.()}
</TagsInputItemDeleteTrigger>
