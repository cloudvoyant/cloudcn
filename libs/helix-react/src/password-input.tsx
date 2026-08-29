// libs/helix-react/src/password-input.tsx
// Wraps: @ark-ui/react/password-input
import type { ComponentProps, SVGProps } from 'react';
import {
  PasswordInputRoot as ArkPasswordInputRoot,
  PasswordInputControl as ArkPasswordInputControl,
  PasswordInputInput as ArkPasswordInputInput,
  PasswordInputVisibilityTrigger as ArkPasswordInputVisibilityTrigger,
  usePasswordInputContext,
  type PasswordInputRootProps,
} from '@ark-ui/react/password-input';
import {
  passwordInputRootBase,
  passwordInputControlBase,
  passwordInputVariants,
  passwordInputVisibilityTriggerBase,
  cn,
  type PasswordInputProps as PasswordInputBaseProps,
} from '@cloudvoyant/helix';

function EyeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeOffIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c6.5 0 10 8 10 8a13.16 13.16 0 0 1-1.67 2.68" />
      <path d="M6.61 6.61A13.53 13.53 0 0 0 2 12s3.5 8 10 8a9.74 9.74 0 0 0 5.39-1.61" />
      <line x1="2" x2="22" y1="2" y2="22" />
    </svg>
  );
}

export type PasswordInputProps = Omit<PasswordInputRootProps, 'size' | 'value' | 'onChange'> &
  Omit<ComponentProps<'input'>, 'size' | 'autoComplete'> &
  PasswordInputBaseProps;

function PasswordInputInner({
  size,
  placeholder,
  disabled,
  name,
  id,
  value,
  onChange,
}: {
  size?: PasswordInputBaseProps['size'];
  placeholder?: string;
  disabled?: boolean;
  name?: string;
  id?: string;
  value?: ComponentProps<'input'>['value'];
  onChange?: ComponentProps<'input'>['onChange'];
}) {
  const api = usePasswordInputContext();
  return (
    <ArkPasswordInputControl className={passwordInputControlBase}>
      <ArkPasswordInputInput
        className={cn(passwordInputVariants({ size }))}
        placeholder={placeholder}
        disabled={disabled}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      />
      <ArkPasswordInputVisibilityTrigger
        aria-label={api.visible ? 'Hide password' : 'Show password'}
        className={passwordInputVisibilityTriggerBase}
      >
        {api.visible ? <EyeOffIcon /> : <EyeIcon />}
      </ArkPasswordInputVisibilityTrigger>
    </ArkPasswordInputControl>
  );
}

export function PasswordInput({ className, size, placeholder, disabled, name, id, value, onChange, ...rootProps }: PasswordInputProps) {
  return (
    <ArkPasswordInputRoot className={cn(passwordInputRootBase, className)} {...rootProps}>
      <PasswordInputInner size={size} placeholder={placeholder} disabled={disabled} name={name} id={id} value={value} onChange={onChange} />
    </ArkPasswordInputRoot>
  );
}

export const usePasswordInput = usePasswordInputContext;

export type { PasswordInputRootProps };
