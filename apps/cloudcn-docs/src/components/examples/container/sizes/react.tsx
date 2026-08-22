// apps/cloudcn-docs/src/components/examples/container/sizes/react.tsx
import { Container } from 'cloudcn-react';

export default function ReactContainerSizes() {
  return (
    <div className="flex flex-col gap-4">
      <Container className="max-w-sm">
        <div className="rounded-md border border-border bg-muted/40 p-4 text-sm">max-w-sm</div>
      </Container>
      <Container className="max-w-2xl">
        <div className="rounded-md border border-border bg-muted/40 p-4 text-sm">max-w-2xl</div>
      </Container>
      <Container className="max-w-5xl">
        <div className="rounded-md border border-border bg-muted/40 p-4 text-sm">max-w-5xl</div>
      </Container>
    </div>
  );
}
