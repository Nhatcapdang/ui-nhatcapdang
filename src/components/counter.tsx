'use client';

import { cn } from '@/utils/cn';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface CounterProps {
  /**
   * A function to format the counter value. By default, it will format the
   * number with commas.
   */
  format?: (value: number) => string;

  /**
   * The target value of the counter.
   */
  targetValue: number;

  /**
   * The direction of the counter. If "up", the counter will start from 0 and
   * go up to the target value. If "down", the counter will start from the target
   * value and go down to 0.
   */
  direction?: 'up' | 'down';

  /**
   * The delay in milliseconds before the counter starts counting.
   */
  delay?: number;

  /**
   * Additional classes for the counter.
   */
  className?: string;
}

export const Formatter = {
  number: (value: number) =>
    Intl.NumberFormat('en-US').format(+value.toFixed(0)),
  currency: (value: number) =>
    Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
      +value.toFixed(0)
    ),
};

export default function Counter({
  format = Formatter.number,
  targetValue,
  direction = 'up',
  delay = 0,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isGoingUp = direction === 'up';
  const motionValue = useMotionValue(isGoingUp ? 0 : targetValue);

  const springValue = useSpring(motionValue, {
    damping: undefined, // Reduced for quicker animation
    stiffness: 100, // Increased for more rigidity
  });
  const isInView = useInView(ref, { margin: '0px', once: true });

  useEffect(() => {
    if (!isInView) {
      return;
    }

    const timer = setTimeout(() => {
      motionValue.set(isGoingUp ? targetValue : 0);
    }, delay);

    return () => clearTimeout(timer);
  }, [isInView, delay, isGoingUp, targetValue, motionValue]);

  useEffect(() => {
    springValue.on('change', (value) => {
      if (ref.current) {
        console.log('value', value);
        ref.current.textContent = format ? format(value) : value.toString();
      }
    });
  }, [springValue, format]);

  return <span ref={ref} className={cn(className)} />;
}
