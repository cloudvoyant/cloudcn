<!-- apps/docs/src/components/examples/file-input/clear/FileList.svelte -->
<script lang="ts">
  import {
    FileInputItemGroup,
    FileInputItem,
    FileInputItemName,
    FileInputItemDeleteTrigger,
    FileInputClearTrigger,
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
        <FileInputItemDeleteTrigger aria-label="Remove file"><Trash2 /></FileInputItemDeleteTrigger>
      </FileInputItem>
    {/each}
  </FileInputItemGroup>
  {#if files.length > 1}
    <FileInputClearTrigger>Clear all</FileInputClearTrigger>
  {/if}
{/if}
