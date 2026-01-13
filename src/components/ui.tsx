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
      className="relative mt-8 sm:mt-12 lg:mt-16 rounded-lg overflow-hidden"
      role="list"
      aria-label="User testimonials"
    >
      {/* First row - scrolling left to right */}
      <Marquee
        pauseOnHover
        className="[--duration:40s] [--gap:1rem] sm:[--gap:1.5rem]"
      >
        {testimonials.slice(0, 6).map((testimonial) => (
          <div key={testimonial.id}>{testimonial.name}</div>
        ))}
      </Marquee>

      {/* Second row - scrolling right to left */}
      <Marquee
        pauseOnHover
        reverse
        className="mt-4 sm:mt-6 [--duration:40s] [--gap:1rem] sm:[--gap:1.5rem]"
      >
        {testimonials.slice(6, 12).map((testimonial) => (
          <div key={testimonial.id}>{testimonial.name}</div>
        ))}
      </Marquee>
    </div>
  );
}
