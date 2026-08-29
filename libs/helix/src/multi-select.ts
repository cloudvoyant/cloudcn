// libs/helix/src/combobox.ts
// Closely based on: Shark UI combobox (https://shark.vini.one/docs/components/combobox, @ark-ui/react/combobox).
import { cva, type VariantProps } from 'class-variance-authority';

export const multiSelectControlBase =
  'relative flex w-full min-w-0 flex-wrap items-center gap-1.5 rounded-md border border-input bg-transparent p-1.5 shadow-xs transition-[box-shadow] outline-none focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/30 data-invalid:border-destructive data-invalid:ring-[3px] data-invalid:ring-destructive/24';

export const multiSelectInputBase =
  'min-w-0 flex-1 border-0 bg-transparent px-1 text-sm outline-none ring-0 placeholder:text-muted-foreground focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50';

export const multiSelectInputVariants = cva('', {
  variants: {
    size: {
      sm: 'h-7 text-xs',
      md: 'h-8 text-sm',
      lg: 'h-9 text-base',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export type MultiSelectInputVariants = VariantProps<typeof multiSelectInputVariants>;

export const multiSelectTriggerBase =
  'absolute inset-y-0 end-1 flex w-8 items-center justify-center text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0';

export const multiSelectClearTriggerBase =
  'absolute inset-y-0 end-9 flex items-center justify-center text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0';

export const multiSelectPositionerBase = 'z-50';

export const multiSelectContentBase =
  'relative z-50 max-h-96 min-w-48 overflow-y-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md outline-none';

export const multiSelectItemGroupLabelBase = 'px-2 py-1.5 text-xs font-semibold text-muted-foreground';

export const multiSelectItemVariants = cva(
  'relative flex w-full cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-muted-foreground',
  {
    variants: {
      showIndicator: {
        true: 'pe-8',
        false: 'pe-2',
      },
    },
    defaultVariants: {
      showIndicator: true,
    },
  },
);

export type MultiSelectItemVariants = VariantProps<typeof multiSelectItemVariants>;

export const multiSelectItemIndicatorBase = 'absolute inset-y-0 end-2 flex items-center justify-center text-foreground';

export const multiSelectChipBase =
  'inline-flex h-6 max-w-full shrink-0 items-center gap-1 rounded-md border bg-secondary px-1.5 text-xs text-secondary-foreground';
export const multiSelectChipDeleteTriggerBase =
  'flex size-4 shrink-0 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&_svg]:pointer-events-none [&_svg]:size-3 [&_svg]:shrink-0';

export const multiSelectListBase = 'flex flex-col';

export const multiSelectEmptyBase = 'px-2 py-1.5 text-center text-sm text-muted-foreground';

export interface MultiSelectProps {
  className?: string;
}
