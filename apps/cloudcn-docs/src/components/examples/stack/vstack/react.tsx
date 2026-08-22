// apps/cloudcn-docs/src/components/examples/stack/vstack/react.tsx
import { Item, VStack } from 'cloudcn-react';

export default function ReactStackVstack() {
  return (
    <VStack>
      <Item className="bg-primary/15">One</Item>
      <Item className="bg-secondary text-secondary-foreground">Two</Item>
      <Item className="bg-accent text-accent-foreground">Three</Item>
    </VStack>
  );
}
