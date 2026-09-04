<!-- libs/vortex-svelte/src/checkbox/CheckboxLabel.svelte -->
<!-- Closely based on: Shark UI checkbox (@ark-ui/svelte/checkbox), mirrored from @cloudvoyant/vortex-react -->
<script lang="ts">
  import { CheckboxLabel, type CheckboxLabelProps } from '@ark-ui/svelte/checkbox';
  import { checkboxLabelBase, cn } from '@cloudvoyant/vortex-ui';

  let { class: className = '', children, ...rest }: CheckboxLabelProps = $props();

  const classes = $derived(cn(checkboxLabelBase, className));
</script>

<CheckboxLabel class={classes} {...rest}>
  {@render children?.()}
</CheckboxLabel>
