<!-- libs/vortex-svelte/src/tabs/TabsTrigger.svelte -->
<!-- Closely based on: Shark UI tabs (@ark-ui/svelte/tabs), mirrored from @cloudvoyant/vortex-react -->
<script lang="ts">
  import { TabTrigger, type TabTriggerProps } from '@ark-ui/svelte/tabs';
  import { tabsTriggerBase, cn } from '@cloudvoyant/vortex-ui';

  let { value, disabled = false, class: className = '', children, ...rest }: TabTriggerProps = $props();

  const classes = $derived(cn(tabsTriggerBase, className));
</script>

<TabTrigger {value} {disabled} class={classes} {...rest}>
  {@render children?.()}
</TabTrigger>
