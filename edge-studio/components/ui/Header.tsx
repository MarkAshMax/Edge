"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import MobileNav from "@/src/components/MobileNav";
import { useMobileUXFlag } from "@/lib/featureFlags";

const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/design", label: "Create" },
  { href: "/inspiration", label: "Inspiration" },
  { href: "/support", label: "Support" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileUXEnabled = useMobileUXFlag();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileUXEnabled && menuOpen) {
      setMenuOpen(false);
    }
  }, [mobileUXEnabled, menuOpen]);

  const handleOpenMenu = useCallback(() => {
    if (!mobileUXEnabled) return;
    setMenuOpen(true);
  }, [mobileUXEnabled]);

  const handleCloseMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "backdrop-blur-xl bg-[#04050b]/85 border-b border-white/12"
          : "bg-gradient-to-b from-[#04050b]/96 to-transparent border-b border-transparent"
      }`}
    >
      <div className="content-shell flex min-h-[4.5rem] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.32em] text-white">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-300 via-indigo-400 to-pink-400 text-[#04050b]">
            E
          </span>
          Edge! Studio
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-white/70 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-white focus-visible:outline-none focus-visible:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/6 text-white transition hover:border-white/25 hover:bg-white/12 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/45"
            aria-label="Search"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <circle cx="11" cy="11" r="6" />
              <path d="m20 20-3.5-3.5" />
            </svg>
          </button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/6 text-white transition hover:border-white/25 hover:bg-white/12 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/45"
            aria-label="Account"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <circle cx="12" cy="8" r="4" />
              <path d="M6 20c1.5-3 4.5-4 6-4s4.5 1 6 4" />
            </svg>
          </button>
          <Link
            href="/checkout"
            className="inline-flex items-center gap-3 rounded-full border border-transparent bg-gradient-to-r from-cyan-300 via-indigo-400 to-pink-400 px-5 py-2 text-sm font-semibold text-[#04050b] shadow-[0_10px_24px_rgba(132,101,255,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(132,101,255,0.45)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/45"
          >
            <span className="inline-flex h-7 w-12 items-center justify-center rounded-full bg-[#04050b] text-xs font-semibold text-white/80">
              02
            </span>
            £64
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <Link
            href="/design"
            className="inline-flex min-h-[2.75rem] items-center justify-center rounded-full bg-gradient-to-r from-cyan-300 via-indigo-400 to-pink-400 px-4 text-[length:var(--step--1)] font-semibold text-[#04050b]"
          >
            Start
          </Link>
          {mobileUXEnabled && (
            <button
              type="button"
              onClick={handleOpenMenu}
              aria-label="Open navigation"
              aria-controls="mobile-nav"
              aria-expanded={menuOpen}
              className="min-tap inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/6 text-white transition hover:border-white/25 hover:bg-white/12 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/45"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="h-5 w-5">
                <path d="M5 7h14M5 12h14M5 17h14" />
              </svg>
            </button>
          )}
        </div>
      </div>
      {mobileUXEnabled && (
        <MobileNav isOpen={menuOpen} onClose={handleCloseMenu} links={navLinks} />
      )}
    </header>
  );
}
