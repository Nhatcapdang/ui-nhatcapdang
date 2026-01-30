'use client';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function SectionSticky({
  children,
}: {
  children: React.ReactNode[];
}) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <main ref={container}>
      {children.map((child, index) => (
        <Section key={index} index={index} scrollYProgress={scrollYProgress}>
          {child}
        </Section>
      ))}
    </main>
  );
}

const Section = ({
  index,
  scrollYProgress,
  children,
}: {
  children: React.ReactNode;
  index: number;
  scrollYProgress: MotionValue<number>;
}) => {
  const scale = useTransform(
    scrollYProgress,
    [index * 0.2, (index + 1) * 0.2],
    [0.8, 1],
  );

  return (
    <motion.div
      className="h-screen sticky top-0 "
      style={{ scale, top: `calc(-5vh + ${index * 40 + 50}px)` }}
    >
      {children}
    </motion.div>
  );
};
