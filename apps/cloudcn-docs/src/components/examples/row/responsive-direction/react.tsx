// apps/cloudcn-docs/src/components/examples/row/responsive-direction/react.tsx
import { Item, Row } from 'cloudcn-react';

export default function ReactRowResponsiveDirection() {
  return (
    <Row className="md:flex-col">
      <Item className="flex-1 bg-primary/15">One</Item>
      <Item className="flex-1 bg-secondary text-secondary-foreground">Two</Item>
      <Item className="flex-1 bg-accent text-accent-foreground">Three</Item>
    </Row>
  );
}
