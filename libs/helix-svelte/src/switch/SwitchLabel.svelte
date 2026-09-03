<!-- libs/helix-svelte/src/switch/SwitchLabel.svelte -->
<!-- Closely based on: Shark UI switch (@ark-ui/svelte/switch), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { SwitchLabel, type SwitchLabelProps } from '@ark-ui/svelte/switch';
  import { switchLabelBase, cn } from '@cloudvoyant/helix';

  let { class: className = '', children, ...rest }: SwitchLabelProps = $props();

  const classes = $derived(cn(switchLabelBase, className));
</script>

<SwitchLabel class={classes} {...rest}>
  {#if children}{@render children()}{/if}
</SwitchLabel>
