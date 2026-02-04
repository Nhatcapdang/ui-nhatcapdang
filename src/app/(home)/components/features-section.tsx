'use client';

import Marquee from '@/components/marquee';
import { AnimatedNumber } from '@/components/number/animated-number';
import {
  ScrollActiveSection,
  type ScrollItem,
} from '@/components/scroll/scroll-active-section';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  HeartIcon,
  PackageIcon,
  SettingsIcon,
  SparklesIcon,
} from 'lucide-react';
import { motion } from 'motion/react';

// Mini demo components for the features
const FreeDemo = () => (
  <div className="p-6 border rounded-lg bg-card">
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <HeartIcon className="w-5 h-5 text-red-500" />
        <Badge variant="secondary">MIT License</Badge>
      </div>
      <div className="text-sm text-muted-foreground">
        <p>✓ Use in personal projects</p>
        <p>✓ Use in commercial projects</p>
        <p>✓ Modify and redistribute</p>
        <p>✓ No attribution required</p>
      </div>
    </div>
  </div>
);

const PropFirstDemo = () => (
  <div className="p-6 border rounded-lg bg-card">
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <SettingsIcon className="w-5 h-5 text-blue-500" />
        <Badge>Customizable</Badge>
      </div>
      <div className="space-y-2 text-sm">
        <div className="font-mono bg-muted p-2 rounded text-xs">
          {`<AnimatedNumber 
  value={1000}
  springOptions={{
    bounce: 0.4,
    duration: 1.5
  }}
/>`}
        </div>
        <div className="text-center">
          <AnimatedNumber value={1000} className="text-2xl font-bold" />
        </div>
      </div>
    </div>
  </div>
);

const ModularDemo = () => (
  <div className="p-6 border rounded-lg bg-card">
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <PackageIcon className="w-5 h-5 text-green-500" />
        <Badge variant="outline">Tree-shakable</Badge>
      </div>
      <div className="text-sm space-y-2">
        <div className="font-mono bg-muted p-2 rounded text-xs">
          npm install @nhatcapdang/marquee
        </div>
        <p className="text-muted-foreground">Install only what you need</p>
      </div>
    </div>
  </div>
);

const AnimationsDemo = () => (
  <div className="p-6 border rounded-lg bg-card overflow-hidden">
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <SparklesIcon className="w-5 h-5 text-purple-500" />
        <Badge variant="secondary">Smooth Animations</Badge>
      </div>
      <div className="h-16 flex items-center">
        <Marquee className="text-sm">
          <span className="mx-4">Scroll-based animations</span>
          <span className="mx-4">Spring physics</span>
          <span className="mx-4">Parallax effects</span>
          <span className="mx-4">Reveal animations</span>
        </Marquee>
      </div>
    </div>
  </div>
);

const features: ScrollItem[] = [
  {
    id: 'free',
    left: (
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-red-500/10">
            <HeartIcon className="w-6 h-6 text-red-500" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Free For All</h3>
            <p className="text-muted-foreground">
              You own the code, and it&apos;s free to use in your projects
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>• MIT licensed - use anywhere, anytime</p>
          <p>• No hidden costs or subscription fees</p>
          <p>• Full source code access</p>
          <p>• Modify and redistribute freely</p>
        </div>
      </div>
    ),
    right: <FreeDemo />,
  },
  {
    id: 'prop-first',
    left: (
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-blue-500/10">
            <SettingsIcon className="w-6 h-6 text-blue-500" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Prop-First Approach</h3>
            <p className="text-muted-foreground">
              Easy customization through thoughtfully exposed props
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>• Intuitive API design</p>
          <p>• TypeScript support out of the box</p>
          <p>• Sensible defaults with full control</p>
          <p>• Consistent prop patterns across components</p>
        </div>
      </div>
    ),
    right: <PropFirstDemo />,
  },
  {
    id: 'modular',
    left: (
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-green-500/10">
            <PackageIcon className="w-6 h-6 text-green-500" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Fully Modular</h3>
            <p className="text-muted-foreground">
              Install strictly what you need, React Bits is not a dependency
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>• Tree-shakable components</p>
          <p>• No monolithic dependencies</p>
          <p>• Minimal bundle impact</p>
          <p>• Independent component updates</p>
        </div>
      </div>
    ),
    right: <ModularDemo />,
  },
  {
    id: 'animations',
    left: (
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-purple-500/10">
            <SparklesIcon className="w-6 h-6 text-purple-500" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Modern Animations</h3>
            <p className="text-muted-foreground">
              Smooth, performant animations powered by Framer Motion
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>• Scroll-triggered animations</p>
          <p>• Spring physics for natural motion</p>
          <p>• Parallax and reveal effects</p>
          <p>• Optimized for 60fps performance</p>
        </div>
      </div>
    ),
    right: <AnimationsDemo />,
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why Choose Nhatcapdang?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Built with modern React patterns and developer experience in mind
          </p>
        </motion.div>

        <ScrollActiveSection items={features} className="min-h-[600px]" />
      </div>
    </section>
  );
}
