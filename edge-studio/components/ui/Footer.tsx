export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Shop</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li><a href="/shop">All Designs</a></li>
            <li><a href="/design">Create Your Case</a></li>
            <li><a href="/collections/new">New Arrivals</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Create</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li><a href="/design?template=upload">Upload Photo</a></li>
            <li><a href="/design?template=templates">Browse Templates</a></li>
            <li><a href="/design?template=text">Text-only Designs</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Support</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li><a href="/help/shipping">Shipping</a></li>
            <li><a href="/help/returns">Returns</a></li>
            <li><a href="/help/contact">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-900">About</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li><a href="/about">Our Story</a></li>
            <li><a href="/sustainability">Sustainability</a></li>
            <li><a href="/press">Press</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <form className="flex w-full sm:w-auto items-center gap-2">
            <label htmlFor="newsletter" className="sr-only">Email address</label>
            <input
              id="newsletter"
              type="email"
              placeholder="Get 10% off your first custom case"
              className="w-full sm:w-80 rounded-full border border-slate-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="rounded-full px-5 py-2 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-slate-500">&copy; {new Date().getFullYear()} Custom Case Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
