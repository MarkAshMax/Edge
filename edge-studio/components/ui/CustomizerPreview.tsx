import Image from "next/image";
import Link from "next/link";

export default function CustomizerPreview() {
  return (
    <section aria-labelledby="customizer-heading" className="relative isolate py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-slate-900/40 via-slate-900/20 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 left-[-15rem] -z-10 h-[28rem] w-[28rem] rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <h2 id="customizer-heading" className="text-3xl font-bold tracking-tight text-white">
            See your design come alive in real time
          </h2>
          <p className="mt-3 text-slate-300">
            Bold art, minimal text or playful doodles - our live preview shows exactly how your case will look on your
            phone model.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/design"
              className="rounded-full px-5 py-3 text-sm font-semibold text-white
                         bg-gradient-to-r from-cyan-300 via-indigo-400 to-pink-400 hover:from-cyan-200 hover:via-indigo-300 hover:to-pink-300
                         shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70"
            >
              Start Designing
            </Link>
            <Link
              href="/design?template=upload"
              className="rounded-full px-5 py-3 text-sm font-semibold text-white bg-white/10 ring-1 ring-white/15 transition hover:bg-white/20"
            >
              Upload Photo
            </Link>
            <Link
              href="/design?template=browse"
              className="rounded-full px-5 py-3 text-sm font-semibold text-white bg-white/10 ring-1 ring-white/15 transition hover:bg-white/20"
            >
              Try a Template
            </Link>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div
            className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-white/5 p-2 ring-1 ring-white/10
                       shadow-[0_24px_60px_-25px_rgba(15,23,42,0.9)]"
          >
            <Image
              src="/images/customizer-ui.jpg"
              alt="Live customiser interface preview with design options"
              fill
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
