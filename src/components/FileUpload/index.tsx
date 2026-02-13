import type { FC } from 'react';
import Icon from '@/components/Icon';

interface FileUploadProps {
  id: string;
  label?: string;
  accept?: string;
  multiple?: boolean;
  maxSizeMB?: number;
  className?: string;
}

const FileUpload: FC<FileUploadProps> = ({
  id,
  label = 'Drop files here or click to browse',
  accept,
  multiple = false,
  maxSizeMB = 10,
  className = '',
}) => (
  <div
    id={id}
    data-dropzone=""
    data-max-size={maxSizeMB}
    className={`border-2 border-dashed border-border p-8 text-center cursor-pointer hover:border-primary hover:bg-muted/30 transition-colors ${className}`}
  >
    <Icon name="upload" size="lg" className="mx-auto mb-4 text-muted-foreground" />

    <p className="font-bold text-sm uppercase tracking-wider mb-1">
      {label}
    </p>

    {accept && (
      <p className="text-xs text-muted-foreground">
        Accepted formats: {accept}
      </p>
    )}

    <p className="text-xs text-muted-foreground mt-1">
      Max file size: {maxSizeMB}MB
    </p>

    {/* Hidden file input */}
    <input
      type="file"
      className="hidden"
      data-file-input=""
      {...(accept ? { accept } : {})}
      {...(multiple ? { multiple: true } : {})}
    />

    {/* File list container */}
    <div data-file-list="" className="mt-4 space-y-2" />
  </div>
);

export default FileUpload;
