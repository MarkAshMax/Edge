import Image from "next/image";

const press = [
  { src: "/images/press-wired.svg", alt: "Wired" },
  { src: "/images/press-hypebeast.svg", alt: "Hypebeast" },
  { src: "/images/press-techcrunch.svg", alt: "TechCrunch" },
];

const ugc = Array.from({ length: 6 }).map((_, i) => ({
  src: `/images/ugc-${i + 1}.jpg`,
  alt: `#MyCustomCase community photo ${i + 1}`,
}));

export default function PressAndUGC() {
  return (
    <section aria-labelledby="trust-heading" className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="trust-heading" className="text-3xl font-bold tracking-tight text-slate-900">
          Trusted &amp; loved by our community
        </h2>
        <p className="mt-2 text-slate-600">As seen in... and posted with #MyCustomCase</p>

        <div className="mt-6 flex flex-wrap items-center gap-8 opacity-80">
          {press.map((p) => (
            <Image key={p.alt} src={p.src} alt={p.alt} width={120} height={28} />
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {ugc.map((u) => (
            <figure key={u.src} className="relative aspect-square overflow-hidden rounded-2xl bg-slate-100">
              <Image src={u.src} alt={u.alt} fill className="object-cover" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
