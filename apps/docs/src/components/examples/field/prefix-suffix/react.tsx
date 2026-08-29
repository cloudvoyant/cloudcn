// apps/docs/src/components/examples/field/prefix-suffix/react.tsx
import { Field, FieldLabel, FieldPrefix, FieldSuffix, FieldControl, Input, FieldHint } from '@cloudvoyant/helix-react';
import { DollarSign, Search } from 'lucide-react';

export default function ReactFieldPrefixSuffix() {
  return (
    <div className="flex flex-col gap-6">
      <Field className="max-w-sm">
        <FieldLabel>Price</FieldLabel>
        <FieldControl>
          <FieldPrefix>
            <DollarSign />
          </FieldPrefix>
          <Input variant="ghost" type="number" defaultValue="1200" />
          <FieldSuffix>USD</FieldSuffix>
        </FieldControl>
        <FieldHint>Before taxes.</FieldHint>
      </Field>
      <Field className="max-w-sm">
        <FieldLabel>Search</FieldLabel>
        <FieldControl>
          <FieldPrefix>
            <Search />
          </FieldPrefix>
          <Input variant="ghost" placeholder="Search components…" />
        </FieldControl>
      </Field>
    </div>
  );
}
