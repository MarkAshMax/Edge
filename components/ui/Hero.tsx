import React from "react";

const primaryButtonClasses = "inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#6EE7F9] via-[#A78BFA] to-[#F472B6] px-6 py-3 text-base font-semibold text-[#0B0D10] shadow-[0_10px_20px_rgba(108,90,255,0.25)] transition duration-200 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_0_12px_rgba(167,139,250,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6EE7F9] active:translate-y-px";
const secondaryButtonClasses = "inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-base font-semibold text-white/90 backdrop-blur focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6EE7F9] transition duration-200 motion-safe:hover:bg-white/20";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0B0D10] text-white">
      <img
        src="/images/hero-rooftop.jpg"
        alt="Friends customising their phones on a London rooftop"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex min-h-[90vh] max-w-6xl flex-col justify-center px-6 py-24 sm:px-10 lg:px-16">
        <div className="max-w-xl rounded-[28px] border border-white/10 bg-white/10 p-10 shadow-[0_20px_45px_rgba(11,13,16,0.45)] backdrop-blur-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">Made in the UK</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Your Phone. Your Design. Your Style.
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Design a case that's unmistakably you -- photos, art, text & more.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#customiser" className={primaryButtonClasses}>
              Start Designing
            </a>
            <a href="#gallery" className={secondaryButtonClasses}>
              Shop Designs
            </a>
          </div>
          <p className="mt-6 text-sm text-white/70">
            MagSafe-ready • Ships from the UK in 48 hours
          </p>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-10 right-16 hidden gap-6 lg:flex">
        <img
          src="/images/case-float-01.png"
          alt=""
          className="h-40 w-20 rotate-3 drop-shadow-[0_14px_32px_rgba(108,90,255,0.22)]"
          aria-hidden="true"
        />
        <img
          src="/images/case-float-02.png"
          alt=""
          className="h-36 w-20 -rotate-6 drop-shadow-[0_14px_32px_rgba(110,231,249,0.25)]"
          aria-hidden="true"
        />
      </div>
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs text-white/70 sm:flex">
        <span>Scroll</span>
        <span className="h-8 w-px bg-white/30" aria-hidden="true" />
        <svg className="h-5 w-5 animate-bounce" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M5 8.5L10 13.5L15 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
