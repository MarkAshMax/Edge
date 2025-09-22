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
    <section aria-labelledby="testimonials-heading" className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="testimonials-heading" className="text-3xl font-bold tracking-tight text-slate-900">
          Customer happiness
        </h2>
        <p className="mt-2 text-slate-600">Real people, real smiles.</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
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
                  <div className="text-xs text-slate-600">
                    {t.city} &bull; <span className="rounded bg-slate-100 px-1.5 py-0.5">{t.phone}</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-amber-500" aria-label="5 star rating">
                {"\u2605\u2605\u2605\u2605\u2605"}
              </div>
              <p className="mt-3 text-slate-800">&ldquo;{t.quote}&rdquo;</p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
