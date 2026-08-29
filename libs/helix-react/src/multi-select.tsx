// libs/helix-react/src/multi-select.tsx
// Note: adapted to Ark UI v5 collection-based API. `MultiSelect` is self-contained —
// it renders the control (selected chips + search input) and the menu internally;
// the only option part is `MultiSelectItem`. Advanced parts are still exported.
import { useMemo, type SVGProps } from 'react';
import {
  ComboboxRoot as ArkMultiSelectRoot,
  ComboboxControl as ArkMultiSelectControl,
  ComboboxInput as ArkMultiSelectInput,
  ComboboxTrigger as ArkMultiSelectTrigger,
  ComboboxClearTrigger as ArkMultiSelectClearTrigger,
  ComboboxContent as ArkMultiSelectContent,
  ComboboxPositioner as ArkMultiSelectPositioner,
  ComboboxItem as ArkMultiSelectItem,
  ComboboxItemGroup as ArkMultiSelectItemGroup,
  ComboboxItemGroupLabel as ArkMultiSelectItemGroupLabel,
  ComboboxItemText as ArkMultiSelectItemText,
  ComboboxItemIndicator as ArkMultiSelectItemIndicator,
  ComboboxList as ArkMultiSelectList,
  ComboboxEmpty as ArkMultiSelectEmpty,
  createListCollection,
  useComboboxContext as useMultiSelectContext,
  type ListCollection,
  type ComboboxRootProps as MultiSelectRootProps,
  type ComboboxInputProps as ArkMultiSelectInputProps,
  type ComboboxItemProps as ArkMultiSelectItemProps,
} from '@ark-ui/react/combobox';
import type {
  ComboboxControlProps as MultiSelectControlProps,
  ComboboxTriggerProps as MultiSelectTriggerProps,
  ComboboxClearTriggerProps as MultiSelectClearTriggerProps,
  ComboboxContentProps as MultiSelectContentProps,
  ComboboxItemGroupProps as MultiSelectItemGroupProps,
  ComboboxItemGroupLabelProps as MultiSelectItemGroupLabelProps,
  ComboboxItemTextProps as MultiSelectItemTextProps,
  ComboboxItemIndicatorProps as MultiSelectItemIndicatorProps,
  ComboboxListProps as MultiSelectListProps,
  ComboboxEmptyProps as MultiSelectEmptyProps,
} from '@ark-ui/react/combobox';
import {
  multiSelectControlBase,
  multiSelectInputBase,
  multiSelectInputVariants,
  multiSelectTriggerBase,
  multiSelectClearTriggerBase,
  multiSelectContentBase,
  multiSelectPositionerBase,
  multiSelectItemVariants,
  multiSelectItemGroupLabelBase,
  multiSelectItemIndicatorBase,
  multiSelectChipBase,
  multiSelectChipDeleteTriggerBase,
  multiSelectListBase,
  multiSelectEmptyBase,
  cn,
} from '@cloudvoyant/helix';
import type { MultiSelectItemVariants, SelectItemData } from '@cloudvoyant/helix';

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export type MultiSelectProps = Omit<MultiSelectRootProps<SelectItemData>, 'collection'> & {
  items?: SelectItemData[];
  collection?: ListCollection<SelectItemData>;
  size?: 'sm' | 'md' | 'lg';
  placeholder?: string;
};

function MultiSelectChips({ items }: { items?: SelectItemData[] }) {
  const api = useMultiSelectContext();
  return api.value.map((value) => {
    const item = items?.find((i) => i.value === value);
    if (!item) return null;
    return (
      <span key={value} className={multiSelectChipBase}>
        {item.label}
        <button
          type="button"
          aria-label={`Remove ${item.label}`}
          className={multiSelectChipDeleteTriggerBase}
          onClick={() => api.setValue(api.value.filter((v) => v !== value))}
        >
          <XIcon />
        </button>
      </span>
    );
  });
}

export function MultiSelect({
  items,
  collection,
  size = 'md',
  placeholder,
  className,
  children,
  openOnClick = true,
  lazyMount = true,
  unmountOnExit = true,
  ...props
}: MultiSelectProps) {
  const resolvedCollection = useMemo(
    () => collection ?? createListCollection({ items: items ?? [] }),
    [collection, items],
  );
  return (
    <ArkMultiSelectRoot
      collection={resolvedCollection}
      openOnClick={openOnClick}
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      {...props}
    >
      <ArkMultiSelectControl className={cn(multiSelectControlBase, className)}>
        <MultiSelectChips items={items} />
        <ArkMultiSelectInput
          className={cn(multiSelectInputBase, multiSelectInputVariants({ size }))}
          placeholder={placeholder}
        />
        <span className="shrink-0 text-muted-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
          <ChevronDownIcon />
        </span>
      </ArkMultiSelectControl>
      <ArkMultiSelectPositioner className={multiSelectPositionerBase}>
        <ArkMultiSelectContent className={multiSelectContentBase}>
          <ArkMultiSelectList className={multiSelectListBase}>{children}</ArkMultiSelectList>
        </ArkMultiSelectContent>
      </ArkMultiSelectPositioner>
    </ArkMultiSelectRoot>
  );
}

export function MultiSelectControl({ className, ...props }: MultiSelectControlProps) {
  return <ArkMultiSelectControl className={cn(multiSelectControlBase, className)} {...props} />;
}

export type MultiSelectInputProps = Omit<ArkMultiSelectInputProps, 'size'> & { size?: 'sm' | 'md' | 'lg' };

export function MultiSelectInput({ size = 'md', className, ...props }: MultiSelectInputProps) {
  return <ArkMultiSelectInput className={cn(multiSelectInputBase, multiSelectInputVariants({ size }), className)} {...props} />;
}

export function MultiSelectTrigger({ className, ...props }: MultiSelectTriggerProps) {
  return <ArkMultiSelectTrigger className={cn(multiSelectTriggerBase, className)} {...props} />;
}

export function MultiSelectClear({ className, ...props }: MultiSelectClearTriggerProps) {
  return <ArkMultiSelectClearTrigger aria-label="Clear" className={cn(multiSelectClearTriggerBase, className)} {...props} />;
}

export function MultiSelectContent({ className, ...props }: MultiSelectContentProps) {
  return (
    <>
      <ArkMultiSelectPositioner className={multiSelectPositionerBase}>
        <ArkMultiSelectContent className={cn(multiSelectContentBase, className)} {...props} />
      </ArkMultiSelectPositioner>
    </>
  );
}

export function MultiSelectItemGroup({ className, ...props }: MultiSelectItemGroupProps) {
  return <ArkMultiSelectItemGroup className={className} {...props} />;
}

export function MultiSelectItemGroupLabel({ className, ...props }: MultiSelectItemGroupLabelProps) {
  return <ArkMultiSelectItemGroupLabel className={cn(multiSelectItemGroupLabelBase, className)} {...props} />;
}

export type MultiSelectItemProps = Omit<ArkMultiSelectItemProps, 'item'> &
  MultiSelectItemVariants & { item: SelectItemData; className?: string };

export function MultiSelectItem({ item, className, children, ...props }: MultiSelectItemProps) {
  return (
    <ArkMultiSelectItem item={item} persistFocus className={cn(multiSelectItemVariants({ showIndicator: true }), className)} {...props}>
      <ArkMultiSelectItemText className="flex w-full flex-1 items-center gap-2">{children ?? item.label}</ArkMultiSelectItemText>
      <ArkMultiSelectItemIndicator className={multiSelectItemIndicatorBase}>
        <CheckIcon />
      </ArkMultiSelectItemIndicator>
    </ArkMultiSelectItem>
  );
}

export function MultiSelectItemText({ className, ...props }: MultiSelectItemTextProps) {
  return <ArkMultiSelectItemText className={className} {...props} />;
}

export function MultiSelectItemIndicator({ className, ...props }: MultiSelectItemIndicatorProps) {
  return <ArkMultiSelectItemIndicator className={cn(multiSelectItemIndicatorBase, className)} {...props} />;
}

export function MultiSelectList({ className, ...props }: MultiSelectListProps) {
  return <ArkMultiSelectList className={cn(multiSelectListBase, className)} {...props} />;
}

export function MultiSelectEmpty({ className, children, ...props }: MultiSelectEmptyProps) {
  return (
    <ArkMultiSelectEmpty className={cn(multiSelectEmptyBase, className)} {...props}>
      {children ?? 'No results found.'}
    </ArkMultiSelectEmpty>
  );
}

export const useMultiSelect = useMultiSelectContext;

export type {
  MultiSelectControlProps,
  MultiSelectTriggerProps,
  MultiSelectClearTriggerProps,
  MultiSelectContentProps,
  MultiSelectItemGroupProps,
  MultiSelectItemGroupLabelProps,
  MultiSelectItemTextProps,
  MultiSelectItemIndicatorProps,
  MultiSelectListProps,
  MultiSelectEmptyProps,
};
