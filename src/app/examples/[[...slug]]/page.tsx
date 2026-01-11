import MarqueeDemo from "@/demo/components/marquee";
import { notFound } from "next/navigation";
interface PageProps {
  params: Promise<{
    slug?: string[];
  }>;
}

export default async function ExamplePage(props: PageProps) {
  <MarqueeDemo />;
  try {
    const path = ((await props.params).slug ?? []).join("/");

    const Component = await import(`@/${path}`).then((e) => e.default);
    return Component ? <Component /> : notFound();
  } catch (e) {
    console.error(e);
    notFound();
  }
}
