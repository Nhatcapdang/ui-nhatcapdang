'use client';

import { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion';
import { cn } from '@/utils/cn';

interface VelocityTextProps {
  repeat?: number;
  reverse?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function VelocityText({
  children,
  repeat = 1,
  reverse = false,
  className,
}: VelocityTextProps) {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start 90%', 'start 10%'],
  });

  const scrollVelocity = useVelocity(scrollYProgress);

  const skewXRaw = useTransform(
    scrollVelocity,
    [-0.5, 0.5],
    reverse ? ['-45deg', '45deg'] : ['45deg', '-45deg']
  );
  const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });

  const xRaw = useTransform(
    scrollYProgress,
    reverse ? [1, 0] : [0, 1],
    [-4000, 0]
  );
  const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });

  return (
    <div ref={targetRef} className={cn('overflow-hidden', className)}>
      <motion.div style={{ skewX, x }} className="flex ">
        {Array.from({ length: repeat }, (_, index) => (
          <span key={index}>{children}</span>
        ))}
      </motion.div>
    </div>
  );
}
