const steps = [
  {
    title: "Upload your design",
    desc: "Drag & drop PNG, JPG or HEIC in seconds.",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true" className="h-12 w-12 text-white">
        <defs>
          <linearGradient id="uploadGradient" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#6ee7f9" />
            <stop offset="60%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#f472b6" />
          </linearGradient>
        </defs>
        <path
          fill="url(#uploadGradient)"
          d="M24 6a2 2 0 0 1 1.42.59l7.99 8a2 2 0 0 1-2.83 2.83L26 12.83V32a2 2 0 1 1-4 0V12.83l-4.58 4.59a2 2 0 1 1-2.84-2.83l8-8A2 2 0 0 1 24 6Z"
        />
        <path
          fill="currentColor"
          fillOpacity="0.18"
          d="M12 30a2 2 0 0 1 2 2v6h20v-6a2 2 0 1 1 4 0v8a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Z"
        />
      </svg>
    ),
  },
  {
    title: "Preview on your phone",
    desc: "Spin a 360° preview tailored to your exact model.",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true" className="h-12 w-12 text-white">
        <defs>
          <linearGradient id="previewGradient" x1="0%" x2="0%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#6ee7f9" />
          </linearGradient>
        </defs>
        <rect x="16" y="6" width="16" height="36" rx="6" fill="url(#previewGradient)" />
        <path
          d="M13 20c0-7 4-12 11-12s11 5 11 12"
          stroke="currentColor"
          strokeDasharray="3 4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.4"
          strokeWidth="2.4"
        />
        <path
          d="M24 40c-7 0-11-5-11-12"
          stroke="currentColor"
          strokeDasharray="3 4"
          strokeLinecap="round"
          strokeOpacity="0.4"
          strokeWidth="2.4"
        />
      </svg>
    ),
  },
  {
    title: "Checkout & enjoy",
    desc: "Fast UK delivery with 12-month peace of mind.",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true" className="h-12 w-12 text-white">
        <defs>
          <linearGradient id="shippingGradient" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#6ee7f9" />
          </linearGradient>
        </defs>
        <path
          fill="url(#shippingGradient)"
          d="M8 14a4 4 0 0 1 4-4h17a3 3 0 0 1 3 3v6h5.18a4 4 0 0 1 3.58 2.2l3.38 6.77a2 2 0 0 1 .21.9V34a4 4 0 0 1-4 4h-1.22a5.5 5.5 0 0 0-10.56 0H17.43a5.5 5.5 0 0 0-10.56 0H8a4 4 0 0 1-4-4V14a4 4 0 0 1 4-4Zm27 14a5.5 5.5 0 0 0-5.46 5h5.87a2.5 2.5 0 0 0 2.35-1.57l.83-2.08A2 2 0 0 0 35 28ZM11.5 34a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm21 0a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z"
        />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section aria-labelledby="how-heading" className="relative isolate section-shell">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(152,115,255,0.18),transparent_65%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-72 bg-gradient-to-t from-[#04050b] via-[#070818] to-transparent" />
      <div className="content-shell">
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 px-6 py-12 shadow-[0_40px_120px_-60px_rgba(10,15,40,0.75)] backdrop-blur-[32px] sm:px-8 sm:py-14">
          <div className="pointer-events-none absolute -top-20 right-8 h-48 w-48 rounded-full bg-gradient-to-br from-fuchsia-400/45 via-indigo-500/30 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 left-0 h-60 w-60 rounded-full bg-gradient-to-tr from-cyan-300/35 via-indigo-400/25 to-transparent blur-3xl" />

          <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <h2 id="how-heading" className="font-semibold tracking-tight text-white text-[length:var(--step-3)] md:text-[length:var(--step-4)]">
                How it works
              </h2>
              <p className="mt-3 text-[length:var(--step--1)] text-white/70 sm:text-[length:var(--step-0)]">
                Three easy steps to your perfect case. Every interaction is designed to keep your creativity flowing.
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-white/50">
              <span>Upload</span>
              <span className="h-px w-8 bg-gradient-to-r from-white/20 to-transparent" />
              <span>Preview</span>
              <span className="h-px w-8 bg-gradient-to-r from-white/20 to-transparent" />
              <span>Checkout</span>
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.title}
                className="group relative flex min-h-[18rem] flex-col rounded-[26px] border border-white/12 bg-white/6 p-6 shadow-[0_24px_50px_-28px_rgba(10,15,40,0.65)] transition duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-[0_28px_70px_-28px_rgba(44,86,255,0.55)] sm:p-7"
              >
                <div className="absolute inset-0 rounded-[26px] bg-[radial-gradient(circle_at_top,#6ee7f933,transparent_70%)] opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" aria-hidden="true" />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 shadow-inner">
                  {step.icon}
                </div>
                <h3 className="relative mt-6 text-[length:var(--step-1)] font-semibold text-white">{step.title}</h3>
                <p className="relative mt-3 text-[length:var(--step--1)] leading-6 text-white/70">{step.desc}</p>
                <div className="relative mt-auto pt-6 text-[length:var(--step--2)] uppercase tracking-[0.28em] text-white/50">
                  <span className="inline-flex items-center gap-2">
                    <span className="block h-px w-8 bg-gradient-to-r from-white/40 to-transparent" />
                    Guided in-app prompts
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
