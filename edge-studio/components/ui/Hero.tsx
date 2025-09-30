"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const highlights = [
  "MagSafe-ready",
  "Ships in 48 hours",
  "Made in the UK",
];

export default function Hero() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    setReducedMotion(prefersReduced?.matches ?? false);

    const handler = (event: MediaQueryListEvent) => setReducedMotion(event.matches);
    prefersReduced?.addEventListener("change", handler);
    return () => prefersReduced?.removeEventListener("change", handler);
  }, []);

  return (
    <header className="relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#5146ff66,transparent_55%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#f84fb533,transparent_60%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#04050b] via-[#070818] to-[#010208] opacity-90" aria-hidden="true" />

      <div className="relative content-shell dynamic-screen flex w-full flex-col justify-between gap-16 pb-16 pt-[calc(var(--safe-area-top)+3.25rem)] sm:pb-20 sm:pt-[calc(var(--safe-area-top)+4.5rem)] lg:grid lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-6 xl:col-span-5">
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-7 shadow-[0_20px_50px_-12px_rgba(7,8,24,0.65)] backdrop-blur-[28px] sm:p-8">
            <div className="absolute -left-28 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-gradient-to-br from-cyan-400/40 via-indigo-500/30 to-fuchsia-400/40 blur-3xl" aria-hidden="true" />
            <div className="absolute -right-16 bottom-10 h-32 w-32 rounded-full bg-gradient-to-tr from-pink-400/40 via-amber-300/20 to-indigo-400/35 blur-3xl" aria-hidden="true" />

            <div className="relative space-y-6">
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
                Custom cases, reimagined
              </span>
              <h1 className="font-semibold leading-[1.05] tracking-tight text-white text-[length:var(--step-4)] md:text-[length:var(--step-5)]">
                Your Phone. Your Design. Your Style.
              </h1>
              <p className="max-w-xl text-[length:var(--step-0)] text-white/80 sm:text-[length:var(--step-1)]">
                Design a case that&apos;s unmistakably you — bring in photos, art, typography and see it update instantly across every angle.
              </p>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <Link
                  href="/design"
                  className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-gradient-to-r from-cyan-300 via-indigo-400 to-pink-400 px-7 text-[length:var(--step--1)] font-semibold text-slate-900 shadow-[0_10px_28px_rgba(132,101,255,0.38)] transition hover:translate-y-[-2px] hover:shadow-[0_16px_40px_rgba(132,101,255,0.45)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#04050b]"
                >
                  Start Designing
                </Link>
                <Link
                  href="/shop"
                  className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 text-[length:var(--step--1)] font-semibold text-white transition hover:bg-white/16 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#04050b]"
                >
                  Browse Looks
                </Link>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 text-[length:var(--step--2)] font-medium tracking-[0.28em] text-white/70">
                {highlights.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1"
                  >
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-300 to-pink-400" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-14 flex items-center justify-center lg:col-span-6 lg:mt-0 xl:col-span-7">
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-gradient-to-b from-cyan-400/40 via-indigo-500/30 to-transparent blur-3xl" />
            <div className="absolute bottom-10 right-6 h-48 w-48 rounded-full bg-gradient-to-bl from-fuchsia-400/40 via-rose-400/30 to-transparent blur-3xl" />
          </div>

          <div className="relative flex h-[460px] w-full max-w-[480px] items-center justify-center">
            <div className="absolute inset-0 rounded-[36px] border border-white/10 bg-gradient-to-br from-white/12 via-white/4 to-white/10 backdrop-blur-2xl" />

            <ul className="relative grid h-full w-full grid-cols-2 gap-4 p-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <li
                  key={index}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_24px_50px_-24px_rgba(7,8,24,0.75)]"
                >
                  <div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_top,#8b5cf6_0%,rgba(42,42,82,0.6)_45%,transparent_80%)] opacity-80"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#f472b6_0%,rgba(42,42,82,0.75)_50%,transparent_90%)] opacity-60" aria-hidden="true" />
                  <div className="relative flex h-full flex-col justify-between p-5">
                    <div className="space-y-2 text-sm">
                      <p className="font-semibold text-white">Case #{index + 1}</p>
                      <p className="text-xs text-white/70">Neon Pulse Gradient</p>
                    </div>
                    <div className="space-y-1 text-[11px] uppercase tracking-[0.3em] text-white/60">
                      <p>360° preview</p>
                      <p>Drag to spin</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {!reducedMotion && (
              <div className="pointer-events-none absolute -right-12 top-1/2 hidden h-[360px] w-[180px] -translate-y-1/2 rounded-[70px] border border-white/20 bg-gradient-to-br from-white/20 via-white/8 to-white/5 p-3 backdrop-blur-2xl shadow-[0_26px_60px_rgba(7,8,24,0.65)] lg:block">
                <div className="h-full w-full rounded-[60px] bg-[radial-gradient(circle_at_top,#6ee7f9,rgba(11,12,26,0.6)_65%)]" />
              </div>
            )}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-6 flex items-center justify-center text-xs font-medium uppercase tracking-[0.3em] text-white/40">
          <div className="flex items-center gap-3">
            <span>Scroll</span>
            <span className={`h-9 w-px bg-gradient-to-b from-white/30 to-transparent ${reducedMotion ? "" : "animate-[pulse_2.4s_ease-in-out_infinite]"}`} />
          </div>
        </div>
      </div>
    </header>
  );
}
