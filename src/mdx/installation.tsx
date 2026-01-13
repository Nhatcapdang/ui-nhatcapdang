import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsList,
  TabsTrigger,
} from '@/components/animate-ui/components/animate/tabs';
import { CodeBlock } from 'fumadocs-ui/components/codeblock';
import { memo } from 'react';

function Installation({ componentName }: { componentName: string }) {
  const registryUrl = `https://nhatcapdang.com/r/${componentName}.json`;
  return (
    <Tabs itemID="installation">
      <TabsList itemID="installation">
        <TabsTrigger value="npm" itemID="npm">
          npm
        </TabsTrigger>
        <TabsTrigger value="yarn" itemID="yarn">
          yarn
        </TabsTrigger>
        <TabsTrigger value="pnpm" itemID="pnpm">
          pnpm
        </TabsTrigger>
      </TabsList>
      <TabsContents className="border rounded-xl mt-1">
        <TabsContent
          id="npm"
          itemID="npm"
          value="npm"
          className="[&>figure]:my-0 [&>figure]:border-none"
        >
          <CodeBlock lang="npm" className="ps-4">
            npm install {registryUrl}
          </CodeBlock>
        </TabsContent>
        <TabsContent
          id="yarn"
          itemID="yarn"
          value="yarn"
          className="[&>figure]:my-0 [&>figure]:border-none"
        >
          <CodeBlock lang="yarn" className="ps-4">
            yarn add {registryUrl}
          </CodeBlock>
        </TabsContent>
        <TabsContent
          id="pnpm"
          itemID="pnpm"
          value="pnpm"
          className="[&>figure]:my-0 [&>figure]:border-none"
        >
          <CodeBlock lang="pnpm" className="ps-4">
            pnpm add {registryUrl}
          </CodeBlock>
        </TabsContent>
      </TabsContents>
    </Tabs>
  );
}
export default memo(Installation);
