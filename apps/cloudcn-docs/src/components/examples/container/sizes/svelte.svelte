<!-- apps/cloudcn-docs/src/components/examples/container/sizes/svelte.svelte -->
<script lang="ts">
  import { Container, Item } from 'cloudcn-svelte';
</script>

<div class="flex flex-col gap-4">
  <Container class="max-w-sm">
    <Item class="w-full bg-muted">max-w-sm</Item>
  </Container>
  <Container class="max-w-2xl">
    <Item class="w-full bg-muted">max-w-2xl</Item>
  </Container>
  <Container class="max-w-5xl">
    <Item class="w-full bg-muted">max-w-5xl</Item>
  </Container>
</div>
