import { default as ParallaxScroll1 } from "@/components/scroll/parallax-scroll";

export default function TestPage() {
  return (
    <div>
      <div className="h-screen" />
      <ParallaxScroll1>
        <div className="h-full bg-blue-200 p-4">
          <h1>Lorem ipsum dolor sit amet</h1>
        </div>
      </ParallaxScroll1>
      <div className="h-screen " />
    </div>
  );
}
