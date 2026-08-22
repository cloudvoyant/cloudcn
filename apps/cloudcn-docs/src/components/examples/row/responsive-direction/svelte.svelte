<!-- apps/cloudcn-docs/src/components/examples/row/responsive-direction/svelte.svelte -->
<script lang="ts">
  import { Item, Row } from 'cloudcn-svelte';
</script>

<Row class="md:flex-col">
  <Item class="flex-1 bg-primary/15">One</Item>
  <Item class="flex-1 bg-secondary text-secondary-foreground">Two</Item>
  <Item class="flex-1 bg-accent text-accent-foreground">Three</Item>
</Row>
