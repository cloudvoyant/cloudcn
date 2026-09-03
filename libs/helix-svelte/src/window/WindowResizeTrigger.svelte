<!-- libs/helix-svelte/src/window/WindowResizeTrigger.svelte -->
<!-- Closely based on: Ark UI window (@ark-ui/svelte/floating-panel), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { FloatingPanelResizeTrigger, type FloatingPanelResizeTriggerProps } from '@ark-ui/svelte/floating-panel';
  import { windowResizeTriggerBase, cn } from '@cloudvoyant/helix';

  type Props = FloatingPanelResizeTriggerProps & { class?: string };

  let { axis = 'se', class: className = '', children, ...rest }: Props = $props();

  const classes = $derived(cn(windowResizeTriggerBase, className));
</script>

<FloatingPanelResizeTrigger {axis} class={classes} {...rest}>
  {#if children}{@render children()}{/if}
</FloatingPanelResizeTrigger>
