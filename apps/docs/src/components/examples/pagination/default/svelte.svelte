<!-- apps/docs/src/components/examples/pagination/default/svelte.svelte -->
<script lang="ts">
  import { Pagination, PaginationItems, PaginationPrevious, PaginationNext } from '@cloudvoyant/vortex-svelte';
</script>

<Pagination count={50}>
  <PaginationPrevious />
  <PaginationItems />
  <PaginationNext />
</Pagination>
