<!-- libs/helix-svelte/src/file-input/FileInputItemPreview.svelte -->
<script lang="ts">
  import { FileUploadItemPreview, type FileUploadItemPreviewProps } from '@ark-ui/svelte/file-upload';
  import { fileInputItemPreviewBase, cn } from '@cloudvoyant/helix';

  let { class: className = '', children, ...rest }: FileUploadItemPreviewProps = $props();

  const classes = $derived(cn(fileInputItemPreviewBase, className));
</script>

<FileUploadItemPreview class={classes} {...rest}>{@render children?.()}</FileUploadItemPreview>
