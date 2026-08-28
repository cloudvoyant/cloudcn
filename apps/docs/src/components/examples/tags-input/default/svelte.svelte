<!-- apps/docs/src/components/examples/tags-input/default/svelte.svelte -->
<script lang="ts">
  import {
    TagInput,
    TagInputControl,
    TagInputInput,
    TagInputItem,
    TagInputItemPreview,
    TagInputItemText,
    TagInputItemDeleteTrigger,
    TagInputItemInput,
  } from '@cloudvoyant/helix-svelte';
  import { X } from 'lucide-svelte';
  let tags = $state(['react', 'svelte']);
</script>

<TagInput bind:value={tags} class="max-w-sm">
  <TagInputControl>
    {#each tags as value, index (value)}
      <TagInputItem {index} {value}>
        <TagInputItemPreview>
          <TagInputItemText>{value}</TagInputItemText>
          <TagInputItemDeleteTrigger><X /></TagInputItemDeleteTrigger>
        </TagInputItemPreview>
        <TagInputItemInput />
      </TagInputItem>
    {/each}
    <TagInputInput placeholder="Add tag" />
  </TagInputControl>
</TagInput>
