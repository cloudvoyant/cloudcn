<!-- libs/helix-svelte/src/file-input/FileInput.svelte -->
<script lang="ts">
  import { FileUploadRoot, FileUploadHiddenInput, type FileUploadRootProps } from '@ark-ui/svelte/file-upload';
  import { fileInputRootBase, cn } from '@cloudvoyant/helix';
  let { class: className = '', children, acceptedFiles = $bindable(), ...rest }: FileUploadRootProps = $props();
  const classes = $derived(cn(fileInputRootBase, className));
</script>

<FileUploadRoot class={classes} bind:acceptedFiles {...rest}>
  <FileUploadHiddenInput />
  {@render children?.()}
</FileUploadRoot>
