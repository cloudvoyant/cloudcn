// apps/cloudcn-docs/src/components/examples/stack/responsive-direction/react.tsx
import { Item, Stack } from 'cloudcn-react';

export default function ReactStackResponsiveDirection() {
  return (
    <Stack className="md:flex-row">
      <Item className="flex-1 bg-primary/15">One</Item>
      <Item className="flex-1 bg-secondary text-secondary-foreground">Two</Item>
      <Item className="flex-1 bg-accent text-accent-foreground">Three</Item>
    </Stack>
  );
}
