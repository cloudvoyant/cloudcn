// apps/docs/src/components/examples/file-input/clear/react.tsx
import {
  FileInput,
  FileInputDropzone,
  FileInputTrigger,
  FileInputItemGroup,
  FileInputItem,
  FileInputItemName,
  FileInputItemDeleteTrigger,
  FileInputClearTrigger,
  useFileInput,
} from '@cloudvoyant/helix-react';
import { Upload, FileUp, Trash2 } from 'lucide-react';

function ReactFileList() {
  const files = useFileInput();
  return files.acceptedFiles.length > 0 ? (
    <>
      <FileInputItemGroup>
        {files.acceptedFiles.map((file, i) => (
          <FileInputItem key={i} file={file}>
            <FileInputItemName>{file.name}</FileInputItemName>
            <FileInputItemDeleteTrigger aria-label="Remove file">
              <Trash2 />
            </FileInputItemDeleteTrigger>
          </FileInputItem>
        ))}
      </FileInputItemGroup>
      {files.acceptedFiles.length > 1 && <FileInputClearTrigger>Clear all</FileInputClearTrigger>}
    </>
  ) : null;
}

export default function ReactFileInputClear() {
  return (
    <FileInput accept="image/*" className="max-w-sm">
      <FileInputDropzone>
        <Upload />
        <span>Drag & drop files here</span>
        <FileInputTrigger>
          <FileUp /> Browse files
        </FileInputTrigger>
      </FileInputDropzone>
      <ReactFileList />
    </FileInput>
  );
}
