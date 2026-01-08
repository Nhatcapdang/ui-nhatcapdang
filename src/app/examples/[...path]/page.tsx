import { getComponent } from '@/lib/component-registry';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ path: string[] }>;
}

export default async function ExamplePage(props: PageProps) {
  const params = await props.params;
  const pathParts = params.path;

  if (!pathParts || pathParts.length === 0) {
    notFound();
  }

  // Convert path array to file path
  // e.g., ['src', 'components', 'ui.tsx'] -> '/src/components/ui.tsx'
  const filePath = `/${pathParts.join('/')}`;

  const Component = await getComponent(filePath);

  if (!Component) {
    notFound();
  }

  return <Component />;
}
