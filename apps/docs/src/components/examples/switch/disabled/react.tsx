// apps/docs/src/components/examples/switch/disabled/react.tsx
import { Switch, SwitchControl, SwitchThumb, SwitchLabel } from '@cloudvoyant/helix-react';

export default function ReactSwitchDisabled() {
  return (
    <Switch disabled defaultChecked>
      <SwitchControl>
        <SwitchThumb />
      </SwitchControl>
      <SwitchLabel>Airplane mode</SwitchLabel>
    </Switch>
  );
}
