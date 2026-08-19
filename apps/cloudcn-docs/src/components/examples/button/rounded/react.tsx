// apps/cloudcn-docs/src/components/examples/button/rounded/react.tsx
import { Button } from 'cloudcn-react';

const COLORS = [
  { name: 'Primary', color: 'primary' },
  { name: 'Secondary', color: 'secondary' },
  { name: 'Success', color: 'success' },
  { name: 'Danger', color: 'danger' },
  { name: 'Warn', color: 'warn' },
  { name: 'Info', color: 'info' },
] as const;

export default function ReactButtonRounded() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {COLORS.map(({ name, color }) => (
        <Button key={color} color={color} className="rounded-full">
          {name}
        </Button>
      ))}
    </div>
  );
}
