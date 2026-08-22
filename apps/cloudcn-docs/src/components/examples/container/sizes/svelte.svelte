<!-- apps/cloudcn-docs/src/components/examples/container/sizes/svelte.svelte -->
<script lang="ts">
  import { Container } from 'cloudcn-svelte';
</script>

<div class="flex flex-col gap-4">
  <Container class="max-w-sm">
    <div class="rounded-md border border-border bg-muted/40 p-4 text-sm">max-w-sm</div>
  </Container>
  <Container class="max-w-2xl">
    <div class="rounded-md border border-border bg-muted/40 p-4 text-sm">max-w-2xl</div>
  </Container>
  <Container class="max-w-5xl">
    <div class="rounded-md border border-border bg-muted/40 p-4 text-sm">max-w-5xl</div>
  </Container>
</div>
