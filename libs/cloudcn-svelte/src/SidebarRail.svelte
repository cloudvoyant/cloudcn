<!-- libs/cloudcn-svelte/src/SidebarRail.svelte -->
<!-- Source: @ark-ui/svelte/factory (Ark UI), mirrored from cloudcn-react -->
<script lang="ts">
  import { Ark } from '@ark-ui/svelte/factory';
  import { sidebarStyles, cn } from 'cloudcn-core';
  import { getSidebarContext } from './sidebar-context.svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';

  type Props = {
    class?: string;
  } & HTMLButtonAttributes;

  let { class: className = '', onclick, ...rest }: Props = $props();

  const { toggleSidebar } = getSidebarContext();
</script>

<Ark
  as="button"
  data-sidebar="rail"
  data-slot="sidebar-rail"
  type="button"
  aria-label="Toggle Sidebar"
  tabindex={-1}
  title="Toggle Sidebar"
  class={cn(sidebarStyles.railClass, className)}
  onclick={(e) => {
    onclick?.(e);
    toggleSidebar();
  }}
  {...rest}
/>
