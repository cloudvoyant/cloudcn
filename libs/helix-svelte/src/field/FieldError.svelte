<!-- libs/helix-svelte/src/field/FieldError.svelte -->
<!-- Closely based on: Shark UI field (@ark-ui/svelte/field), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { FieldErrorText, type FieldErrorTextProps } from '@ark-ui/svelte/field';
  import { fieldErrorBase, cn } from '@cloudvoyant/helix';

  let { class: className = '', children, ...rest }: FieldErrorTextProps = $props();

  const classes = $derived(cn(fieldErrorBase, className));
</script>

<FieldErrorText class={classes} {...rest}>
  {#if children}{@render children()}{/if}
</FieldErrorText>
