import Image from "next/image";

const tiles = [
  { src: "/images/inspo-1.jpg", alt: "Skateboarder holding phone mid-motion", caption: "Festival-proof finishes" },
  { src: "/images/inspo-2.jpg", alt: "Group selfie at a festival with flashy cases", caption: "Make it pop" },
  { src: "/images/inspo-3.jpg", alt: "Biodegradable eco cases in nature", caption: "Eco options available" },
  { src: "/images/inspo-4.jpg", alt: "Designer sketching on iPad next to customised phone", caption: "Artist collabs" },
];

export default function Inspiration() {
  return (
    <section aria-labelledby="inspo-heading" className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="inspo-heading" className="text-3xl font-bold tracking-tight text-slate-900">
          Think outside the box
        </h2>
        <p className="mt-2 text-slate-600">Unexpected styles and uses that spark ideas.</p>

        <div className="mt-8 columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {tiles.map((t) => (
            <figure key={t.src} className="mb-4 break-inside-avoid rounded-2xl overflow-hidden bg-slate-100">
              <div className="relative w-full h-auto aspect-[4/5]">
                <Image src={t.src} alt={t.alt} fill className="object-cover" />
              </div>
              <figcaption className="px-3 py-2 text-sm text-slate-700">{t.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
