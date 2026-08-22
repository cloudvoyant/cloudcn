// apps/cloudcn-docs/src/components/examples/row/default/react.tsx
import { Item, Row } from 'cloudcn-react';

export default function ReactRowDefault() {
  return (
    <Row>
      <Item className="flex-1 bg-primary/15">One</Item>
      <Item className="flex-1 bg-secondary text-secondary-foreground">Two</Item>
      <Item className="flex-1 bg-accent text-accent-foreground">Three</Item>
    </Row>
  );
}
