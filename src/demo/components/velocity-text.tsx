import VelocityText from "@/components/velocity-text";

export default function VelocityTextDemo() {
  return (
    <div>
      <div className=" h-screen  content-center justify-items-center gap-6 text-center">
        <span className="after:from-background after:to-foreground relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-primary after:content-['']">
          scroll down to see velocity text
        </span>
      </div>
      <VelocityText repeat={8}>
        <div className="flex gap-2 whitespace-nowrap text-xl font-black uppercase h-full">
          <p>Nhatcapdang is a developer 🌟</p>
          <p>Nhatcapdang is a developer ⭐</p>
          <p>Nhatcapdang is a developer 🔥</p>
          <p>Nhatcapdang is a developer 🚀</p>
        </div>
      </VelocityText>
      <VelocityText repeat={8} reverse>
        <div className="flex gap-2 whitespace-nowrap text-xl font-black uppercase h-full">
          <p>🚀 Nhatcapdang is a developer</p>
          <p>⭐ Nhatcapdang is a developer</p>
          <p>🔥 Nhatcapdang is a developer</p>
          <p>🌟 Nhatcapdang is a developer</p>
        </div>
      </VelocityText>
      <div className="h-[50vh]" />
    </div>
  );
}
