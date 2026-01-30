'use client';

import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import Lenis from 'lenis';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const images = [
  'https://cataas.com/cat/says/huhu',
  'https://cataas.com/cat/says/hello',
  'https://cataas.com/cat/says/haha',
  'https://cataas.com/cat/says/hehe',
  'https://cataas.com/cat/says/hoho',
  'https://cataas.com/cat/says/huhu',
  'https://cataas.com/cat/says/hiahia',
  'https://cataas.com/cat/says/hahahaha',
  'https://cataas.com/cat/says/hahahahahaha',
  'https://cataas.com/cat/says/hahahahahahahaha',
  'https://cataas.com/cat/says/hahahahahahahahahaha',
  'https://cataas.com/cat/says/haha',
];

export default function ParallaxScroll3() {
  const gallery = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start'],
  });

  const { height, width } = dimension;

  // Responsive parallax multipliers based on screen size
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  const getMultiplier = (base: number) => {
    if (isMobile) return base * 0.6; // Reduced parallax on mobile
    if (isTablet) return base * 0.8; // Moderate parallax on tablet
    return base; // Full parallax on desktop
  };

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, height * getMultiplier(2)],
  );
  const y2 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, height * getMultiplier(3.3)],
  );
  const y3 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, height * getMultiplier(1.25)],
  );
  const y4 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, height * getMultiplier(3)],
  );

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div
      ref={gallery}
      className="relative flex h-[120vh] sm:h-[140vh] md:h-[160vh] lg:h-[175vh] gap-1 sm:gap-2 md:gap-4 lg:gap-[2vw] overflow-hidden px-2 sm:px-4 md:px-6 lg:px-8"
    >
      {/* Mobile: 2 columns, Tablet: 3 columns, Desktop: 4 columns */}
      <div className="flex w-full gap-1 sm:gap-2 md:gap-4 lg:gap-[2vw]">
        <Column
          images={[images[0], images[1], images[2]]}
          y={y}
          className="flex md:flex"
        />
        <Column
          images={[images[3], images[4], images[5]]}
          y={y2}
          className="flex md:flex"
        />
        <Column
          images={[images[6], images[7], images[8]]}
          y={y3}
          className="hidden md:flex"
        />
        <Column
          images={[images[9], images[10], images[11]]}
          y={y4}
          className="hidden lg:flex"
        />
      </div>
    </div>
  );
}

interface ColumnProps {
  images: string[];
  y: MotionValue<number>;
  className?: string;
}

const Column = ({ images, y, className }: ColumnProps) => {
  return (
    <motion.div
      className={`
        relative flex h-full flex-col
        w-1/2 md:w-1/3 lg:w-1/4
        min-w-[120px] sm:min-w-[150px] md:min-w-[200px] lg:min-w-[250px]
        gap-1 sm:gap-2 md:gap-4 lg:gap-[2vw]
        -top-[20%] sm:-top-[30%] md:-top-[40%] lg:-top-[45%]
        first:-top-[50%] first:sm:-top-[30%] first:md:-top-[40%] first:lg:-top-[45%]
        nth-2:-top-[75%] nth-2:sm:-top-[60%] nth-2:md:-top-[80%] nth-2:lg:-top-[95%]
        nth-3:-top-[20%] nth-3:sm:-top-[30%] nth-3:md:-top-[40%] nth-3:lg:-top-[45%]
        nth-4:-top-[35%] nth-4:sm:-top-[50%] nth-4:md:-top-[65%] nth-4:lg:-top-[75%]
        ${className}
      `}
      style={{ y }}
    >
      {images.map((src, i) => (
        <div
          key={i}
          className="relative h-full w-full overflow-hidden rounded-sm sm:rounded md:rounded-lg aspect-3/4 sm:aspect-4/5 md:aspect-3/4"
        >
          <Image
            src={src}
            alt={`Gallery image ${i + 1}`}
            className="pointer-events-none object-cover"
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            priority={i === 0}
          />
        </div>
      ))}
    </motion.div>
  );
};
