<!-- libs/vortex-svelte/src/SidebarContent.svelte -->
<!-- Source: @ark-ui/svelte/factory (Ark UI), mirrored from @cloudvoyant/vortex-react -->
<script lang="ts">
  import { sidebarStyles, cn } from '@cloudvoyant/vortex-ui';
  import Col from '../Col.svelte';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = {
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLDivElement>;

  let { class: className = '', children, ...rest }: Props = $props();
</script>

<Col data-slot="sidebar-content" data-sidebar="content" class={cn(sidebarStyles.contentClass, className)} {...rest}>
  {@render children?.()}
</Col>
