// apps/docs/src/components/examples/file-input/prepopulated/react.tsx
import { useState } from 'react';
import {
  FileInput,
  FileInputDropzone,
  FileInputTrigger,
  FileInputItemGroup,
  FileInputItem,
  FileInputItemName,
  FileInputItemSizeText,
  FileInputItemDeleteTrigger,
} from '@cloudvoyant/helix-react';
import { Upload, FileUp, Trash2 } from 'lucide-react';

const initialFiles = [new File(['hello world'], 'readme.txt', { type: 'text/plain' })];

export default function ReactFileInputPrepopulated() {
  const [files, setFiles] = useState<File[]>(initialFiles);
  return (
    <FileInput
      accept="*/*"
      className="mx-auto max-w-sm"
      acceptedFiles={files}
      onFileChange={(details) => setFiles(details.acceptedFiles)}
    >
      <FileInputDropzone>
        <Upload />
        <FileInputTrigger>
          <FileUp /> Browse files
        </FileInputTrigger>
      </FileInputDropzone>
      {files.length > 0 && (
        <FileInputItemGroup>
          {files.map((file, i) => (
            <FileInputItem key={i} file={file}>
              <FileInputItemName>{file.name}</FileInputItemName>
              <div className="flex items-center gap-2">
                <FileInputItemSizeText>{file.size} bytes</FileInputItemSizeText>
                <FileInputItemDeleteTrigger aria-label="Remove file">
                  <Trash2 />
                </FileInputItemDeleteTrigger>
              </div>
            </FileInputItem>
          ))}
        </FileInputItemGroup>
      )}
    </FileInput>
  );
}
