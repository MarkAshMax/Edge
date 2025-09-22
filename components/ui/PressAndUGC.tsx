import React from "react";

const logos = [
  { name: "Wired", image: "/images/press/wired.svg" },
  { name: "Hypebeast", image: "/images/press/hypebeast.svg" },
  { name: "TechCrunch", image: "/images/press/techcrunch.svg" },
];

const ugcTiles = [
  { handle: "@londonprints", image: "/images/ugc/londonprints.jpg", alt: "Custom case on coffee table" },
  { handle: "@ecoemma", image: "/images/ugc/ecoemma.jpg", alt: "Eco-friendly case in nature" },
  { handle: "@festivalfinn", image: "/images/ugc/festivalfinn.jpg", alt: "Festival selfie with cases" },
  { handle: "@studiohana", image: "/images/ugc/studiohana.jpg", alt: "Designer desk with custom phone" },
  { handle: "@neonriders", image: "/images/ugc/neonriders.jpg", alt: "Group photo at night" },
  { handle: "@pocketprints", image: "/images/ugc/pocketprints.jpg", alt: "Case sliding out of pocket" },
];

const badges = [
  { label: "MagSafe-compatible", icon: "/images/icons/magsafe.svg" },
  { label: "12-month warranty", icon: "/images/icons/warranty.svg" },
  { label: "UK shipping & returns", icon: "/images/icons/flag-uk.svg" },
  { label: "Eco options available", icon: "/images/icons/eco.svg" },
];

export function PressAndUGC() {
  return (
    <section className="bg-[#0B0D10] py-16 text-white sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/60">Trust</p>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Trusted by thousands.</h2>

        <div className="mt-10 flex flex-wrap items-center justify-start gap-8">
          {logos.map((logo) => (
            <img key={logo.name} src={logo.image} alt={logo.name} className="h-6 opacity-70" />
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ugcTiles.map((tile) => (
            <article
              key={tile.handle}
              className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-white/5"
            >
              <img src={tile.image} alt={tile.alt} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/80 via-black/50 to-transparent px-4 py-3 text-sm text-white">
                <span className="font-semibold">{tile.handle}</span>
                <button
                  type="button"
                  className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6EE7F9]"
                >
                  View post
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/80"
            >
              <img src={badge.icon} alt="" className="h-6 w-6" aria-hidden="true" />
              {badge.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PressAndUGC;
