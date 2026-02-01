# Document Component

Create documentation and demo files for components.

## Input
- Component file path(s) to document

## Steps

1. Read the component source file(s) to understand functionality, props, and features
2. Check existing docs structure at `src/content/docs/components/` for patterns
3. Check existing demo structure at `src/demo/components/` for patterns
4. Create MDX documentation file at `src/content/docs/components/{category}/{component-name}.mdx` with:
   - Frontmatter (title, description)
   - Usage section with Preview/Usage tabs
   - Installation section with CLI/Manual tabs
   - Props table
   - Features list (optional)
5. Create demo file at `src/demo/components/{component-name}/{component-name}.tsx` with:
   - Interactive example showcasing component features
   - Clear visual demonstration

## MDX Template

```mdx
---
title: Component Name
description: Brief description of the component's purpose.
---

## Usage

    <Tabs>
      <TabsList>
        <TabsTrigger value="Preview">Preview</TabsTrigger>
        <TabsTrigger value="Usage">Usage</TabsTrigger>
      </TabsList>
      <TabsContents className="border rounded-xl mt-1">
        <TabsContent value="Preview">
         <Preview path="demo/components/{component-name}/{component-name}"/>
        </TabsContent>
        <TabsContent value="Usage">
          <CodePreview path="demo/components/{component-name}/{component-name}" />
        </TabsContent>
      </TabsContents>
    </Tabs>

## Installation

    <Tabs>
      <TabsList>
        <TabsTrigger value="Installation">CLI</TabsTrigger>
        <TabsTrigger value="Manual">Manual</TabsTrigger>
      </TabsList>
      <TabsContents className="border rounded-xl mt-1">
        <TabsContent value="Installation" className="p-4">
         <Installation componentName="{component-name}" />
        </TabsContent>
        <TabsContent value="Manual">
          <CodePreview path="demo/components/{category}/{component-name}" />
        </TabsContent>
      </TabsContents>
    </Tabs>

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `propName` | `type` | `default` | Description |
```
