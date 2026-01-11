import VelocityText from "@/components/velocity-text";

export default function VelocityTextDemo() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
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
    </div>
  );
}
