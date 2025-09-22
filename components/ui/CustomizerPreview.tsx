import React from "react";

const primaryButtonClasses = "inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#6EE7F9] via-[#A78BFA] to-[#F472B6] px-6 py-3 text-sm font-semibold text-[#0B0D10] shadow-[0_10px_20px_rgba(108,90,255,0.25)] transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6EE7F9] motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_0_12px_rgba(167,139,250,0.45)]";
const ghostButtonClasses = "inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6EE7F9] motion-safe:hover:bg-white/20";

const thumbChips = [
  { label: "Bold art", image: "/images/customiser/thumb-bold.png" },
  { label: "Minimal text", image: "/images/customiser/thumb-minimal.png" },
  { label: "Playful doodles", image: "/images/customiser/thumb-doodle.png" },
];

export function CustomizerPreview() {
  return (
    <section id="customiser" className="bg-[#0B0D10] py-16 text-white sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/60">Custom builder</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">See your design come alive in real time.</h2>
          <p className="mt-3 text-base text-white/70">
            Personalise colours, stickers, and text with instant 360° previews.
          </p>
        </div>
        <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-[0_14px_32px_rgba(11,13,16,0.35)] backdrop-blur-xl">
            <img
              src="/images/customiser/ui-preview.png"
              alt="Customiser interface preview"
              className="w-full rounded-[16px] border border-white/10"
            />
            <div className="pointer-events-none absolute inset-0 rounded-[24px] border border-white/5" aria-hidden="true" />
          </div>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <a href="/create" className={primaryButtonClasses}>
                Start Designing
              </a>
              <button type="button" className={ghostButtonClasses}>
                Upload Photo
              </button>
              <button type="button" className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6EE7F9] motion-safe:hover:border-white/40">
                Try a Template
              </button>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-white/60">Preview styles</p>
              <div className="mt-4 flex gap-4 overflow-x-auto pb-2">
                {thumbChips.map((chip) => (
                  <button
                    key={chip.label}
                    type="button"
                    className="flex min-w-[140px] items-center gap-3 rounded-[16px] border border-white/10 bg-white/5 px-3 py-2 text-left text-sm font-medium text-white/80 transition duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6EE7F9]"
                  >
                    <img src={chip.image} alt="" className="h-10 w-10 rounded-xl object-cover" aria-hidden="true" />
                    {chip.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomizerPreview;
