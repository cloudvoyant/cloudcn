// apps/docs/src/components/examples/switch/default/react.tsx
import { Switch, SwitchLabel } from '@cloudvoyant/helix-react';

export default function ReactSwitchDefault() {
  return (
    <Switch defaultChecked>
      <SwitchLabel>Airplane mode</SwitchLabel>
    </Switch>
  );
}
