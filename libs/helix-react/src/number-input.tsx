// libs/helix-react/src/number-input.tsx
import {
  NumberInputRoot as ArkNumberInputRoot,
  NumberInputControl as ArkNumberInputControl,
  NumberInputInput as ArkNumberInputInput,
  NumberInputScrubber as ArkNumberInputScrubber,
  NumberInputValueText as ArkNumberInputValueText,
  useNumberInputContext,
  type NumberInputRootProps,
  type NumberInputControlProps,
  type NumberInputInputProps,
  type NumberInputScrubberProps,
  type NumberInputValueTextProps,
} from '@ark-ui/react/number-input';
import {
  numberInputRootBase,
  numberInputControlBase,
  numberInputScrubberBase,
  numberInputValueTextBase,
  numberInputVariants,
  cn,
  type NumberInputProps as NumberInputBaseProps,
} from '@cloudvoyant/helix';

export type NumberInputProps = NumberInputRootProps & Omit<NumberInputBaseProps, 'size'>;

export function NumberInput({ className, children, ...props }: NumberInputProps) {
  return (
    <ArkNumberInputRoot className={cn(numberInputRootBase, className)} {...props}>
      <NumberInputControl>
        <NumberInputScrubber aria-label="Adjust value" />
        {children}
      </NumberInputControl>
    </ArkNumberInputRoot>
  );
}

export function NumberInputControl({ className, ...props }: NumberInputControlProps & NumberInputBaseProps) {
  return <ArkNumberInputControl className={cn(numberInputControlBase, className)} {...props} />;
}

export function NumberInputInput({
  className,
  size,
  ...props
}: Omit<NumberInputInputProps, 'size'> & NumberInputBaseProps) {
  return <ArkNumberInputInput className={cn(numberInputVariants({ size }), className)} {...props} />;
}

export function NumberInputScrubber({ className, children, ...props }: NumberInputScrubberProps) {
  return (
    <ArkNumberInputScrubber className={cn(numberInputScrubberBase, className)} {...props}>
      {children}
    </ArkNumberInputScrubber>
  );
}

export function NumberInputValueText({ className, ...props }: NumberInputValueTextProps) {
  return <ArkNumberInputValueText className={cn(numberInputValueTextBase, className)} {...props} />;
}

export const useNumberInput = useNumberInputContext;

export type { NumberInputControlProps, NumberInputInputProps, NumberInputScrubberProps, NumberInputValueTextProps };
