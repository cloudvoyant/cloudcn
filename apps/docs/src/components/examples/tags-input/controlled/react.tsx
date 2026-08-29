// apps/docs/src/components/examples/tags-input/controlled/react.tsx
import { useState } from 'react';
import {
  TagInput,
  TagInputControl,
  TagInputInput,
  TagInputItem,
  TagInputItemPreview,
  TagInputItemText,
  TagInputItemDeleteTrigger,
  TagInputItemInput,
  TagInputContext,
} from '@cloudvoyant/helix-react';
import { X } from 'lucide-react';

export default function ReactTagsInputControlled() {
  const [tags, setTags] = useState(['react', 'svelte']);
  return (
    <div className="flex max-w-sm flex-col gap-2">
      <TagInput value={tags} onValueChange={(e) => setTags(e.value)} className="max-w-sm">
        <TagInputControl>
          <TagInputContext>
            {(api) =>
              api.value.map((value, index) => (
                <TagInputItem key={value} index={index} value={value}>
                  <TagInputItemPreview>
                    <TagInputItemText>{value}</TagInputItemText>
                    <TagInputItemDeleteTrigger>
                      <X />
                    </TagInputItemDeleteTrigger>
                  </TagInputItemPreview>
                  <TagInputItemInput />
                </TagInputItem>
              ))
            }
          </TagInputContext>
          <TagInputInput placeholder="Add tag" />
        </TagInputControl>
      </TagInput>
      <button
        type="button"
        data-testid="reset"
        className="self-start text-sm text-muted-foreground hover:text-foreground"
        onClick={() => setTags(['react', 'svelte'])}
      >
        Reset
      </button>
    </div>
  );
}
