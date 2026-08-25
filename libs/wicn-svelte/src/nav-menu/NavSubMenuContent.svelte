<!-- libs/wicn-svelte/src/nav-menu/NavSubMenuContent.svelte -->
<!-- Closely based on: @ark-ui/svelte/collapsible (Ark UI), mirrored from wicn-react -->
<script lang="ts">
  import { CollapsibleContent } from '@ark-ui/svelte/collapsible';
  import { navSubMenuContentBase, cn } from 'wicn-core';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = {
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLDivElement>;

  let { class: className = '', children, ...rest }: Props = $props();

  const classes = $derived(cn(navSubMenuContentBase, className));
</script>

<CollapsibleContent>
  <div data-slot="nav-sub-menu-content" class={classes} {...rest}>
    {@render children?.()}
  </div>
</CollapsibleContent>
