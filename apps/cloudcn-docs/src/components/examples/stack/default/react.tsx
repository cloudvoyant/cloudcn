// apps/cloudcn-docs/src/components/examples/stack/default/react.tsx
import { Item, Stack } from 'cloudcn-react';

export default function ReactStackDefault() {
  return (
    <Stack>
      <Item className="bg-primary/15">One</Item>
      <Item className="bg-secondary text-secondary-foreground">Two</Item>
      <Item className="bg-accent text-accent-foreground">Three</Item>
    </Stack>
  );
}
