// apps/docs/src/components/examples/file-input/formats/react.tsx
import { useState } from 'react';
import { Field, FieldLabel, FieldHint } from '@cloudvoyant/helix-react';
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

export default function ReactFileInputFormats() {
  const [files, setFiles] = useState<File[]>([]);
  return (
    <Field className="mx-auto max-w-sm">
      <FieldLabel>Attachments</FieldLabel>
      <FileInput
        accept=".png,.jpg,.jpeg"
        className="w-full"
        acceptedFiles={files}
        onFileChange={(details) => setFiles(details.acceptedFiles)}
      >
        <FileInputDropzone>
          <Upload />
          <span>Drag & drop files here</span>
          <FileInputTrigger>
            <FileUp /> Browse files
          </FileInputTrigger>
        </FileInputDropzone>
        {files.length > 0 && (
          <FileInputItemGroup>
            {files.map((file, i) => (
              <FileInputItem key={i} file={file}>
                <FileInputItemName>{file.name}</FileInputItemName>
                <FileInputItemSizeText>{file.size} bytes</FileInputItemSizeText>
                <FileInputItemDeleteTrigger aria-label="Remove file">
                  <Trash2 />
                </FileInputItemDeleteTrigger>
              </FileInputItem>
            ))}
          </FileInputItemGroup>
        )}
      </FileInput>
      <FieldHint>Only .png, .jpg, .jpeg files are allowed.</FieldHint>
    </Field>
  );
}
