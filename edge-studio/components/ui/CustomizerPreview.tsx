import Image from "next/image";
import Link from "next/link";

export default function CustomizerPreview() {
  return (
    <section aria-labelledby="customizer-heading" className="py-16 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 grid gap-8 lg:grid-cols-2 items-center">
        <div className="order-2 lg:order-1">
          <h2 id="customizer-heading" className="text-3xl font-bold tracking-tight text-slate-900">
            See your design come alive in real time
          </h2>
          <p className="mt-3 text-slate-700">
            Bold art, minimal text or playful doodles - our live preview shows exactly how your case will look on your
            phone model.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/design"
              className="rounded-full px-5 py-3 text-sm font-semibold text-white
                         bg-gradient-to-r from-cyan-300 via-indigo-400 to-pink-400 hover:from-cyan-200 hover:via-indigo-300 hover:to-pink-300
                         shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              Start Designing
            </Link>
            <Link
              href="/design?template=upload"
              className="rounded-full px-5 py-3 text-sm font-semibold text-slate-900 bg-white ring-1 ring-slate-200 hover:bg-slate-100"
            >
              Upload Photo
            </Link>
            <Link
              href="/design?template=browse"
              className="rounded-full px-5 py-3 text-sm font-semibold text-slate-900 bg-white ring-1 ring-slate-200 hover:bg-slate-100"
            >
              Try a Template
            </Link>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div
            className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-white p-2 ring-1 ring-slate-200
                       shadow-[0_18px_40px_-18px_rgba(0,0,0,0.25)]"
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
