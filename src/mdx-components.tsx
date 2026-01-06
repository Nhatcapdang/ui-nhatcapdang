import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import VelocityText from '@/components/velocity-text';
import Counter from '@/components/counter';
import {
  CurrencyCounter,
  PercentageCounter,
  DecimalPercentageCounter,
  BasicCounter,
} from '@/components/counter-variants';
import * as TabsComponents from 'fumadocs-ui/components/tabs';
import { BlockPreview } from '@/components/block-preview';
import { CodeBlock, Pre } from 'fumadocs-ui/components/codeblock';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    VelocityText,
    Counter,
    CurrencyCounter,
    PercentageCounter,
    DecimalPercentageCounter,
    BasicCounter,
    BlockPreview,
    ...TabsComponents,
    pre: ({ ref: _ref, ...props }) => (
      <CodeBlock keepBackground language="tsx" {...props} className="p-1">
        <Pre>{props.children}</Pre>
      </CodeBlock>
    ),
    ...components,
  };
}
