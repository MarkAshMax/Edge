"use client";

import { Suspense, useMemo, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useCart } from "@/lib/store";

const DEVICE_ID = "iphone-15-pro";
const BASE_PRICE = 14.99;

const finishes: Array<{ label: string; value: "matte" | "gloss" }> = [
  { label: "Matte", value: "matte" },
  { label: "Gloss", value: "gloss" },
];

function ConfigureShell() {
  const [prompt, setPrompt] = useState("Make my cat vaporwave");
  const [finish, setFinish] = useState<"matte" | "gloss">("matte");
  const [magsafe, setMagsafe] = useState(true);
  const router = useRouter();
  const params = useSearchParams();
  const addToCart = useCart((state) => state.add);

  const previewSrc = useMemo(() => `/placeholder/${finish}.svg`, [finish]);
  const mode = params.get("mode");

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-8 px-6 py-10">
      <header className="flex flex-col gap-2">
        <p className="text-sm uppercase tracking-[0.3rem] text-[#ffd75e]">
          Design Studio
        </p>
        <h1 className="text-3xl font-semibold text-white md:text-4xl">
          {mode === "challenge" ? "Autumn Vibes entry" : "Craft your next skin"}
        </h1>
        <p className="max-w-2xl text-white/70">
          Fine-tune your prompt, tweak print options, and preview the result before
          sending it to print. Every design auto-fits the selected device.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6">
          <div className="rounded-2xl bg-white/5 p-6 shadow-lg shadow-black/20">
            <label className="block text-sm font-semibold text-white" htmlFor="prompt">
              Prompt
            </label>
            <textarea
              id="prompt"
              value={prompt}
              onChange={(event) => setPrompt(event.target.value)}
              rows={4}
              className="mt-3 w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#1020ff] focus:outline-none"
              placeholder="Describe the artwork you want"
            />
            <div className="mt-4 flex flex-wrap gap-2 text-sm text-white/60">
              <button
                type="button"
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1"
                onClick={() =>
                  setPrompt("Remix my dog into a neon street art poster")
                }
              >
                Neon street art
              </button>
              <button
                type="button"
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1"
                onClick={() => setPrompt("Minimal monochrome gradient with soft grain")}
              >
                Minimal gradient
              </button>
              <button
                type="button"
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1"
                onClick={() => setPrompt("Retro camcorder overlay with date stamp")}
              >
                Retro overlay
              </button>
            </div>
          </div>

          <div className="rounded-2xl bg-white/5 p-6">
            <h2 className="text-base font-semibold text-white">Finish</h2>
            <div className="mt-4 flex gap-3">
              {finishes.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setFinish(option.value)}
                  className={`rounded-xl border px-4 py-2 text-sm transition ${
                    finish === option.value
                      ? "border-[#1020ff] bg-[#1020ff] text-white"
                      : "border-white/20 bg-white/5 text-white/70 hover:border-white/40"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-white/80">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={magsafe}
                  onChange={(event) => setMagsafe(event.target.checked)}
                  className="h-4 w-4 rounded border border-white/20 bg-black/40"
                />
                Add MagSafe layer
              </label>
              <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/60">
                Recommended
              </span>
            </div>
          </div>
        </div>

        <aside className="flex flex-col gap-6">
          <div className="rounded-2xl bg-white/5 p-6">
            <h2 className="text-base font-semibold text-white">3D preview</h2>
            <p className="mt-2 text-sm text-white/70">
              Simulated fit for iPhone 15 Pro. Tap the AR button on supported
              devices.
            </p>
            <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-black/40">
              <Image
                src={previewSrc}
                alt={`${finish} finish preview`}
                width={540}
                height={540}
                className="h-auto w-full"
                priority
              />
            </div>
            <button
              type="button"
              className="mt-4 w-full rounded-full border border-white/30 px-4 py-2 text-sm text-white"
            >
              View in AR
            </button>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#1020ff]/20 p-6 text-white">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3rem] text-white/60">
              Order summary
            </h3>
            <ul className="mt-4 space-y-1 text-sm text-white/80">
              <li>Device: iPhone 15 Pro</li>
              <li>Finish: {finish}</li>
              <li>MagSafe: {magsafe ? "Yes" : "No"}</li>
            </ul>
            <p className="mt-4 text-2xl font-semibold">GBP {BASE_PRICE.toFixed(2)}</p>
            <button
              type="button"
              onClick={() => {
                const id = crypto.randomUUID();
                addToCart({
                  id,
                  prompt,
                  device: DEVICE_ID,
                  finish,
                  magsafe,
                  price: BASE_PRICE,
                  preview: previewSrc,
                });
                router.push("/review");
              }}
              className="mt-4 w-full rounded-full bg-[#1020ff] px-4 py-3 text-sm font-semibold text-white shadow-md shadow-[#1020ff]/40 transition hover:bg-[#1b2bff]"
            >
              Add to cart
            </button>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default function ConfigurePage() {
  return (
    <Suspense
      fallback={
        <main className="mx-auto flex min-h-screen w-full max-w-5xl items-center justify-center px-6 py-10 text-white/70">
          Loading Design Studio...
        </main>
      }
    >
      <ConfigureShell />
    </Suspense>
  );
}
