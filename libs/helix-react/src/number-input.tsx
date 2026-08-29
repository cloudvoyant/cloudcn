// libs/helix-react/src/number-input.tsx
// Wraps: @ark-ui/react/number-input
import type { SVGProps } from 'react';
import {
  NumberInputRoot as ArkNumberInputRoot,
  NumberInputControl as ArkNumberInputControl,
  NumberInputInput as ArkNumberInputInput,
  NumberInputDecrementTrigger as ArkNumberInputDecrementTrigger,
  NumberInputIncrementTrigger as ArkNumberInputIncrementTrigger,
  NumberInputScrubber as ArkNumberInputScrubber,
  NumberInputValueText as ArkNumberInputValueText,
  useNumberInputContext,
  type NumberInputRootProps,
  type NumberInputControlProps,
  type NumberInputInputProps,
  type NumberInputDecrementTriggerProps,
  type NumberInputIncrementTriggerProps,
  type NumberInputScrubberProps,
  type NumberInputValueTextProps,
} from '@ark-ui/react/number-input';
import {
  numberInputRootBase,
  numberInputControlBase,
  numberInputStepperBase,
  numberInputButtonBase,
  numberInputIncrementBase,
  numberInputDecrementBase,
  numberInputScrubberBase,
  numberInputValueTextBase,
  numberInputVariants,
  cn,
  type NumberInputProps as NumberInputBaseProps,
} from '@cloudvoyant/helix';

function MinusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 12h14" />
    </svg>
  );
}

function PlusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 12h14M12 5v14" />
    </svg>
  );
}

export type NumberInputProps = NumberInputRootProps & NumberInputBaseProps;

export function NumberInput({ className, size, children, ...props }: NumberInputProps) {
  return (
    <ArkNumberInputRoot className={cn(numberInputRootBase, className)} {...props}>
      <ArkNumberInputControl className={numberInputControlBase}>
        <NumberInputInput size={size} />
        <div className={numberInputStepperBase}>
          <NumberInputIncrement />
          <NumberInputDecrement />
        </div>
      </ArkNumberInputControl>
      {children}
    </ArkNumberInputRoot>
  );
}

export function NumberInputControl({ className, ...props }: NumberInputControlProps) {
  return <ArkNumberInputControl className={cn(numberInputControlBase, className)} {...props} />;
}

export function NumberInputInput({ className, size, ...props }: Omit<NumberInputInputProps, 'size'> & NumberInputBaseProps) {
  return <ArkNumberInputInput className={cn(numberInputVariants({ size }), className)} {...props} />;
}

export function NumberInputDecrement({ className, children, ...props }: NumberInputDecrementTriggerProps) {
  return (
    <ArkNumberInputDecrementTrigger aria-label="Decrement" className={cn(numberInputButtonBase, numberInputDecrementBase, className)} {...props}>
      {children ?? <MinusIcon />}
    </ArkNumberInputDecrementTrigger>
  );
}

export function NumberInputIncrement({ className, children, ...props }: NumberInputIncrementTriggerProps) {
  return (
    <ArkNumberInputIncrementTrigger aria-label="Increment" className={cn(numberInputButtonBase, numberInputIncrementBase, className)} {...props}>
      {children ?? <PlusIcon />}
    </ArkNumberInputIncrementTrigger>
  );
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

export type {
  NumberInputControlProps,
  NumberInputInputProps,
  NumberInputDecrementTriggerProps,
  NumberInputIncrementTriggerProps,
  NumberInputScrubberProps,
  NumberInputValueTextProps,
};
