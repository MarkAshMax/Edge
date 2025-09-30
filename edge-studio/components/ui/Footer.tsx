export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#04050b] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,rgba(110,231,249,0.12),transparent_70%)]" aria-hidden="true" />
      <div className="content-shell py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-white/50">Shop</h3>
              <ul className="mt-4 space-y-2 text-[length:var(--step--1)] text-white/70">
                <li><a className="hover:text-white" href="/collections/new">New In</a></li>
                <li><a className="hover:text-white" href="/shop/best-sellers">Best Sellers</a></li>
                <li><a className="hover:text-white" href="/shop/photo-cases">Photo Cases</a></li>
                <li><a className="hover:text-white" href="/shop/artist-collabs">Artist Collabs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-white/50">Create</h3>
              <ul className="mt-4 space-y-2 text-[length:var(--step--1)] text-white/70">
                <li><a className="hover:text-white" href="/design">Custom Builder</a></li>
                <li><a className="hover:text-white" href="/design?template=templates">Templates</a></li>
                <li><a className="hover:text-white" href="/design/materials">Materials</a></li>
                <li><a className="hover:text-white" href="/shop/accessories">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-white/50">Support</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li><a className="hover:text-white" href="/help">Help Centre</a></li>
                <li><a className="hover:text-white" href="/help/track-order">Track Order</a></li>
                <li><a className="hover:text-white" href="/help/returns">Delivery &amp; Returns</a></li>
                <li><a className="hover:text-white" href="/help/contact">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-white/50">About</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li><a className="hover:text-white" href="/about">Our Story</a></li>
                <li><a className="hover:text-white" href="/sustainability">Sustainability</a></li>
                <li><a className="hover:text-white" href="/careers">Careers</a></li>
                <li><a className="hover:text-white" href="/press">Press</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-8 rounded-[26px] border border-white/12 bg-white/6 p-7 shadow-[0_24px_70px_-34px_rgba(14,18,44,0.65)] backdrop-blur sm:p-8">
            <div>
              <h3 className="text-[length:var(--step-1)] font-semibold">Get 10% off your first custom case</h3>
              <p className="mt-3 text-[length:var(--step--1)] text-white/70">No spam, just launch drops and design tips straight from the studio.</p>
            </div>
            <form className="space-y-4" aria-label="Newsletter signup">
              <div>
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-[18px] border border-white/15 bg-[#070818]/80 px-4 py-3 text-[length:var(--step--1)] text-white placeholder:text-white/40 focus:border-transparent focus:outline-none focus:ring-4 focus:ring-cyan-300/45"
                />
              </div>
              <label className="flex items-start gap-3 text-[length:var(--step--2)] text-white/60">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-white/20 bg-transparent text-cyan-300 focus:ring-cyan-300" />
                Email me personalised offers
              </label>
              <button
                type="submit"
                className="inline-flex min-h-[3rem] w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-300 via-indigo-400 to-pink-400 px-6 text-[length:var(--step--1)] font-semibold text-slate-900 shadow-[0_12px_30px_rgba(132,101,255,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_42px_rgba(132,101,255,0.45)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/45"
              >
                Join the list
              </button>
              <p className="text-[length:var(--step--2)] text-white/50">
                By subscribing you agree to our <a className="underline" href="/privacy">Privacy Policy</a>.
              </p>
            </form>

            <div className="rounded-[20px] border border-white/10 bg-white/4 p-5 text-[length:var(--step--1)] text-white/70">
              <h4 className="text-xs font-semibold uppercase tracking-[0.28em] text-white/50">Support hours</h4>
              <p className="mt-2">Live chat Monday – Friday · 9am to 6pm GMT</p>
              <p className="mt-1">Weekend email support from 10am to 4pm.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-10 border-t border-white/10 pt-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4 text-white/60">
            <button type="button" className="min-tap inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/8 text-white transition hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/45" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
                <path d="M17.5 6.5h.01" />
              </svg>
            </button>
            <button type="button" className="min-tap inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/8 text-white transition hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/45" aria-label="TikTok">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M17 6.1a4.5 4.5 0 0 0 3 1.1V4.2A7 7 0 0 1 14 2v12.5a2.5 2.5 0 1 1-1.9-2.44" />
              </svg>
            </button>
            <button type="button" className="min-tap inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/8 text-white transition hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/45" aria-label="Pinterest">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M14.5 17.5c1.5-1.1 2.5-3 2.5-5 0-3.2-2.4-5.5-5-5.5S7 9.3 7 12.5c0 2 1 3.9 2.5 5" />
                <path d="M12 22l1-6" />
              </svg>
            </button>
            <button type="button" className="min-tap inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/8 text-white transition hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/45" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M22 12s0-3-0.34-4.35a2.5 2.5 0 0 0-1.69-1.77C18.22 5.5 12 5.5 12 5.5s-6.22 0-7.97.38a2.5 2.5 0 0 0-1.69 1.77C2 9 2 12 2 12s0 3 0.34 4.35a2.5 2.5 0 0 0 1.69 1.77C5.78 18.5 12 18.5 12 18.5s6.22 0 7.97-.38a2.5 2.5 0 0 0 1.69-1.77C22 15 22 12 22 12Z" />
                <path d="m10 15 5-3-5-3v6Z" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-4 text-[length:var(--step--2)] text-white/50 lg:flex-row lg:items-center lg:gap-6">
            <div className="flex flex-wrap gap-4">
              <a className="hover:text-white" href="/delivery">Delivery</a>
              <a className="hover:text-white" href="/returns">Returns</a>
              <a className="hover:text-white" href="/privacy">Privacy</a>
              <a className="hover:text-white" href="/terms">Terms</a>
              <a className="hover:text-white" href="/accessibility">Accessibility</a>
            </div>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/6 px-4 py-2 text-xs font-semibold text-white/70">
              <span className="inline-flex h-5 w-8 items-center justify-center rounded bg-white/10 text-[10px] font-semibold tracking-[0.2em] text-white/80">
                UK
              </span>
              United Kingdom · GBP
            </div>
          </div>
        </div>

        <div className="mt-10 text-[length:var(--step--2)] text-white/40">&copy; {new Date().getFullYear()} Edge! Studio. All rights reserved.</div>
      </div>
    </footer>
  );
}
