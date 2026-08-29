<!-- apps/docs/src/components/examples/field/default/svelte.svelte -->
<script lang="ts">
  import { Field, FieldLabel, FieldRequiredIndicator, Input, FieldHint } from '@cloudvoyant/helix-svelte';
</script>

<Field class="max-w-sm">
  <FieldLabel>
    Username<FieldRequiredIndicator>*</FieldRequiredIndicator>
  </FieldLabel>
  <Input placeholder="jane" />
  <FieldHint>Pick something memorable.</FieldHint>
</Field>
