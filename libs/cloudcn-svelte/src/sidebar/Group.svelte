<!-- libs/cloudcn-svelte/src/SidebarGroup.svelte -->
<!-- Source: @ark-ui/svelte/factory (Ark UI), mirrored from cloudcn-react -->
<script lang="ts">
  import { Ark } from '@ark-ui/svelte/factory';
  import { sidebarStyles, cn } from 'cloudcn-core';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = {
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLDivElement>;

  let { class: className = '', children, ...rest }: Props = $props();
</script>

<Ark as="div" data-slot="sidebar-group" data-sidebar="group" class={cn(sidebarStyles.groupClass, className)} {...rest}>
  {@render children?.()}
</Ark>
