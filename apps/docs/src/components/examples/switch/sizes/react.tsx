// apps/docs/src/components/examples/switch/sizes/react.tsx
import { Switch, SwitchControl, SwitchThumb, SwitchLabel } from '@cloudvoyant/helix-react';

export default function ReactSwitchSizes() {
  return (
    <div className="flex flex-col gap-3">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Switch key={size} size={size}>
          <SwitchControl>
            <SwitchThumb />
          </SwitchControl>
          <SwitchLabel>Size {size}</SwitchLabel>
        </Switch>
      ))}
    </div>
  );
}
