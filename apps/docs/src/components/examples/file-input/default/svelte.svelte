<!-- apps/docs/src/components/examples/file-input/default/svelte.svelte -->
<script lang="ts">
  import { FileInput, FileInputDropzone, FileInputTrigger } from '@cloudvoyant/helix-svelte';
  import { Upload, FileUp } from 'lucide-svelte';
  import FileList from './FileList.svelte';
</script>

<FileInput accept="image/*" class="mx-auto max-w-sm">
  <FileInputDropzone>
    <Upload />
    <span>Drag &amp; drop files here</span>
    <FileInputTrigger><FileUp /> Browse files</FileInputTrigger>
  </FileInputDropzone>
  <FileList />
</FileInput>
