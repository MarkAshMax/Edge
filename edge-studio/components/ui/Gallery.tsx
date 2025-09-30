"use client";

import { useMemo, useState } from "react";

const filters = ["All", "Bold", "Minimal", "Photo Collage", "Patterns"] as const;

type Filter = (typeof filters)[number];

const galleryItems = [
  {
    id: 1,
    title: "Neon Pulse Gradient",
    category: "Bold" as Filter,
    ratio: "aspect-[4/5]",
    gradient: "linear-gradient(135deg,#6d4eff 0%,#ff51c8 55%,#ffd43b 100%)",
    price: "From £32",
    rating: "★★★★★ 4.9",
    models: "iPhone 15 Pro · Galaxy S24",
  },
  {
    id: 2,
    title: "Studio Monochrome",
    category: "Minimal" as Filter,
    ratio: "aspect-square",
    gradient: "linear-gradient(160deg,#10121c 0%,#2f3250 48%,#5d618c 100%)",
    price: "From £28",
    rating: "★★★★★ 4.8",
    models: "iPhone 14 · Pixel 9",
  },
  {
    id: 3,
    title: "Midnight Haze",
    category: "Patterns" as Filter,
    ratio: "aspect-[4/5]",
    gradient: "radial-gradient(circle at 20% 20%,#8b5cf6 0%,#31245c 38%,#070718 100%)",
    price: "From £30",
    rating: "★★★★★ 4.7",
    models: "Galaxy S24+ · iPhone 15",
  },
  {
    id: 4,
    title: "Sunset Deck",
    category: "Photo Collage" as Filter,
    ratio: "aspect-[3/4]",
    gradient: "linear-gradient(125deg,#ff906d 0%,#ffd86d 55%,#42c3ff 100%)",
    price: "From £34",
    rating: "★★★★★ 4.9",
    models: "iPhone 15 Plus",
  },
  {
    id: 5,
    title: "Neon Linework",
    category: "Patterns" as Filter,
    ratio: "aspect-square",
    gradient: "linear-gradient(135deg,#04060f 15%,#4028ff 50%,#17fff3 100%)",
    price: "From £32",
    rating: "★★★★★ 4.8",
    models: "iPhone 13 mini",
  },
  {
    id: 6,
    title: "Festival Collage",
    category: "Photo Collage" as Filter,
    ratio: "aspect-[4/5]",
    gradient: "linear-gradient(140deg,#ff54d8 0%,#5f43ff 45%,#00f0ff 100%)",
    price: "From £35",
    rating: "★★★★★ 5.0",
    models: "Galaxy S24 Ultra",
  },
  {
    id: 7,
    title: "Celestial Bloom",
    category: "Bold" as Filter,
    ratio: "aspect-square",
    gradient: "radial-gradient(circle at 50% 20%,#ffe37d 0%,#f289ff 55%,#3b1fff 100%)",
    price: "From £31",
    rating: "★★★★★ 4.8",
    models: "iPhone 15 Pro Max",
  },
  {
    id: 8,
    title: "Graphite Grid",
    category: "Minimal" as Filter,
    ratio: "aspect-[4/5]",
    gradient: "linear-gradient(135deg,#1a1d31 0%,#232746 50%,#3a3f63 100%)",
    price: "From £27",
    rating: "★★★★★ 4.6",
    models: "Pixel 9 Pro",
  },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section aria-labelledby="gallery-heading" className="relative isolate section-shell">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(110,231,249,0.08),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-20" />
      <div className="content-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <h2 id="gallery-heading" className="font-semibold tracking-tight text-white text-[length:var(--step-3)] md:text-[length:var(--step-4)]">
              Best-selling custom looks
            </h2>
            <p className="mt-3 text-[length:var(--step--1)] text-white/70 sm:text-[length:var(--step-0)]">
              A curated mix of bold gradients, clean linework and real-life collages — refreshed weekly by our community team.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-sm">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-2 transition ${
                  activeFilter === filter
                    ? "border-transparent bg-gradient-to-r from-cyan-300 via-indigo-400 to-pink-400 text-slate-900 shadow-[0_8px_20px_rgba(132,101,255,0.32)]"
                    : "border-white/15 bg-white/6 text-white/70 hover:border-white/30 hover:text-white"
                } focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#04050b]`}
                aria-pressed={activeFilter === filter}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredItems.map((item) => (
            <figure
              key={item.id}
              className="group relative overflow-hidden rounded-[28px] border border-white/12 bg-white/6 shadow-[0_28px_60px_-32px_rgba(10,15,40,0.75)] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_38px_80px_-28px_rgba(66,94,255,0.55)]"
            >
              <div
                className={`relative ${item.ratio} w-full`}
                style={{ background: item.gradient }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.24),transparent_70%)] mix-blend-screen" aria-hidden="true" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(4,5,11,0.45),transparent_80%)]" aria-hidden="true" />
                <button
                  type="button"
                  aria-label={`Save ${item.title} to favourites`}
                  className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/40"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
                    <path
                      d="M12.62 20.67a1 1 0 0 1-1.24 0c-1.96-1.56-6.88-5.9-6.88-10.03A4.64 4.64 0 0 1 9.14 6a3.7 3.7 0 0 1 2.86 1.38A3.7 3.7 0 0 1 14.86 6a4.64 4.64 0 0 1 4.64 4.64c0 4.13-4.92 8.47-6.88 10.03Z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-6 bg-gradient-to-t from-[#04050b]/90 via-[#04050b]/60 to-transparent px-5 pb-6 pt-12 transition duration-300 group-hover:translate-y-0">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.32em] text-white/60">
                    <span>{item.category}</span>
                    <span>{item.rating}</span>
                  </div>
                  <h3 className="text-[length:var(--step-1)] font-semibold text-white">{item.title}</h3>
                  <div className="flex items-center justify-between text-[length:var(--step--1)] text-white/70">
                    <span>{item.models}</span>
                    <span className="font-semibold text-white">{item.price}</span>
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 flex items-center gap-6 text-[length:var(--step--1)] text-white/60">
          <span className="h-px w-16 bg-gradient-to-r from-white/20 to-transparent" />
          Scroll for more looks inside the builder — each style is customisable in seconds.
        </div>
      </div>
    </section>
  );
}
