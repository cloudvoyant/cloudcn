<!-- apps/docs/src/components/examples/file-input/formats/svelte.svelte -->
<script lang="ts">
  import { Field, FieldLabel, FieldHint } from '@cloudvoyant/helix-svelte';
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
  let files = $state<File[]>([]);
</script>

<Field class="mx-auto max-w-sm">
  <FieldLabel>Attachments</FieldLabel>
  <FileInput accept=".png,.jpg,.jpeg" class="w-full" bind:acceptedFiles={files}>
    <FileInputDropzone>
      <Upload />
      <span>Drag &amp; drop files here</span>
      <FileInputTrigger><FileUp /> Browse files</FileInputTrigger>
    </FileInputDropzone>
    {#if files.length > 0}
      <FileInputItemGroup>
        {#each files as file}
          <FileInputItem {file}>
            <FileInputItemName>{file.name}</FileInputItemName>
            <FileInputItemSizeText>{file.size} bytes</FileInputItemSizeText>
            <FileInputItemDeleteTrigger aria-label="Remove file"><Trash2 /></FileInputItemDeleteTrigger>
          </FileInputItem>
        {/each}
      </FileInputItemGroup>
    {/if}
  </FileInput>
  <FieldHint>Only .png, .jpg, .jpeg files are allowed.</FieldHint>
</Field>
