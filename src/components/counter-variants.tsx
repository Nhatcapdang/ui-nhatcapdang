'use client';

import Counter, { Formatter } from '@/components/counter';

interface CounterProps {
  targetValue: number;
  direction?: 'up' | 'down';
  delay?: number;
  className?: string;
}

// Currency Counter
export function CurrencyCounter({
  targetValue,
  direction,
  delay,
  className,
}: CounterProps) {
  return (
    <Counter
      targetValue={targetValue}
      format={Formatter.currency}
      direction={direction}
      delay={delay}
      className={className}
    />
  );
}

// Percentage Counter
export function PercentageCounter({
  targetValue,
  direction,
  delay,
  className,
}: CounterProps) {
  const percentFormat = (value: number) => `${value.toFixed(0)}%`;

  return (
    <Counter
      targetValue={targetValue}
      format={percentFormat}
      direction={direction}
      delay={delay}
      className={className}
    />
  );
}

// Decimal Percentage Counter (e.g., 98.7%)
export function DecimalPercentageCounter({
  targetValue,
  direction,
  delay,
  className,
}: CounterProps) {
  const percentFormat = (value: number) => `${value.toFixed(1)}%`;

  return (
    <Counter
      targetValue={targetValue}
      format={percentFormat}
      direction={direction}
      delay={delay}
      className={className}
    />
  );
}

// Basic Counter with default number formatting
export function BasicCounter({
  targetValue,
  direction,
  delay,
  className,
}: CounterProps) {
  return (
    <Counter
      targetValue={targetValue}
      format={Formatter.number}
      direction={direction}
      delay={delay}
      className={className}
    />
  );
}
