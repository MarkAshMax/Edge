"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    setReduceMotion(prefersReduced?.matches ?? false);
    const handlePrefChange = (event: MediaQueryListEvent) => setReduceMotion(event.matches);
    prefersReduced?.addEventListener("change", handlePrefChange);

    const handleScroll = () => setVisible(window.scrollY > window.innerHeight * 0.5);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      prefersReduced?.removeEventListener("change", handlePrefChange);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 transition ${
        visible ? "opacity-100" : "opacity-0"
      } sm:hidden safe-bottom`}
      role="presentation"
      aria-hidden={!visible}
    >
      <Link
        href="/design"
        className={`pointer-events-auto inline-flex w-full max-w-[420px] items-center justify-center rounded-full bg-gradient-to-r from-cyan-300 via-indigo-400 to-pink-400 px-6 py-3 text-[length:var(--step--1)] font-semibold text-[#04050b] shadow-[0_16px_36px_rgba(132,101,255,0.45)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/45 ${
          reduceMotion ? "" : "animate-[pulse_4s_ease-in-out_infinite]"
        }`}
      >
        Start Designing
      </Link>
    </div>
  );
}
