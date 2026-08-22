// apps/cloudcn-docs/src/components/examples/row/with-gap/react.tsx
import { Item, Row } from 'cloudcn-react';

export default function ReactRowWithGap() {
  return (
    <Row className="gap-4">
      <Item className="flex-1 bg-primary/15">One</Item>
      <Item className="flex-1 bg-secondary text-secondary-foreground">Two</Item>
      <Item className="flex-1 bg-accent text-accent-foreground">Three</Item>
    </Row>
  );
}
