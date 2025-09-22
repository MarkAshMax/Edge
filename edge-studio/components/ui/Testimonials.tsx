import Image from "next/image";

const testimonials = [
  {
    quote: "The design tool was so easy - I love my case!",
    name: "Amelia R.",
    city: "Manchester",
    phone: "iPhone 15 Pro",
    avatar: "/images/testimonial-1.jpg",
  },
  {
    quote: "Printed perfectly and arrived fast. Feels premium.",
    name: "Zain K.",
    city: "Leeds",
    phone: "Samsung S24",
    avatar: "/images/testimonial-2.jpg",
  },
  {
    quote: "Custom text + photo combo turned out brilliant.",
    name: "Hannah T.",
    city: "Brighton",
    phone: "iPhone 14",
    avatar: "/images/testimonial-3.jpg",
  },
];

export default function Testimonials() {
  return (
    <section aria-labelledby="testimonials-heading" className="relative isolate py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-slate-900/60 via-slate-900/30 to-transparent" />
      <div className="mx-auto max-w-6xl px-4">
        <div
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-white via-slate-50 to-slate-200/60 px-6 py-12 shadow-[0_60px_120px_-60px_rgba(15,23,42,0.65)] ring-1 ring-slate-200/60 sm:px-10"
        >
          <div className="pointer-events-none absolute -top-24 left-20 h-52 w-52 rounded-full bg-indigo-200/35 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 right-12 h-48 w-48 rounded-full bg-fuchsia-200/35 blur-3xl" />

          <div className="relative">
            <h2 id="testimonials-heading" className="text-3xl font-bold tracking-tight text-slate-900">
              Customer happiness
            </h2>
            <p className="mt-2 text-slate-600">Real people, real smiles.</p>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {testimonials.map((t) => (
                <blockquote
                  key={t.name}
                  className="rounded-2xl border border-slate-200/60 bg-white/90 p-6 shadow-[0_26px_60px_-34px_rgba(15,23,42,0.35)]"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={t.avatar}
                      alt={`Portrait of ${t.name}`}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-sm font-semibold text-slate-900">{t.name}</div>
                      <div className="text-xs text-slate-500">
                        {t.city} &bull; <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[0.7rem] text-slate-700">{t.phone}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-amber-500" aria-label="5 star rating">
                    {"\u2605\u2605\u2605\u2605\u2605"}
                  </div>
                  <p className="mt-3 text-slate-700">&ldquo;{t.quote}&rdquo;</p>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
