<!-- apps/docs/src/components/examples/tags-input/controlled/Tags.svelte -->
<script lang="ts">
  import { useTagInput } from '@cloudvoyant/helix-svelte';
  import {
    TagInputItem,
    TagInputItemPreview,
    TagInputItemText,
    TagInputItemDeleteTrigger,
    TagInputItemInput,
  } from '@cloudvoyant/helix-svelte';
  import { X } from 'lucide-svelte';

  const api = useTagInput();
  const value = $derived(api().value);
</script>

{#each value as v, index (v)}
  <TagInputItem {index} value={v}>
    <TagInputItemPreview>
      <TagInputItemText>{v}</TagInputItemText>
      <TagInputItemDeleteTrigger><X /></TagInputItemDeleteTrigger>
    </TagInputItemPreview>
    <TagInputItemInput />
  </TagInputItem>
{/each}
