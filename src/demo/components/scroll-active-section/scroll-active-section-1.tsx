import {
  ScrollActiveSection,
  type ScrollItem,
} from '@/components/scroll-active-section';

function ScrollActiveSectionDemo() {
  return (
    <div className="container mx-auto px-4 py-16">
      <ScrollActiveSection
        items={DEMO}
        className="max-w-6xl mx-auto **:data-[slot=scroll-container]:pl-4"
        showProgress={true}
      />
    </div>
  );
}

export default ScrollActiveSectionDemo;

const DEMO: ScrollItem[] = [
  {
    id: 'demo-1',
    left: (
      <div>
        <h1 className=" text-2xl lg:text-4xl font-bold">
          Like & share to get a random cat
        </h1>
        <p className="text-lg lg:text-xl text-muted-foreground">
          Experience the future of development with our revolutionary multimodal
          approach
        </p>
      </div>
    ),
    right: (
      <div className="rounded-lg overflow-hidden h-[500px] relative w-full bg-amber-400"></div>
    ),
  },
  {
    id: 'demo-2',
    left: (
      <div>
        <h1 className=" text-2xl lg:text-4xl font-bold">
          A DHCP packet walks into a bar and asks for a beer.
        </h1>
        <p className="text-lg lg:text-xl text-muted-foreground">
          Bartender says, &quot;here, but I&apos;ll need that back in an
          hour!&quot;
        </p>
      </div>
    ),
    right: (
      <div className="rounded-lg overflow-hidden h-[500px] relative w-full bg-red-400"></div>
    ),
  },
  {
    id: 'demo-3',
    left: (
      <div>
        <h1 className=" text-2xl lg:text-4xl font-bold">
          What do you call a programmer from Finland?
        </h1>
        <p className="text-lg lg:text-xl text-muted-foreground">A Finn.</p>
      </div>
    ),
    right: (
      <div className="rounded-lg overflow-hidden h-[500px] relative w-full bg-blue-400"></div>
    ),
  },
  {
    id: 'demo-4',
    left: (
      <div>
        <h1 className=" text-2xl lg:text-4xl font-bold">
          Why did the programmer quit his job?
        </h1>
        <p className="text-lg lg:text-xl text-muted-foreground">
          He didn&apos;t get a raise.
        </p>
      </div>
    ),
    right: (
      <div className="rounded-lg overflow-hidden h-[500px] relative w-full bg-green-400"></div>
    ),
  },
  {
    id: 'demo-5',
    left: (
      <div>
        <h1 className=" text-2xl lg:text-4xl font-bold">
          How do you comfort a JavaScript bug?
        </h1>
        <p className="text-lg lg:text-xl text-muted-foreground">
          You console it.
        </p>
      </div>
    ),
    right: (
      <div className="rounded-lg h-[500px] relative w-full bg-purple-400"></div>
    ),
  },
];
