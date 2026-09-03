<!-- libs/helix-svelte/src/navbar/NavbarMobileMenu.svelte -->
<!-- Closely based on: @ark-ui/svelte/collapsible (Ark UI), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { CollapsibleRoot, type CollapsibleRootProps } from '@ark-ui/svelte/collapsible';
  import { cn } from '@cloudvoyant/helix';

  let { class: className = '', children, ...rest }: CollapsibleRootProps = $props();

  const classes = $derived(cn('group', className));
</script>

<CollapsibleRoot data-slot="navbar-mobile-menu" class={classes} {...rest}>
  {#if children}{@render children()}{/if}
</CollapsibleRoot>
