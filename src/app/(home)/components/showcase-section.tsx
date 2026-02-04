'use client';

import Marquee from '@/components/marquee';
import { AnimatedNumber } from '@/components/number/animated-number';
import ScrollReveal from '@/components/scroll/scroll-reveal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CodeIcon, ExternalLinkIcon } from 'lucide-react';
import {
  MotionValue,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react';
import Link from 'next/link';
import { useRef } from 'react';

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
    [index * 0.25, (index + 1) * 0.25],
    [0.85, 1]
  );

  const rotate = useTransform(
    scrollYProgress,
    [index * 0.25, (index + 1) * 0.25],
    [3, 0]
  );

  const rotateSpring = useSpring(rotate, {
    mass: 3,
    stiffness: 200,
    damping: 50,
  });

  const scaleSpring = useSpring(scale, {
    mass: 3,
    stiffness: 200,
    damping: 50,
  });

  return (
    <motion.div
      className="h-screen sticky top-0 flex items-center justify-center"
      style={{
        scale: scaleSpring,
        rotate: rotateSpring,
        top: `calc(-5vh + ${index * 25 + 50}px)`,
      }}
    >
      {children}
    </motion.div>
  );
};

const MarqueeShowcase = () => (
  <div className="w-full max-w-xl mx-auto p-8 bg-card rounded-2xl border shadow-lg">
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <Badge>Marquee</Badge>
        <Badge variant="outline">Scroll Animation</Badge>
      </div>
      <h3 className="text-2xl font-bold mb-2">Infinite Scrolling Text</h3>
      <p className="text-muted-foreground mb-6">
        Create smooth, infinite scrolling text animations with customizable
        speed and direction.
      </p>
    </div>

    <div className="space-y-4 mb-8">
      <Marquee className="[--duration:20s] text-lg font-medium">
        <span className="mx-8">React Components</span>
        <span className="mx-8">Framer Motion</span>
        <span className="mx-8">TypeScript</span>
        <span className="mx-8">Tailwind CSS</span>
        <span className="mx-8">Modern Design</span>
      </Marquee>

      <Marquee
        reverse
        className="[--duration:25s] text-sm text-muted-foreground"
      >
        <span className="mx-6">Customizable Speed</span>
        <span className="mx-6">Pause on Hover</span>
        <span className="mx-6">Vertical Support</span>
        <span className="mx-6">Responsive</span>
      </Marquee>
    </div>

    <div className="flex gap-3">
      <Button asChild size="sm">
        <Link href="/docs/components/marquee">
          <CodeIcon className="w-4 h-4" />
          View Docs
        </Link>
      </Button>
      <Button asChild variant="outline" size="sm">
        <Link href="/docs/components/marquee#preview">
          <ExternalLinkIcon className="w-4 h-4" />
          Live Demo
        </Link>
      </Button>
    </div>
  </div>
);

const AnimatedNumberShowcase = () => (
  <div className="w-full max-w-xl mx-auto p-8 bg-card rounded-2xl border shadow-lg">
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <Badge>Animated Number</Badge>
        <Badge variant="outline">Spring Physics</Badge>
      </div>
      <h3 className="text-2xl font-bold mb-2">Smooth Number Transitions</h3>
      <p className="text-muted-foreground mb-6">
        Animate numeric values with spring physics for natural, smooth
        transitions.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="text-center p-4 border rounded-lg">
        <AnimatedNumber
          value={12}
          className="text-3xl font-bold text-blue-500"
        />
        <p className="text-sm text-muted-foreground mt-2">Components</p>
      </div>
      <div className="text-center p-4 border rounded-lg">
        <div className="flex items-center justify-center gap-1">
          <span className="text-3xl font-bold text-green-500">$</span>
          <AnimatedNumber
            value={0}
            className="text-3xl font-bold text-green-500"
          />
        </div>
        <p className="text-sm text-muted-foreground mt-2">Cost</p>
      </div>
      <div className="text-center p-4 border rounded-lg">
        <div className="flex items-center justify-center gap-1">
          <AnimatedNumber
            value={100}
            className="text-3xl font-bold text-purple-500"
          />
          <span className="text-3xl font-bold text-purple-500">%</span>
        </div>
        <p className="text-sm text-muted-foreground mt-2">Customizable</p>
      </div>
    </div>

    <div className="flex gap-3">
      <Button asChild size="sm">
        <Link href="/docs/components/number/animated-number">
          <CodeIcon className="w-4 h-4" />
          View Docs
        </Link>
      </Button>
      <Button asChild variant="outline" size="sm">
        <Link href="/docs/components/number/animated-number#preview">
          <ExternalLinkIcon className="w-4 h-4" />
          Live Demo
        </Link>
      </Button>
    </div>
  </div>
);

const ScrollRevealShowcase = () => (
  <div className="w-full max-w-xl mx-auto p-8 bg-card rounded-2xl border shadow-lg">
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <Badge>Scroll Reveal</Badge>
        <Badge variant="outline">Intersection Observer</Badge>
      </div>
      <h3 className="text-2xl font-bold mb-2">Reveal on Scroll</h3>
      <p className="text-muted-foreground mb-6">
        Animate content as it enters the viewport with smooth reveal effects.
      </p>
    </div>

    <div className="space-y-4 mb-8 max-h-40 overflow-y-auto">
      <ScrollReveal>
        <div className="p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border">
          <h4 className="font-semibold mb-2">First Section</h4>
          <p className="text-sm text-muted-foreground">
            Content reveals with overlay slide effect
          </p>
        </div>
      </ScrollReveal>

      <div className="h-8" />

      <ScrollReveal>
        <div className="p-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg border">
          <h4 className="font-semibold mb-2">Second Section</h4>
          <p className="text-sm text-muted-foreground">
            Each element animates independently
          </p>
        </div>
      </ScrollReveal>
    </div>

    <div className="flex gap-3">
      <Button asChild size="sm">
        <Link href="/docs/components/scroll/scroll-reveal">
          <CodeIcon className="w-4 h-4" />
          View Docs
        </Link>
      </Button>
      <Button asChild variant="outline" size="sm">
        <Link href="/docs/components/scroll/scroll-reveal#preview">
          <ExternalLinkIcon className="w-4 h-4" />
          Live Demo
        </Link>
      </Button>
    </div>
  </div>
);

const ParallaxShowcase = () => (
  <div className="w-full max-w-xl mx-auto p-8 bg-card rounded-2xl border shadow-lg">
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <Badge>Parallax Scroll</Badge>
        <Badge variant="outline">Advanced</Badge>
      </div>
      <h3 className="text-2xl font-bold mb-2">Parallax Effects</h3>
      <p className="text-muted-foreground mb-6">
        Create depth and immersion with smooth parallax scrolling effects.
      </p>
    </div>

    <div className="relative h-32 bg-gradient-to-b from-background to-muted/20 rounded-lg border overflow-hidden mb-8">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-4xl font-bold text-muted/20 select-none">
          PARALLAX
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-lg font-medium">Smooth scroll effects</div>
      </div>
    </div>

    <div className="flex gap-3">
      <Button asChild size="sm">
        <Link href="/docs/components/scroll/parallax-scroll-1">
          <CodeIcon className="w-4 h-4" />
          View Docs
        </Link>
      </Button>
      <Button asChild variant="outline" size="sm">
        <Link href="/docs/components/scroll/parallax-scroll-1#preview">
          <ExternalLinkIcon className="w-4 h-4" />
          Live Demo
        </Link>
      </Button>
    </div>
  </div>
);

export default function ShowcaseSection() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const sections = [
    <MarqueeShowcase key="marquee" />,
    <AnimatedNumberShowcase key="number" />,
    <ScrollRevealShowcase key="reveal" />,
    <ParallaxShowcase key="parallax" />,
  ];

  return (
    <section ref={container} className="relative">
      <div className="text-center py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Component Showcase
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of animated components designed to make your
            projects stand out
          </p>
        </motion.div>
      </div>

      {sections.map((section, index) => (
        <Section key={index} index={index} scrollYProgress={scrollYProgress}>
          {section}
        </Section>
      ))}

      <div className="h-20" />
    </section>
  );
}
