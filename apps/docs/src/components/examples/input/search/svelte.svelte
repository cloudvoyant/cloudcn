<!-- apps/docs/src/components/examples/input/search/svelte.svelte -->
<script lang="ts">
  import { Field, FieldLabel, FieldPrefix, FieldControl, Input } from '@cloudvoyant/helix-svelte';
  import { Search } from 'lucide-svelte';
</script>

<Field class="max-w-sm">
  <FieldLabel>Search</FieldLabel>
  <FieldControl>
    <FieldPrefix><Search /></FieldPrefix>
    <Input variant="ghost" placeholder="Search components…" />
  </FieldControl>
</Field>
