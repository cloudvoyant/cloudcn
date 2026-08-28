<!-- apps/docs/src/components/examples/file-input/controlled/svelte.svelte -->
<script lang="ts">
  import {
    FileInput,
    FileInputDropzone,
    FileInputTrigger,
    FileInputItemGroup,
    FileInputItem,
    FileInputItemName,
    FileInputItemDeleteTrigger,
  } from '@cloudvoyant/helix-svelte';
  import { Upload, FileUp, Trash2 } from 'lucide-svelte';
  let files = $state<File[]>([]);
</script>

<FileInput accept="image/*" class="max-w-sm" bind:acceptedFiles={files}>
  <FileInputDropzone>
    <Upload />
    <FileInputTrigger><FileUp /> Browse files</FileInputTrigger>
  </FileInputDropzone>
  {#if files.length > 0}
    <FileInputItemGroup>
      {#each files as file}
        <FileInputItem {file}>
          <FileInputItemName>{file.name}</FileInputItemName>
          <FileInputItemDeleteTrigger aria-label="Remove file"><Trash2 /></FileInputItemDeleteTrigger>
        </FileInputItem>
      {/each}
    </FileInputItemGroup>
  {/if}
  <output data-testid="value">{files.map((f) => f.name).join(', ')}</output>
  <button type="button" data-testid="reset" onclick={() => (files = [])}>Reset</button>
</FileInput>
