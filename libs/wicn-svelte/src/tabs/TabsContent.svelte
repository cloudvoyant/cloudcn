<!-- libs/wicn-svelte/src/tabs/TabsContent.svelte -->
<!-- Closely based on: Shark UI tabs (@ark-ui/svelte/tabs), mirrored from wicn-react -->
<script lang="ts">
  import { TabContent, type TabContentProps } from '@ark-ui/svelte/tabs';
  import { tabsContentBase, cn } from 'wicn-core';

  let { value, class: className = '', children, ...rest }: TabContentProps = $props();

  const classes = $derived(cn(tabsContentBase, className));
</script>

<TabContent {value} class={classes} {...rest}>
  {@render children?.()}
</TabContent>
