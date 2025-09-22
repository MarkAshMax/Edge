"use client";

import { useEffect, useMemo, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  city: string;
  phone: string;
  role: string;
  accent: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "The design tool was so intuitive — I tweaked colours, added text and checked MagSafe all in one flow.",
    name: "Amelia Rowan",
    city: "Manchester",
    phone: "iPhone 15 Pro",
    role: "Content creator",
    accent: "linear-gradient(135deg,#6ee7f9 0%,#a855f7 60%,#f472b6 100%)",
  },
  {
    quote: "I uploaded our wedding photos and the preview made sure every detail wrapped perfectly around the edges.",
    name: "Zain Khan",
    city: "Leeds",
    phone: "Galaxy S24",
    role: "Photographer",
    accent: "linear-gradient(135deg,#f472b6 0%,#f97316 45%,#fde047 100%)",
  },
  {
    quote: "Went from sketch to finished case in minutes. The live mockup instantly sold my clients on the idea.",
    name: "Hannah Taylor",
    city: "Brighton",
    phone: "iPhone 14",
    role: "Freelance designer",
    accent: "linear-gradient(135deg,#22d3ee 0%,#3b82f6 45%,#a855f7 100%)",
  },
  {
    quote: "Being able to spin the phone and toggle finishes gave me full confidence before ordering for my team.",
    name: "Marcus Peters",
    city: "Liverpool",
    phone: "Pixel 9",
    role: "Agency producer",
    accent: "linear-gradient(135deg,#818cf8 0%,#22d3ee 55%,#f472b6 100%)",
  },
  {
    quote: "Customer support jumped in on live chat with a layout tip that saved my launch. Unreal care.",
    name: "Chloe Green",
    city: "Edinburgh",
    phone: "iPhone 15",
    role: "Shop owner",
    accent: "linear-gradient(135deg,#34d399 0%,#22d3ee 45%,#6366f1 100%)",
  },
  {
    quote: "I send clients their branded cases as gifts. The fast turnaround keeps every project on schedule.",
    name: "Harvey Cole",
    city: "Bristol",
    phone: "Galaxy S24 Ultra",
    role: "Brand strategist",
    accent: "linear-gradient(135deg,#f97316 0%,#fb7185 50%,#6366f1 100%)",
  },
];

const AUTOPLAY_INTERVAL = 6000;

export default function Testimonials() {
  const [cardsPerSlide, setCardsPerSlide] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth >= 1200) {
        setCardsPerSlide(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerSlide(2);
      } else {
        setCardsPerSlide(1);
      }
    };

    updateCardsPerSlide();
    window.addEventListener("resize", updateCardsPerSlide);
    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  const slides = useMemo(() => {
    const chunk: Testimonial[][] = [];
    for (let i = 0; i < testimonials.length; i += cardsPerSlide) {
      chunk.push(testimonials.slice(i, i + cardsPerSlide));
    }
    return chunk;
  }, [cardsPerSlide]);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_INTERVAL);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    if (currentSlide >= slides.length) {
      setCurrentSlide(0);
    }
  }, [currentSlide, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide((index + slides.length) % slides.length);
  };

  return (
    <section aria-labelledby="testimonials-heading" className="relative isolate py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.24),transparent_65%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-72 bg-gradient-to-t from-[#04050b] via-[#070818] to-transparent" />
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/6 px-8 py-14 shadow-[0_40px_120px_-60px_rgba(14,18,44,0.7)] backdrop-blur-[28px]">
          <div className="pointer-events-none absolute -top-28 left-16 h-60 w-60 rounded-full bg-gradient-to-br from-indigo-500/35 via-cyan-300/25 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 right-10 h-72 w-72 rounded-full bg-gradient-to-br from-pink-400/35 via-amber-200/20 to-transparent blur-3xl" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <h2 id="testimonials-heading" className="text-3xl font-semibold tracking-tight text-white sm:text-[44px] sm:leading-tight">
                Loved by creators across the UK
              </h2>
              <p className="mt-3 text-base text-white/70 sm:text-lg">
                Designers, photographers and founders ship their ideas with Edge! Studio. Here&apos;s what keeps them coming back.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => goToSlide(currentSlide - 1)}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/18 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/40"
                aria-label="Show previous testimonials"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M15 6 9 12l6 6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => goToSlide(currentSlide + 1)}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/18 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/40"
                aria-label="Show next testimonials"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>

          <div className="relative mt-10" role="region" aria-live="polite" aria-atomic="true">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, slideIndex) => (
                  <div key={slideIndex} className="w-full shrink-0 px-1">
                    <div
                      className={`grid gap-6 ${cardsPerSlide >= 2 ? "sm:grid-cols-2" : ""} ${
                        cardsPerSlide >= 3 ? "lg:grid-cols-3" : cardsPerSlide === 2 ? "lg:grid-cols-2" : ""
                      }`}
                    >
                      {slide.map((testimonial) => (
                        <blockquote
                          key={testimonial.name}
                          className="relative flex h-full flex-col justify-between rounded-[26px] border border-white/12 bg-white/8 p-7 shadow-[0_24px_60px_-28px_rgba(15,18,35,0.6)]"
                        >
                          <div className="absolute left-6 top-6 h-14 w-14 rounded-2xl" style={{ background: testimonial.accent }} aria-hidden="true" />
                          <div className="relative flex items-center gap-4">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/30 bg-white/10 text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
                              {testimonial.name
                                .split(" ")
                                .map((part) => part[0])
                                .join("")}
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-white">{testimonial.name}</div>
                              <div className="text-xs text-white/60">
                                {testimonial.city} · {testimonial.phone}
                              </div>
                              <div className="text-xs uppercase tracking-[0.28em] text-white/40">{testimonial.role}</div>
                            </div>
                          </div>
                          <div className="relative mt-6 text-amber-300" aria-label="5 star rating">
                            {"\u2605\u2605\u2605\u2605\u2605"}
                          </div>
                          <p className="relative mt-4 text-base leading-7 text-white/80">“{testimonial.quote}”</p>
                        </blockquote>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={`testimonial-dot-${index}`}
                  type="button"
                  onClick={() => goToSlide(index)}
                  className={`h-2.5 rounded-full transition ${
                    currentSlide === index ? "w-8 bg-white" : "w-3 bg-white/30 hover:bg-white/50"
                  } focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/40`}
                  aria-label={`Show testimonials slide ${index + 1}`}
                  aria-pressed={currentSlide === index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
