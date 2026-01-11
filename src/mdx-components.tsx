import * as TabsComponents from "@/components/animate-ui/components/animate/tabs";
import { BlockPreview } from "@/mdx/block-preview";
import { CodePreview } from "@/mdx/code-preview";
import { Preview } from "@/mdx/preview";
import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...TabsComponents,
    ...components,
    CodePreview,
    BlockPreview,
    Preview,
  };
}
