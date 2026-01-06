# VelocityText Component Setup Guide

This guide explains the VelocityText component setup in your Fumadocs project.

## What Was Created

### 1. Documentation Files
- **`/content/docs/velocity-text.mdx`** - Complete API documentation
- **`/content/docs/velocity-text-example.mdx`** - Interactive examples and demos

### 2. Component Files
- **`/src/components/velocity-text.tsx`** - The main VelocityText component
- **`/src/utils/cn.ts`** - Utility function for className merging

### 3. Updated Files
- **`/src/mdx-components.tsx`** - Added VelocityText to available MDX components
- **`/content/docs/index.mdx`** - Added links to VelocityText documentation

## Installation Steps

### 1. Install Required Dependencies

```bash
yarn add framer-motion clsx tailwind-merge
```

Or if you prefer npm:

```bash
npm install framer-motion clsx tailwind-merge
```

Or with pnpm:

```bash
pnpm add framer-motion clsx tailwind-merge
```

### 2. Verify Tailwind CSS Setup

Make sure Tailwind CSS is properly configured in your project. The configuration should already be in place based on your project structure.

### 3. Start Development Server

```bash
yarn dev
```

### 4. View Documentation

Navigate to:
- **API Documentation**: `http://localhost:3000/docs/velocity-text`
- **Live Examples**: `http://localhost:3000/docs/velocity-text-example`

## Component Usage

### In MDX Files

You can use the component directly in your MDX documentation files:

```mdx
<VelocityText repeat={8} className="text-2xl">
  Your text here •{' '}
</VelocityText>
```

### In React/TypeScript Files

Import and use the component in your React components:

```tsx
import VelocityText from '@/src/components/velocity-text'

export default function MyPage() {
  return (
    <VelocityText repeat={5} reverse className="text-3xl font-bold">
      Animated Text •{' '}
    </VelocityText>
  )
}
```

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | Required | Content to animate |
| `repeat` | `number` | `1` | Number of times to repeat content |
| `reverse` | `boolean` | `false` | Reverse animation direction |
| `className` | `string` | `undefined` | Additional CSS classes |

## Features

✅ Scroll-based velocity animations  
✅ Dynamic skew effects  
✅ Customizable repeat count  
✅ Reversible direction  
✅ Spring physics for smooth motion  
✅ Fully TypeScript typed  
✅ Tailwind CSS compatible  
✅ Works in MDX files  

## File Structure

```
fumadocs/
├── content/
│   └── docs/
│       ├── velocity-text.mdx              # API documentation
│       └── velocity-text-example.mdx      # Live examples
├── src/
│   ├── components/
│   │   └── velocity-text.tsx              # Main component
│   ├── utils/
│   │   └── cn.ts                          # Utility function
│   └── mdx-components.tsx                 # MDX component registry (updated)
└── VELOCITY_TEXT_SETUP.md                 # This file
```

## Troubleshooting

### Component Not Rendering in MDX

Make sure the component is registered in `/src/mdx-components.tsx`:

```tsx
import VelocityText from '@/src/components/velocity-text'

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    VelocityText,
    ...components,
  }
}
```

### TypeScript Errors

If you see import errors, make sure all dependencies are installed:

```bash
yarn install
```

### Animation Not Working

1. Ensure you have enough vertical space to scroll
2. Check that Framer Motion is properly installed
3. Verify the component is marked as `'use client'`
4. Make sure you're using the component in a client context

## Performance Tips

- Limit to 3-5 VelocityText instances per page
- Keep repeat count between 5-10 for optimal performance
- Test on mobile devices
- Consider using `will-change: transform` for heavy usage

## Browser Support

Works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Next Steps

1. Install the dependencies
2. Run the development server
3. Visit the documentation pages
4. Try the interactive examples
5. Customize the component for your needs

## Resources

- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Fumadocs Documentation](https://fumadocs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)

---

**Note**: Remember to commit these changes to your version control system.

