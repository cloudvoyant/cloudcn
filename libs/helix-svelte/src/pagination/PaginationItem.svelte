<!-- libs/helix-svelte/src/pagination/PaginationItem.svelte -->
<!-- Closely based on: Shark UI pagination (@ark-ui/svelte/pagination), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { PaginationItem, type PaginationItemProps } from '@ark-ui/svelte/pagination';
  import { paginationItemBase, cn } from '@cloudvoyant/helix';

  let { type = 'page', value, class: className = '', children, ...rest }: PaginationItemProps = $props();

  const classes = $derived(cn(paginationItemBase, className));
</script>

<PaginationItem {type} {value} class={classes} {...rest}>
  {@render children?.()}
</PaginationItem>
