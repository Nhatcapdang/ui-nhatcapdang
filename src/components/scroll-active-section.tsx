'use client';

import { cn } from '@/utils/cn';
import { motion, useScroll, useTransform } from 'motion/react';
import { forwardRef, useEffect, useRef, useState } from 'react';

export interface ScrollItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  content?: React.ReactNode;
}

export interface ScrollActiveSectionProps {
  items: ScrollItem[];
  className?: string;
  leftClassName?: string;
  rightClassName?: string;
  itemClassName?: string;
  activeItemClassName?: string;
  showProgress?: boolean;
}

const ScrollActiveSection = forwardRef<
  HTMLDivElement,
  ScrollActiveSectionProps
>(
  (
    {
      items,
      className,
      leftClassName,
      rightClassName,
      itemClassName,
      activeItemClassName,
      showProgress = true,
      ...props
    },
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ['start center', 'end center'],
    });

    const progressHeight = useTransform(
      scrollYProgress,
      [0, 1],
      ['0%', '100%']
    );

    useEffect(() => {
      const observer = new IntersectionObserver(
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

      itemRefs.current.forEach(ref => {
        if (ref) observer.observe(ref);
      });

      return () => observer.disconnect();
    }, []);

    const activeItem = items[activeIndex];

    return (
      <div
        ref={ref}
        className={cn(
          'relative min-h-screen w-full overflow-hidden',
          className
        )}
        {...props}
      >
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left side - Scrollable content */}
            <div
              ref={containerRef}
              className={cn('relative space-y-16 lg:space-y-24', leftClassName)}
            >
              {showProgress && (
                <div className="absolute left-0 top-0 w-px bg-border/30 h-full hidden lg:block">
                  <motion.div
                    className="w-full bg-primary origin-top"
                    style={{ height: progressHeight }}
                  />
                </div>
              )}

              {items.map((item, index) => (
                <div
                  key={item.id}
                  ref={el => (itemRefs.current[index] = el)}
                  className={cn(
                    'relative lg:pl-8 transition-all duration-500',
                    index === activeIndex
                      ? 'opacity-100'
                      : 'opacity-60 lg:opacity-100',
                    itemClassName
                  )}
                >
                  {showProgress && (
                    <div
                      className={cn(
                        'absolute left-0 top-6 w-2 h-2 rounded-full border-2 border-background hidden lg:block transition-all duration-300',
                        index === activeIndex
                          ? 'bg-primary scale-125'
                          : 'bg-muted'
                      )}
                    />
                  )}

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-semibold text-foreground">
                        {item.title}
                      </h3>
                      {item.subtitle && (
                        <p className="text-lg text-muted-foreground">
                          {item.subtitle}
                        </p>
                      )}
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">
                      {item.description}
                    </p>
                    {item.content && <div className="pt-4">{item.content}</div>}
                  </div>
                </div>
              ))}
            </div>

            {/* Right side - Active item display */}
            <div className={cn('lg:sticky lg:top-24 lg:h-fit', rightClassName)}>
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className={cn(
                  'relative rounded-2xl border bg-card overflow-hidden',
                  activeItemClassName
                )}
              >
                {activeItem.image ? (
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={activeItem.image}
                      alt={activeItem.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h4 className="text-xl font-semibold mb-1">
                        {activeItem.title}
                      </h4>
                      {activeItem.subtitle && (
                        <p className="text-sm opacity-90">
                          {activeItem.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="aspect-video bg-linear-to-br from-primary/20 via-primary/10 to-transparent flex items-center justify-center">
                    <div className="text-center space-y-2 p-8">
                      <h4 className="text-2xl font-semibold text-foreground">
                        {activeItem.title}
                      </h4>
                      {activeItem.subtitle && (
                        <p className="text-muted-foreground">
                          {activeItem.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                <div className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {activeItem.description}
                  </p>

                  {/* Progress indicator */}
                  <div className="flex items-center gap-2 mt-6">
                    {items.map((_, index) => (
                      <div
                        key={index}
                        className={cn(
                          'h-1 rounded-full transition-all duration-300',
                          index === activeIndex
                            ? 'bg-primary flex-1'
                            : 'bg-muted w-8'
                        )}
                      />
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
                    <span>
                      {activeIndex + 1} of {items.length}
                    </span>
                    <span>{activeItem.title}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

ScrollActiveSection.displayName = 'ScrollActiveSection';

export { ScrollActiveSection };
