// apps/docs/src/components/examples/select/search/react.tsx
import { Select, SelectItem, useSelect } from '@cloudvoyant/helix-react';

const ALL = [
  { value: 'apple', label: 'Apple' },
  { value: 'apricot', label: 'Apricot' },
  { value: 'banana', label: 'Banana' },
  { value: 'blackberry', label: 'Blackberry' },
  { value: 'blueberry', label: 'Blueberry' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'grape', label: 'Grape' },
  { value: 'mango', label: 'Mango' },
  { value: 'orange', label: 'Orange' },
  { value: 'strawberry', label: 'Strawberry' },
];

function SearchItems() {
  const select = useSelect();
  const items = (select as unknown as { items: { value: string; label: string }[] }).items;
  return items?.map((item) => <SelectItem key={item.value} item={item} />) ?? null;
}

export default function ReactSelectSearch() {
  return (
    <Select items={ALL} search defaultValue={['apple']} className="max-w-xs">
      <SearchItems />
    </Select>
  );
}
