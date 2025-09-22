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
    <section aria-labelledby="trust-heading" className="relative isolate py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-slate-900/40 to-slate-950/60" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="trust-heading" className="text-3xl font-bold tracking-tight text-white">
          Trusted &amp; loved by our community
        </h2>
        <p className="mt-2 text-slate-300">As seen in... and posted with #MyCustomCase</p>

        <div className="mt-6 flex flex-wrap items-center gap-8 opacity-90">
          {press.map((p) => (
            <Image key={p.alt} src={p.src} alt={p.alt} width={120} height={28} className="brightness-200 invert" />
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {ugc.map((u) => (
            <figure key={u.src} className="relative aspect-square overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
              <Image src={u.src} alt={u.alt} fill className="object-cover" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
