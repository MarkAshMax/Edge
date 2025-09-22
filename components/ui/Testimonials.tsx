import React from "react";

const testimonials = [
  {
    name: "Amelia",
    city: "Manchester",
    model: "iPhone 15 Pro",
    quote: "The design tool was so easy -- I love my case!",
    image: "/images/testimonials/amelia.jpg",
  },
  {
    name: "Jay",
    city: "London",
    model: "Galaxy S24",
    quote: "Quality is unreal and the 3D preview nailed the fit.",
    image: "/images/testimonials/jay.jpg",
  },
  {
    name: "Saffron",
    city: "Brighton",
    model: "iPhone 14",
    quote: "Eco case feels premium and the colours pop.",
    image: "/images/testimonials/saffron.jpg",
  },
];

export function Testimonials() {
  return (
    <section className="bg-[#0B0D10] py-16 text-white sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/60">Social proof</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Loved by creators across the UK.</h2>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition duration-200 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6EE7F9]"
              aria-label="Previous testimonial"
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M12.5 5L7.5 10L12.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition duration-200 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6EE7F9]"
              aria-label="Next testimonial"
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3" role="list" aria-live="polite">
          {testimonials.map((item) => (
            <article
              key={item.name}
              role="listitem"
              className="rounded-[20px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 shadow-[0_8px_24px_rgba(11,13,16,0.3)]"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm text-yellow-300">★★★★★</p>
                  <p className="mt-1 text-sm text-white/70">
                    {item.name}, {item.city} · {item.model}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-lg leading-relaxed text-white/90">"{item.quote}"</p>
            </article>
          ))}
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((item) => (
            <button
              key={item.name}
              type="button"
              className="h-2.5 w-2.5 rounded-full bg-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6EE7F9]"
              aria-label={`Go to testimonial from ${item.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
