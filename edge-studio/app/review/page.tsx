"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/lib/store";

export default function ReviewPage() {
  const { items, remove, total } = useCart();
  const cartIsEmpty = items.length === 0;

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-8 px-6 py-10">
      <header className="flex flex-col gap-2">
        <p className="text-sm uppercase tracking-[0.3rem] text-[#ffd75e]">
          Review & checkout
        </p>
        <h1 className="text-3xl font-semibold text-white md:text-4xl">
          {cartIsEmpty ? "Your cart is empty" : "Almost ready to print"}
        </h1>
        <p className="max-w-2xl text-white/70">
          Confirm your designs, remove any extras, then head to checkout to finish
          payment with the mock provider.
        </p>
      </header>

      {cartIsEmpty ? (
        <section className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-white/70">
          <p>No items yet. Create a design to see it here.</p>
          <Link
            href="/configure"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-[#1020ff] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#1020ff]/40 transition hover:bg-[#1b2bff]"
          >
            Launch Design Studio
          </Link>
        </section>
      ) : (
        <section className="space-y-6">
          <ul className="space-y-4">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 md:flex-row md:items-center md:justify-between"
              >
                <div className="flex flex-1 flex-col gap-4 md:flex-row md:items-center">
                  <div className="h-24 w-24 overflow-hidden rounded-xl border border-white/20 bg-black/30">
                    <Image
                      src={item.preview}
                      alt={`${item.finish} finish preview`}
                      width={96}
                      height={96}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white">
                      {item.finish.toUpperCase()} finish
                    </p>
                    <p className="text-sm text-white/70">
                      MagSafe {item.magsafe ? "included" : "not included"}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-widest text-white/50">
                      Prompt
                    </p>
                    <p className="text-sm text-white/80">{item.prompt}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 md:flex-col md:items-end">
                  <p className="text-lg font-semibold text-white">
                    GBP {item.price.toFixed(2)}
                  </p>
                  <button
                    type="button"
                    onClick={() => remove(item.id)}
                    className="rounded-full border border-red-400/40 px-4 py-2 text-sm text-red-300 transition hover:bg-red-500/20"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-white md:flex-row md:items-center">
            <p className="text-lg font-semibold">
              Total: GBP {total().toFixed(2)}
            </p>
            <Link
              href="/checkout"
              className="rounded-full bg-[#1020ff] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#1020ff]/40 transition hover:bg-[#1b2bff]"
            >
              Go to checkout
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}
