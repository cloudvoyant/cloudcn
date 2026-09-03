<!-- libs/helix-svelte/src/checkbox/CheckboxGroup.svelte -->
<!-- Closely based on: Shark UI checkbox (@ark-ui/svelte/checkbox), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { CheckboxGroup, type CheckboxGroupProps } from '@ark-ui/svelte/checkbox';
  import { checkboxGroupBase, cn } from '@cloudvoyant/helix';

  let { class: className = '', children, ...rest }: CheckboxGroupProps = $props();

  const classes = $derived(cn(checkboxGroupBase, className));
</script>

<CheckboxGroup class={classes} {...rest}>
  {#if children}{@render children()}{/if}
</CheckboxGroup>
