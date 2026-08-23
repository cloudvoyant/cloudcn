// apps/wicn-docs/src/components/examples/card/variants/react.tsx
import { Card } from 'wicn-react';

export default function ReactCardVariants() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <Card.Root>
        <Card.Header>
          <Card.Title>Outline</Card.Title>
        </Card.Header>
        <Card.Body>
          <p className="text-sm text-muted-foreground">The default variant with a border and subtle shadow.</p>
        </Card.Body>
      </Card.Root>
      <Card.Root variant="elevated">
        <Card.Header>
          <Card.Title>Elevated</Card.Title>
        </Card.Header>
        <Card.Body>
          <p className="text-sm text-muted-foreground">No border with a deeper shadow.</p>
        </Card.Body>
      </Card.Root>
      <Card.Root variant="subtle">
        <Card.Header>
          <Card.Title>Subtle</Card.Title>
        </Card.Header>
        <Card.Body>
          <p className="text-sm text-muted-foreground">A muted background with no border.</p>
        </Card.Body>
      </Card.Root>
    </div>
  );
}
