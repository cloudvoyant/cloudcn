<!-- libs/vortex-svelte/src/tabs/TabsContent.svelte -->
<!-- Closely based on: Shark UI tabs (@ark-ui/svelte/tabs), mirrored from @cloudvoyant/vortex-react -->
<script lang="ts">
  import { TabContent, type TabContentProps } from '@ark-ui/svelte/tabs';
  import { tabsContentBase, cn } from '@cloudvoyant/vortex-ui';

  let { value, class: className = '', children, ...rest }: TabContentProps = $props();

  const classes = $derived(cn(tabsContentBase, className));
</script>

<TabContent {value} class={classes} {...rest}>
  {@render children?.()}
</TabContent>
