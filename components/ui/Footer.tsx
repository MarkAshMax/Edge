import React from "react";

export function Footer() {
  return (
    <footer className="bg-[#05070A] text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[2fr_2fr_3fr]">
          <div className="grid grid-cols-2 gap-8 text-sm text-white/70 sm:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">Shop</h3>
              <ul className="mt-3 space-y-2">
                <li><a href="/shop/new" className="hover:text-white">New In</a></li>
                <li><a href="/shop/best-sellers" className="hover:text-white">Best Sellers</a></li>
                <li><a href="/shop/photo" className="hover:text-white">Photo Cases</a></li>
                <li><a href="/shop/artists" className="hover:text-white">Artist Collabs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">Create</h3>
              <ul className="mt-3 space-y-2">
                <li><a href="/create" className="hover:text-white">Custom Builder</a></li>
                <li><a href="/templates" className="hover:text-white">Templates</a></li>
                <li><a href="/materials" className="hover:text-white">Materials</a></li>
                <li><a href="/accessories" className="hover:text-white">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">Support</h3>
              <ul className="mt-3 space-y-2">
                <li><a href="/support" className="hover:text-white">Help Centre</a></li>
                <li><a href="/track" className="hover:text-white">Track Order</a></li>
                <li><a href="/delivery" className="hover:text-white">Delivery & Returns</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">About</h3>
              <ul className="mt-3 space-y-2">
                <li><a href="/about" className="hover:text-white">Our Story</a></li>
                <li><a href="/sustainability" className="hover:text-white">Sustainability</a></li>
                <li><a href="/careers" className="hover:text-white">Careers</a></li>
                <li><a href="/press" className="hover:text-white">Press</a></li>
              </ul>
            </div>
          </div>
          <div className="rounded-[20px] border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold text-white">Get 10% off your first custom case.</h3>
            <p className="mt-3 text-sm text-white/70">No spam, just launch drops and design tips.</p>
            <form className="mt-6 space-y-4" aria-label="Newsletter signup">
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  className="w-full rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6EE7F9]"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#6EE7F9] via-[#A78BFA] to-[#F472B6] px-6 py-3 text-sm font-semibold text-[#0B0D10] shadow-[0_10px_20px_rgba(108,90,255,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6EE7F9]"
                >
                  Join the list
                </button>
              </div>
              <label className="flex items-start gap-3 text-xs text-white/60">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border border-white/30 bg-transparent" />
                Email me personalised offers
              </label>
              <p className="text-xs text-white/50">By subscribing you agree to our Privacy Policy.</p>
            </form>
          </div>
          <div className="space-y-6 text-sm text-white/70">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">Need a hand?</h3>
              <p className="mt-3">Live chat weekdays 9am–6pm BST</p>
              <p className="mt-1">Email support@mycustomcase.co.uk</p>
            </div>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition duration-200 hover:border-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6EE7F9]"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="3.5" />
                  <circle cx="17.5" cy="6.5" r="1" />
                </svg>
              </a>
              <a
                href="https://tiktok.com"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition duration-200 hover:border-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6EE7F9]"
                aria-label="TikTok"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M15 3C15.2 4.4 16.1 6 18 6V8.5C16.1 8.5 14.7 7.7 14.1 6.6V15.5C14.1 18 12.1 20 9.6 20C7.1 20 5.1 18 5.1 15.5C5.1 13 7.1 11 9.6 11C9.9 11 10.2 11 10.5 11.1V13.7C10.2 13.6 9.9 13.5 9.6 13.5C8.5 13.5 7.6 14.4 7.6 15.5C7.6 16.6 8.5 17.5 9.6 17.5C10.7 17.5 11.6 16.6 11.6 15.5V3H15Z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="https://pinterest.com"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition duration-200 hover:border-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6EE7F9]"
                aria-label="Pinterest"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M12 3C7.6 3 4 6.6 4 11C4 13.9 5.6 16.4 8 17.7C8 17 8 16 8.2 15.1C8.4 14.2 9.7 8.8 9.7 8.8C9.5 8.3 9.5 7.6 9.5 7C9.5 5.5 10.6 4.4 12 4.4C13 4.4 13.8 4.9 14.1 5.6C14.8 7 13.8 9.1 13.4 10.8C13 12.2 14 13.3 15.3 13.3C17.6 13.3 19.5 11 19.5 8.1C19.5 4.9 17 3 12 3Z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition duration-200 hover:border-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6EE7F9]"
                aria-label="YouTube"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M21 8.5C21 7.1 19.9 6 18.5 6H5.5C4.1 6 3 7.1 3 8.5V15.5C3 16.9 4.1 18 5.5 18H18.5C19.9 18 21 16.9 21 15.5V8.5Z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 9L15 12L10 15V9Z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-6">
            <a href="/delivery" className="hover:text-white">Delivery</a>
            <a href="/returns" className="hover:text-white">Returns</a>
            <a href="/privacy" className="hover:text-white">Privacy</a>
            <a href="/terms" className="hover:text-white">Terms</a>
            <a href="/accessibility" className="hover:text-white">Accessibility</a>
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-white/70 transition duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6EE7F9]"
            aria-label="Change country and currency"
          >
            <img src="/images/icons/flag-uk.svg" alt="United Kingdom" className="h-4 w-6 rounded-sm" />
            GBP £
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
