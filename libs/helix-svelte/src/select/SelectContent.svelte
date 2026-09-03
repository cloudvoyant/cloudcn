<!-- libs/helix-svelte/src/select/SelectContent.svelte -->
<!-- Closely based on: Shark UI select (@ark-ui/svelte/select), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { Portal } from '@ark-ui/svelte/portal';
  import { SelectPositioner, SelectContent, type SelectContentProps } from '@ark-ui/svelte/select';
  import { selectContentBase, selectPositionerBase, cn } from '@cloudvoyant/helix';

  let { class: className = '', children, ...rest }: SelectContentProps = $props();

  const classes = $derived(cn(selectContentBase, className));
</script>

<Portal>
  <SelectPositioner class={selectPositionerBase}>
    <SelectContent class={classes} {...rest}>
      {#if children}{@render children()}{/if}
    </SelectContent>
  </SelectPositioner>
</Portal>
