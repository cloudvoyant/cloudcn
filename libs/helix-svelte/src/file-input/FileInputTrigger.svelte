<!-- libs/helix-svelte/src/file-input/FileInputTrigger.svelte -->
<script lang="ts">
  import { FileUploadTrigger, type FileUploadTriggerProps } from '@ark-ui/svelte/file-upload';
  import { fileInputTriggerBase, cn } from '@cloudvoyant/helix';
  let { class: className = '', children, ...rest }: FileUploadTriggerProps = $props();
  const classes = $derived(cn(fileInputTriggerBase, className));
</script>

<FileUploadTrigger class={classes} {...rest}>{@render children?.()}</FileUploadTrigger>
