// apps/docs/src/components/examples/switch/controlled/react.tsx
import { useState } from 'react';
import { Switch, SwitchControl, SwitchThumb, SwitchLabel } from '@cloudvoyant/helix-react';

export default function ReactSwitchControlled() {
  const [checked, setChecked] = useState(true);
  return (
    <div className="flex max-w-sm flex-col gap-2">
      <Switch checked={checked} onCheckedChange={(e) => setChecked(!!e.checked)}>
        <SwitchControl>
          <SwitchThumb />
        </SwitchControl>
        <SwitchLabel>Airplane mode</SwitchLabel>
      </Switch>
      <output data-testid="value">{String(checked)}</output>
      <button type="button" data-testid="reset" onClick={() => setChecked(true)}>
        Reset
      </button>
    </div>
  );
}
