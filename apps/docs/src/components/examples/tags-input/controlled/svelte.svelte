<!-- apps/docs/src/components/examples/tags-input/controlled/svelte.svelte -->
<script lang="ts">
  import { TagInput, TagInputControl, TagInputInput } from '@cloudvoyant/helix-svelte';
  import Tags from './Tags.svelte';
  let tags = $state(['react', 'svelte']);
</script>

<div class="flex max-w-sm flex-col gap-2">
  <TagInput bind:value={tags} class="max-w-sm">
    <TagInputControl>
      <Tags />
      <TagInputInput placeholder="Add tag" />
    </TagInputControl>
  </TagInput>
  <button
    type="button"
    data-testid="reset"
    class="self-start text-sm text-muted-foreground hover:text-foreground"
    onclick={() => (tags = ['react', 'svelte'])}
  >
    Reset
  </button>
</div>
