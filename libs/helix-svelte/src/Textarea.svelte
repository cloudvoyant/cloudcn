<!-- libs/helix-svelte/src/Textarea.svelte -->
<!-- Closely based on: Shark UI textarea (@ark-ui/svelte/field), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { FieldTextarea, type FieldTextareaProps } from '@ark-ui/svelte/field';
  import { textareaBase, cn } from '@cloudvoyant/helix';

  let { class: className = '', children, ...rest }: FieldTextareaProps = $props();

  const classes = $derived(cn(textareaBase, className));
</script>

<FieldTextarea class={classes} {...rest}>
  {#if children}{@render children()}{/if}
</FieldTextarea>
