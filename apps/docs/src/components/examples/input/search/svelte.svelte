<!-- apps/docs/src/components/examples/input/search/svelte.svelte -->
<script lang="ts">
  import { Field, FieldLabel, FieldPrefix, Input } from '@cloudvoyant/helix-svelte';
  import { Search } from 'lucide-svelte';
</script>

<Field class="max-w-sm">
  <FieldLabel>Search</FieldLabel>
  <div class="flex items-center gap-2">
    <FieldPrefix><Search /></FieldPrefix>
    <Input placeholder="Search components…" />
  </div>
</Field>
