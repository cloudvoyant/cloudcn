// libs/helix-react/src/select.tsx
// Note: adapted to Ark UI v5 collection-based API. `Select` is self-contained —
// it renders the trigger (with value + chevron) and the menu internally; the only
// option part is `SelectItem`. Advanced parts are still exported for escape hatches.
import { ark, type HTMLArkProps } from '@ark-ui/react/factory';
import { useMemo, useState, type ReactNode } from 'react';
import {
  SelectRoot as ArkSelectRoot,
  SelectTrigger as ArkSelectTrigger,
  SelectValueText as ArkSelectValueText,
  SelectIndicator as ArkSelectIndicator,
  SelectClearTrigger as ArkSelectClearTrigger,
  SelectContent as ArkSelectContent,
  SelectPositioner as ArkSelectPositioner,
  SelectItem as ArkSelectItem,
  SelectItemGroup as ArkSelectItemGroup,
  SelectItemGroupLabel as ArkSelectItemGroupLabel,
  SelectItemText as ArkSelectItemText,
  SelectItemIndicator as ArkSelectItemIndicator,
  SelectHiddenSelect as ArkSelectHiddenSelect,
  createListCollection,
  useSelectContext,
  type ListCollection,
  type SelectRootProps,
  type SelectTriggerProps as ArkSelectTriggerProps,
  type SelectItemProps as ArkSelectItemProps,
} from '@ark-ui/react/select';
import type {
  SelectValueTextProps,
  SelectIndicatorProps,
  SelectClearTriggerProps,
  SelectContentProps,
  SelectItemGroupProps,
  SelectItemGroupLabelProps,
  SelectItemTextProps,
  SelectItemIndicatorProps,
} from '@ark-ui/react/select';
import {
  inputVariants,
  selectTriggerBase,
  selectValueBase,
  selectIndicatorBase,
  selectClearTriggerBase,
  selectContentBase,
  selectPositionerBase,
  selectItemBase,
  selectItemGroupLabelBase,
  selectItemTextBase,
  selectItemIndicatorBase,
  nativeSelectVariants,
  nativeSelectWrapperBase,
  nativeSelectIconBase,
  cn,
} from '@cloudvoyant/helix';
import type { SelectItemData } from '@cloudvoyant/helix';
import { useMediaQuery } from './use-media-query';

function ChevronDownIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export type SelectProps = Omit<SelectRootProps<SelectItemData>, 'collection'> & {
  items?: SelectItemData[];
  collection?: ListCollection<SelectItemData>;
  size?: 'sm' | 'md' | 'lg';
  placeholder?: string;
  /** Render a search box at the top of the menu that filters the items. */
  search?: boolean;
  /** Custom renderer for the selected value shown in the trigger. */
  renderValue?: (item: SelectItemData) => ReactNode;
};

function SelectValueInner({ placeholder, renderValue }: { placeholder?: string; renderValue?: SelectProps['renderValue'] }) {
  const select = useSelectContext();
  const item = select.selectedItems[0];
  return (
    <ArkSelectValueText className={cn(selectValueBase, 'flex-1')} placeholder={placeholder}>
      {item && (renderValue ? renderValue(item) : item.label)}
    </ArkSelectValueText>
  );
}

export function Select({
  items,
  collection,
  size = 'md',
  placeholder,
  search = false,
  renderValue,
  className,
  children,
  ...props
}: SelectProps) {
  const isCoarse = useMediaQuery('(pointer: coarse)');
  const [query, setQuery] = useState('');
  const filtered = useMemo(
    () => (search && items ? items.filter((i) => i.label.toLowerCase().includes(query.toLowerCase())) : items),
    [items, query, search],
  );
  const resolvedCollection = useMemo(
    () => collection ?? createListCollection({ items: filtered ?? [] }),
    [collection, filtered],
  );

  if (isCoarse && items) {
    return (
      <SelectNative
        items={items}
        size={size}
        value={props.value?.[0]}
        defaultValue={props.defaultValue?.[0]}
        onValueChange={(value) =>
          props.onValueChange?.({ value: [value], items: items.filter((i) => i.value === value) })
        }
        invalid={props.invalid}
        disabled={props.disabled}
        name={props.name}
        form={props.form}
        required={props.required}
      />
    );
  }

  return (
    <ArkSelectRoot collection={resolvedCollection} {...props}>
      <ArkSelectTrigger className={cn(inputVariants({ size }), selectTriggerBase, className)}>
        <SelectValueInner placeholder={placeholder} renderValue={renderValue} />
        <ArkSelectIndicator className={selectIndicatorBase}>
          <ChevronDownIcon />
        </ArkSelectIndicator>
      </ArkSelectTrigger>
      <ArkSelectPositioner className={selectPositionerBase}>
        <ArkSelectContent className={selectContentBase}>
          {search && (
            <div className="sticky top-0 z-10 border-b border-input bg-popover p-1.5">
              <input
                className="w-full border-0 bg-transparent px-1 py-1 text-sm outline-none placeholder:text-muted-foreground"
                placeholder="Search…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          )}
          {children}
        </ArkSelectContent>
      </ArkSelectPositioner>
      <ArkSelectHiddenSelect />
    </ArkSelectRoot>
  );
}

export type SelectTriggerProps = ArkSelectTriggerProps & { size?: 'sm' | 'md' | 'lg' };

export function SelectTrigger({ size = 'md', className, ...props }: SelectTriggerProps) {
  return <ArkSelectTrigger className={cn(inputVariants({ size }), selectTriggerBase, className)} {...props} />;
}

export function SelectValue({ className, ...props }: SelectValueTextProps) {
  return <ArkSelectValueText className={cn(selectValueBase, className)} {...props} />;
}

export function SelectIndicator({ className, ...props }: SelectIndicatorProps) {
  return <ArkSelectIndicator className={cn(selectIndicatorBase, className)} {...props} />;
}

export function SelectClearTrigger({ className, ...props }: SelectClearTriggerProps) {
  return <ArkSelectClearTrigger aria-label="Clear selection" className={cn(selectClearTriggerBase, className)} {...props} />;
}

export function SelectContent({ className, ...props }: SelectContentProps) {
  return (
    <>
      <ArkSelectPositioner className={selectPositionerBase}>
        <ArkSelectContent className={cn(selectContentBase, className)} {...props} />
      </ArkSelectPositioner>
    </>
  );
}

export function SelectItemGroup({ className, ...props }: SelectItemGroupProps) {
  return <ArkSelectItemGroup className={className} {...props} />;
}

export function SelectItemGroupLabel({ className, ...props }: SelectItemGroupLabelProps) {
  return <ArkSelectItemGroupLabel className={cn(selectItemGroupLabelBase, className)} {...props} />;
}

export type SelectItemProps = Omit<ArkSelectItemProps, 'item'> & { item: SelectItemData; className?: string };

export function SelectItem({ item, className, children, ...props }: SelectItemProps) {
  return (
    <ArkSelectItem item={item} className={cn(selectItemBase, className)} {...props}>
      <ArkSelectItemText className={selectItemTextBase}>{children ?? item.label}</ArkSelectItemText>
      <ArkSelectItemIndicator className={selectItemIndicatorBase}>
        <CheckIcon />
      </ArkSelectItemIndicator>
    </ArkSelectItem>
  );
}

export function SelectItemText({ className, ...props }: SelectItemTextProps) {
  return <ArkSelectItemText className={cn(selectItemTextBase, className)} {...props} />;
}

export function SelectItemIndicator({ className, ...props }: SelectItemIndicatorProps) {
  return <ArkSelectItemIndicator className={cn(selectItemIndicatorBase, className)} {...props} />;
}

export const useSelect = useSelectContext;

export interface SelectNativeProps
  extends Omit<HTMLArkProps<'select'>, 'onChange' | 'children' | 'value' | 'defaultValue' | 'size'> {
  items: SelectItemData[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  size?: 'sm' | 'md' | 'lg';
  invalid?: boolean;
  icon?: ReactNode;
}

export function SelectNative({
  items = [],
  value,
  defaultValue,
  onValueChange,
  size = 'md',
  invalid,
  icon,
  className,
  ...props
}: SelectNativeProps) {
  return (
    <ark.div className={cn(nativeSelectWrapperBase, className)}>
      <ark.select
        className={nativeSelectVariants({ size })}
        value={value}
        defaultValue={defaultValue}
        onChange={(event) => onValueChange?.(event.currentTarget.value)}
        aria-invalid={invalid}
        {...props}
      >
        {items.map((item) => (
          <ark.option key={item.value} value={item.value} disabled={item.disabled}>
            {item.label}
          </ark.option>
        ))}
      </ark.select>
      <ark.span className={nativeSelectIconBase} aria-hidden>
        {icon ?? <ChevronDownIcon />}
      </ark.span>
    </ark.div>
  );
}

export type {
  SelectValueTextProps,
  SelectIndicatorProps,
  SelectClearTriggerProps,
  SelectContentProps,
  SelectItemGroupProps,
  SelectItemGroupLabelProps,
  SelectItemTextProps,
  SelectItemIndicatorProps,
};
