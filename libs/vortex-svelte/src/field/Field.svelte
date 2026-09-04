<!-- libs/vortex-svelte/src/field/Field.svelte -->
<!-- Closely based on: Shark UI field (@ark-ui/svelte/field), mirrored from @cloudvoyant/vortex-react -->
<script lang="ts">
  import { FieldRoot, type FieldRootProps } from '@ark-ui/svelte/field';
  import { fieldRootBase, cn } from '@cloudvoyant/vortex-ui';

  let { class: className = '', children, ...rest }: FieldRootProps = $props();

  const classes = $derived(cn(fieldRootBase, className));
</script>

<FieldRoot class={classes} {...rest}>
  {@render children?.()}
</FieldRoot>
