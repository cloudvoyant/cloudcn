// apps/cloudcn-docs/src/components/examples/item/plain/react.tsx
import { Item, Row } from 'cloudcn-react';

export default function ReactItemPlain() {
  return (
    <Row>
      <Item variant="plain" className="bg-muted">
        One
      </Item>
      <Item variant="plain" className="bg-muted/50">
        Two
      </Item>
      <Item variant="plain" className="bg-muted">
        Three
      </Item>
    </Row>
  );
}
