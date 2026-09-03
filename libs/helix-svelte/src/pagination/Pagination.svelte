<!-- libs/helix-svelte/src/pagination/Pagination.svelte -->
<!-- Closely based on: Shark UI pagination (@ark-ui/svelte/pagination), mirrored from @cloudvoyant/helix-react -->
<script lang="ts">
  import { PaginationRoot, type PaginationRootProps } from '@ark-ui/svelte/pagination';
  import { paginationRootBase, cn } from '@cloudvoyant/helix';

  let {
    count,
    page,
    defaultPage = 1,
    onPageChange,
    pageSize,
    defaultPageSize = 10,
    siblingCount = 1,
    class: className = '',
    children,
    ...rest
  }: PaginationRootProps = $props();

  const classes = $derived(cn(paginationRootBase, className));
</script>

<PaginationRoot
  {count}
  {page}
  {defaultPage}
  {onPageChange}
  {pageSize}
  {defaultPageSize}
  {siblingCount}
  class={classes}
  {...rest}
>
  {#if children}{@render children()}{/if}
</PaginationRoot>
