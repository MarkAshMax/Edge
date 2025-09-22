export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/95">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-sm font-semibold text-white">Shop</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li><a href="/shop">All Designs</a></li>
            <li><a href="/design">Create Your Case</a></li>
            <li><a href="/collections/new">New Arrivals</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">Create</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li><a href="/design?template=upload">Upload Photo</a></li>
            <li><a href="/design?template=templates">Browse Templates</a></li>
            <li><a href="/design?template=text">Text-only Designs</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">Support</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li><a href="/help/shipping">Shipping</a></li>
            <li><a href="/help/returns">Returns</a></li>
            <li><a href="/help/contact">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">About</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li><a href="/about">Our Story</a></li>
            <li><a href="/sustainability">Sustainability</a></li>
            <li><a href="/press">Press</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800/80">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">
          <form className="flex w-full sm:w-auto items-center gap-2">
            <label htmlFor="newsletter" className="sr-only">Email address</label>
            <input
              id="newsletter"
              type="email"
              placeholder="Get 10% off your first custom case"
              className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-slate-400 sm:w-80 focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
            />
            <button
              type="submit"
              className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-slate-400">&copy; {new Date().getFullYear()} Custom Case Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
