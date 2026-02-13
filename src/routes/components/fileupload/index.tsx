import type { FC } from 'react';
import ComponentPageLayout from '@/components/ComponentPageLayout';
import FileUpload from '@/components/FileUpload';
import Flex from '@/components/Flex';
import Icon from '@/components/Icon';
import Button from '@/components/Button';
import Progress from '@/components/Progress';

const FileUploadPage: FC = () => (
  <ComponentPageLayout componentId="fileupload">
    <>
      {/* Drag & Drop */}
      <div className="bg-background border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Drag &amp; Drop</h3>
        <FileUpload id="demo-upload" label="Drop files here or click to browse" multiple />
      </div>

      {/* Styled Input */}
      <div className="bg-background border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Styled Input</h3>
        <Button variant="outline" size="sm" onClick={() => {}}>
          <Icon name="plus" size="sm" />
          Choose File
          <input type="file" className="hidden" />
        </Button>
      </div>

      {/* Progress */}
      <div className="bg-background border-4 border-border p-8 md:p-12">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Progress Indicators</h3>
        <div className="space-y-4 max-w-lg">
          <Flex align="center" gap={4} className="p-3 border-2 border-border">
            <span className="text-sm font-bold flex-shrink-0">report.pdf</span>
            <Progress value={75} size="sm" className="flex-1" />
            <span className="text-xs text-muted-foreground font-mono">75%</span>
          </Flex>
          <Flex align="center" gap={4} className="p-3 border-2 border-border">
            <span className="text-sm font-bold flex-shrink-0">photo.jpg</span>
            <Progress value={100} size="sm" variant="success" className="flex-1" />
            <Icon name="check" className="text-success" />
          </Flex>
        </div>
      </div>
    </>
  </ComponentPageLayout>
);

export default FileUploadPage;
