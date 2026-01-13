'use client';

import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsList,
  TabsTrigger,
} from '@/components/animate-ui/components/animate/tabs';
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';
import { memo } from 'react';

function Installation({ componentName }: { componentName: string }) {
  const registryUrl = `https://ui.nhatcapdang.com/r/${componentName}.json`;
  return (
    <Tabs>
      <TabsList>
        <TabsTrigger value="npm">npm</TabsTrigger>
        <TabsTrigger value="yarn">yarn</TabsTrigger>
        <TabsTrigger value="pnpm">pnpm</TabsTrigger>
      </TabsList>
      <TabsContents className="border rounded-xl mt-1">
        <TabsContent
          value="npm"
          className="[&>figure]:my-0 [&>figure]:border-none"
        >
          <DynamicCodeBlock lang="bash" code={`npm install ${registryUrl}`} />
        </TabsContent>
        <TabsContent
          value="yarn"
          className="[&>figure]:my-0 [&>figure]:border-none"
        >
          <DynamicCodeBlock lang="bash" code={`yarn add ${registryUrl}`} />
        </TabsContent>
        <TabsContent
          value="pnpm"
          className="[&>figure]:my-0 [&>figure]:border-none"
        >
          <DynamicCodeBlock lang="bash" code={`pnpm add ${registryUrl}`} />
        </TabsContent>
      </TabsContents>
    </Tabs>
  );
}
export default memo(Installation);
