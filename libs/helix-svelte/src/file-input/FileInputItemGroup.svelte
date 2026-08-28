<!-- libs/helix-svelte/src/file-input/FileInputItemGroup.svelte -->
<script lang="ts">
  import { FileUploadItemGroup, type FileUploadItemGroupProps } from '@ark-ui/svelte/file-upload';
  import { fileInputItemGroupBase, cn } from '@cloudvoyant/helix';
  let { class: className = '', children, ...rest }: FileUploadItemGroupProps = $props();
  const classes = $derived(cn(fileInputItemGroupBase, className));
</script>

<FileUploadItemGroup class={classes} {...rest}>
  {@render children?.()}
</FileUploadItemGroup>
