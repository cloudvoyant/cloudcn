<!-- libs/helix-svelte/src/file-input/FileInputDropzone.svelte -->
<script lang="ts">
  import { FileUploadDropzone, type FileUploadDropzoneProps } from '@ark-ui/svelte/file-upload';
  import { fileInputDropzoneBase, cn } from '@cloudvoyant/helix';
  let { class: className = '', children, ...rest }: FileUploadDropzoneProps = $props();
  const classes = $derived(cn(fileInputDropzoneBase, className));
</script>

<FileUploadDropzone class={classes} {...rest}>{@render children?.()}</FileUploadDropzone>
