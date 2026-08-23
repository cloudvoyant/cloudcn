// apps/wicn-docs/src/components/examples/card/default/react.tsx
import { Card, Button } from 'wicn-react';

export default function ReactCardDefault() {
  return (
    <Card.Root className="w-full max-w-sm">
      <Card.Header>
        <Card.Title>Team members</Card.Title>
        <Card.Description>Manage your team and their roles.</Card.Description>
      </Card.Header>
      <Card.Body>
        <p className="text-sm text-muted-foreground">
          This is the card body. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </Card.Body>
      <Card.Footer>
        <Button variant="solid" color="primary" size="sm">
          Add member
        </Button>
        <Button variant="outline" color="primary" size="sm">
          Cancel
        </Button>
      </Card.Footer>
    </Card.Root>
  );
}
