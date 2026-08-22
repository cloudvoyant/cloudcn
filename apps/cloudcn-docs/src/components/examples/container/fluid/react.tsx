// apps/cloudcn-docs/src/components/examples/container/fluid/react.tsx
import { Container } from 'cloudcn-react';

export default function ReactContainerFluid() {
  return (
    <Container className="max-w-full">
      <div className="rounded-md border border-border bg-muted/40 p-6 text-sm">
        This container stretches to fill the width of its parent.
      </div>
    </Container>
  );
}
