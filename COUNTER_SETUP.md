# Counter Component Documentation Setup Guide

This guide explains the Counter component documentation setup in your Fumadocs project.

## What Was Created

### 1. Documentation Files
- **`/content/docs/counter.mdx`** - Complete API documentation with detailed props, examples, and usage patterns
- **`/content/docs/counter-example.mdx`** - Interactive examples with live counter demonstrations

### 2. Updated Files
- **`/src/mdx-components.tsx`** - Added Counter and Formatter to available MDX components
- **`/content/docs/index.mdx`** - Added links to Counter documentation in Components section

## Component Location

The Counter component is already in your project:
- **`/src/app/counter.tsx`** - Main Counter component with TypeScript interfaces

## Dependencies

The Counter component requires Framer Motion (should already be installed):

```bash
yarn add framer-motion
```

Or with npm:

```bash
npm install framer-motion
```

## Usage in MDX Files

You can now use the Counter component directly in your MDX documentation:

```mdx
<Counter targetValue={1250} className="text-4xl font-bold" />
```

With currency formatting:

```mdx
<Counter 
  targetValue={45000} 
  format={Formatter.currency}
  className="text-6xl font-bold text-green-600"
/>
```

Count down:

```mdx
<Counter 
  targetValue={100} 
  direction="down"
  className="text-4xl font-bold"
/>
```

## Usage in React/TypeScript Files

Import and use in your React components:

```tsx
import Counter, { Formatter } from '@/app/counter'

export default function MyPage() {
  return (
    <div className="text-center">
      <Counter 
        targetValue={1250}
        className="text-5xl font-bold"
      />
      <p className="mt-2 text-gray-600">Active Users</p>
    </div>
  )
}
```

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `targetValue` | `number` | Required | The target value to count to/from |
| `format` | `(value: number) => string` | `Formatter.number` | Function to format the display |
| `direction` | `'up' \| 'down'` | `'up'` | Count up from 0 or down from target |
| `delay` | `number` | `0` | Delay in ms before animation starts |
| `className` | `string` | `undefined` | Additional CSS classes |

## Built-in Formatters

The component exports a `Formatter` object with pre-built formatting functions:

### Formatter.number
```tsx
Formatter.number(1234567) // "1,234,567"
```

### Formatter.currency
```tsx
Formatter.currency(1234567) // "$1,234,567"
```

### Custom Formatter
```tsx
const percentFormat = (value: number) => `${value.toFixed(1)}%`
<Counter targetValue={98.7} format={percentFormat} />
```

## View Documentation

Start your development server:

```bash
yarn dev
```

Navigate to:
- **API Documentation**: `http://localhost:3000/docs/counter`
- **Live Examples**: `http://localhost:3000/docs/counter-example`

## Features

✅ Viewport-triggered animations  
✅ Count up or down  
✅ Customizable number formatting  
✅ Built-in currency formatter  
✅ Configurable animation delay  
✅ Spring physics for smooth motion  
✅ One-time animation on scroll  
✅ Fully TypeScript typed  
✅ Works in MDX files  
✅ Tailwind CSS compatible  

## Example Patterns

### Stats Section
```tsx
<div className="grid grid-cols-3 gap-6">
  <div className="text-center">
    <Counter targetValue={1250} delay={0} className="text-4xl font-bold" />
    <p>Users</p>
  </div>
  <div className="text-center">
    <Counter targetValue={450} delay={100} className="text-4xl font-bold" />
    <p>Projects</p>
  </div>
  <div className="text-center">
    <Counter targetValue={98} delay={200} className="text-4xl font-bold" />
    <p>Success Rate</p>
  </div>
</div>
```

### Revenue Card
```tsx
<div className="p-8 bg-gradient-to-br from-green-500 to-green-600 rounded-xl">
  <h2 className="text-white text-xl mb-2">Total Revenue</h2>
  <Counter 
    targetValue={1250000}
    format={Formatter.currency}
    className="text-6xl font-black text-white"
  />
  <p className="text-green-100 text-sm mt-3">+23% from last quarter</p>
</div>
```

### Countdown
```tsx
<div className="text-center">
  <Counter 
    targetValue={10}
    direction="down"
    className="text-9xl font-black text-red-600"
  />
  <p className="text-2xl mt-4">Days Until Launch</p>
</div>
```

## Animation Details

### Spring Physics
The component uses Framer Motion spring physics with these settings:

- **damping**: `undefined` (reduced for quicker animation)
- **stiffness**: `100` (increased for more rigidity)

These create smooth, relatively quick animations that feel responsive.

### Viewport Detection
- Triggers when component enters viewport
- Uses `once: true` to prevent re-animation on scroll
- No margin offset (triggers immediately when visible)

### Direction Logic
- **Count Up**: Starts at `0`, animates to `targetValue`
- **Count Down**: Starts at `targetValue`, animates to `0`

## Performance Tips

1. **Limit Instances**: Use 3-8 counters per viewport for optimal performance
2. **Stagger Delays**: Add small delays (100-200ms) between counters for cascade effect
3. **Reasonable Values**: Very large numbers take longer to animate
4. **Once Animation**: Animation only triggers once per page load

## Styling Guidelines

The Counter renders as a `<span>` element (inline):

```tsx
// Large display
<Counter targetValue={5000} className="text-7xl font-bold" />

// Colored
<Counter targetValue={99} className="text-5xl font-bold text-blue-600" />

// With gradient
<Counter targetValue={1250} className="text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600" />
```

## Use Cases

1. **Landing Pages**: Display key metrics and statistics
2. **Dashboards**: Show KPIs and analytics
3. **Feature Sections**: Highlight product benefits with numbers
4. **About Pages**: Company statistics and achievements
5. **Countdown Timers**: Event countdowns and launches

## Browser Support

Works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

Requires:
- Intersection Observer API
- CSS transforms
- Framer Motion compatibility

## Troubleshooting

### Counter Not Animating
1. Ensure Framer Motion is installed
2. Check that component is in viewport
3. Verify `targetValue` prop is provided
4. Make sure page has enough scroll height

### TypeScript Errors
```bash
yarn install
```

### Formatting Issues
Make sure to use the correct formatter:
```tsx
// ✅ Correct
<Counter targetValue={1000} format={Formatter.currency} />

// ❌ Wrong - need to call the function
<Counter targetValue={1000} format={Formatter.currency()} />
```

## File Structure

```
fumadocs/
├── content/
│   └── docs/
│       ├── counter.mdx              # API documentation
│       └── counter-example.mdx      # Live examples
├── src/
│   ├── app/
│   │   └── counter.tsx              # Main component
│   └── mdx-components.tsx           # MDX registry (updated)
└── COUNTER_SETUP.md                 # This file
```

## Next Steps

1. ✅ Documentation is ready
2. ✅ Component is registered in MDX
3. ✅ Examples are available
4. Run `yarn dev` to view the docs
5. Visit `/docs/counter` for API reference
6. Visit `/docs/counter-example` for live examples
7. Customize for your needs

## Resources

- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Fumadocs Documentation](https://fumadocs.dev)
- [React Hooks Reference](https://react.dev/reference/react)

---

**Note**: The Counter component is client-side only (`'use client'`) and requires JavaScript to function.

