'use client';
import { TransitionPanel } from '@/components/transition-panel';
import { useState } from 'react';

function TabsTransitionPanel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const ITEMS = [
    {
      title: 'Aesthetics',
      subtitle: 'Refining Visual Harmony',
      content:
        'Explore the principles of motion aesthetics that enhance the visual appeal of interfaces. Learn to balance timing, easing, and the flow of motion to create seamless user experiences.',
    },
    {
      title: 'Art',
      subtitle: 'Narrative and Expression',
      content:
        'Delve into how motion can be used as an artistic tool to tell stories and evoke emotions, making digital interactions feel more human and expressive.',
    },
    {
      title: 'Technique',
      subtitle: 'Mastering Motion Tools',
      content:
        'Gain proficiency in advanced techniques such as physics-based animations, 3D transformations, and complex sequencing to elevate your design skills and implementation.',
    },
  ];

  return (
    <div className="transform-center">
      <div>
        <div className="mb-4 flex space-x-2">
          {ITEMS.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`rounded-md px-3 py-1 text-sm font-medium ${
                activeIndex === index
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-accent text-accent-foreground'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="overflow-hidden border-t border-border">
          <TransitionPanel
            activeIndex={activeIndex}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            variants={{
              enter: { opacity: 0, y: -50, filter: 'blur(4px)' },
              center: { opacity: 1, y: 0, filter: 'blur(0px)' },
              exit: { opacity: 0, y: 50, filter: 'blur(4px)' },
            }}
          >
            {ITEMS.map((item, index) => (
              <div key={index} className="py-2">
                <h3 className="mb-2 font-medium text-foreground">
                  {item.subtitle}
                </h3>
                <p className="text-muted-foreground">{item.content}</p>
              </div>
            ))}
          </TransitionPanel>
        </div>
      </div>
    </div>
  );
}
export default TabsTransitionPanel;
