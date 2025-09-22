"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function SuccessShell() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-6 px-6 py-10 text-white">
      <header className="flex flex-col gap-2">
        <p className="text-sm uppercase tracking-[0.3rem] text-[#ffd75e]">
          Order confirmed
        </p>
        <h1 className="text-3xl font-semibold md:text-4xl">Thanks for your order</h1>
        <p className="text-white/70">
          We will send tracking details as soon as the print-on-demand partner hands
          the parcel to the courier.
        </p>
      </header>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80">
        <p className="text-sm uppercase tracking-[0.3rem] text-white/50">
          Reference
        </p>
        <p className="mt-2 text-2xl font-semibold text-white">
          {orderId ?? "Pending"}
        </p>
        <p className="mt-4 text-sm">
          Save this code to revisit your order or share a preview with friends.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/orders"
            className="rounded-full border border-white/30 px-4 py-2 text-sm text-white"
          >
            Track package
          </Link>
          <Link
            href="/configure"
            className="rounded-full bg-[#1020ff] px-4 py-2 text-sm font-semibold text-white shadow-md shadow-[#1020ff]/40"
          >
            Design another skin
          </Link>
        </div>
      </section>
    </main>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense
      fallback={
        <main className="mx-auto flex min-h-screen w-full max-w-3xl items-center justify-center px-6 py-10 text-white/70">
          Loading order details...
        </main>
      }
    >
      <SuccessShell />
    </Suspense>
  );
}
