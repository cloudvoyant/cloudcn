// libs/helix-react/src/textarea.tsx
import { textareaVariants, cn, type TextareaProps as TextareaBaseProps } from '@cloudvoyant/helix';
import { FieldTextarea, type FieldTextareaProps } from '@ark-ui/react/field';

export type TextareaProps = FieldTextareaProps & TextareaBaseProps;

export function Textarea({ className, size, ...props }: TextareaProps) {
  return <FieldTextarea className={cn(textareaVariants({ size }), className)} {...props} />;
}
