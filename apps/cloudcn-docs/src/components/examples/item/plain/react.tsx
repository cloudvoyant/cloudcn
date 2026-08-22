// apps/cloudcn-docs/src/components/examples/item/plain/react.tsx
import { Item, Stack } from 'cloudcn-react';

export default function ReactItemPlain() {
  return (
    <Stack className="gap-2">
      <Item variant="surface">One</Item>
      <Item variant="surface">Two</Item>
      <Item variant="surface">Three</Item>
    </Stack>
  );
}
