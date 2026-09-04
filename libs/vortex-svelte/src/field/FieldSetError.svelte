<!-- libs/vortex-svelte/src/field/FieldSetError.svelte -->
<!-- Closely based on: Shark UI field (@ark-ui/svelte/fieldset), mirrored from @cloudvoyant/vortex-react -->
<script lang="ts">
  import { FieldsetErrorText, type FieldsetErrorTextProps } from '@ark-ui/svelte/fieldset';
  import { fieldsetErrorBase, cn } from '@cloudvoyant/vortex-ui';

  let { class: className = '', children, ...rest }: FieldsetErrorTextProps = $props();

  const classes = $derived(cn(fieldsetErrorBase, className));
</script>

<FieldsetErrorText class={classes} {...rest}>
  {@render children?.()}
</FieldsetErrorText>
