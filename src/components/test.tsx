'use client';
import Lenis from 'lenis';

import { cn } from '@/utils/cn';
import {
  MotionValue,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function Showcase({
  data,
  className,
}: {
  data: {
    title: React.ReactNode | string;
    content: React.ReactNode;
  }[];
  className?: string;
}) {
  const totalItems = data.length;
  const ref = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(1);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const top = useTransform(scrollYProgress, [0, 1], ['5%', '95%']);

  useMotionValueEvent(scrollYProgress, 'change', latest => {
    const index = Math.min(Math.floor(latest * totalItems) + 1, totalItems);
    setActiveIndex(index);
  });
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return (
    <div data-slot="showcase" className={cn(className)}>
      <div ref={ref} className="relative">
        <div className="flex flex-col gap-2 text-right absolute w-full h-full max-w-max right-0">
          <div
            data-slot="titles"
            className="sticky top-0 z-20 text-xl lg:text-4xl font-bold pr-4"
          >
            {data.map((item, index) => (
              <Item
                key={index}
                scrollYProgress={scrollYProgress}
                index={index}
                title={item.title}
                totalItems={totalItems}
              />
            ))}
          </div>
        </div>

        <motion.div
          data-slot="counter"
          style={{ top }}
          className="sticky top-0 z-20 md:absolute pl-4"
        >
          <h1 className="md:text-9xl text-6xl font-bold">
            {activeIndex < 10 ? <span>0</span> : ''}
            {activeIndex}
            <span className="text-2xl md:text-4xl">/{totalItems}</span>
          </h1>
        </motion.div>

        <div
          data-slot="content"
          className="flex flex-col gap-2  md:py-[200px] pb-[100px]  z-10 max-w-2xl m-auto"
        >
          {data.map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-300 ${
                activeIndex === index + 1
                  ? 'brightness-100 saturate-100'
                  : 'brightness-50 saturate-0'
              }`}
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const Item = ({
  scrollYProgress,
  index,
  title,
  totalItems,
}: {
  scrollYProgress: MotionValue<number>;
  index: number;
  title: React.ReactNode | string;
  totalItems: number;
}) => {
  const startProgress = index / totalItems;
  const endProgress = (index + 1) / totalItems;

  const initialOffset = index * 10 + 600;

  const translateY = useTransform(
    scrollYProgress,
    [startProgress, endProgress],
    [initialOffset, 50]
  );

  return (
    <motion.h1 data-slot="title" style={{ translateY }}>
      {title}
    </motion.h1>
  );
};
