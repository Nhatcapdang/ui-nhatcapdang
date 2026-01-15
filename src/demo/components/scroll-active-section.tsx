'use client';

import {
  ScrollActiveSection,
  ScrollItem,
} from '@/components/scroll-active-section';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const demoItems: ScrollItem[] = [
  {
    id: 'multimodal-input',
    title: 'Input Anything',
    subtitle: "World's First Unified Multimodal Video Model",
    description:
      "With the model's deep semantic understanding, everything — including images, videos, elements, texts, etc — could be included in your input to Kling O1. The model goes beyond the limitations of modality, integrating and understanding different perspectives of an image, video, or character you upload, to return outputs with precision.",
    image:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop',
    content: (
      <div className="flex flex-wrap gap-2">
        <Badge variant="secondary">Images</Badge>
        <Badge variant="secondary">Videos</Badge>
        <Badge variant="secondary">Text</Badge>
        <Badge variant="secondary">Elements</Badge>
      </div>
    ),
  },
  {
    id: 'understand-everything',
    title: 'Understand Everything',
    subtitle: 'Multimodal Input, All-in-one Creation & Modification',
    description:
      'Advanced AI capabilities enable comprehensive understanding of complex multimodal inputs. Process and analyze various content types simultaneously with unprecedented accuracy and contextual awareness.',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop',
    content: (
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full" />
          <span className="text-sm">Real-time processing</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full" />
          <span className="text-sm">Context-aware analysis</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-purple-500 rounded-full" />
          <span className="text-sm">Multi-format support</span>
        </div>
      </div>
    ),
  },
  {
    id: 'video-consistency',
    title: 'All-in-One Reference',
    subtitle: 'Video Consistency Now Resolved',
    description:
      'Maintain perfect consistency across video sequences with advanced reference tracking. Our breakthrough technology ensures seamless transitions and coherent visual narratives throughout entire video productions.',
    image:
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=450&fit=crop',
    content: (
      <Button className="w-full" variant="default">
        Experience Now →
      </Button>
    ),
  },
  {
    id: 'advanced-features',
    title: 'Advanced Capabilities',
    subtitle: 'Next-Generation AI Processing',
    description:
      'Leverage cutting-edge artificial intelligence to transform your creative workflow. Our advanced algorithms provide intelligent suggestions, automated optimizations, and seamless integration with existing tools.',
    image:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=450&fit=crop',
    content: (
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="space-y-1">
          <div className="font-medium">Processing Speed</div>
          <div className="text-muted-foreground">10x faster</div>
        </div>
        <div className="space-y-1">
          <div className="font-medium">Accuracy</div>
          <div className="text-muted-foreground">99.9%</div>
        </div>
        <div className="space-y-1">
          <div className="font-medium">Formats</div>
          <div className="text-muted-foreground">50+ supported</div>
        </div>
        <div className="space-y-1">
          <div className="font-medium">Languages</div>
          <div className="text-muted-foreground">100+ supported</div>
        </div>
      </div>
    ),
  },
];

export function ScrollActiveSectionDemo() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold">
            Kling O1 <em className="italic font-light">Video Model</em>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the future of AI-powered video processing with our
            revolutionary multimodal approach
          </p>
        </div>
      </div>

      <ScrollActiveSection
        items={demoItems}
        className="bg-linear-to-b from-background via-muted/20 to-background"
        showProgress={true}
      />
    </div>
  );
}

export default ScrollActiveSectionDemo;
