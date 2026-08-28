// libs/helix/src/file-input.ts
export const fileInputRootBase = 'flex w-full flex-col gap-2';
export const fileInputDropzoneBase =
  'flex w-full flex-col items-center justify-center gap-2 rounded-md border border-dashed border-input bg-transparent px-4 py-8 text-center text-sm text-muted-foreground shadow-xs transition-[color,box-shadow] outline-none hover:border-ring focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/30 data-[state=open]:border-ring';
export const fileInputTriggerBase =
  'inline-flex h-9 items-center gap-2 rounded-md border border-input bg-background px-3 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0';
export const fileInputLabelBase = 'text-sm font-medium leading-none text-foreground';
export const fileInputItemGroupBase = 'flex w-full flex-col gap-2';
export const fileInputItemBase =
  'flex w-full items-center justify-between gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm';
export const fileInputItemNameBase = 'truncate text-sm text-foreground';
export const fileInputItemSizeTextBase = 'shrink-0 text-xs text-muted-foreground';
export const fileInputItemDeleteTriggerBase =
  'flex size-6 shrink-0 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:text-destructive focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0';
export const fileInputClearTriggerBase =
  'self-start text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50';
export interface FileInputProps {
  className?: string;
}
