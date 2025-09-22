"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { payment } from "@/lib/payment";
import { useCart } from "@/lib/store";

export default function CheckoutPage() {
  const { items, total, clear } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  if (items.length === 0) {
    return (
      <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-6 px-6 py-10 text-white">
        <h1 className="text-3xl font-semibold">Nothing to checkout</h1>
        <p className="text-white/70">
          Add a design to your cart before attempting payment.
        </p>
        <Link
          href="/configure"
          className="mt-4 inline-flex w-fit items-center rounded-full bg-[#1020ff] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-[#1020ff]/40 transition hover:bg-[#1b2bff]"
        >
          Back to Design Studio
        </Link>
      </main>
    );
  }

  const handlePayment = async () => {
    setError(null);
    setIsProcessing(true);
    try {
      const orderId = crypto.randomUUID();
      const amountInMinorUnits = Math.round(total() * 100);
      await payment.createIntent({
        orderId,
        amount: amountInMinorUnits,
        currency: "GBP",
      });
      const result = await payment.confirm({ paymentId: `pay_${orderId}` });
      if (result.status === "paid") {
        clear();
        router.push(`/order/success?orderId=${orderId}`);
      } else {
        setError("Payment failed. Try again or use a different method.");
      }
    } catch (err) {
      console.error(err);
      setError("Unexpected payment error. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-8 px-6 py-10 text-white">
      <header className="flex flex-col gap-2">
        <p className="text-sm uppercase tracking-[0.3rem] text-[#ffd75e]">
          Checkout
        </p>
        <h1 className="text-3xl font-semibold md:text-4xl">Secure your print</h1>
        <p className="text-white/70">
          Mock payments complete instantly. We will route you to an order
          confirmation with tracking stub.
        </p>
      </header>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-lg font-semibold">Order summary</h2>
        <ul className="mt-4 space-y-3 text-sm text-white/80">
          {items.map((item) => (
            <li key={item.id} className="flex justify-between">
              <span>{item.finish} finish {item.magsafe ? "with" : "without"} MagSafe</span>
              <span>GBP {item.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-center justify-between text-lg font-semibold">
          <span>Total due</span>
          <span>GBP {total().toFixed(2)}</span>
        </div>
      </section>

      {error && (
        <p className="rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {error}
        </p>
      )}

      <button
        type="button"
        onClick={handlePayment}
        disabled={isProcessing}
        className="inline-flex items-center justify-center rounded-full bg-[#00c896] px-6 py-3 text-sm font-semibold text-black shadow-md shadow-[#00c896]/30 transition hover:bg-[#12d6a4] disabled:cursor-not-allowed disabled:bg-[#0d8a6d] disabled:text-black/60"
      >
        {isProcessing ? "Processing..." : "Pay (Mock)"}
      </button>

      <p className="text-xs text-white/50">
        Payments are mocked for now. Swap in the real provider by implementing the
        PaymentService interface.
      </p>
    </main>
  );
}
