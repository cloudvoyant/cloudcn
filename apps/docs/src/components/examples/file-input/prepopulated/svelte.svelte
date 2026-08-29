<!-- apps/docs/src/components/examples/file-input/prepopulated/svelte.svelte -->
<script lang="ts">
  import {
    FileInput,
    FileInputDropzone,
    FileInputTrigger,
    FileInputItemGroup,
    FileInputItem,
    FileInputItemName,
    FileInputItemSizeText,
    FileInputItemDeleteTrigger,
  } from '@cloudvoyant/helix-svelte';
  import { Upload, FileUp, Trash2 } from 'lucide-svelte';
  let files = $state<File[]>([new File(['hello world'], 'readme.txt', { type: 'text/plain' })]);
</script>

<FileInput accept="*/*" class="mx-auto max-w-sm" bind:acceptedFiles={files}>
  <FileInputDropzone>
    <Upload />
    <FileInputTrigger><FileUp /> Browse files</FileInputTrigger>
  </FileInputDropzone>
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
</FileInput>
