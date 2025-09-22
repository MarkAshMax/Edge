"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    setReduced(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <header className="relative min-h-[92vh] overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white">
      {/* Background image */}
      <Image
        src="/images/hero-lifestyle.jpg"
        alt="A diverse group of friends showing their colourful custom phone cases"
        fill
        priority
        className="object-cover opacity-70"
      />
      {/* Overlay scrim */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 to-slate-900/40" />

      <div className="relative mx-auto max-w-6xl px-4 pt-28 pb-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Your Phone. Your Design. Your Style.
          </h1>
          <p className="mt-4 text-lg text-slate-200">
            Design a case that's unmistakably you - photos, art, text &amp; more.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/design"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white
                         bg-gradient-to-r from-cyan-300 via-indigo-400 to-pink-400 hover:from-cyan-200 hover:via-indigo-300 hover:to-pink-300
                         shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              aria-label="Start designing your custom phone case"
            >
              Start Designing
            </Link>
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold
                         text-white/90 bg-white/10 hover:bg-white/15 ring-1 ring-white/20
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              aria-label="Browse ready-made designs"
            >
              Shop Designs
            </Link>
          </div>
        </div>
      </div>

      {/* Subtle floating glow */}
      {!reduced && (
        <div className="pointer-events-none absolute -bottom-24 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400/20 via-fuchsia-400/15 to-indigo-400/20 blur-3xl" />
      )}
    </header>
  );
}
