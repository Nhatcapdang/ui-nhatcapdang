# Registry Guide

This guide explains how to create and manage registry entries for components in this project.

## Overview

The registry system allows you to publish and share reusable components. Registry entries are defined in JSON format and follow the [shadcn/ui registry schema](https://ui.shadcn.com/docs/registry/registry-item-json).

## Registry Structure

### Main Registry File

The main registry file (`registry.json`) contains metadata about your registry and lists all available components:

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "Nhatcapdang",
  "homepage": "https://nhatcapdang.com",
  "items": [
    {
      "name": "marquee",
      "type": "registry:component",
      "title": "Marquee",
      "description": "Component description",
      "dependencies": ["clsx", "tailwind-merge"],
      "files": [...]
    }
  ]
}
```

### Component Registry Files

Individual component registry files are stored in `public/r/` directory (e.g., `public/r/marquee.json`):

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "marquee",
  "title": "Marquee",
  "description": "Component description",
  "dependencies": ["clsx", "tailwind-merge"],
  "files": [
    {
      "path": "src/components/marquee.tsx",
      "content": "...",
      "type": "registry:component"
    }
  ]
}
```

## Creating a Registry Entry

### Step 1: Prepare Your Component

Ensure your component:
- Has proper TypeScript types
- Uses relative imports or path aliases (`@/utils/cn`)
- Includes all necessary dependencies
- Has clear prop documentation

### Step 2: Create Registry Entry

1. **Add to main registry** (`registry.json`):
   - Add component metadata
   - Include all file paths with content
   - Specify dependencies
   - Add Tailwind config if needed

2. **Create component registry file** (`public/r/[component-name].json`):
   - Use the same structure as main registry
   - Include full file contents in `content` field
   - Ensure CSS files only include component-specific styles

### Step 3: Update Public Registry

Copy the main registry to `public/r/registry.json`:

```bash
cp registry.json public/r/registry.json
```

## Registry Entry Structure

### Required Fields

- `name`: Component identifier (kebab-case)
- `type`: `"registry:component"`
- `title`: Display name
- `description`: Component description
- `files`: Array of file objects

### File Object Structure

```json
{
  "path": "src/components/component.tsx",
  "content": "// Full file content as string",
  "type": "registry:component" | "registry:lib" | "registry:style"
}
```

### File Types

- `registry:component`: React component files
- `registry:lib`: Utility/library files
- `registry:style`: CSS/style files

### Dependencies

```json
{
  "dependencies": ["clsx", "tailwind-merge"],
  "devDependencies": [],
  "peerDependencies": [],
  "registryDependencies": []
}
```

### CSS Files

**Important**: CSS files should only include component-specific styles, not entire global stylesheets.

✅ **Good**:
```css
@theme inline {
  --animate-marquee: marquee var(--duration) infinite linear;
  @keyframes marquee {
    from { transform: translateX(0); }
    to { transform: translateX(calc(-100% - var(--gap))); }
  }
}
```

❌ **Bad**: Including entire global.css file

### Tailwind Config

For components requiring Tailwind configuration:

```json
{
  "tailwind": {
    "config": {
      "theme": {
        "extend": {
          "animation": {
            "marquee": "marquee var(--duration) infinite linear"
          },
          "keyframes": {
            "marquee": {
              "from": { "transform": "translateX(0)" },
              "to": { "transform": "translateX(calc(-100% - var(--gap)))" }
            }
          }
        }
      }
    }
  }
}
```

## Commands

### Install Component from Registry

```bash
# Using npx
npx shadcn@latest add marquee --registry http://localhost:3000/r

# Using yarn
yarn dlx shadcn@latest add marquee --registry http://localhost:3000/r

# Using pnpm
pnpm dlx shadcn@latest add marquee --registry http://localhost:3000/r
```

### Serve Registry Locally

Start your development server:

```bash
yarn dev
# or
npm run dev
# or
pnpm dev
```

The registry will be available at:
- Main registry: `http://localhost:3000/r/registry.json`
- Component: `http://localhost:3000/r/marquee.json`

### Validate Registry

Check JSON syntax:

```bash
# Validate main registry
cat registry.json | jq .

# Validate component registry
cat public/r/marquee.json | jq .
```

## Best Practices

### 1. Keep CSS Minimal

Only include component-specific CSS in registry entries. Don't include:
- Global resets
- Theme variables (unless component-specific)
- Base styles
- Other component styles

### 2. Use Path Aliases

Components should use path aliases like `@/utils/cn` instead of relative paths. This makes them more portable.

### 3. Include Utilities

If your component depends on utility functions (like `cn`), include them as separate files:

```json
{
  "path": "src/utils/cn.ts",
  "type": "registry:lib",
  "content": "..."
}
```

### 4. Document Dependencies

Always list all npm dependencies your component requires:

```json
{
  "dependencies": ["clsx", "tailwind-merge"],
  "devDependencies": [],
  "peerDependencies": []
}
```

### 5. Provide Tailwind Config

If your component uses custom Tailwind utilities, provide both:
- CSS file with `@theme inline` (for Tailwind v4)
- Tailwind config object (for Tailwind v3 compatibility)

## Troubleshooting

### Error: "Invalid tar header"

**Cause**: CSS file content is too large or includes unnecessary styles.

**Solution**: Only include component-specific CSS, not entire global stylesheets.

### Error: "Extracting tar content failed"

**Cause**: Registry JSON file is malformed or too large.

**Solution**: 
- Validate JSON syntax
- Ensure CSS files only contain component-specific styles
- Check file paths are correct

### Component Not Found

**Cause**: Registry file not accessible or component name mismatch.

**Solution**:
- Verify `public/r/registry.json` exists
- Check component file exists in `public/r/[name].json`
- Ensure dev server is running
- Verify registry URL is correct

## Example: Marquee Component

See `registry.json` and `public/r/marquee.json` for a complete example of a properly structured registry entry.

## Resources

- [shadcn/ui Registry Schema](https://ui.shadcn.com/docs/registry/registry-item-json)
- [shadcn/ui CLI Documentation](https://ui.shadcn.com/docs/cli)
