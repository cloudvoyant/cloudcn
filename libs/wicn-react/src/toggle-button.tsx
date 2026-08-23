// libs/wicn-react/src/toggle-button.tsx
// Closely based on: @ark-ui/react/toggle (Ark UI)
import { ToggleRoot, ToggleIndicator, type ToggleRootProps, type ToggleIndicatorProps } from '@ark-ui/react/toggle';
import { toggleButtonVariants, cn } from 'wicn-core';
import type { ToggleButtonProps as ToggleButtonPropsBase } from 'wicn-core';

export type ToggleButtonProps = ToggleRootProps & ToggleButtonPropsBase;

export function ToggleButton({ className, variant, size, ...props }: ToggleButtonProps) {
  return <ToggleRoot className={cn(toggleButtonVariants({ variant, size }), className)} {...props} />;
}

export function ToggleButtonIndicator(props: ToggleIndicatorProps) {
  return <ToggleIndicator {...props} />;
}
