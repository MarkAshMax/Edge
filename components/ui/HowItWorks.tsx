import React from "react";

const steps = [
  {
    title: "Upload your design",
    copy: "Drag & drop PNG, JPG or HEIC in seconds.",
    image: "/images/icons/upload.svg",
    alt: "Upload artwork icon",
  },
  {
    title: "Preview on your phone",
    copy: "Spin the 3D phone to check every angle.",
    image: "/images/icons/preview.svg",
    alt: "Phone preview icon",
  },
  {
    title: "Checkout & enjoy",
    copy: "Fast UK delivery with 12-month peace of mind.",
    image: "/images/icons/delivery.svg",
    alt: "Delivery icon",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#0B0D10] py-16 text-white sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/60">How it works</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">Three easy steps to your perfect case.</h2>
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.title}
              className="group flex h-full flex-col rounded-[20px] border border-white/10 bg-white/5 p-8 shadow-[0_8px_24px_rgba(11,13,16,0.35)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(108,90,255,0.22)] focus-within:shadow-[0_14px_32px_rgba(108,90,255,0.22)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <img src={step.image} alt={step.alt} className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-base text-white/70">{step.copy}</p>
              <a
                href="#customiser"
                className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-white/80 transition duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6EE7F9]"
              >
                Learn more
                <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M4.5 11.5L11.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 4.5H11.5V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
