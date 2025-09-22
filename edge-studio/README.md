# Edge! Studio Prototype

Edge! Studio is a Next.js + Tailwind prototype that lets you design a custom phone skin, review it in 3D, and run a mock checkout. It mirrors the product brief in the repository root.

## Running the app

```bash
npm install
npm run dev
```

Then visit http://localhost:3000 to launch the flow:

1. Home page highlights prompts, challenges, and business CTA.
2. Configure page captures a design prompt, finish, and MagSafe toggle while previewing a placeholder render.
3. Review page lists cart items for removal or checkout.
4. Checkout page calls the `MockPaymentService`, clears the cart, and redirects to the success screen.

## Notable files

- `app/page.tsx` - marketing-style landing page with quick actions.
- `app/configure/page.tsx` - interactive design configuration UI.
- `app/review/page.tsx` - cart summary with removal controls and totals.
- `app/checkout/page.tsx` - mock payment flow using the `PaymentService` abstraction.
- `lib/payment.ts` - simple `PaymentService` implementation ready to swap with Stripe.
- `lib/store.ts` - in-memory cart powered by Zustand.

## Next steps

- Replace the placeholder SVGs in `public/placeholder` with generated previews.
- Persist carts and designs via an API instead of client state.
- Implement real payment provider and add webhook handling.
