<!-- libs/vertex-svelte/src/combobox/ComboboxEmpty.svelte -->
<!-- Closely based on: Shark UI combobox (@ark-ui/svelte/combobox), mirrored from @cloudvoyant/vertex-react -->
<script lang="ts">
  import { ComboboxEmpty, type ComboboxEmptyProps } from '@ark-ui/svelte/combobox';
  import { comboboxEmptyBase, cn } from '@cloudvoyant/vertex-ui';

  let { class: className = '', children, ...rest }: ComboboxEmptyProps = $props();

  const classes = $derived(cn(comboboxEmptyBase, className));
</script>

<ComboboxEmpty class={classes} {...rest}>
  {#if children}
    {@render children()}
  {:else}
    No results found.
  {/if}
</ComboboxEmpty>
