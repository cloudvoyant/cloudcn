<!-- libs/helix-svelte/src/file-input/FileInputItem.svelte -->
<script lang="ts">
  import { FileUploadItem, type FileUploadItemProps } from '@ark-ui/svelte/file-upload';
  import { fileInputItemBase, cn } from '@cloudvoyant/helix';
  let { class: className = '', children, ...rest }: FileUploadItemProps = $props();
  const classes = $derived(cn(fileInputItemBase, className));
</script>

<FileUploadItem class={classes} {...rest}>{@render children?.()}</FileUploadItem>
