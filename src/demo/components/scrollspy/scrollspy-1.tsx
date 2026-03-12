'use client';

import { Scrollspy } from '@/components/scroll/scrollspy';
import { useRef } from 'react';

const DEMO_CONTENT = [
  {
    id: 'overview',
    title: 'Overview',
    description:
      'Scrollspy keeps a navigation list in sync with the section currently closest to the top of a scroll container.',
  },

  {
    id: 'features',
    title: 'Features',
    description:
      'Scrollspy keeps a navigation list in sync with the section currently closest to the top of a scroll container.',
  },

  {
    id: 'setup',
    title: 'Setup',
    description:
      'Scrollspy keeps a navigation list in sync with the section currently closest to the top of a scroll container. This is a setup section. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  },

  {
    id: 'api',
    title: 'API',
    description:
      'Scrollspy keeps a navigation list in sync with the section currently closest to the top of a scroll container.',
  },
];
function ScrollspyDemo() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="mx-auto max-w-5xl p-4 md:p-8">
      <div className="grid gap-6 md:grid-cols-[220px_1fr]">
        <Scrollspy
          className="flex gap-2 md:flex-col"
          targetRef={scrollContainerRef}
          offset={60}
        >
          {DEMO_CONTENT.map(item => (
            <a
              key={item.id}
              data-scrollspy-anchor={item.id}
              href={`#${item.id}`}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground data-[active=true]:bg-muted data-[active=true]:text-foreground"
            >
              {item.title}
            </a>
          ))}
        </Scrollspy>

        <div
          ref={scrollContainerRef}
          className="h-[420px] space-y-12 overflow-y-auto rounded-xl border p-6"
        >
          {DEMO_CONTENT.map(item => (
            <section key={item.id} id={item.id} className="h-50">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm leading-7 text-muted-foreground">
                {item.description}
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ScrollspyDemo;
