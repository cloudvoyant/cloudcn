// apps/docs/src/components/examples/input/char-count/react.tsx
import { useState } from 'react';
import { Field, FieldLabel, Input } from '@cloudvoyant/helix-react';

const MAX = 100;

export default function ReactInputCharCount() {
  const [value, setValue] = useState('');
  return (
    <Field className="max-w-sm">
      <div className="flex w-full items-center justify-between">
        <FieldLabel>Bio</FieldLabel>
        <span className="text-xs text-muted-foreground">
          {value.length}/{MAX}
        </span>
      </div>
      <Input
        maxLength={MAX}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Tell us about yourself…"
      />
    </Field>
  );
}
