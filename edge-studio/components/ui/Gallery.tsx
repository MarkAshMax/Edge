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
    <section aria-labelledby="gallery-heading" className="py-16 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 id="gallery-heading" className="text-3xl font-bold tracking-tight text-slate-900">
              Best-selling designs
            </h2>
            <p className="mt-2 text-slate-600">Hand-picked by our community.</p>
          </div>
          <a
            href="/shop"
            className="hidden sm:inline-flex rounded-full px-5 py-2 text-sm font-semibold text-slate-900 bg-white ring-1 ring-slate-200 hover:bg-slate-100"
          >
            View all
          </a>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <figure
              key={it.id}
              className="group relative overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 transition hover:shadow-lg"
            >
              <div className="relative aspect-[4/5]">
                <Image src={it.src} alt={it.alt} fill className="object-cover" />
              </div>
              {/* Hover reveal */}
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-1/2 px-3 pb-3 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                <div className="rounded-xl bg-white/90 p-3 shadow">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-slate-900">{it.price}</span>
                    <span className="text-slate-700">&#9733; {it.rating}</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-600">{it.models}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
