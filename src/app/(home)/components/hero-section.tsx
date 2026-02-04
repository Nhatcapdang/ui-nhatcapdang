'use client';

import { Button } from '@/components/ui/button';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import Link from 'next/link';
import { Suspense, useRef } from 'react';

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const ySpring = useSpring(y, {
    stiffness: 100,
    damping: 30,
    mass: 1,
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div
      ref={ref}
      className="relative h-screen overflow-hidden bg-gradient-to-b from-background to-muted/20"
    >
      {/* Background text overlays */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.h1
          style={{ y: ySpring }}
          className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-bold text-muted/10 select-none"
        >
          NHAT
        </motion.h1>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center pointer-events-none">
        <motion.h1
          style={{ y: ySpring }}
          className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-bold text-muted/10 select-none"
        >
          DANG
        </motion.h1>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl w-full"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent leading-tight">
            React Components For Creative Developers
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Highly customizable animated components that make your React
            projects truly stand out
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto text-base px-6 sm:px-8 py-3"
            >
              <Link href="/docs">Get Started</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-base px-6 sm:px-8 py-3"
            >
              <Link href="/docs/components">View Components</Link>
            </Button>
          </div>

          <div className="mt-8 sm:mt-12 text-xs sm:text-sm text-muted-foreground">
            <p>Free • Open Source • Fully Customizable</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
