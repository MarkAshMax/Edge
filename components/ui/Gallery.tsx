import React from "react";

const items = [
  {
    title: "Neon Pulse Gradient",
    image: "/images/gallery/neon-pulse.jpg",
    models: "iPhone 15 Pro, Galaxy S24",
    price: "From £32",
    rating: "★★★★★ 4.9",
  },
  {
    title: "Monochrome Collage",
    image: "/images/gallery/monochrome-collage.jpg",
    models: "iPhone 14, Pixel 8",
    price: "From £28",
    rating: "★★★★☆ 4.7",
  },
  {
    title: "Pastel Stickers",
    image: "/images/gallery/pastel-stickers.jpg",
    models: "Galaxy S23, iPhone 13",
    price: "From £30",
    rating: "★★★★★ 5.0",
  },
  {
    title: "Desk Daydream",
    image: "/images/gallery/desk-daydream.jpg",
    models: "Lifestyle tile",
    price: "",
    rating: "",
  },
  {
    title: "Café Journal",
    image: "/images/gallery/cafe-journal.jpg",
    models: "Lifestyle tile",
    price: "",
    rating: "",
  },
  {
    title: "Bio Texture",
    image: "/images/gallery/bio-texture.jpg",
    models: "Eco series",
    price: "From £34",
    rating: "★★★★☆ 4.8",
  },
  {
    title: "Pocket Pop",
    image: "/images/gallery/pocket-pop.jpg",
    models: "Lifestyle tile",
    price: "",
    rating: "",
  },
  {
    title: "Aurora Flow",
    image: "/images/gallery/aurora-flow.jpg",
    models: "iPhone 15 Pro Max",
    price: "From £33",
    rating: "★★★★★ 4.9",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-[#0B0D10] py-16 text-white sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/60">Best sellers</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Best-selling custom looks.</h2>
          </div>
          <div className="flex gap-2 text-sm font-medium text-white/70">
            <button
              type="button"
              className="rounded-full border border-white/20 px-4 py-2 transition duration-200 hover:border-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6EE7F9]"
            >
              All
            </button>
            <button
              type="button"
              className="rounded-full border border-white/10 px-4 py-2 text-white/50 transition duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6EE7F9]"
            >
              Bold
            </button>
            <button
              type="button"
              className="rounded-full border border-white/10 px-4 py-2 text-white/50 transition duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6EE7F9]"
            >
              Minimal
            </button>
          </div>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-white/5 shadow-[0_8px_24px_rgba(11,13,16,0.3)]"
            >
              <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/80 via-black/60 to-transparent p-4 transition duration-300 group-hover:translate-y-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-white/70">{item.models}</p>
                  </div>
                  {item.price && (
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">{item.price}</span>
                  )}
                </div>
                {item.rating && <p className="mt-2 text-xs uppercase tracking-wide text-white/60">{item.rating}</p>}
              </div>
              <button
                type="button"
                className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-white transition duration-200 hover:bg-black/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6EE7F9]"
                aria-label={`Save ${item.title}`}
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M12 20.5L10.55 19.18C5.4 14.45 2 11.37 2 7.5C2 4.42 4.42 2 7.5 2C9.24 2 10.91 2.81 12 4.08C13.09 2.81 14.76 2 16.5 2C19.58 2 22 4.42 22 7.5C22 11.37 18.6 14.45 13.45 19.2L12 20.5Z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
