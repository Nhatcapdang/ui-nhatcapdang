'use client';
import { cn } from '@/utils/cn';
import {
  HTMLMotionProps,
  motion,
  SpringOptions,
  useSpring,
  useTransform,
} from 'motion/react';
import { forwardRef, useEffect } from 'react';

export type AnimatedNumberProps = {
  className?: string;
  springOptions?: SpringOptions;
} & HTMLMotionProps<'span'>;

const Component = forwardRef<HTMLSpanElement, AnimatedNumberProps>(
  ({ children, ...props }, ref) => {
    return (
      <motion.span ref={ref} {...props}>
        {children}
      </motion.span>
    );
  }
);
Component.displayName = 'Component';

export function AnimatedNumber({
  value,
  className,
  springOptions,
  ...props
}: AnimatedNumberProps & { value: number }) {
  const spring = useSpring(value, springOptions);
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return (
    <Component className={cn('tabular-nums', className)} {...props}>
      {display}
    </Component>
  );
}
