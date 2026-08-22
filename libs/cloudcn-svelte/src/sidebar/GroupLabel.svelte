<!-- libs/cloudcn-svelte/src/SidebarGroupLabel.svelte -->
<!-- Source: @ark-ui/svelte/factory (Ark UI), mirrored from cloudcn-react -->
<script lang="ts">
  import { Ark } from '@ark-ui/svelte/factory';
  import { sidebarStyles, cn } from 'cloudcn-core';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = {
    asChild?: Snippet<[(props: HTMLAttributes<HTMLDivElement>) => HTMLAttributes<HTMLElement>]>;
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLDivElement>;

  let { asChild, class: className = '', children, ...rest }: Props = $props();
</script>

<Ark
  as="div"
  data-slot="sidebar-group-label"
  data-sidebar="group-label"
  {asChild}
  class={cn(sidebarStyles.groupLabelClass, className)}
  {...rest}
>
  {@render children?.()}
</Ark>
