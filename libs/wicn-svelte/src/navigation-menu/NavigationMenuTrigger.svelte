<!-- libs/wicn-svelte/src/navigation-menu/NavigationMenuTrigger.svelte -->
<!-- Closely based on: @ark-ui/svelte/navigation-menu (Ark UI), mirrored from wicn-react -->
<script lang="ts">
  import { NavigationMenuTrigger, type NavigationMenuTriggerProps } from '@ark-ui/svelte/navigation-menu';
  import { navigationMenuTriggerStyle, cn } from 'wicn-core';

  let { disabled = false, class: className = '', children, ...rest }: NavigationMenuTriggerProps = $props();

  const classes = $derived(cn(navigationMenuTriggerStyle(), className));
</script>

<NavigationMenuTrigger {disabled} class={classes} {...rest}>
  {@render children?.()}
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
    <path d="m6 9 6 6 6-6" />
  </svg>
</NavigationMenuTrigger>
