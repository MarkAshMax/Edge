import React from "react";

const tiles = [
  {
    title: "Festival-proof finishes",
    image: "/images/inspiration/skateboarder.jpg",
    size: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Designs that pop on camera",
    image: "/images/inspiration/festival.jpg",
    size: "",
  },
  {
    title: "Eco options available",
    image: "/images/inspiration/eco.jpg",
    size: "md:row-span-2",
  },
  {
    title: "Artist collabs",
    image: "/images/inspiration/artist.jpg",
    size: "",
  },
  {
    title: "Make it yours",
    image: "/images/inspiration/desk-flatlay.jpg",
    size: "",
  },
];

export function Inspiration() {
  return (
    <section className="bg-[#0B0D10] py-16 text-white sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/60">Inspiration</p>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Think outside the case.</h2>
        <p className="mt-3 max-w-2xl text-base text-white/70">
          From festival-ready finishes to eco options, find your spark.
        </p>
        <div className="mt-10 grid auto-rows-[220px] grid-cols-1 gap-4 sm:auto-rows-[260px] sm:grid-cols-2 lg:auto-rows-[280px] lg:grid-cols-4">
          {tiles.map((tile) => (
            <article
              key={tile.title}
              className={`group relative overflow-hidden rounded-[20px] border border-white/10 bg-white/5 ${tile.size}`}
            >
              <img src={tile.image} alt={tile.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
              <div className="absolute inset-x-3 bottom-3 rounded-full bg-black/60 px-4 py-2 text-sm font-medium text-white shadow-[0_10px_24px_rgba(11,13,16,0.35)]">
                {tile.title}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Inspiration;
