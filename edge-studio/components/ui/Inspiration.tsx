type Tile = {
  title: string;
  caption: string;
  gradient: string;
  emphasis?: boolean;
};

const tiles: Tile[] = [
  {
    title: "Festival-proof finishes",
    caption: "Gloss, glitter and impact-ready shells built to move with you.",
    gradient: "linear-gradient(140deg,#ff6ec7 0%,#8450ff 45%,#48d6ff 100%)",
    emphasis: true,
  },
  {
    title: "Designs that pop on camera",
    caption: "Colour-calibrated palettes so every selfie shines at golden hour.",
    gradient: "linear-gradient(135deg,#ffe066 0%,#ff7eb3 50%,#6d83ff 100%)",
  },
  {
    title: "Eco options available",
    caption: "Plant-based and recycled materials with rich, tactile finishes.",
    gradient: "linear-gradient(135deg,#32d399 0%,#17b7c0 50%,#647dff 100%)",
  },
  {
    title: "Artist collabs",
    caption: "Limited runs from illustrators and 3D artists across the UK.",
    gradient: "linear-gradient(135deg,#6366f1 0%,#ec4899 55%,#f97316 100%)",
  },
  {
    title: "Make it yours",
    caption: "Layer stickers, text and textures — export templates for future drops.",
    gradient: "linear-gradient(135deg,#7dd3fc 0%,#c084fc 50%,#f9a8d4 100%)",
  },
];

export default function Inspiration() {
  return (
    <section aria-labelledby="inspo-heading" className="relative isolate py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(248,79,181,0.16),transparent_75%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-72 bg-gradient-to-t from-[#04050b] via-[#070818] to-transparent" />
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 id="inspo-heading" className="text-3xl font-semibold tracking-tight text-white sm:text-[44px] sm:leading-tight">
              Think outside the case
            </h2>
            <p className="mt-3 text-base text-white/70 sm:text-lg">
              From festival-ready finishes to grounded eco builds, find your spark across our moodboard of community favourites.
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-white/50">
            <span>moodboard</span>
            <span className="h-px w-10 bg-gradient-to-r from-white/30 to-transparent" />
            <span>refresh daily</span>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((tile, index) => (
            <figure
              key={tile.title}
              className={`group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/6 p-6 shadow-[0_28px_70px_-32px_rgba(14,18,44,0.65)] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_36px_90px_-28px_rgba(248,79,181,0.45)] ${
                tile.emphasis ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <div className="absolute inset-0" style={{ background: tile.gradient }} aria-hidden="true" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.28),transparent_70%)]" aria-hidden="true" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04050b]/75 via-[#04050b]/35 to-transparent" aria-hidden="true" />

              <div className="relative flex h-full flex-col justify-between">
                <div className="space-y-3">
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.32em] text-white/60">
                    <span className="block h-px w-6 bg-gradient-to-r from-white to-transparent" />
                    Inspiration
                  </span>
                  <h3 className="text-2xl font-semibold text-white">{tile.title}</h3>
                </div>
                <p className="text-sm leading-6 text-white/75">{tile.caption}</p>
              </div>

              <div className="absolute left-6 top-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.32em] text-white/70">
                {String(index + 1).padStart(2, "0")}
                <span className="block h-px w-6 bg-gradient-to-r from-white/60 to-transparent" />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
