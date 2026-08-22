// apps/cloudcn-docs/src/components/examples/card/with-image/react.tsx
import { Card } from 'cloudcn-react';

export default function ReactCardWithImage() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <Card.Root className="w-full max-w-sm">
        <Card.Cover>
          <div className="h-40 w-full bg-gradient-to-br from-primary/40 to-accent/50" />
        </Card.Cover>
        <Card.Header>
          <Card.Title>Flush cover</Card.Title>
          <Card.Description>The cover bleeds edge-to-edge.</Card.Description>
        </Card.Header>
        <Card.Body>
          <p className="text-sm text-muted-foreground">A flush cover reaches the card boundaries.</p>
        </Card.Body>
      </Card.Root>
      <Card.Root className="w-full max-w-sm">
        <Card.Cover variant="inset">
          <div className="h-40 w-full bg-gradient-to-br from-primary/40 to-accent/50" />
        </Card.Cover>
        <Card.Header>
          <Card.Title>Inset cover</Card.Title>
          <Card.Description>The cover keeps the card padding.</Card.Description>
        </Card.Header>
        <Card.Body>
          <p className="text-sm text-muted-foreground">An inset cover stays within the padding with rounded corners.</p>
        </Card.Body>
      </Card.Root>
    </div>
  );
}
