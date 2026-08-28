<!-- apps/docs/src/components/examples/tags-input/controlled/svelte.svelte -->
<script lang="ts">
  import { TagInput, TagInputControl, TagInputInput } from '@cloudvoyant/helix-svelte';
  let tags = $state(['react', 'svelte']);
</script>

<div class="flex max-w-sm flex-col gap-2">
  <TagInput bind:value={tags} class="max-w-sm">
    <TagInputControl>
      <TagInputInput placeholder="Add tag" />
    </TagInputControl>
  </TagInput>
  <output data-testid="value">{tags.join(', ')}</output>
  <button type="button" data-testid="reset" onclick={() => (tags = ['react', 'svelte'])}>Reset</button>
</div>
