// apps/cloudcn-docs/src/components/examples/col/responsive-direction/react.tsx
import { Item, Col } from 'cloudcn-react';

export default function ReactColResponsiveDirection() {
  return (
    <Col className="md:flex-row">
      <Item className="flex-1 bg-primary/15">One</Item>
      <Item className="flex-1 bg-secondary text-secondary-foreground">Two</Item>
      <Item className="flex-1 bg-accent text-accent-foreground">Three</Item>
    </Col>
  );
}
