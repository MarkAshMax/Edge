import Image from "next/image";

const steps = [
  {
    title: "Upload your design",
    desc: "Drag & drop photos, art or text.",
    img: "/images/how-step-1.jpg",
    alt: "Uploading a design using drag and drop",
  },
  {
    title: "Preview on your phone",
    desc: "See it on your exact model in 3D.",
    img: "/images/how-step-2.jpg",
    alt: "Previewing a rotating 3D phone with a custom case",
  },
  {
    title: "Checkout & enjoy",
    desc: "Fast shipping. Big smiles.",
    img: "/images/how-step-3.jpg",
    alt: "Unboxing a personalised phone case",
  },
];

export default function HowItWorks() {
  return (
    <section aria-labelledby="how-heading" className="relative isolate py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-slate-900/50 via-slate-900/40 to-transparent" />
      <div className="mx-auto max-w-6xl px-4">
        <div
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-white via-slate-50 to-slate-200/60 px-6 py-12 shadow-[0_60px_120px_-60px_rgba(15,23,42,0.7)] ring-1 ring-slate-200/60 sm:px-10"
        >
          <div className="pointer-events-none absolute -top-24 right-0 h-48 w-48 rounded-full bg-cyan-200/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 left-10 h-52 w-52 rounded-full bg-indigo-200/30 blur-3xl" />

          <div className="relative">
            <h2 id="how-heading" className="text-3xl font-bold tracking-tight text-slate-900">
              How it works
            </h2>
            <p className="mt-2 text-slate-600">Three quick steps from idea to pocket.</p>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {steps.map((s) => (
                <article
                  key={s.title}
                  className="group rounded-2xl border border-slate-200/60 bg-white/90 p-4 shadow-[0_24px_50px_-32px_rgba(15,23,42,0.35)] transition hover:border-slate-300 hover:shadow-[0_32px_60px_-35px_rgba(15,23,42,0.45)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <Image src={s.img} alt={s.alt} fill className="object-cover" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
                  <p className="text-sm text-slate-600">{s.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
