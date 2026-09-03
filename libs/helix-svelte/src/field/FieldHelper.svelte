<!-- libs/helix-svelte/src/field/FieldHelper.svelte -->
<!-- Closely based on: Shark UI field (@ark-ui/svelte/field), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { FieldHelperText, type FieldHelperTextProps } from '@ark-ui/svelte/field';
  import { fieldHelperBase, cn } from '@cloudvoyant/helix';

  let { class: className = '', children, ...rest }: FieldHelperTextProps = $props();

  const classes = $derived(cn(fieldHelperBase, className));
</script>

<FieldHelperText class={classes} {...rest}>
  {#if children}{@render children()}{/if}
</FieldHelperText>
