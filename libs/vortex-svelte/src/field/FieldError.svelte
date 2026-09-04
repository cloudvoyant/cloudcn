<!-- libs/vortex-svelte/src/field/FieldError.svelte -->
<!-- Closely based on: Shark UI field (@ark-ui/svelte/field), mirrored from @cloudvoyant/vortex-react -->
<script lang="ts">
  import { FieldErrorText, type FieldErrorTextProps } from '@ark-ui/svelte/field';
  import { fieldErrorBase, cn } from '@cloudvoyant/vortex-ui';

  let { class: className = '', children, ...rest }: FieldErrorTextProps = $props();

  const classes = $derived(cn(fieldErrorBase, className));
</script>

<FieldErrorText class={classes} {...rest}>
  {@render children?.()}
</FieldErrorText>
