// apps/wicn-docs/src/components/examples/col/responsive-direction/react.tsx
import { Item, Col } from 'wicn-react';

export default function ReactColResponsiveDirection() {
  return (
    <Col className="md:flex-row">
      <Item className="bg-muted">One</Item>
      <Item className="bg-muted/50">Two</Item>
      <Item className="bg-muted">Three</Item>
    </Col>
  );
}
