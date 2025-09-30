"use client";

import Link from "next/link";
import { useState } from "react";

const previewChips = [
  { id: "bold", label: "Bold art" },
  { id: "minimal", label: "Minimal text" },
  { id: "playful", label: "Playful doodles" },
];

export default function CustomizerPreview() {
  const [activeChip, setActiveChip] = useState(previewChips[0].id);

  return (
    <section aria-labelledby="customizer-heading" className="relative isolate section-shell">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(110,231,249,0.12),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-y-0 left-[-18rem] -z-10 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-cyan-300/35 via-indigo-500/30 to-transparent blur-3xl" />
      <div className="content-shell grid items-center gap-12 lg:grid-cols-2">
        <div className="order-2 flex flex-col gap-6 lg:order-1">
          <div>
            <h2 id="customizer-heading" className="font-semibold tracking-tight text-white text-[length:var(--step-3)] md:text-[length:var(--step-4)]">
              See your design come alive in real time
            </h2>
            <p className="mt-4 text-[length:var(--step--1)] text-white/70 sm:text-[length:var(--step-0)]">
              Personalise colours, stickers and fonts while our live preview mirrors every tweak instantly across 360° views. Hotspots guide you through cases, wallets and straps.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/design"
              className="inline-flex min-h-[3rem] items-center justify-center rounded-full bg-gradient-to-r from-cyan-300 via-indigo-400 to-pink-400 px-6 text-[length:var(--step--1)] font-semibold text-slate-900 shadow-[0_10px_24px_rgba(132,101,255,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(132,101,255,0.42)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#04050b]"
            >
              Start Designing
            </Link>
            <Link
              href="/design?template=upload"
              className="inline-flex min-h-[3rem] items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 text-[length:var(--step--1)] font-semibold text-white transition hover:border-white/25 hover:bg-white/16 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#04050b]"
            >
              Upload Photo
            </Link>
            <Link
              href="/design?template=browse"
              className="inline-flex min-h-[3rem] items-center justify-center rounded-full border border-white/20 bg-transparent px-6 text-[length:var(--step--1)] font-semibold text-white transition hover:border-white/35 hover:bg-white/8 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#04050b]"
            >
              Try a Template
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {previewChips.map((chip) => (
              <button
                type="button"
                key={chip.id}
                onClick={() => setActiveChip(chip.id)}
                className={`rounded-full border px-4 py-2 text-[length:var(--step--2)] font-semibold uppercase tracking-[0.28em] transition ${
                  chip.id === activeChip
                    ? "border-transparent bg-gradient-to-r from-cyan-300 via-indigo-400 to-pink-400 text-slate-900"
                    : "border-white/15 bg-white/6 text-white/70 hover:border-white/30 hover:text-white"
                } focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#04050b]`}
                aria-pressed={chip.id === activeChip}
              >
                {chip.label}
              </button>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-[40px] border border-white/12 bg-white/6 p-5 shadow-[0_32px_90px_-40px_rgba(15,18,40,0.7)] backdrop-blur-[30px] sm:p-6">
            <div className="pointer-events-none absolute -left-16 top-6 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-300/35 via-indigo-400/30 to-transparent blur-3xl" />
            <div className="pointer-events-none absolute -right-12 bottom-8 h-48 w-48 rounded-full bg-gradient-to-tr from-fuchsia-400/35 via-amber-200/25 to-transparent blur-3xl" />
            <div className="relative grid gap-6 lg:grid-cols-[180px_minmax(0,1fr)_200px]">
              <div className="rounded-[26px] border border-white/10 bg-[#050613]/80 p-4 text-xs text-white/70">
                <header className="flex items-center justify-between text-[11px] uppercase tracking-[0.32em] text-white/50">
                  <span>Tools</span>
                  <span>Edge</span>
                </header>
                <div className="mt-4 space-y-3">
                  {["Upload", "Templates", "Text", "Finishes"].map((item) => (
                    <button
                      key={item}
                      type="button"
                      className={`flex w-full items-center justify-between rounded-xl border px-3 py-2 text-left text-sm transition ${
                        (item === "Templates" && activeChip === "bold") ||
                        (item === "Text" && activeChip === "minimal") ||
                        (item === "Finishes" && activeChip === "playful")
                          ? "border-transparent bg-gradient-to-r from-cyan-300 via-indigo-400 to-pink-400 text-slate-900"
                          : "border-white/10 bg-white/4 text-white/80 hover:border-white/16"
                      }`}
                    >
                      {item}
                      <span className="text-[10px] uppercase tracking-[0.32em] text-white/40">↗</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="h-[360px] w-[200px] rounded-[46px] border border-white/20 bg-gradient-to-br from-white/25 via-white/8 to-white/10 p-4 shadow-[0_24px_60px_-28px_rgba(15,18,35,0.65)]">
                  <div className="h-full w-full overflow-hidden rounded-[34px] border border-white/10" style={{ background: activeChip === "bold" ? "linear-gradient(135deg,#6d4eff 0%,#ff51c8 55%,#ffd43b 100%)" : activeChip === "minimal" ? "linear-gradient(135deg,#1f2336 0%,#34395c 50%,#56608a 100%)" : "linear-gradient(135deg,#7dd3fc 0%,#c084fc 50%,#f9a8d4 100%)" }}>
                    <div className="flex h-full flex-col justify-between p-5 text-xs text-white/80">
                      <div className="space-y-2">
                        <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.32em]">
                          <span>Preview</span>
                          <span className="h-px w-6 bg-white/60" />
                          <span>360°</span>
                        </div>
                        <p className="text-sm font-semibold text-white">Edge Studio Case</p>
                      </div>
                      <div className="space-y-1 text-[10px] uppercase">
                        <p>Swipe to rotate</p>
                        <p>Try MagSafe</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 rounded-[26px] border border-white/10 bg-[#050613]/80 p-5 text-sm text-white/70">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.32em] text-white/50">
                  <span>Summary</span>
                  <span>£{activeChip === "minimal" ? "29" : "32"}.00</span>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-gradient-to-r from-cyan-300 to-pink-400" />
                    Premium matte shell · MagSafe ready
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-gradient-to-r from-cyan-300 to-pink-400" />
                    Unlimited colour layers · Saved palettes
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-gradient-to-r from-cyan-300 to-pink-400" />
                    Free design tweaks from our studio team
                  </li>
                </ul>
                <button
                  type="button"
                  className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/18 bg-white/10 text-sm font-semibold text-white transition hover:border-white/26 hover:bg-white/16 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/45"
                >
                  Export preview
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
