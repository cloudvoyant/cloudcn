<!-- apps/docs/src/components/examples/file-input/preview/svelte.svelte -->
<script lang="ts">
  import {
    FileInput,
    FileInputDropzone,
    FileInputTrigger,
    FileInputItemGroup,
    FileInputItem,
    FileInputItemPreview,
    FileInputItemPreviewImage,
    FileInputItemName,
    FileInputItemSizeText,
    FileInputItemDeleteTrigger,
  } from '@cloudvoyant/helix-svelte';
  import { Upload, FileUp, Trash2 } from 'lucide-svelte';

  function svgFile(name: string, fill: string) {
    return new File(
      [`<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120"><rect width="120" height="120" fill="${fill}"/><circle cx="60" cy="60" r="30" fill="#fff" opacity="0.6"/></svg>`],
      name,
      { type: 'image/svg+xml' },
    );
  }

  let files = $state<File[]>([svgFile('cover.svg', '#6366f1'), svgFile('banner.svg', '#10b981')]);
</script>

<FileInput accept="image/*" class="mx-auto max-w-sm" bind:acceptedFiles={files}>
  <FileInputDropzone>
    <Upload />
    <FileInputTrigger><FileUp /> Browse images</FileInputTrigger>
  </FileInputDropzone>
  {#if files.length > 0}
    <FileInputItemGroup>
      {#each files as file}
        <FileInputItem {file}>
          <div class="flex min-w-0 items-center gap-3">
            <FileInputItemPreview>
              <FileInputItemPreviewImage />
            </FileInputItemPreview>
            <div class="flex min-w-0 flex-col">
              <FileInputItemName>{file.name}</FileInputItemName>
              <FileInputItemSizeText>{file.size} bytes</FileInputItemSizeText>
            </div>
          </div>
          <FileInputItemDeleteTrigger aria-label="Remove file"><Trash2 /></FileInputItemDeleteTrigger>
        </FileInputItem>
      {/each}
    </FileInputItemGroup>
  {/if}
</FileInput>
