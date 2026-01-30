import ParallaxScroll3 from '@/components/scroll/parallax-scroll-3';

export default function ParallaxScroll3Demo() {
  return (
    <div className="w-full">
      <div className="h-screen flex items-center justify-center text-center bg-background">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Parallax Gallery</h1>
          <p className="text-muted-foreground max-w-md">
            Scroll down to see the multi-column parallax effect with smooth
            Lenis scrolling
          </p>
          <div className="relative">
            <span className="text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-primary after:content-['']">
              scroll down
            </span>
          </div>
        </div>
      </div>

      <ParallaxScroll3 />

      <div className="h-screen flex items-center justify-center text-center bg-background">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">End of Gallery</h2>
          <p className="text-muted-foreground">
            Each column moves at different speeds creating the parallax effect
          </p>
        </div>
      </div>
    </div>
  );
}
