import SectionSticky from '@/components/scroll/section-sticky';
import Link from 'next/link';

export default function SectionStickyDemo() {
  return (
    <div>
      <div className=" h-screen  content-center justify-items-center gap-6 text-center">
        <span className="after:from-background after:to-foreground relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-primary after:content-['']">
          scroll down to see section sticky
        </span>
      </div>
      <SectionSticky>
        {/* 1 */}
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
        {/* 2 */}
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

        {/* 3 */}
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
        {/* 4 */}
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

        {/* 5 */}
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
        {/* add more sections you want */}
      </SectionSticky>
      <div className=" h-screen  content-center justify-items-center gap-6 text-center">
        <span className="after:from-background after:to-foreground relative text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:content-['']">
          end of demo
        </span>
      </div>
    </div>
  );
}
