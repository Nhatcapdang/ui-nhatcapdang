'use client';

import { cn } from '@/lib/cn';
import {
  MotionValue,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useRef, useState } from 'react';

const TOTAL_ITEMS = 10;

export default function Test() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(1);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const top = useTransform(scrollYProgress, [0, 1], ['5%', '95%']);
  const topSpring = useSpring(top, {
    mass: 1,
    stiffness: 500,
    damping: 50,
  });
  const margin = useTransform(scrollYProgress, [0, 1], ['0', '200px']);
  const marginSpring = useSpring(margin, {
    mass: 1,
    stiffness: 500,
    damping: 50,
  });
  useMotionValueEvent(scrollYProgress, 'change', latest => {
    const index = Math.min(Math.floor(latest * TOTAL_ITEMS) + 1, TOTAL_ITEMS);
    setActiveIndex(index);
  });

  return (
    <div>
      <div ref={ref} className="grid grid-cols-3">
        <div className="col-span-1 relative">
          <motion.div className="absolute" style={{ top: topSpring }}>
            <h1 className="text-9xl font-bold">
              {activeIndex < 10 ? <span>0</span> : ''}
              {activeIndex}
              <span className="text-4xl">/{TOTAL_ITEMS}</span>
            </h1>
          </motion.div>
        </div>
        <div className="col-span-1 flex flex-col gap-2 py-[500px]">
          {Array.from({ length: TOTAL_ITEMS }).map((_, index) => (
            <div
              key={index}
              className={`h-[400px] w-full transition-colors ${
                activeIndex === index + 1 ? 'bg-blue-500' : 'bg-red-500'
              }`}
            >
              {index + 1}
            </div>
          ))}
        </div>
        <div className="col-span-1 flex flex-col gap-2  text-right  h-screen sticky top-0">
          {/* {Array.from({ length: TOTAL_ITEMS }).map((_, index) => (
            <motion.h1
              key={index}
              style={{
                marginTop: activeIndex === index + 1 ? marginSpring : '0',
                marginBottom: activeIndex === index + 1 ? marginSpring : '0',
              }}
              className={cn('w-full transition-colors text-4xl font-bold')}
            >
              {index + 1}
            </motion.h1>
          ))} */}
          {Array.from({ length: TOTAL_ITEMS }).map((_, index) => (
            <Item
              key={index}
              scrollYProgress={scrollYProgress}
              index={index}
              activeIndex={activeIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const Item = ({
  scrollYProgress,
  index,
  activeIndex,
}: {
  scrollYProgress: MotionValue<number>;
  index: number;
  activeIndex: number;
}) => {
  const startProgress = index / TOTAL_ITEMS;
  const endProgress = (index + 1) / TOTAL_ITEMS;
  const y = useTransform(
    scrollYProgress,
    [startProgress, endProgress],
    [index * 100, (index + 1) * 100]
  );
  return (
    <motion.div className=" w-full transition-colors " style={{ y }}>
      {index + 1}
    </motion.div>
  );
};
