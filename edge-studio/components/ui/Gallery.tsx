import Image from "next/image";

const items = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  src: `/images/gallery-${i + 1}.jpg`,
  alt: `Popular custom case design ${i + 1}`,
  price: "GBP 24.99",
  rating: 4.8,
  models: "iPhone / Samsung",
}));

export default function Gallery() {
  return (
    <section aria-labelledby="gallery-heading" className="relative isolate py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-transparent" />
      <div className="pointer-events-none absolute -right-20 top-10 -z-10 h-72 w-72 rounded-full bg-fuchsia-400/30 blur-3xl" />
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 id="gallery-heading" className="text-3xl font-bold tracking-tight text-white">
              Best-selling designs
            </h2>
            <p className="mt-2 text-slate-300">Hand-picked by our community.</p>
          </div>
          <a
            href="/shop"
            className="hidden sm:inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/20"
          >
            View all
          </a>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <figure
              key={it.id}
              className="group relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 transition hover:ring-white/30"
            >
              <div className="relative aspect-[4/5]">
                <Image src={it.src} alt={it.alt} fill className="object-cover" />
              </div>
              {/* Hover reveal */}
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-1/2 px-3 pb-3 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                <div className="rounded-xl bg-slate-950/90 p-3 shadow-[0_12px_30px_-18px_rgba(15,23,42,0.8)]">
                  <div className="flex items-center justify-between text-sm text-slate-200">
                    <span className="font-semibold text-white">{it.price}</span>
                    <span className="text-slate-300">&#9733; {it.rating}</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-400">{it.models}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
