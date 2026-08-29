<!-- apps/docs/src/components/examples/select/search/svelte.svelte -->
<script lang="ts">
  import { Select } from '@cloudvoyant/helix-svelte';
  import SearchItems from './SearchItems.svelte';
  const all = [
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
</script>

<Select items={all} search defaultValue={['apple']} class="max-w-xs">
  <SearchItems />
</Select>
