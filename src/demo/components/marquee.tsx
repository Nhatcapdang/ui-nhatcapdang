import Marquee from "@/components/marquee";

export default function MarqueeDemo() {
  const testimonials = [
    { id: 1, name: "John Doe", testimonial: "This is a testimonial" },
    { id: 2, name: "Jane Doe", testimonial: "This is a testimonial" },
    { id: 3, name: "John Doe", testimonial: "This is a testimonial" },
    { id: 4, name: "Jane Doe", testimonial: "This is a testimonial" },
    { id: 5, name: "John Doe", testimonial: "This is a testimonial" },
    { id: 6, name: "Jane Doe", testimonial: "This is a testimonial" },
  ];

  return (
    <div
      className="flex flex-col justify-center items-center gap-4 h-screen overflow-hidden"
      aria-label="User testimonials"
    >
      <Marquee
        pauseOnHover
        reverse
        className="[--duration:40s] [--gap:1rem] sm:[--gap:1.5rem]"
      >
        {testimonials.slice(0, 6).map((testimonial) => (
          <div key={testimonial.id}>{testimonial.name}</div>
        ))}
      </Marquee>

      <Marquee
        pauseOnHover
        className="[--duration:40s] [--gap:1rem] sm:[--gap:1.5rem]"
      >
        {testimonials.slice(0, 6).map((testimonial) => (
          <div key={testimonial.id}>{testimonial.name}</div>
        ))}
      </Marquee>
    </div>
  );
}
