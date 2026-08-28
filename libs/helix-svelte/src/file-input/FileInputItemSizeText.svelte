<!-- libs/helix-svelte/src/file-input/FileInputItemSizeText.svelte -->
<script lang="ts">
  import { FileUploadItemSizeText, type FileUploadItemSizeTextProps } from '@ark-ui/svelte/file-upload';
  import { fileInputItemSizeTextBase, cn } from '@cloudvoyant/helix';
  let { class: className = '', children, ...rest }: FileUploadItemSizeTextProps = $props();
  const classes = $derived(cn(fileInputItemSizeTextBase, className));
</script>

<FileUploadItemSizeText class={classes} {...rest}>{@render children?.()}</FileUploadItemSizeText>
