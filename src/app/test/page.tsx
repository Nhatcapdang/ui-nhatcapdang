import { default as ParallaxScroll1 } from '@/components/scroll/parallax-scroll-1';
import ParallaxScroll2 from '@/components/scroll/parallax-scroll-2';
import ParallaxScroll3 from '@/components/scroll/parallax-scroll-3';
import SectionSticky from '@/components/scroll/section-sticky';
import Showcase from '@/components/test';
import StickyFooter from '@/demo/blocks/footer/sticky-footer';
import Image from 'next/image';
import Link from 'next/link';

export default function TestPage() {
  return (
    <div>
      <div className="h-screen" />
      <div className="h-screen bg-amber-400">
        <div className="h-full bg-blue-200 p-4 text-center items-end flex">
          <h1>Lorem ipsum dolor sit amet</h1>
        </div>
      </div>
      <Showcase
        data={[
          {
            title: 'Lorem ipsum dolor ',
            content: (
              <div className="h-[400px] w-full relative">
                <Image
                  src="https://cataas.com/cat/says/supricious?width=1000&height=400"
                  alt="cat"
                  className="object-cover h-full w-full"
                  fill
                />
              </div>
            ),
          },
          {
            title: 'Lorem ipsum dolor sit ',
            content: (
              <div className="h-[400px] w-full relative">
                <Image
                  src="https://cataas.com/cat/says/yummy?width=1000&height=400"
                  alt="cat"
                  className="object-cover h-full w-full"
                  fill
                />
              </div>
            ),
          },
          {
            title: 'amet consectetur adipisi',
            content: (
              <div className="h-[400px] w-full relative">
                <Image
                  src="https://cataas.com/cat/says/how-was-your-day?width=1000&height=400"
                  alt="cat"
                  className="object-cover h-full w-full"
                  fill
                />
              </div>
            ),
          },
          {
            title: 'Lorem ipsum',
            content: (
              <div className="h-[400px] w-full relative">
                <Image
                  src="https://cataas.com/cat/says/the-best-way-to-learn-is-by-doing?width=1000&height=400"
                  alt="cat"
                  className="object-cover h-full w-full"
                  fill
                />
              </div>
            ),
          },
          {
            title: 'Lorem ipsum dolor sit amet c',
            content: (
              <div className="h-[400px] w-full relative">
                <Image
                  src="https://cataas.com/cat/says/good-luck-with-your-project?width=1000&height=400"
                  alt="cat"
                  className="object-cover h-full w-full"
                  fill
                />
              </div>
            ),
          },
          {
            title: 'Lorem ipsum dolor',
            content: (
              <div className="h-[400px] w-full relative">
                <Image
                  src="https://cataas.com/cat/says/never-give-up-on-your-dreams?width=1000&height=400"
                  alt="cat"
                  className="object-cover h-full w-full"
                  fill
                />
              </div>
            ),
          },
          {
            title: 'Lorem ipsum elit. Quisquam, quos.',
            content: (
              <div className="h-[400px] w-full relative">
                <Image
                  src="https://cataas.com/cat/says/star-gits-on-github-for-free?width=1000&height=400"
                  alt="cat"
                  className="object-cover h-full w-full"
                  fill
                />
              </div>
            ),
          },
          {
            title: 'Lorem ',
            content: (
              <div className="h-[400px] w-full relative">
                <Image
                  src="https://cataas.com/cat/says/your-work-is-your-identity?width=1000&height=400"
                  alt="cat"
                  className="object-cover h-full w-full"
                  fill
                />
              </div>
            ),
          },
          {
            title: 'Lorem ipsum',
            content: (
              <div className="h-[400px] w-full relative">
                <Image
                  src="https://cataas.com/cat/says/star-gits-on-github-for-free?width=1000&height=400"
                  alt="cat"
                  className="object-cover h-full w-full"
                  fill
                />
              </div>
            ),
          },
          {
            title: 'Lorem ipsum',
            content: (
              <div className="h-[400px] w-full relative">
                <Image
                  src="https://cataas.com/cat/says/the-new-billionaire-on-the-way?width=1000&height=400"
                  alt="cat"
                  className="object-cover h-full w-full"
                  fill
                />
              </div>
            ),
          },
        ]}
      />
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
