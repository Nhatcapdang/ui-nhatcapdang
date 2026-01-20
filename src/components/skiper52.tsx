'use client';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });
  const progress = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div>
      <motion.div ref={ref}>
        <div className="h-screen w-screen" />
        <div className="h-screen w-screen" />
        <div className="h-screen w-screen" />
        <div className="h-screen w-screen" />
      </motion.div>
      <motion.div
        style={{ width: progress }}
        className="bg-primary fixed top-0 left-0 right-0 h-2"
      />
      <motion.div
        // style={{ width: progress }}
        className=" fixed top-1/2 right-0 h-1/10 w-5 bg-red-400 flex flex-col gap-1"
      >
        <div className="h-0.5 bg-blue-400		" />
        <div className="h-0.5 bg-blue-400" />
        <div className="h-0.5 bg-blue-400" />
      </motion.div>
    </div>
  );
}
