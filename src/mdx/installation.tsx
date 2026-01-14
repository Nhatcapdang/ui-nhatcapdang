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
  const registryUrl = `shadcn@latest add @nhatcapdang/${componentName}`;
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
          <DynamicCodeBlock lang="bash" code={`npx ${registryUrl}`} />
        </TabsContent>
        <TabsContent
          value="yarn"
          className="[&>figure]:my-0 [&>figure]:border-none"
        >
          <DynamicCodeBlock lang="bash" code={`yarn dlx ${registryUrl}`} />
        </TabsContent>
        <TabsContent
          value="pnpm"
          className="[&>figure]:my-0 [&>figure]:border-none"
        >
          <DynamicCodeBlock lang="bash" code={`pnpm dlx ${registryUrl}`} />
        </TabsContent>
      </TabsContents>
    </Tabs>
  );
}
export default memo(Installation);
