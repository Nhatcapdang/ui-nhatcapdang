'use client';

import { cn } from '@/utils/cn';
import { motion, useScroll, useTransform } from 'motion/react';
import { forwardRef, useEffect, useRef, useState } from 'react';

export interface ScrollItem {
  id: string;
  left: React.ReactNode;
  right: React.ReactNode;
}

export interface ScrollActiveSectionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  items: ScrollItem[];
  showProgress?: boolean;
}

const ScrollActiveSection = forwardRef<
  HTMLDivElement,
  ScrollActiveSectionProps
>(({ items, showProgress = true, className, ...props }, ref) => {
  const desktopContainerRef = useRef<HTMLDivElement>(null);
  const mobileContainerRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { scrollYProgress } = useScroll({
    target: desktopContainerRef,
    offset: ['center end', 'end end'],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ['15%', '100%']);

  useEffect(() => {
    // Mobile scroll handler
    const handleMobileScroll = () => {
      if (!mobileContainerRef.current) return;

      const container = mobileContainerRef.current;
      const scrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      const itemHeight = 300; // Each item is 500px

      // Calculate which item should be active based on scroll position
      const activeIdx = Math.floor(
        (scrollTop + containerHeight / 2) / itemHeight
      );
      const clampedIndex = Math.max(0, Math.min(activeIdx, items.length - 1));

      setActiveIndex(clampedIndex);
    };

    // Desktop intersection observer
    const desktopObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(
              entry.target as HTMLDivElement
            );
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        threshold: 0.6,
        rootMargin: '-20% 0px -20% 0px',
      }
    );

    // Capture current ref value for cleanup
    const mobileContainer = mobileContainerRef.current;

    // Setup mobile scroll listener
    if (mobileContainer) {
      mobileContainer.addEventListener('scroll', handleMobileScroll);
      handleMobileScroll(); // Set initial state
    }

    // Setup desktop observer
    itemRefs.current.forEach(ref => {
      if (ref) desktopObserver.observe(ref);
    });

    return () => {
      if (mobileContainer) {
        mobileContainer.removeEventListener('scroll', handleMobileScroll);
      }
      desktopObserver.disconnect();
    };
  }, [items]);

  const activeItem = items[activeIndex];

  return (
    <div ref={ref} className={cn('relative', className)} {...props}>
      {/* Mobile Layout */}
      <div className=" md:hidden flex flex-col">
        <div className="overflow-hidden">
          <motion.div
            data-slot="scroll-right-mobile"
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="h-full p-1 flex items-center justify-center"
          >
            {activeItem.right}
          </motion.div>
        </div>
        <div className="overflow-y-auto h-[400px]" ref={mobileContainerRef}>
          <div data-slot="scroll-container-mobile" className="relative">
            {items.map((item, index) => (
              <div
                data-slot="scroll-left-mobile"
                key={item.id}
                ref={el => {
                  if (el) {
                    itemRefs.current[index] = el;
                  }
                }}
                className={cn('min-h-[200px] py-4 flex items-center', {
                  'opacity-100': index === activeIndex,
                  'opacity-60': index !== activeIndex,
                })}
              >
                {item.left}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex gap-8">
        <div
          data-slot="scroll-container"
          ref={desktopContainerRef}
          className="flex-1 relative"
        >
          {showProgress && (
            <div className="absolute left-0 top-0 w-px bg-border/30 h-full">
              <motion.div
                data-slot="scroll-progress"
                className="w-full bg-primary origin-top"
                style={{ height: progressHeight }}
              />
            </div>
          )}

          {items.map((item, index) => (
            <div
              data-slot="scroll-left"
              key={item.id}
              ref={el => {
                if (el) {
                  itemRefs.current[index] = el;
                }
              }}
              className={cn('min-h-[30vh] py-8', {
                'opacity-100': index === activeIndex,
                'opacity-60': index !== activeIndex,
              })}
            >
              {item.left}
            </div>
          ))}
        </div>

        <motion.div
          data-slot="scroll-right"
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex-1 sticky top-[25%] h-fit"
        >
          {activeItem.right}
        </motion.div>
      </div>
    </div>
  );
});

ScrollActiveSection.displayName = 'ScrollActiveSection';

export { ScrollActiveSection };
