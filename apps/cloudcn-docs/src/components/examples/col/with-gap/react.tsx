// apps/cloudcn-docs/src/components/examples/col/with-gap/react.tsx
import { Item, Col } from 'cloudcn-react';

export default function ReactColWithGap() {
  return (
    <Col className="gap-4">
      <Item className="bg-primary/15">One</Item>
      <Item className="bg-secondary text-secondary-foreground">Two</Item>
      <Item className="bg-accent text-accent-foreground">Three</Item>
    </Col>
  );
}
