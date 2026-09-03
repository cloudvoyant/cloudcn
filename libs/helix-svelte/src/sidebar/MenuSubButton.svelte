<!-- libs/helix-svelte/src/SidebarMenuSubButton.svelte -->
<!-- Source: @ark-ui/svelte/factory (Ark UI), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { Ark } from '@ark-ui/svelte/factory';
  import { sidebarStyles, cn } from '@cloudvoyant/helix';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes, HTMLAnchorAttributes } from 'svelte/elements';

  type Props = {
    asChild?: Snippet<[(props: HTMLAnchorAttributes) => HTMLAttributes<HTMLElement>]>;
    size?: 'sm' | 'md';
    isActive?: boolean;
    class?: string;
    children?: Snippet;
  } & HTMLAnchorAttributes;

  let { asChild, size = 'md', isActive = false, class: className = '', children, ...rest }: Props = $props();
</script>

<Ark
  as="a"
  data-slot="sidebar-menu-sub-button"
  data-sidebar="menu-sub-button"
  data-size={size}
  data-active={isActive}
  {asChild}
  class={cn(sidebarStyles.menuSubButtonClass, className)}
  {...rest}
>
  {#if children}{@render children()}{/if}
</Ark>
