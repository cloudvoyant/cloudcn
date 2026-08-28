<!-- apps/docs/src/components/examples/file-input/default/FileList.svelte -->
<script lang="ts">
  import {
    FileInputItemGroup,
    FileInputItem,
    FileInputItemName,
    FileInputItemSizeText,
    FileInputItemDeleteTrigger,
    useFileInput,
  } from '@cloudvoyant/helix-svelte';
  import { Trash2 } from 'lucide-svelte';
  const api = useFileInput();
  const files = $derived(api()?.acceptedFiles ?? []);
</script>

{#if files.length > 0}
  <FileInputItemGroup>
    {#each files as file}
      <FileInputItem {file}>
        <FileInputItemName>{file.name}</FileInputItemName>
        <div class="flex items-center gap-2">
          <FileInputItemSizeText>{file.size} bytes</FileInputItemSizeText>
          <FileInputItemDeleteTrigger aria-label="Remove file"><Trash2 /></FileInputItemDeleteTrigger>
        </div>
      </FileInputItem>
    {/each}
  </FileInputItemGroup>
{/if}
