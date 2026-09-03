<!-- libs/helix-svelte/src/field/FieldSetHelper.svelte -->
<!-- Closely based on: Shark UI field (@ark-ui/svelte/fieldset), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { FieldsetHelperText, type FieldsetHelperTextProps } from '@ark-ui/svelte/fieldset';
  import { fieldsetHelperBase, cn } from '@cloudvoyant/helix';

  let { class: className = '', children, ...rest }: FieldsetHelperTextProps = $props();

  const classes = $derived(cn(fieldsetHelperBase, className));
</script>

<FieldsetHelperText class={classes} {...rest}>
  {@render children?.()}
</FieldsetHelperText>
