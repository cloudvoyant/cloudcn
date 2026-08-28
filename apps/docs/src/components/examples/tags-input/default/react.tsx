// apps/docs/src/components/examples/tags-input/default/react.tsx
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

export default function ReactTagsInputDefault() {
  return (
    <TagInput defaultValue={['react', 'svelte']} className="max-w-sm">
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
  );
}
