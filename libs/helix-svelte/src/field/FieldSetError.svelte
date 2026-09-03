<!-- libs/helix-svelte/src/field/FieldSetError.svelte -->
<!-- Closely based on: Shark UI field (@ark-ui/svelte/fieldset), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { FieldsetErrorText, type FieldsetErrorTextProps } from '@ark-ui/svelte/fieldset';
  import { fieldsetErrorBase, cn } from '@cloudvoyant/helix';

  let { class: className = '', children, ...rest }: FieldsetErrorTextProps = $props();

  const classes = $derived(cn(fieldsetErrorBase, className));
</script>

<FieldsetErrorText class={classes} {...rest}>
  {#if children}{@render children()}{/if}
</FieldsetErrorText>
