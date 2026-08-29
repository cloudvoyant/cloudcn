// apps/docs/src/components/examples/input/search/react.tsx
import { Field, FieldLabel, FieldPrefix, FieldControl, Input } from '@cloudvoyant/helix-react';
import { Search } from 'lucide-react';

export default function ReactInputSearch() {
  return (
    <Field className="max-w-sm">
      <FieldLabel>Search</FieldLabel>
      <FieldControl>
        <FieldPrefix>
          <Search />
        </FieldPrefix>
        <Input variant="ghost" placeholder="Search components…" />
      </FieldControl>
    </Field>
  );
}
