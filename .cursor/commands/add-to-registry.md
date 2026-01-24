# Add Component to Registry

Register the referenced component file(s) to the shadcn/ui-style registry.

## Instructions

When this command is invoked with component file references:

1. **Read the component file(s)** to understand the code and dependencies

2. **Prepare component code**:
   - Update relative imports to use path aliases (`@/utils/cn`, `@/components/ui/badge`)
   - Identify npm dependencies (e.g., `motion`)
   - Identify registry dependencies (other components from this registry)

3. **Add entry to `registry.json`**:
   ```json
   {
     "name": "component-name",
     "type": "registry:component",
     "title": "Component Title",
     "description": "Brief description",
     "dependencies": ["motion"],
     "registryDependencies": ["other-component"],
     "files": [
       {
         "path": "src/components/component-name.tsx",
         "type": "registry:component",
         "target": "src/nhatcapdang/component-name.tsx"
       }
     ]
   }
   ```

4. **Create `public/r/[name].json`** with full component content:
   ```json
   {
     "$schema": "https://ui.shadcn.com/schema/registry-item.json",
     "name": "component-name",
     "type": "registry:component",
     "title": "Component Title",
     "description": "Brief description",
     "dependencies": ["motion"],
     "files": [
       {
         "path": "src/components/component-name.tsx",
         "content": "// Full escaped file content here",
         "type": "registry:component",
         "target": "src/nhatcapdang/component-name.tsx"
       }
     ]
   }
   ```

5. **Sync `public/r/registry.json`** with the updated `registry.json`

## Usage

Reference component files and invoke this command:

```
@src/components/my-component.tsx /add-to-registry
```

For multiple related components:

```
@src/components/scroll/scroll-eveal.tsx @src/components/scroll/scroll-progress.tsx /add-to-registry
```
