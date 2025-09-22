import Image from "next/image";

const tiles = [
  { src: "/images/inspo-1.jpg", alt: "Skateboarder holding phone mid-motion", caption: "Festival-proof finishes" },
  { src: "/images/inspo-2.jpg", alt: "Group selfie at a festival with flashy cases", caption: "Make it pop" },
  { src: "/images/inspo-3.jpg", alt: "Biodegradable eco cases in nature", caption: "Eco options available" },
  { src: "/images/inspo-4.jpg", alt: "Designer sketching on iPad next to customised phone", caption: "Artist collabs" },
];

export default function Inspiration() {
  return (
    <section aria-labelledby="inspo-heading" className="relative isolate py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.18),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="inspo-heading" className="text-3xl font-bold tracking-tight text-white">
          Think outside the box
        </h2>
        <p className="mt-2 text-slate-300">Unexpected styles and uses that spark ideas.</p>

        <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {tiles.map((t) => (
            <figure key={t.src} className="mb-4 break-inside-avoid overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
              <div className="relative h-auto w-full aspect-[4/5]">
                <Image src={t.src} alt={t.alt} fill className="object-cover" />
              </div>
              <figcaption className="px-3 py-2 text-sm text-slate-200">{t.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
