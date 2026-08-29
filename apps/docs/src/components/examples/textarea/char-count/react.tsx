// apps/docs/src/components/examples/textarea/char-count/react.tsx
import { useState } from 'react';
import { Field, FieldLabel, Textarea } from '@cloudvoyant/helix-react';

const MAX = 280;

export default function ReactTextareaCharCount() {
  const [value, setValue] = useState('');
  return (
    <Field className="max-w-sm">
      <div className="flex w-full items-center justify-between">
        <FieldLabel>Tweet</FieldLabel>
        <span className="text-xs text-muted-foreground">
          {value.length}/{MAX}
        </span>
      </div>
      <Textarea
        maxLength={MAX}
        rows={3}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="What's happening?"
      />
    </Field>
  );
}
