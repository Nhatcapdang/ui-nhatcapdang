import Jokes from '@/components/jokes';
import { ScrollActiveSection } from '@/components/scroll-active-section';
import Image from 'next/image';

const DEMO = [
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
      <div className="rounded-lg overflow-hidden max-lg:h-[300px]">
        <Image
          src="https://cataas.com/cat/says/hello"
          alt="nhatcapdang random cat"
          loading="lazy"
          width={500}
          height={300}
          className="w-full h-auto object-cover"
          aria-label="nhatcapdang random cat"
          role="img"
          title="nhatcapdang random cat"
        />
      </div>
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
      <div className="rounded-lg overflow-hidden max-lg:h-[300px]">
        <Image
          src="https://cataas.com/cat/says/haha"
          alt="nhatcapdang random cat"
          loading="lazy"
          width={500}
          height={300}
          className="w-full h-auto object-cover"
          aria-label="nhatcapdang random cat"
          role="img"
          title="nhatcapdang random cat"
          unoptimized
        />
      </div>
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
      <div className="rounded-lg overflow-hidden max-lg:h-[300px]">
        <Image
          src="https://cataas.com/cat/says/goodmorning"
          alt="nhatcapdang random cat"
          loading="lazy"
          width={500}
          height={300}
          className="w-full h-auto object-cover"
          aria-label="nhatcapdang random cat"
          role="img"
          title="nhatcapdang random cat"
          unoptimized
        />
      </div>
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
      <div className="rounded-lg overflow-hidden max-lg:h-[300px]">
        <Image
          src="https://cataas.com/cat/says/goodnight"
          alt="nhatcapdang random cat"
          loading="lazy"
          width={500}
          height={300}
          className="w-full h-auto object-cover"
          aria-label="nhatcapdang random cat"
          role="img"
          title="nhatcapdang random cat"
          unoptimized
        />
      </div>
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
      <div className="rounded-lg overflow-hidden max-lg:h-[300px]">
        <Image
          src="https://cataas.com/cat/says/goodbye"
          alt="nhatcapdang random cat"
          loading="lazy"
          width={500}
          height={300}
          className="w-full h-auto object-cover"
          aria-label="nhatcapdang random cat"
          role="img"
          title="nhatcapdang random cat"
          unoptimized
        />
      </div>
    ),
  },
];

function ScrollActiveSectionDemo() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Jokes className="text-center space-y-4 mb-16 h-44" />
      <ScrollActiveSection
        items={DEMO}
        className="max-w-6xl mx-auto **:data-[slot=scroll-container]:pl-4"
        showProgress={true}
      />
      <h1 className="h-[450px] flex items-center justify-center text-4xl font-bold">
        That&apos;s it!
      </h1>
    </div>
  );
}

export default ScrollActiveSectionDemo;
