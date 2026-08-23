// apps/wicn-docs/src/components/examples/toggle-button/outline/react.tsx
import { ToggleButton } from 'wicn-react';

export default function ReactToggleButtonOutline() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <ToggleButton variant="outline">Bold</ToggleButton>
      <ToggleButton variant="outline">Italic</ToggleButton>
      <ToggleButton variant="outline">Underline</ToggleButton>
    </div>
  );
}
