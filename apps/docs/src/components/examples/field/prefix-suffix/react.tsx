// apps/docs/src/components/examples/field/prefix-suffix/react.tsx
import { Field, FieldLabel, FieldPrefix, FieldSuffix, Input, FieldHint } from '@cloudvoyant/helix-react';
import { DollarSign, Search } from 'lucide-react';

export default function ReactFieldPrefixSuffix() {
  return (
    <div className="flex flex-col gap-6">
      <Field className="max-w-sm">
        <FieldLabel>Price</FieldLabel>
        <div className="flex items-center gap-2">
          <FieldPrefix>
            <DollarSign />
          </FieldPrefix>
          <Input type="number" defaultValue="1200" />
          <FieldSuffix>USD</FieldSuffix>
        </div>
        <FieldHint>Before taxes.</FieldHint>
      </Field>
      <Field className="max-w-sm">
        <FieldLabel>Search</FieldLabel>
        <div className="flex items-center gap-2">
          <FieldPrefix>
            <Search />
          </FieldPrefix>
          <Input placeholder="Search components…" />
        </div>
      </Field>
    </div>
  );
}
