import { default as ParallaxScroll1 } from '@/components/scroll/parallax-scroll-1';
import ParallaxScroll2 from '@/components/scroll/parallax-scroll-2';
import ParallaxScroll3 from '@/components/scroll/parallax-scroll-3';
import SectionSticky from '@/components/scroll/section-sticky';
import Test from '@/components/test';
import StickyFooter from '@/demo/blocks/footer/sticky-footer';
import Link from 'next/link';

export default function TestPage() {
  return (
    <div>
      <div className="h-screen" />
      <div className="h-screen bg-amber-400" >
        <div className="h-full bg-blue-200 p-4 text-center items-end flex">
          <h1>Lorem ipsum dolor sit amet</h1>
        </div>
      </div>
      <Test />
      {/* <ParallaxScroll3 /> */}
      {/* <SectionSticky>
        <Link
          href="https://go.shadcn.io/nhatcapdang"
          className="block w-full h-full rounded-2xl shadow-xl"
        >
          <iframe
            src="https://go.shadcn.io/nhatcapdang"
            className="overflow-hidden w-full h-full pointer-events-none rounded-2xl shadow-xl"
            title="Nhatcapdang"
            scrolling="no"
          />
        </Link>
        <Link
          href="https://go.shadcn.io/nhatcapdang"
          className="block w-full h-full"
        >
          <iframe
            src="https://www.shadcn.io/button/corner-accent-button"
            className="overflow-hidden w-full h-full pointer-events-none rounded-2xl shadow-xl"
            title="Nhatcapdang"
            scrolling="no"
          />
        </Link>

        <Link
          href="https://go.shadcn.io/nhatcapdang"
          className="block w-full h-full"
        >
          <iframe
            src="https://www.shadcn.io/components/credit-card"
            className="overflow-hidden w-full h-full pointer-events-none rounded-2xl shadow-xl"
            title="Nhatcapdang"
            scrolling="no"
          />
        </Link>
        <Link
          href="https://go.shadcn.io/nhatcapdang"
          className="block w-full h-full"
        >
          <iframe
            src="https://www.shadcn.io/text/flip-words"
            className="overflow-hidden w-full h-full pointer-events-none rounded-2xl shadow-xl"
            title="Nhatcapdang"
            scrolling="no"
          />
        </Link>
        <Link
          href="https://go.shadcn.io/nhatcapdang"
          className="block w-full h-full"
        >
          <iframe
            src="https://www.shadcn.io/shaders/abstract-mod"
            className="overflow-hidden w-full h-full pointer-events-none rounded-2xl shadow-xl"
            title="Nhatcapdang"
            scrolling="no"
          />
        </Link>
      </SectionSticky> */}
      <StickyFooter />
    </div>
  );
}
