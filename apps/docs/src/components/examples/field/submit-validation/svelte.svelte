<!-- apps/docs/src/components/examples/field/submit-validation/svelte.svelte -->
<script lang="ts">
  import { Field, FieldLabel, Input, FieldError } from '@cloudvoyant/helix-svelte';
  let value = $state('');
  let invalid = $state(false);
</script>

<Field class="max-w-sm" {invalid}>
  <FieldLabel>Username</FieldLabel>
  <Input bind:value />
  {#if invalid}<FieldError>Username is required.</FieldError>{/if}
  <button
    type="button"
    class="mt-1 inline-flex h-9 items-center rounded-md border border-input px-3 text-sm font-medium"
    onclick={() => (invalid = value.trim().length === 0)}
  >
    Submit
  </button>
</Field>
