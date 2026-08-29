<!-- apps/docs/src/components/examples/field/prefix-suffix/svelte.svelte -->
<script lang="ts">
  import { Field, FieldLabel, FieldPrefix, FieldSuffix, FieldControl, Input, FieldHint } from '@cloudvoyant/helix-svelte';
  import { DollarSign, Search } from 'lucide-svelte';
</script>

<div class="flex flex-col gap-6">
  <Field class="max-w-sm">
    <FieldLabel>Price</FieldLabel>
    <FieldControl>
      <FieldPrefix><DollarSign /></FieldPrefix>
      <Input variant="ghost" type="number" value="1200" />
      <FieldSuffix>USD</FieldSuffix>
    </FieldControl>
    <FieldHint>Before taxes.</FieldHint>
  </Field>
  <Field class="max-w-sm">
    <FieldLabel>Search</FieldLabel>
    <FieldControl>
      <FieldPrefix><Search /></FieldPrefix>
      <Input variant="ghost" placeholder="Search components…" />
    </FieldControl>
  </Field>
</div>
