// apps/cloudcn-docs/src/components/examples/card/sizes/react.tsx
import { Card } from 'cloudcn-react';

export default function ReactCardSizes() {
  return (
    <div className="flex flex-col gap-4">
      <Card.Root size="sm">
        <Card.Header>
          <Card.Title>Card - sm</Card.Title>
        </Card.Header>
        <Card.Body>
          <p className="text-sm text-muted-foreground">Small card.</p>
        </Card.Body>
      </Card.Root>
      <Card.Root size="md">
        <Card.Header>
          <Card.Title>Card - md</Card.Title>
        </Card.Header>
        <Card.Body>
          <p className="text-sm text-muted-foreground">Medium card.</p>
        </Card.Body>
      </Card.Root>
      <Card.Root size="lg">
        <Card.Header>
          <Card.Title>Card - lg</Card.Title>
        </Card.Header>
        <Card.Body>
          <p className="text-sm text-muted-foreground">Large card.</p>
        </Card.Body>
      </Card.Root>
    </div>
  );
}
