"use client";

import {
  Code2Icon,
  EyeIcon,
  LaptopIcon,
  MaximizeIcon,
  MonitorIcon,
  RotateCcwIcon,
  SmartphoneIcon,
} from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/animate-ui/components/animate/tabs";
import { TabsContents } from "@/components/animate-ui/primitives/animate/tabs";
import { Button } from "@/components/ui/button";
import { cn } from "../utils/cn";
import { CodePreview } from "./code-preview";

export type IBlockPreview = {
  path?: string;
  registry?: string;
};

export const BlockPreview = ({ path, registry }: IBlockPreview) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const [device, setDevice] = useState<"xs" | "sm" | "lg">("lg");
  const [height, setHeight] = useState("70vh");

  const openPreview = () => {
    window.open(`/examples/${path}`, "_blank");
  };

  const refreshIframe = () => {
    if (iframeRef.current) {
      iframeRef.current.src = iframeRef.current.src ?? "";
    }
  };
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
    <div className="border rounded-md not-prose overflow-hidden">
      <div>
        <Tabs>
          <TabsList className="flex justify-between gap-2 w-full border-b px-1.5">
            <div className="flex gap-2">
              <TabsTrigger
                value="preview"
                className="cursor-pointer data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <EyeIcon className="size-5" />
                Preview
              </TabsTrigger>
              <TabsTrigger
                value="code"
                className="cursor-pointer data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <Code2Icon className="size-5" />
                Code
              </TabsTrigger>
            </div>
            <div className="flex items-center gap-1">
              <Button
                size="icon"
                variant="ghost"
                className={cn("size-8 cursor-pointer", {
                  "bg-accent": device === "xs",
                })}
                onClick={() => setDevice("xs")}
              >
                <SmartphoneIcon className="!size-5" />
              </Button>

              <Button
                size="icon"
                variant="ghost"
                className={cn("size-8 cursor-pointer", {
                  "bg-accent": device === "sm",
                })}
                onClick={() => setDevice("sm")}
              >
                <LaptopIcon className="!size-5" />
              </Button>

              <Button
                size="icon"
                variant="ghost"
                className={cn("size-8 cursor-pointer", {
                  "bg-accent": device === "lg",
                })}
                onClick={() => setDevice("lg")}
              >
                <MonitorIcon className="!size-5" />
              </Button>
              <hr className="mx-1 h-6 border-s max-sm:hidden" />
              <Button
                size="icon"
                variant="ghost"
                className="size-8 cursor-pointer"
                onClick={openPreview}
              >
                <MaximizeIcon className="!size-5" />
              </Button>
            </div>
            <div className="flex gap-2">
              <Link
                href={`https://v0.dev/chat/api/open?url=https://ui.paceui.com/r/${registry}.json`}
                target="_blank"
              >
                <Button
                  className="group cursor-pointer shadow-none max-sm:size-9"
                  aria-label="Open in v0"
                  title="Open in v0"
                  variant="ghost"
                  asChild
                >
                  <div>
                    <span className="max-sm:hidden">Open in</span>
                    <svg
                      viewBox="0 0 40 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="!size-5 text-current"
                    >
                      <path
                        d="M23.3919 0H32.9188C36.7819 0 39.9136 3.13165 39.9136 6.99475V16.0805H36.0006V6.99475C36.0006 6.90167 35.9969 6.80925 35.9898 6.71766L26.4628 16.079C26.4949 16.08 26.5272 16.0805 26.5595 16.0805H36.0006V19.7762H26.5595C22.6964 19.7762 19.4788 16.6139 19.4788 12.7508V3.68923H23.3919V12.7508C23.3919 12.9253 23.4054 13.0977 23.4316 13.2668L33.1682 3.6995C33.0861 3.6927 33.003 3.68923 32.9188 3.68923H23.3919V0Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M13.7688 19.0956L0 3.68759H5.53933L13.6231 12.7337V3.68759H17.7535V17.5746C17.7535 19.6705 15.1654 20.6584 13.7688 19.0956Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </Button>
              </Link>
              <Button
                size="icon"
                variant="ghost"
                className="group cursor-pointer shadow-none"
                onClick={refreshIframe}
              >
                <RotateCcwIcon className="!size-4.5 transition-all group-hover:-rotate-60" />
              </Button>
            </div>
          </TabsList>
          <TabsContents>
            <TabsContent value="preview">
              <iframe
                ref={iframeRef}
                onLoad={handleLoad}
                className="h-max  w-full m-auto  data-[device=xs]:w-xs data-[device=sm]:w-sm data-[device=lg]:w-full"
                title="Preview"
                aria-label="Preview"
                data-device={device}
                style={{ height }}
                src={path ? `/examples/${path}` : undefined}
              />
            </TabsContent>
            <TabsContent value="code">
              <CodePreview path={path} collapsible />
            </TabsContent>
          </TabsContents>
        </Tabs>
      </div>
    </div>
  );
};
