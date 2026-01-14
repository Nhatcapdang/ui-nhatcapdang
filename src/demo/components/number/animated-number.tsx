'use client';

import { AnimatedNumber } from '@/components/number/animated-number';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { useEffect, useEffectEvent, useState } from 'react';

export default function AnimatedNumberDemo() {
  const [value, setValue] = useState(0);

  const handleIncrement = () => setValue(prev => prev + 100);
  const handleDecrement = () => setValue(prev => Math.max(0, prev - 100));
  const handleRandom = () => setValue(Math.floor(Math.random() * 10000));

  const handleSetValue = useEffectEvent(() => {
    setValue(100);
  });

  useEffect(() => {
    handleSetValue();
  }, []);

  return (
    <div className="transform-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-xs mx-auto">
        <div className="text-center">
          <h4 className="text-sm font-medium text-muted-foreground mb-2">
            Default Spring
          </h4>
          <Badge variant="ghost">
            <Star className="text-yellow-500" />
            <AnimatedNumber value={value} className="text-3xl font-bold" />
          </Badge>
        </div>

        <div className="text-center ">
          <h4 className="text-sm font-medium text-muted-foreground mb-2">
            Bouncy Animation
          </h4>
          <Badge variant="ghost" className="text-3xl font-bold">
            <AnimatedNumber
              value={value}
              springOptions={{
                bounce: 0.4,
                duration: 1.5,
              }}
            />
          </Badge>
        </div>

        <div className="text-center">
          <h4 className="text-sm font-medium text-muted-foreground mb-2">
            Slow & Smooth
          </h4>
          <Badge variant="ghost" className="text-3xl font-bold">
            <AnimatedNumber
              value={value}
              springOptions={{
                stiffness: 50,
                damping: 20,
              }}
            />
          </Badge>
        </div>

        <div className="text-center">
          <h4 className="text-sm font-medium text-muted-foreground mb-2">
            Currency Format
          </h4>
          <Badge variant="ghost" className="text-3xl font-bold">
            $<AnimatedNumber value={value} />
          </Badge>
        </div>

        <div className="col-span-2 flex gap-4 justify-evenly">
          <Button onClick={handleIncrement}>+100</Button>
          <Button variant="secondary" onClick={handleDecrement}>
            -100
          </Button>
          <Button variant="outline" onClick={handleRandom}>
            Random
          </Button>
        </div>
      </div>
    </div>
  );
}
