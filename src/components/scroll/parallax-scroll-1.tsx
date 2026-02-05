'use client';

import { cn } from '@/utils/cn';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useRef } from 'react';

interface ParallaxScroll1Props {
  offset?: ['start center', 'center start'] | ['center', 'center'];
  children: React.ReactNode;
  className?: string;
}
export default function ParallaxScroll1({
  offset = ['center', 'center'],
  children,
  className,
}: ParallaxScroll1Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  const y = useTransform(scrollYProgress, [0, 1], ['15%', '-5%']);
  const ySpring = useSpring(y, {
    stiffness: 100,
    damping: 10,
    mass: 1,
  });

  return (
    <div
      ref={ref}
      className={cn('relative h-[90vh]  overflow-hidden', className)}
    >
      <h1 className="md:text-8xl xs:text-6xl text-4xl font-bold text-center">
        NHATCAPDANG
      </h1>
      <motion.div
        style={{ y: ySpring }}
        className="h-[82vh] absolute top-0 inset-x-0 z-10"
      >
        {children}
      </motion.div>
      <h1 className="md:text-8xl xs:text-6xl text-4xl font-bold text-center absolute bottom-0 left-0 right-0">
        NHATCAPDANG
      </h1>
    </div>
  );
}
