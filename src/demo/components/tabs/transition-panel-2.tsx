'use client';
import { TransitionPanel } from '@/components/transition-panel';
import React, { useEffect, useState } from 'react';
import { useMeasure } from 'react-use';
function Button({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="relative flex h-8 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 bg-transparent px-2 text-sm text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:text-zinc-50 dark:hover:bg-zinc-800"
    >
      {children}
    </button>
  );
}
export default function TransitionPanelCard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const FEATURES = [
    {
      title: 'Brand',
      description:
        'Develop a distinctive brand identity with tailored logos and guidelines to ensure consistent messaging across all platforms.',
    },
    {
      title: 'Product',
      description:
        'Design and refine products that excel in user experience, meeting needs effectively and creating memorable interactions. We specialize in web applications.',
    },
    {
      title: 'Website',
      description:
        'Create impactful websites that combine beautiful aesthetics with functional design, ensuring a superior online presence.',
    },
    {
      title: 'Design System',
      description:
        'Develop a design system that unifies your brand identity, ensuring consistency across all platforms and products.',
    },
  ];

  const handleSetActiveIndex = (newIndex: number) => {
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActiveIndex(newIndex);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 364 : -364,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 364 : -364,
      opacity: 0,
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
    }),
  };

  return (
    <section className="transform-center">
      <div className="max-w-sm overflow-hidden rounded-xl border bg-card m-auto">
        <TransitionPanel
          activeIndex={activeIndex}
          variants={{
            enter: direction => ({
              x: direction > 0 ? 364 : -364,
              opacity: 0,
              minHeight: 'max-content',
              position: 'initial',
            }),
            center: {
              zIndex: 1,
              x: 0,
              opacity: 1,
              minHeight: 'max-content',
            },
            exit: direction => ({
              zIndex: 0,
              x: direction < 0 ? 364 : -364,
              opacity: 0,
              position: 'absolute',
              top: 0,
              width: '100%',
              minHeight: 'max-content',
            }),
          }}
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          custom={direction}
        >
          {FEATURES.map((feature, index) => (
            <div key={index} className="px-4 pt-4 h-max">
              <h3 className="mb-0.5 font-medium text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </TransitionPanel>
        <div className="flex justify-between p-4 ">
          {activeIndex > 0 ? (
            <Button onClick={() => handleSetActiveIndex(activeIndex - 1)}>
              Previous
            </Button>
          ) : (
            <div />
          )}
          <Button
            onClick={() =>
              activeIndex === FEATURES.length - 1
                ? null
                : handleSetActiveIndex(activeIndex + 1)
            }
          >
            {activeIndex === FEATURES.length - 1 ? 'Close' : 'Next'}
          </Button>
        </div>
      </div>
    </section>
  );
}
