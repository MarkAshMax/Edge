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
    <section aria-labelledby="how-heading" className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="how-heading" className="text-3xl font-bold tracking-tight text-slate-900">
          How it works
        </h2>
        <p className="mt-2 text-slate-600">Three quick steps from idea to pocket.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {steps.map((s) => (
            <article
              key={s.title}
              className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-lg"
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
    </section>
  );
}
