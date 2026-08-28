<!-- libs/helix-svelte/src/file-input/FileInputItemDeleteTrigger.svelte -->
<script lang="ts">
  import { FileUploadItemDeleteTrigger, type FileUploadItemDeleteTriggerProps } from '@ark-ui/svelte/file-upload';
  import { fileInputItemDeleteTriggerBase, cn } from '@cloudvoyant/helix';
  let { class: className = '', children, ...rest }: FileUploadItemDeleteTriggerProps = $props();
  const classes = $derived(cn(fileInputItemDeleteTriggerBase, className));
</script>

<FileUploadItemDeleteTrigger aria-label="Remove file" class={classes} {...rest}
  >{@render children?.()}</FileUploadItemDeleteTrigger
>
