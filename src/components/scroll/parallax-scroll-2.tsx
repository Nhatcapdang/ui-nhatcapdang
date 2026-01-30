'use client';

import {
  cancelFrame,
  frame,
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import Image from 'next/image';
import ReactLenis, { LenisRef } from 'lenis/react';
import { useEffect, useRef } from 'react';

const projects = [
  {
    title: 'Project 1',
    src: 'https://cataas.com/cat',
  },
  {
    title: 'Project 2',
    src: 'https://cataas.com/cat',
  },
  {
    title: 'Project 3',
    src: 'https://cataas.com/cat',
  },
  {
    title: 'Project 4',
    src: 'https://cataas.com/cat',
  },
  {
    title: 'Project 5',
    src: 'https://cataas.com/cat',
  },
];

const StickyCard = ({
  i,
  title,
  src,
  progress,
  range,
  targetScale,
}: {
  i: number;
  title: string;
  src: string;
  progress: any;
  range: [number, number];
  targetScale: number;
}) => {
  const container = useRef<HTMLDivElement>(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-0 flex items-center justify-center"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 20 + 250}px)`,
        }}
        className="rounded-4xl relative -top-1/4 flex origin-top flex-col overflow-hidden"
      >
        <Image
          src={src}
          alt={title}
          width={500}
          height={300}
          className="h-full w-full object-cover"
          priority
        />
      </motion.div>
    </div>
  );
};

export default function ParallaxScroll2() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      <main
        ref={container}
        className="relative flex w-full flex-col items-center justify-center pb-[100vh] "
      >
        {projects.map((project, i) => {
          const targetScale = Math.max(
            0.5,
            1 - (projects.length - i - 1) * 0.1,
          );
          return (
            <StickyCard
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </ReactLenis>
  );
}
