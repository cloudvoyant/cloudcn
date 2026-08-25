<!-- libs/wicn-svelte/src/nav-menu/NavMenuTrigger.svelte -->
<!-- Closely based on: @ark-ui/svelte/navigation-menu (Ark UI), mirrored from wicn-react -->
<script lang="ts">
  import { NavigationMenuTrigger, type NavigationMenuTriggerProps } from '@ark-ui/svelte/navigation-menu';
  import { navMenuTriggerStyle, cn } from 'wicn-core';
  import { getNavMenuStyle } from './context.svelte';

  let { disabled = false, asChild, class: className = '', children, ...rest }: NavigationMenuTriggerProps = $props();

  const style = getNavMenuStyle();
  const classes = $derived(cn(navMenuTriggerStyle(style), className));
</script>

<NavigationMenuTrigger {disabled} {asChild} class={classes} {...rest}>
  {@render children?.()}
  {#if !asChild}
    <svg
      class="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="m6 9 6 6 6-6"></path>
    </svg>
  {/if}
</NavigationMenuTrigger>
