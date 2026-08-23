// apps/wicn-docs/src/components/examples/card/horizontal/react.tsx
import { Card } from 'wicn-react';
import { User } from 'lucide-react';

export default function ReactCardHorizontal() {
  return (
    <Card.Root orientation="horizontal" className="w-full max-w-2xl">
      <Card.Cover className="w-1/3">
        <div className="flex h-full min-h-40 w-full items-center justify-center bg-gradient-to-br from-primary/40 to-accent/50">
          <User className="size-8 text-primary" />
        </div>
      </Card.Cover>
      <div className="flex flex-1 flex-col gap-4">
        <Card.Header>
          <Card.Title>Horizontal card</Card.Title>
          <Card.Description>The cover bleeds to the left, top, and bottom edges.</Card.Description>
        </Card.Header>
        <Card.Body>
          <p className="text-sm text-muted-foreground">
            Use orientation="horizontal" with a flush cover and wrap the content in a flex column.
          </p>
        </Card.Body>
      </div>
    </Card.Root>
  );
}
