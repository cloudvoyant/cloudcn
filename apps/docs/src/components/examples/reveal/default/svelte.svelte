<!-- apps/docs/src/components/examples/reveal/default/svelte.svelte -->
<script lang="ts">
  import { Reveal } from '@cloudvoyant/vertex-svelte';
</script>

<Reveal question="Why does a static site need client-side components?">
  Interactive widgets (diagrams, quizzes, code highlighting) need JavaScript only after the page loads. The reveal
  above needs none — it uses Ark's collapsible, which is keyboard-accessible and SSR-safe.
</Reveal>
