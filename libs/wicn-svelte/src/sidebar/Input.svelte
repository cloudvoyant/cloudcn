<!-- libs/wicn-svelte/src/SidebarInput.svelte -->
<!-- Source: @ark-ui/svelte/factory (Ark UI), mirrored from wicn-react -->
<script lang="ts">
  import { Ark } from '@ark-ui/svelte/factory';
  import { sidebarStyles, cn } from 'wicn-core';
  import type { HTMLInputAttributes } from 'svelte/elements';

  type Props = {
    class?: string;
  } & HTMLInputAttributes;

  let { class: className = '', ...rest }: Props = $props();
</script>

<Ark
  as="input"
  data-slot="sidebar-input"
  data-sidebar="input"
  class={cn(sidebarStyles.inputClass, className)}
  {...rest}
/>
