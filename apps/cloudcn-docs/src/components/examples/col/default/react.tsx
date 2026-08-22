// apps/cloudcn-docs/src/components/examples/col/default/react.tsx
import { Item, Col } from 'cloudcn-react';

export default function ReactColDefault() {
  return (
    <Col>
      <Item className="bg-primary/15">One</Item>
      <Item className="bg-secondary text-secondary-foreground">Two</Item>
      <Item className="bg-accent text-accent-foreground">Three</Item>
    </Col>
  );
}
