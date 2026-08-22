// apps/cloudcn-docs/src/components/examples/stack/hstack/react.tsx
import { Item, HStack } from 'cloudcn-react';

export default function ReactStackHstack() {
  return (
    <HStack>
      <Item className="flex-1 bg-primary/15">One</Item>
      <Item className="flex-1 bg-secondary text-secondary-foreground">Two</Item>
      <Item className="flex-1 bg-accent text-accent-foreground">Three</Item>
    </HStack>
  );
}
