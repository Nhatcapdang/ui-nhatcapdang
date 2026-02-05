import ParallaxScroll1 from '@/components/scroll/parallax-scroll-1';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1">
      <h1 className="text-2xl font-bold mb-4">Hello World</h1>
      <p>
        You can open{' '}
        <Link href="/docs" className="font-medium underline">
          /docs
        </Link>{' '}
        and see the documentation.
      </p>
      <div className="h-screen bg-amber-400">
        <div className="h-full bg-blue-200 p-4 text-center items-end flex">
          <h1>Lorem ipsum dolor sit amet</h1>
        </div>
      </div>
      <ParallaxScroll1
        className="h-calc(100vh-57px)"
        offset={['start center', 'center start']}
      >
        <div className="relative w-full h-full rounded-xl overflow-hidden grid grid-cols-4  gap-4 liquid-glass p-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="relative w-full h-full rounded-xl overflow-hidden aspect-square"
            >
              Lorem ipsum dolor sit amet
            </div>
          ))}
        </div>
      </ParallaxScroll1>
    </div>
  );
}
