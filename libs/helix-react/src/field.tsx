// libs/helix-react/src/field.tsx
import type { ReactNode } from 'react';
import {
  FieldRoot as ArkFieldRoot,
  FieldLabel as ArkFieldLabel,
  FieldHelperText as ArkFieldHelperText,
  FieldErrorText as ArkFieldErrorText,
  FieldRequiredIndicator as ArkFieldRequiredIndicator,
  useFieldContext,
  type FieldRootProps,
} from '@ark-ui/react/field';
import type {
  FieldLabelProps,
  FieldHelperTextProps,
  FieldErrorTextProps,
  FieldRequiredIndicatorProps,
} from '@ark-ui/react/field';
import {
  FieldsetRoot as ArkFieldsetRoot,
  FieldsetLegend as ArkFieldsetLegend,
  FieldsetHelperText as ArkFieldsetHelperText,
  FieldsetErrorText as ArkFieldsetErrorText,
  type FieldsetRootProps,
} from '@ark-ui/react/fieldset';
import type { FieldsetLegendProps, FieldsetHelperTextProps, FieldsetErrorTextProps } from '@ark-ui/react/fieldset';
import {
  fieldRootBase,
  fieldLabelBase,
  fieldPrefixBase,
  fieldSuffixBase,
  fieldHintBase,
  fieldErrorBase,
  fieldRequiredIndicatorBase,
  fieldGroupRootBase,
  fieldGroupLegendBase,
  fieldGroupHelperBase,
  fieldGroupErrorBase,
  cn,
} from '@cloudvoyant/helix';

export type FieldProps = FieldRootProps & { children?: ReactNode };

export function Field({ className, children, ...props }: FieldProps) {
  return (
    <ArkFieldRoot className={cn(fieldRootBase, className)} {...props}>
      {children}
    </ArkFieldRoot>
  );
}

export function FieldLabel({ className, ...props }: FieldLabelProps) {
  return <ArkFieldLabel className={cn(fieldLabelBase, className)} {...props} />;
}

export function FieldPrefix({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn(fieldPrefixBase, className)} {...props} />;
}

export function FieldSuffix({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn(fieldSuffixBase, className)} {...props} />;
}

export function FieldHint({ className, ...props }: FieldHelperTextProps) {
  return <ArkFieldHelperText className={cn(fieldHintBase, className)} {...props} />;
}

export function FieldError({ className, ...props }: FieldErrorTextProps) {
  return <ArkFieldErrorText className={cn(fieldErrorBase, className)} {...props} />;
}

export function FieldRequiredIndicator({ className, ...props }: FieldRequiredIndicatorProps) {
  return <ArkFieldRequiredIndicator className={cn(fieldRequiredIndicatorBase, className)} {...props} />;
}

export type FieldGroupProps = FieldsetRootProps;

export function FieldGroup({ className, ...props }: FieldGroupProps) {
  return <ArkFieldsetRoot className={cn(fieldGroupRootBase, className)} {...props} />;
}

export function FieldGroupLegend({ className, ...props }: FieldsetLegendProps) {
  return <ArkFieldsetLegend className={cn(fieldGroupLegendBase, className)} {...props} />;
}

export function FieldGroupHelper({ className, ...props }: FieldsetHelperTextProps) {
  return <ArkFieldsetHelperText className={cn(fieldGroupHelperBase, className)} {...props} />;
}

export function FieldGroupError({ className, ...props }: FieldsetErrorTextProps) {
  return <ArkFieldsetErrorText className={cn(fieldGroupErrorBase, className)} {...props} />;
}

export const useField = useFieldContext;

export type { FieldLabelProps, FieldHelperTextProps, FieldErrorTextProps, FieldRequiredIndicatorProps };
export type { FieldsetLegendProps, FieldsetHelperTextProps, FieldsetErrorTextProps };
