// apps/wicn-docs/src/components/examples/card/sizes/react.tsx
import { CardRoot, CardHeader, CardBody, CardTitle } from 'wicn-react';

export default function ReactCardSizes() {
  return (
    <div className="flex flex-col gap-4">
      <CardRoot size="sm">
        <CardHeader>
          <CardTitle>Card - sm</CardTitle>
        </CardHeader>
        <CardBody>
          <p className="text-sm text-muted-foreground">Small card.</p>
        </CardBody>
      </CardRoot>
      <CardRoot size="md">
        <CardHeader>
          <CardTitle>Card - md</CardTitle>
        </CardHeader>
        <CardBody>
          <p className="text-sm text-muted-foreground">Medium card.</p>
        </CardBody>
      </CardRoot>
      <CardRoot size="lg">
        <CardHeader>
          <CardTitle>Card - lg</CardTitle>
        </CardHeader>
        <CardBody>
          <p className="text-sm text-muted-foreground">Large card.</p>
        </CardBody>
      </CardRoot>
    </div>
  );
}
