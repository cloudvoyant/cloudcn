// apps/docs/src/components/examples/tags-input/controlled/react.tsx
import { useState } from 'react';
import { TagInput, TagInputControl, TagInputInput } from '@cloudvoyant/helix-react';

export default function ReactTagsInputControlled() {
  const [tags, setTags] = useState(['react', 'svelte']);
  return (
    <div className="flex max-w-sm flex-col gap-2">
      <TagInput value={tags} onValueChange={(e) => setTags(e.value)} className="max-w-sm">
        <TagInputControl>
          <TagInputInput placeholder="Add tag" />
        </TagInputControl>
      </TagInput>
      <output data-testid="value">{tags.join(', ')}</output>
      <button type="button" data-testid="reset" onClick={() => setTags(['react', 'svelte'])}>
        Reset
      </button>
    </div>
  );
}
