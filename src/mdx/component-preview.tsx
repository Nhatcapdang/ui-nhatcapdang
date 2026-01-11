import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsList,
  TabsTrigger,
} from "@/components/animate-ui/components/animate/tabs";

import VelocityText from "@/components/velocity-text";
export const ComponentPreview = () => {
  return (
    <div>
      <TabsContents>
        <TabsList>
          <TabsTrigger value="Preview">Preview</TabsTrigger>
          <TabsTrigger value="Usage">Usage</TabsTrigger>
          <TabsTrigger value="Code">Code</TabsTrigger>
        </TabsList>
        <TabsContents>
          <TabsContent value="Preview">
            <VelocityText repeat={8}>
              <div className="flex gap-2 whitespace-nowrap text-xl font-black uppercase">
                <p>Nhatcapdang is a developer 🌟</p>
              </div>
            </VelocityText>
          </TabsContent>
          <TabsContent value="Usage">
            <div>Usage</div>
          </TabsContent>
          <TabsContent value="Code">
            <div>Code</div>
          </TabsContent>
        </TabsContents>
      </TabsContents>
    </div>
  );
};
