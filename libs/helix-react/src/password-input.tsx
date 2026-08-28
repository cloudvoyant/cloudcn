// libs/helix-react/src/password-input.tsx
// Wraps: @ark-ui/react/password-input
import {
  PasswordInputRoot as ArkPasswordInputRoot,
  PasswordInputControl as ArkPasswordInputControl,
  PasswordInputInput as ArkPasswordInputInput,
  PasswordInputVisibilityTrigger as ArkPasswordInputVisibilityTrigger,
  PasswordInputIndicator as ArkPasswordInputIndicator,
  usePasswordInputContext,
  type PasswordInputRootProps,
  type PasswordInputControlProps,
  type PasswordInputInputProps,
  type PasswordInputVisibilityTriggerProps,
  type PasswordInputIndicatorProps,
} from '@ark-ui/react/password-input';
import {
  passwordInputRootBase,
  passwordInputControlBase,
  passwordInputVariants,
  passwordInputVisibilityTriggerBase,
  passwordInputIndicatorBase,
  cn,
  type PasswordInputProps as PasswordInputBaseProps,
} from '@cloudvoyant/helix';

export type PasswordInputProps = PasswordInputRootProps & PasswordInputBaseProps;

export function PasswordInput({ className, ...props }: PasswordInputProps) {
  return <ArkPasswordInputRoot className={cn(passwordInputRootBase, className)} {...props} />;
}

export function PasswordInputControl({ className, ...props }: PasswordInputControlProps) {
  return <ArkPasswordInputControl className={cn(passwordInputControlBase, className)} {...props} />;
}

export function PasswordInputInput({
  className,
  size,
  ...props
}: Omit<PasswordInputInputProps, 'size'> & PasswordInputBaseProps) {
  return <ArkPasswordInputInput className={cn(passwordInputVariants({ size }), className)} {...props} />;
}

export function PasswordInputVisibilityTrigger({ className, ...props }: PasswordInputVisibilityTriggerProps) {
  return <ArkPasswordInputVisibilityTrigger className={cn(passwordInputVisibilityTriggerBase, className)} {...props} />;
}

export function PasswordInputIndicator({ className, ...props }: PasswordInputIndicatorProps) {
  return <ArkPasswordInputIndicator className={cn(passwordInputIndicatorBase, className)} {...props} />;
}

export const usePasswordInput = usePasswordInputContext;

export type {
  PasswordInputControlProps,
  PasswordInputInputProps,
  PasswordInputVisibilityTriggerProps,
  PasswordInputIndicatorProps,
};
