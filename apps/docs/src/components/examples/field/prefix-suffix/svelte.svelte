<!-- apps/docs/src/components/examples/field/prefix-suffix/svelte.svelte -->
<script lang="ts">
  import { Field, FieldLabel, FieldPrefix, FieldSuffix, Input, FieldHint } from '@cloudvoyant/helix-svelte';
  import { DollarSign, Search } from 'lucide-svelte';
</script>

<div class="flex flex-col gap-6">
  <Field class="max-w-sm">
    <FieldLabel>Price</FieldLabel>
    <div class="flex items-center gap-2">
      <FieldPrefix><DollarSign /></FieldPrefix>
      <Input type="number" value="1200" />
      <FieldSuffix>USD</FieldSuffix>
    </div>
    <FieldHint>Before taxes.</FieldHint>
  </Field>
  <Field class="max-w-sm">
    <FieldLabel>Search</FieldLabel>
    <div class="flex items-center gap-2">
      <FieldPrefix><Search /></FieldPrefix>
      <Input placeholder="Search components…" />
    </div>
  </Field>
</div>
