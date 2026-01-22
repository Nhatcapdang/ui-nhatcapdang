'use client';
import { cn } from '@/utils/cn';
import { motion, useScroll, useTransform } from 'motion/react';
import { CSSProperties, useRef } from 'react';
import { badgeVariants } from './ui/badge';

export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });
  const progress = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const scrollNumber = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const roundedScrollNumber = useTransform(scrollNumber, value =>
    Math.round(value)
  );

  return (
    <div>
      <motion.div ref={ref}>
        <div className="h-screen w-screen" />
        <div className="h-screen w-screen" />
        <div className="h-screen w-screen" />
        <div className="h-screen w-screen" />
      </motion.div>
      <motion.div
        style={{ '--progress': progress } as CSSProperties}
        className={cn(
          `fixed top-1/4 right-0 w-5 flex flex-col gap-1 before:h-px before:w-full before:bg-muted-foreground before:absolute before:top-(--progress) before:left-0`
        )}
      >
        <motion.span
          className={cn(
            badgeVariants({ variant: 'outline' }),
            'rounded-none border-0 p-0 absolute right-6 -mt-[7px] top-(--progress) before:absolute before:top-0 before:left-0 before:w-full before:h-1'
          )}
        >
          {roundedScrollNumber}
        </motion.span>
        {Array.from({ length: 50 }).map((_, index) => (
          <motion.div
            key={index}
            className="h-px w-full bg-muted-foreground/50"
          />
        ))}
      </motion.div>
    </div>
  );
}
