// apps/docs/src/components/examples/pagination/default/react.tsx
import { Pagination, PaginationItems, PaginationPrevious, PaginationNext } from '@cloudvoyant/vortex-react';

export default function ReactPaginationDefault() {
  return (
    <Pagination count={50}>
      <PaginationPrevious />
      <PaginationItems />
      <PaginationNext />
    </Pagination>
  );
}
