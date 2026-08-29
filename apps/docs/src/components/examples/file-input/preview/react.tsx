// apps/docs/src/components/examples/file-input/preview/react.tsx
import { useState } from 'react';
import {
  FileInput,
  FileInputDropzone,
  FileInputTrigger,
  FileInputItemGroup,
  FileInputItem,
  FileInputItemPreview,
  FileInputItemPreviewImage,
  FileInputItemName,
  FileInputItemSizeText,
  FileInputItemDeleteTrigger,
} from '@cloudvoyant/helix-react';
import { Upload, FileUp, Trash2 } from 'lucide-react';

const svgFile = (name: string, fill: string) =>
  new File(
    [
      `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120"><rect width="120" height="120" fill="${fill}"/><circle cx="60" cy="60" r="30" fill="#fff" opacity="0.6"/></svg>`,
    ],
    name,
    { type: 'image/svg+xml' },
  );

const initialFiles = [svgFile('cover.svg', '#6366f1'), svgFile('banner.svg', '#10b981')];

export default function ReactFileInputPreview() {
  const [files, setFiles] = useState<File[]>(initialFiles);
  return (
    <FileInput
      accept="image/*"
      className="mx-auto max-w-sm"
      acceptedFiles={files}
      onFileChange={(details) => setFiles(details.acceptedFiles)}
    >
      <FileInputDropzone>
        <Upload />
        <FileInputTrigger>
          <FileUp /> Browse images
        </FileInputTrigger>
      </FileInputDropzone>
      {files.length > 0 && (
        <FileInputItemGroup>
          {files.map((file, i) => (
            <FileInputItem key={i} file={file}>
              <div className="flex min-w-0 items-center gap-3">
                <FileInputItemPreview>
                  <FileInputItemPreviewImage />
                </FileInputItemPreview>
                <div className="flex min-w-0 flex-col">
                  <FileInputItemName>{file.name}</FileInputItemName>
                  <FileInputItemSizeText>{file.size} bytes</FileInputItemSizeText>
                </div>
              </div>
              <FileInputItemDeleteTrigger aria-label="Remove file">
                <Trash2 />
              </FileInputItemDeleteTrigger>
            </FileInputItem>
          ))}
        </FileInputItemGroup>
      )}
    </FileInput>
  );
}
