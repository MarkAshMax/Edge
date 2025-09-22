type PressLogo = {
  name: string;
  year: string;
};

type UgcTile = {
  handle: string;
  caption: string;
  gradient: string;
  likes: string;
};

const press: PressLogo[] = [
  { name: "Wired", year: "2024" },
  { name: "Hypebeast", year: "2024" },
  { name: "TechCrunch", year: "2023" },
  { name: "It&apos;s Nice That", year: "2023" },
];

const ugc: UgcTile[] = [
  {
    handle: "@alexa.designs",
    caption: "Studio drop at dusk",
    gradient: "linear-gradient(135deg,#6d4eff 0%,#ff51c8 55%,#ffd43b 100%)",
    likes: "1.2k",
  },
  {
    handle: "@zainshoots",
    caption: "Sunset test prints",
    gradient: "linear-gradient(135deg,#22d3ee 0%,#6366f1 50%,#a855f7 100%)",
    likes: "986",
  },
  {
    handle: "@chloe.wonder",
    caption: "Eco case stack",
    gradient: "linear-gradient(135deg,#34d399 0%,#22d3ee 50%,#6366f1 100%)",
    likes: "742",
  },
  {
    handle: "@edgecrew",
    caption: "MagSafe stress test",
    gradient: "linear-gradient(135deg,#f97316 0%,#fb7185 45%,#6366f1 100%)",
    likes: "1.6k",
  },
  {
    handle: "@ari.motion",
    caption: "3D render sneak peek",
    gradient: "linear-gradient(135deg,#7dd3fc 0%,#c084fc 45%,#f9a8d4 100%)",
    likes: "2.1k",
  },
  {
    handle: "@caseclub",
    caption: "Team gifting day",
    gradient: "linear-gradient(135deg,#ffe066 0%,#ff7eb3 55%,#6d83ff 100%)",
    likes: "1.0k",
  },
];

const badges = [
  {
    title: "MagSafe compatible",
    desc: "Snaps perfectly with Apple accessories",
  },
  {
    title: "12-month warranty",
    desc: "Crack & fade protection all year",
  },
  {
    title: "UK shipping & returns",
    desc: "Tracked delivery + free 30-day returns",
  },
  {
    title: "Eco materials",
    desc: "Plant-based & recycled options",
  },
];

export default function PressAndUGC() {
  return (
    <section aria-labelledby="trust-heading" className="relative isolate py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[rgba(8,10,22,0.85)] to-[#04050b]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(circle_at_top,rgba(110,231,249,0.18),transparent_65%)]" />
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 id="trust-heading" className="text-3xl font-semibold tracking-tight text-white sm:text-[44px] sm:leading-tight">
              Trusted by thousands
            </h2>
            <p className="mt-3 text-base text-white/70 sm:text-lg">
              Featured by the world&apos;s leading design voices and documented daily by our #MyCustomCase crew.
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-white/40">
            <span>Press</span>
            <span className="h-px w-10 bg-gradient-to-r from-white/30 to-transparent" />
            <span>UGC</span>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4 text-sm text-white/70">
          {press.map((logo) => (
            <div
              key={logo.name}
              className="flex h-16 min-w-[160px] flex-1 items-center justify-between rounded-[20px] border border-white/12 bg-white/6 px-6 text-base font-semibold tracking-[0.32em] uppercase text-white/60 backdrop-blur"
            >
              <span dangerouslySetInnerHTML={{ __html: logo.name }} />
              <span className="text-xs text-white/40">{logo.year}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ugc.map((item) => (
            <figure
              key={item.handle}
              className="group relative overflow-hidden rounded-[28px] border border-white/12 bg-white/6 p-6 shadow-[0_24px_70px_-36px_rgba(14,18,44,0.6)] transition hover:-translate-y-1 hover:border-white/20"
            >
              <div className="absolute inset-0" style={{ background: item.gradient }} aria-hidden="true" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2),transparent_75%)]" aria-hidden="true" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04050b]/85 via-[#04050b]/45 to-transparent" aria-hidden="true" />

              <div className="relative flex h-full flex-col justify-between">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/80">
                    <span>{item.handle}</span>
                    <span className="text-white/50">•</span>
                    <span className="text-white/60">{item.likes} likes</span>
                  </div>
                  <p className="text-lg font-semibold text-white">{item.caption}</p>
                </div>
                <button
                  type="button"
                  className="mt-6 inline-flex items-center gap-2 self-start rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/80 transition hover:border-white/30 hover:bg-white/16 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/45"
                >
                  View post
                  <span aria-hidden="true">↗</span>
                </button>
              </div>
            </figure>
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map((badge) => (
            <div
              key={badge.title}
              className="relative flex h-full flex-col justify-between overflow-hidden rounded-[24px] border border-white/12 bg-white/6 p-6 text-sm text-white/75 shadow-[0_20px_60px_-34px_rgba(14,18,44,0.55)] backdrop-blur"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(110,231,249,0.18),transparent_75%)]" aria-hidden="true" />
              <div className="relative">
                <h3 className="text-base font-semibold text-white">{badge.title}</h3>
                <p className="mt-2 text-sm text-white/70">{badge.desc}</p>
              </div>
              <div className="relative mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.32em] text-white/40">
                <span className="h-px w-8 bg-gradient-to-r from-white/40 to-transparent" />
                <span>Edge verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
