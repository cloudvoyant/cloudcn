// apps/docs/src/components/examples/file-input/controlled/react.tsx
import { useState } from 'react';
import {
  FileInput,
  FileInputDropzone,
  FileInputTrigger,
  FileInputItemGroup,
  FileInputItem,
  FileInputItemName,
  FileInputItemDeleteTrigger,
} from '@cloudvoyant/helix-react';
import { Upload, FileUp, Trash2 } from 'lucide-react';

export default function ReactFileInputControlled() {
  const [files, setFiles] = useState<File[]>([]);
  return (
    <FileInput
      accept="image/*"
      className="max-w-sm"
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
              <FileInputItemDeleteTrigger aria-label="Remove file">
                <Trash2 />
              </FileInputItemDeleteTrigger>
            </FileInputItem>
          ))}
        </FileInputItemGroup>
      )}
      <output data-testid="value">{files.map((f) => f.name).join(', ')}</output>
      <button type="button" data-testid="reset" onClick={() => setFiles([])}>
        Reset
      </button>
    </FileInput>
  );
}
