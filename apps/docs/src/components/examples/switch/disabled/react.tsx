// apps/docs/src/components/examples/switch/disabled/react.tsx
import { Switch, SwitchLabel } from '@cloudvoyant/helix-react';

export default function ReactSwitchDisabled() {
  return (
    <Switch disabled defaultChecked>
      <SwitchLabel>Airplane mode</SwitchLabel>
    </Switch>
  );
}
