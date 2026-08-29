<!-- libs/helix-svelte/src/file-input/FileInputItemName.svelte -->
<script lang="ts">
  import { FileUploadItemName, type FileUploadItemNameProps } from '@ark-ui/svelte/file-upload';
  import { fileInputItemNameBase, cn } from '@cloudvoyant/helix';
  let { class: className = '', children, ...rest }: FileUploadItemNameProps = $props();
  const classes = $derived(cn(fileInputItemNameBase, className));
</script>

<FileUploadItemName class={classes} {...rest}>{@render children?.()}</FileUploadItemName>
