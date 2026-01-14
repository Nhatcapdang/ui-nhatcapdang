'use client';

import { useRef, useState } from 'react';

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import { cn } from '@/utils/cn';

export type IBlockPreview = {
  path: string;
};

export const Preview = ({ path }: IBlockPreview) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const [height, setHeight] = useState('50vh');
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    if (iframeRef.current) {
      try {
        const contentHeight =
          iframeRef.current.contentWindow?.document.body.scrollHeight;
        setHeight(`${contentHeight}px`);
      } catch (error) {
        console.error(
          'Cannot access iframe content due to cross-origin restrictions:',
          error
        );
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="relative">
      {isLoading && (
        <div
          className="absolute inset-0 bg-background animate-pulse rounded-md border"
          style={{ height }}
        />
      )}
      <ResizablePanelGroup orientation="horizontal">
        <ResizableHandle
          withHandle
          className="scale-125 hover:scale-150 transition-all duration-300"
        />
        <ResizablePanel />
        <ResizablePanel defaultSize={'100%'} minSize={350}>
          <iframe
            ref={iframeRef}
            onLoad={handleLoad}
            className={cn(
              'h-full w-full transition-opacity duration-200',
              isLoading ? 'opacity-0' : 'opacity-100'
            )}
            title="Preview"
            aria-label="Preview"
            style={{
              height,
            }}
            src={`/examples/${path}`}
          />
        </ResizablePanel>
        <ResizableHandle
          withHandle
          className="scale-125 hover:scale-150 transition-all duration-300"
        />
        <ResizablePanel />
      </ResizablePanelGroup>
    </div>
  );
};
