<!-- libs/vortex-svelte/src/select/SelectValue.svelte -->
<!-- Closely based on: Shark UI select (@ark-ui/svelte/select), mirrored from @cloudvoyant/vortex-react -->
<script lang="ts">
  import { SelectValueText, type SelectValueTextProps } from '@ark-ui/svelte/select';
  import { selectValueBase, cn } from '@cloudvoyant/vortex-ui';

  let { class: className = '', children, ...rest }: SelectValueTextProps = $props();

  const classes = $derived(cn(selectValueBase, className));
</script>

{#if children}
  <SelectValueText class={classes} {...rest}>
    {@render children()}
  </SelectValueText>
{:else}
  <SelectValueText class={classes} {...rest} />
{/if}
