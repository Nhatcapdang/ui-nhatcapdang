import * as TabsComponents from '@/components/animate-ui/components/animate/tabs';
import { BlockPreview } from '@/mdx/block-preview';
import { CodePreview } from '@/mdx/code-preview';
import Installation from '@/mdx/installation';
import { Preview } from '@/mdx/preview';
import * as StepsComponents from 'fumadocs-ui/components/steps';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...TabsComponents,
    ...StepsComponents,
    ...components,
    CodePreview,
    BlockPreview,
    Preview,
    Installation,
  };
}
