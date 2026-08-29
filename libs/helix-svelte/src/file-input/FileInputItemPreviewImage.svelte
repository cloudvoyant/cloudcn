<!-- libs/helix-svelte/src/file-input/FileInputItemPreviewImage.svelte -->
<script lang="ts">
  import { FileUploadItemPreviewImage, type FileUploadItemPreviewImageProps } from '@ark-ui/svelte/file-upload';
  import { fileInputItemPreviewImageBase, cn } from '@cloudvoyant/helix';

  let { class: className = '', ...rest }: FileUploadItemPreviewImageProps = $props();

  const classes = $derived(cn(fileInputItemPreviewImageBase, className));
</script>

<FileUploadItemPreviewImage class={classes} {...rest} />
