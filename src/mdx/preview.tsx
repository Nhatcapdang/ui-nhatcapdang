"use client";

import { useRef, useState } from "react";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export type IBlockPreview = {
  path?: string;
  registry?: string;
};

export const Preview = ({ path }: IBlockPreview) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const [height, setHeight] = useState("50vh");

  const handleLoad = () => {
    if (iframeRef.current) {
      try {
        const contentHeight =
          iframeRef.current.contentWindow?.document.body.scrollHeight;
        setHeight(`${contentHeight}px`);
      } catch (error) {
        console.error(
          "Cannot access iframe content due to cross-origin restrictions:",
          error
        );
      }
    }
  };

  return (
    <ResizablePanelGroup orientation="horizontal">
      <ResizableHandle
        withHandle
        className="scale-125 hover:scale-150 transition-all duration-300"
      />
      <ResizablePanel />
      <ResizablePanel defaultSize={"100%"} minSize={350}>
        <iframe
          ref={iframeRef}
          onLoad={handleLoad}
          className="h-full w-full"
          title="Preview"
          aria-label="Preview"
          style={{ height }}
          src={path ? `/examples/${path}` : undefined}
        />
      </ResizablePanel>
      <ResizableHandle
        withHandle
        className="scale-125 hover:scale-150 transition-all duration-300"
      />
      <ResizablePanel />
    </ResizablePanelGroup>
  );
};
