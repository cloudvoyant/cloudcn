// apps/wicn-docs/src/components/examples/card/override/react.tsx
import { Card } from 'wicn-react';

export default function ReactCardOverride() {
  return (
    <Card.Root className="w-full max-w-sm">
      <Card.Header>
        <Card.Title asChild>
          <h2 className="text-xl">Overridden heading</h2>
        </Card.Title>
        <Card.Description>This title renders as an h2 with a larger size instead of the default h3.</Card.Description>
      </Card.Header>
      <Card.Body>
        <p className="text-sm text-muted-foreground">
          Use asChild to change the heading level, and a text-* class to change the size.
        </p>
      </Card.Body>
    </Card.Root>
  );
}
