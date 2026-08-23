<!-- libs/wicn-svelte/src/SidebarMenuSubItem.svelte -->
<!-- Source: @ark-ui/svelte/factory (Ark UI), mirrored from wicn-react -->
<script lang="ts">
  import { Ark } from '@ark-ui/svelte/factory';
  import { sidebarStyles, cn } from 'wicn-core';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = {
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLLIElement>;

  let { class: className = '', children, ...rest }: Props = $props();
</script>

<Ark
  as="li"
  data-slot="sidebar-menu-sub-item"
  data-sidebar="menu-sub-item"
  class={cn(sidebarStyles.menuSubItemClass, className)}
  {...rest}
>
  {@render children?.()}
</Ark>
