import Counter from "@/components/counter";
import {
  BasicCounter,
  CurrencyCounter,
  DecimalPercentageCounter,
  PercentageCounter,
} from "@/components/counter-variants";
import VelocityText from "@/components/velocity-text";
import { BlockPreview } from "@/mdx/block-preview";
import { CodePreview } from "@/mdx/code-preview";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import * as TabsComponents from "fumadocs-ui/components/tabs";
import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    VelocityText,
    Counter,
    CurrencyCounter,
    PercentageCounter,
    DecimalPercentageCounter,
    BasicCounter,
    CodePreview,
    BlockPreview,
    ...TabsComponents,
    ...components,
  };
}
