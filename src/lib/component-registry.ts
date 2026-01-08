/**
 * Component registry for example previews
 * Maps file paths to their component exports
 */

import UI from '@/components/ui';

export const componentRegistry: Record<string, React.ComponentType> = {
  '/src/components/ui.tsx': UI,
  // Add more component mappings here as needed
};

export function getComponent(path: string): React.ComponentType | null {
  return componentRegistry[path] || null;
}
