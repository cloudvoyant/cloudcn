// libs/helix-react/src/file-input.tsx
// Wraps: @ark-ui/react/file-upload
import {
  FileUploadRoot as ArkFileUploadRoot,
  FileUploadDropzone as ArkFileUploadDropzone,
  FileUploadTrigger as ArkFileUploadTrigger,
  FileUploadItemGroup as ArkFileUploadItemGroup,
  FileUploadItem as ArkFileUploadItem,
  FileUploadItemName as ArkFileUploadItemName,
  FileUploadItemSizeText as ArkFileUploadItemSizeText,
  FileUploadItemPreview as ArkFileUploadItemPreview,
  FileUploadItemPreviewImage as ArkFileUploadItemPreviewImage,
  FileUploadItemDeleteTrigger as ArkFileUploadItemDeleteTrigger,
  FileUploadClearTrigger as ArkFileUploadClearTrigger,
  FileUploadHiddenInput as ArkFileUploadHiddenInput,
  useFileUploadContext,
  type FileUploadRootProps,
  type FileUploadDropzoneProps,
  type FileUploadTriggerProps,
  type FileUploadItemGroupProps,
  type FileUploadItemProps,
  type FileUploadItemNameProps,
  type FileUploadItemSizeTextProps,
  type FileUploadItemPreviewProps,
  type FileUploadItemPreviewImageProps,
  type FileUploadItemDeleteTriggerProps,
  type FileUploadClearTriggerProps,
} from '@ark-ui/react/file-upload';
import {
  fileInputRootBase,
  fileInputDropzoneBase,
  fileInputTriggerBase,
  fileInputItemGroupBase,
  fileInputItemBase,
  fileInputItemPreviewBase,
  fileInputItemPreviewImageBase,
  fileInputItemNameBase,
  fileInputItemSizeTextBase,
  fileInputItemDeleteTriggerBase,
  fileInputClearTriggerBase,
  cn,
  type FileInputProps as FileInputBaseProps,
} from '@cloudvoyant/helix';

export type FileInputProps = FileUploadRootProps & FileInputBaseProps;

export function FileInput({ className, children, ...props }: FileInputProps) {
  return (
    <ArkFileUploadRoot className={cn(fileInputRootBase, className)} {...props}>
      {children}
      <ArkFileUploadHiddenInput />
    </ArkFileUploadRoot>
  );
}

export function FileInputDropzone({ className, ...props }: FileUploadDropzoneProps) {
  return <ArkFileUploadDropzone className={cn(fileInputDropzoneBase, className)} {...props} />;
}

export function FileInputTrigger({ className, ...props }: FileUploadTriggerProps) {
  return <ArkFileUploadTrigger className={cn(fileInputTriggerBase, className)} {...props} />;
}

export function FileInputItemGroup({ className, ...props }: FileUploadItemGroupProps) {
  return <ArkFileUploadItemGroup className={cn(fileInputItemGroupBase, className)} {...props} />;
}

export function FileInputItem({ className, ...props }: FileUploadItemProps) {
  return <ArkFileUploadItem className={cn(fileInputItemBase, className)} {...props} />;
}

export function FileInputItemName({ className, ...props }: FileUploadItemNameProps) {
  return <ArkFileUploadItemName className={cn(fileInputItemNameBase, className)} {...props} />;
}

export function FileInputItemSizeText({ className, ...props }: FileUploadItemSizeTextProps) {
  return <ArkFileUploadItemSizeText className={cn(fileInputItemSizeTextBase, className)} {...props} />;
}

export function FileInputItemPreview({ className, ...props }: FileUploadItemPreviewProps) {
  return <ArkFileUploadItemPreview className={cn(fileInputItemPreviewBase, className)} {...props} />;
}

export function FileInputItemPreviewImage({ className, ...props }: FileUploadItemPreviewImageProps) {
  return <ArkFileUploadItemPreviewImage className={cn(fileInputItemPreviewImageBase, className)} {...props} />;
}

export function FileInputItemDeleteTrigger({ className, ...props }: FileUploadItemDeleteTriggerProps) {
  return <ArkFileUploadItemDeleteTrigger className={cn(fileInputItemDeleteTriggerBase, className)} {...props} />;
}

export function FileInputClearTrigger({ className, ...props }: FileUploadClearTriggerProps) {
  return <ArkFileUploadClearTrigger className={cn(fileInputClearTriggerBase, className)} {...props} />;
}

export const useFileInput = useFileUploadContext;

export type {
  FileUploadDropzoneProps,
  FileUploadTriggerProps,
  FileUploadItemGroupProps,
  FileUploadItemProps,
  FileUploadItemNameProps,
  FileUploadItemSizeTextProps,
  FileUploadItemPreviewProps,
  FileUploadItemPreviewImageProps,
  FileUploadItemDeleteTriggerProps,
  FileUploadClearTriggerProps,
};
