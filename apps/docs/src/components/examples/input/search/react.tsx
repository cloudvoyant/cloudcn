// apps/docs/src/components/examples/input/search/react.tsx
import { Field, FieldLabel, FieldPrefix, Input } from '@cloudvoyant/helix-react';
import { Search } from 'lucide-react';

export default function ReactInputSearch() {
  return (
    <Field className="max-w-sm">
      <FieldLabel>Search</FieldLabel>
      <div className="flex items-center gap-2">
        <FieldPrefix>
          <Search />
        </FieldPrefix>
        <Input placeholder="Search components…" />
      </div>
    </Field>
  );
}
