<!-- libs/helix-svelte/src/file-input/FileInputClearTrigger.svelte -->
<script lang="ts">
  import { FileUploadClearTrigger, type FileUploadClearTriggerProps } from '@ark-ui/svelte/file-upload';
  import { fileInputClearTriggerBase, cn } from '@cloudvoyant/helix';
  let { class: className = '', children, ...rest }: FileUploadClearTriggerProps = $props();
  const classes = $derived(cn(fileInputClearTriggerBase, className));
</script>

<FileUploadClearTrigger aria-label="Clear files" class={classes} {...rest}
  >{@render children?.()}</FileUploadClearTrigger
>
