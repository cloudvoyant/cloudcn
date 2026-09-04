<!-- libs/vertex-svelte/src/SidebarMenuSub.svelte -->
<!-- Source: @ark-ui/svelte/factory (Ark UI), mirrored from @cloudvoyant/vertex-react -->
<script lang="ts">
  import { Ark } from '@ark-ui/svelte/factory';
  import { sidebarStyles, cn } from '@cloudvoyant/vertex-ui';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = {
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLUListElement>;

  let { class: className = '', children, ...rest }: Props = $props();
</script>

<Ark
  as="ul"
  data-slot="sidebar-menu-sub"
  data-sidebar="menu-sub"
  class={cn(sidebarStyles.menuSubClass, className)}
  {...rest}
>
  {@render children?.()}
</Ark>
