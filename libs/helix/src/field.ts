// libs/helix/src/field.ts
export const fieldRootBase = 'flex w-full flex-col gap-2 data-invalid:text-destructive';
export const fieldLabelBase =
  'flex w-fit select-none items-center gap-1 text-sm font-medium leading-none text-foreground';
export const fieldPrefixBase = 'flex shrink-0 items-center text-muted-foreground [&_svg]:size-4 [&_svg]:shrink-0';
export const fieldSuffixBase = 'flex shrink-0 items-center text-muted-foreground [&_svg]:size-4 [&_svg]:shrink-0';
export const fieldControlBase =
  'flex w-full items-center gap-1.5 rounded-md border border-input bg-transparent px-3 shadow-xs transition-[box-shadow] outline-none focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/30 aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/24 data-invalid:border-destructive data-invalid:ring-[3px] data-invalid:ring-destructive/24';
export const fieldHintBase = 'text-sm text-muted-foreground';
export const fieldErrorBase = 'text-sm text-destructive';
export const fieldRequiredIndicatorBase = 'text-destructive';

export const fieldGroupRootBase = 'flex flex-col gap-6';
export const fieldGroupLegendBase = 'mb-3 text-base font-medium';
export const fieldGroupHelperBase = 'text-sm text-muted-foreground';
export const fieldGroupErrorBase = 'text-sm text-destructive';
