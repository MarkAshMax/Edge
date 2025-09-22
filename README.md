# Edge! Studio Product Brief

## 1. One-Sentence Value Proposition
Edge! Studio - "Design a case in seconds, preview it in AR, swap styles anytime: the case is free, you only pay for the print."

## 2. Target Users & Jobs to Be Done
| Persona | Context & Pains | Top Jobs-to-be-Done |
| --- | --- | --- |
| **Zara (19) - Aesthetic-driven student** | Lives on Instagram/TikTok; wants fast, cheap refreshes; hates long checkouts and "what you see != what you get." | 1. Turn moodboards/photos into stylish prints with one tap. 2. See it on my exact phone before buying (AR). 3. Share and get friends' votes. |
| **Dylan (32) - New parent / gifter** | Time-poor; wants a reliable keepsake gift; worries about quality/fit. | 1. Upload baby/pet photos, auto-clean and crop. 2. Safe, easy checkout. 3. Reorder or make matching gifts quickly. |
| **Amaya (28) - Design-savvy creator** | Wants royalties and control; frustrated by marketplace fees. | 1. Publish designs with transparent rev-share. 2. Run design challenges. 3. Track sales and get paid weekly. |

**Key pains:** uncertainty about fit/look, slow fulfilment, high price for small iterations, poor creator economics, returns friction.

## 3. Use Cases & Success Criteria
- **Primary use cases**
  - Natural-language design: "Remix this cat pic into cyberpunk line-art."
  - AR/3D preview on the exact device (in-app + WebAR).
  - Fast reorder/swap (free shell + printed backplates).
  - Creator challenges and drops (vote -> print).
  - Edge! for Business (bulk logo cases for teams/events).
- **Secondary use cases**: Matching wallpapers, MagSafe add-ons, gift packaging.
- **KPIs & guardrails**
  - AR view to Add-to-Cart rate +20%.
  - First Contentful Paint < 2 s on 4G; Interaction to Next Paint "good"; Cumulative Layout Shift < 0.1.
  - Time-to-first design < 30 s.
  - Repeat purchase (skin #2) within 45 days for at least 30% of first-time buyers.
  - Accessibility: 100% automated AA checks plus manual review for critical flows.
  - Privacy: data minimisation aligned with GDPR Article 5(1)(c).

## 4. Information Architecture
- **Sitemap**
  - Home/Discover: trending, challenges, templates, "Start with a prompt".
  - Design Studio: upload (image/video), generate, templates, edit, preview (3D/AR).
  - Product: device selector, materials/finish, MagSafe, add-ons.
  - Cart/Checkout: address, delivery, payment (via `PaymentService`).
  - Orders: confirmation, tracking, reorder, "Swap Pass" upsell.
  - Community: challenges, creator profiles, drops.
  - Business: bulk orders, CSV import, quotes.
  - Account: profile, addresses, payment methods, privacy, support.
- **Entities & relations**
  - `User` 1-* `Order`.
  - `Order` *-* `OrderItem` -> `PrintedSkin` (SKU) -> belongs to `DeviceModel`.
  - `User` *-* `Design` (owner or creator), `Design` has `Asset` (image/vector) and `Prompt`.
  - `Design` -> `Variant` (finish/material).
  - `Challenge` *-* `Design` (submissions), `Vote` (User -> Design).
  - `Subscription` ("Swap Pass") 1-* `Shipment`.
  - `CreatorPayout` linked to `Design` sales.
  - `BusinessAccount` 1-* `BulkOrder`.
  - `Payment` (provider id, status) linked to `Order`.
  - `DeviceModel` catalogue: `Brand`, `Model`, `Year`.

## 5. End-to-End User Flows
- **Happy path: Discover -> Configure -> Review -> Place Order -> Track**
  1. Home -> "Start with a prompt".
  2. Upload photo -> AI suggestions -> auto device fit.
  3. Preview (3D/AR) -> choose finish -> add to cart.
  4. Checkout (address -> mock payment).
  5. Confirmation -> tracking -> "Share" and "Reorder".
- **Edge cases**: low-res image; IP-sensitive logo; AR not supported; flaky network (service worker + queue); payment auth fails (recover via `PaymentService` retry).
- **Wireframes (ASCII)**

```
+----------------------------------------------------+
| Edge! Studio             [Search / Talk to EdgeAI] |
|----------------------------------------------------|
| [Start with a prompt]  [Upload photo]  [Templates] |
| Trending:  [] Neon Pets  [] Minimal Mono  [] RetroCam |
| Challenge: "Autumn Vibes"  [Submit Design] [Vote]  |
+----------------------------------------------------+
```

```
+-------------+---------------------------+-----------+
| Device: iPhone 15 Pro  [Change]                    |
| 3D Preview  |  [Rotate / AR]                       |
|             |  Finish: (. Matte) (  Gloss)         |
|             |  MagSafe: (. Yes) (  No )            |
|-------------+--------------------------------------|
| AI Panel: "Make it vaporwave"  [Apply]  [Undo]     |
| Tools: Crop - BG Remove - Palette - Text - Stickers|
+----------------------------------------------------+
```

```
Items: [Skin x1 - Matte - MagSafe]  GBP 14.99
Address: [Auto-complete + Save]
Delivery: Free (2-4 days)
Payment: MockPaymentService  [Pay]
```

```
Order #EJ-100234  ETA: Tue-Thu
[Track package]  [Reorder]  [Share]
```

```
Profile | Orders | Designs | Subscription | Privacy
Support: Chat - Email - FAQ  |  Report IP issue
```

## 6. Conversation Design
- **Intents**: "Remix this into [style]", "Match my wallpaper", "Business bulk order 50 units", "Track order EJ-100234", "Help me choose a finish."
- **Clarifiers**: device model, style preference, finish, MagSafe, delivery deadline, price ceiling.
- **Repair strategies**: request missing slots; offer constrained options with previews; confirm before purchase.
- **Tone**: warm, concise, emoji-light; consumer mode avoids jargon, business mode uses precise terminology.
- **Example dialogue**
  - User: "Turn this cat into vaporwave."
  - EdgeAI: "Done. Want matte or gloss? Here is both in 3D - tap AR to see it on your phone."
  - User: "Matte, add MagSafe."
  - EdgeAI: "Added. GBP 14.99, free delivery. Order now?"
  - User: "Yes."
  - EdgeAI: "Ordered. ETA Thu. Want a matching wallpaper?"

## 7. AI System Blueprint
- **Capabilities**: multimodal input for background removal, upscaling, style transfer; retrieval-augmented generation with re-ranking; personalisation via "Style DNA"; client-side lightweight tasks vs cloud heavy generation with offline fallbacks.
- **Data sources & vector schema**: collections for templates, finishes, community designs, prompts, help docs; embeddings for title, tags, colors, style descriptions, device compatibility; hybrid retrieval with safety filters.
- **Safety/guardrails**: IP detection, NSFW filter, watermark detection, human review queue, prompt-injection mitigations aligned with OWASP guidance.
- **Caching, observability, evals**: CDN cache for meshes and thumbnails, Redis session cache, signed URLs; observability for latency, retrieval quality, model cost; offline and online evals with fallbacks when generation fails or AR unsupported.

## 8. Design System
- **Visual tokens**: brand color `#1020FF`, accent `#FFD75E`, neutrals `#0B0B0F`-`#F7F7FB`; typography Inter/IBM Plex Sans with scale 12/14/16/20/24/32/48; spacing 4/8/12/16/24/32; corner radius 16 for cards, 999 for pills; light and dark modes meeting WCAG AA.
- **Components**: buttons, inputs, cards, modals/sheets, toasts, stepper, tabs, 3D viewer, AR button, chat composer, progress, empty/loading/error states.
- **Microcopy**: empty "Let's make something you will love. Drop a photo or say what you want."; loading "Cooking up your style ~5 s."; error "That file looks too small for crisp print. Try a higher-res image or choose a template."

## 9. Technical Architecture
- **Stack**: Next.js + React + TypeScript (web/PWA), Expo for mobile, tRPC or NestJS REST API, PostgreSQL, Redis, S3-compatible storage, edge functions, Cloudflare/Vercel CDN, service worker for PWA, WebAR via Model-Viewer/Quick Look.
- **API sketch (tRPC style)**: `design.generate`, `design.update`, `catalog.deviceModels`, `order.create`, `payment.createIntent`, `order.track`, `challenge.submit`, `challenge.vote`.
- **Type definitions**

```ts
type CreateOrderReq = {
  items: { designId: string; deviceModelId: string; finish: 'matte'|'gloss'; magsafe: boolean; qty: number; }[];
  shipping: { name: string; line1: string; city: string; postCode: string; country: string; };
  email: string;
};
type CreateOrderRes = { orderId: string; total: number; currency: 'GBP'|'USD'|'EUR'; paymentId: string; status: 'requires_payment'|'paid' };
```

- **Database schema (excerpt)**

```
users(id PK, email UNIQUE, role)
designs(id PK, user_id FK, title, prompt, asset_url, status, created_at)
device_models(id PK, brand, model, year, mesh_url)
printed_skins(id PK, design_id FK, device_model_id FK, finish, magsafe, price)
orders(id PK, user_id FK, total, currency, status, created_at)
order_items(id PK, order_id FK, printed_skin_id FK, qty, unit_price)
payments(id PK, order_id FK, provider, provider_ref, status, amount, currency)
subscriptions(id PK, user_id FK, tier, status, renews_at)
challenges(id PK, title, starts_at, ends_at)
challenge_entries(id PK, challenge_id FK, design_id FK, votes)
creator_payouts(id PK, user_id FK, design_id FK, amount, period)
```

- **AuthN/AuthZ**: email/password + OAuth (Apple/Google); roles `customer`, `creator`, `business_admin`, `staff_admin`; row-level security for user-owned designs/orders.
- **Payment abstraction**

```ts
export interface PaymentService {
  createIntent(input: { orderId: string; amount: number; currency: string; customerEmail?: string }): Promise<{ paymentId: string; clientSecret?: string; status: 'requires_action'|'requires_payment'|'paid'|'failed' }>;
  confirm(input: { paymentId: string; paymentMethodNonce?: string }): Promise<{ status: 'paid'|'failed'; providerRef?: string }>;
  refund(input: { paymentId: string; amount?: number }): Promise<{ status: 'refunded'|'failed' }>;
}
```

- **Mock adapter**: returns `paid` immediately with Stripe-compatible lifecycle, plus webhooks for payment and fulfilment updates; telemetry for AR views, suggestions, add-to-cart, checkout start, payment success, time-to-first design; errors instrumented with Sentry/OpenTelemetry; feature flags via LaunchDarkly/ConfigCat.

## 10. Prototype Code (Next.js + TypeScript)
Minimal scaffold for Home -> Configure -> Review -> Place Order -> Confirmation with in-memory cart and `MockPaymentService`.

**Install & run**

```bash
npx create-next-app@latest edge-studio --ts --eslint
cd edge-studio
npm install zustand zod @tanstack/react-query
npm run dev
```

**`lib/payment.ts`**

```ts
export type PaymentStatus = 'requires_payment'|'paid'|'failed';
export interface PaymentService {
  createIntent(input:{orderId:string;amount:number;currency:string}):Promise<{paymentId:string;status:PaymentStatus}>;
  confirm(input:{paymentId:string}):Promise<{status:PaymentStatus}>;
}
export class MockPaymentService implements PaymentService {
  async createIntent(i:{orderId:string;amount:number;currency:string}){
    return { paymentId: `pay_${i.orderId}`, status:'requires_payment' as PaymentStatus };
  }
  async confirm(){ return { status:'paid' as PaymentStatus }; }
}
export const payment = new MockPaymentService();
```

**`lib/store.ts`**

```ts
import { create } from 'zustand';
type Item = { id:string; device:'iphone-15-pro'; finish:'matte'|'gloss'; magsafe:boolean; price:number; preview:string };
type State = { items:Item[]; add:(i:Item)=>void; remove:(id:string)=>void; clear:()=>void; total:()=>number; }
export const useCart = create<State>((set,get)=>(
  {
    items:[],
    add:(i)=>set(s=>({items:[...s.items,i]})),
    remove:(id)=>set(s=>({items:s.items.filter(x=>x.id!==id)})),
    clear:()=>set({items:[]}),
    total:()=>get().items.reduce((a,b)=>a+b.price,0)
  }
));
```

**`app/page.tsx` (Home)**

```tsx
import Link from "next/link";
export default function Home(){
  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold">Edge! Studio</h1>
      <p className="mt-2">Design a custom print in seconds. The case is free - you pay for the print.</p>
      <div className="mt-6 grid gap-4">
        <Link href="/configure" className="px-4 py-3 rounded-xl bg-blue-600 text-white w-fit">Start with a prompt</Link>
        <Link href="/configure?template=neon-pet" className="underline w-fit">Try "Neon Pet" template</Link>
      </div>
    </main>
  );
}
```

**`app/configure/page.tsx` (Configure)**

```tsx
"use client";
import { useState } from "react";
import { useCart } from "@/lib/store";
import { useRouter } from "next/navigation";
export default function Configure(){
  const [finish,setFinish]=useState<'matte'|'gloss'>('matte');
  const [magsafe,setMag]=useState(true);
  const [prompt,setPrompt]=useState("Make my cat vaporwave");
  const router = useRouter();
  const add = useCart(s=>s.add);
  const makePreview = (p:string)=>`/placeholder/${finish}.png`;
  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold">Design Studio</h2>
      <label className="block mt-4">Prompt</label>
      <input value={prompt} onChange={e=>setPrompt(e.target.value)} className="border rounded p-2 w-full"/>
      <div className="mt-4 flex gap-4 items-center">
        <label><input type="radio" checked={finish==='matte'} onChange={()=>setFinish('matte')}/> Matte</label>
        <label><input type="radio" checked={finish==='gloss'} onChange={()=>setFinish('gloss')}/> Gloss</label>
        <label><input type="checkbox" checked={magsafe} onChange={e=>setMag(e.target.checked)}/> MagSafe</label>
      </div>
      <div className="mt-6">
        <button className="px-4 py-3 bg-blue-600 text-white rounded-xl"
          onClick={()=>{
            add({ id: crypto.randomUUID(), device:'iphone-15-pro', finish, magsafe, price:14.99, preview:makePreview(prompt) });
            router.push("/review");
          }}>Add to cart</button>
      </div>
    </main>
  );
}
```

**`app/review/page.tsx` (Review)**

```tsx
"use client";
import { useCart } from "@/lib/store";
import Link from "next/link";
export default function Review(){
  const { items, remove, total } = useCart();
  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold">Review & Checkout</h2>
      {items.length===0? <p>Your cart is empty.</p> :
        <>
          <ul className="mt-4 space-y-2">{items.map(i=>
            <li key={i.id} className="p-3 border rounded flex justify-between">
              <div>{i.finish} - {i.magsafe?'MagSafe':'No MagSafe'} - GBP {i.price.toFixed(2)}</div>
              <button onClick={()=>remove(i.id)} className="underline">Remove</button>
            </li>)}
          </ul>
          <div className="mt-4 font-medium">Total: GBP {total().toFixed(2)}</div>
          <Link href="/checkout" className="inline-block mt-4 px-4 py-3 bg-blue-600 text-white rounded-xl">Checkout</Link>
        </>
      }
    </main>
  );
}
```

**`app/checkout/page.tsx`**

```tsx
"use client";
import { useCart } from "@/lib/store";
import { payment } from "@/lib/payment";
import { useRouter } from "next/navigation";
export default function Checkout(){
  const { items, total, clear } = useCart();
  const router = useRouter();
  if(items.length===0) return <main className="p-6">Nothing to checkout.</main>;
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold">Checkout</h2>
      <button className="mt-4 px-4 py-3 bg-green-600 text-white rounded-xl"
        onClick={async ()=>{
          const orderId = crypto.randomUUID();
          await payment.createIntent({ orderId, amount: Math.round(total()*100), currency: 'GBP' });
          const res = await payment.confirm({ paymentId:`pay_${orderId}` });
          if(res.status==='paid'){ clear(); router.push(`/order/success?orderId=${orderId}`); }
        }}>Pay (Mock)</button>
    </main>
  );
}
```

**`app/order/success/page.tsx`**

```tsx
"use client";
import { useSearchParams } from "next/navigation";
export default function Success(){
  const p = useSearchParams();
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold">Order Confirmed</h2>
      <p className="mt-2">Order #{p.get("orderId")} - We will email tracking soon.</p>
      <a href="/" className="inline-block mt-4 underline">Design another</a>
    </main>
  );
}
```

## 11. Testing & Quality
- **Test plan**: unit tests for cart reducers, price calculation, payment mock; integration via Playwright for the purchase flow; E2E monitoring with Lighthouse CI and Axe; accessibility audits for keyboard order, focus states, contrast, ARIA for 3D/AR controls.
- **Performance budgets**: JavaScript < 180 KB gzip first load; FCP < 2 s on 4G; good Core Web Vitals.
- **Safety & abuse**: rate limiting (IP + user + token buckets), image scanning, IP flagging, manual review queue, prompt-injection hardening with frozen system prompts and tool allow-lists.

## 12. Go-to-Market & Rollout
- **Milestones**
  - MVP (4-6 weeks): upload, AI assist with preset styles, 3D/AR preview, single material, mock payments, order tracking stub, referral links.
  - Beta (next quarter): Swap Pass, Creator Challenges v1, social commerce listings (TikTok Shop/Reels).
  - General availability (quarter after): Business portal, payouts, internationalisation.
- **Staffing**: 1 PM, 1 design/UX, 2 front-end engineers, 1 back-end engineer, 1 ML engineer (shared), 0.5 DevOps, 0.5 Trust & Safety.
- **Risks & mitigation**: AR device mismatches (gate models until verified); social commerce volatility (keep direct-to-consumer as primary); unit economics (print-on-demand multi-sourcing, dynamic routing).
- **Analytics instrumentation**: events for AR views, suggestion clicks, add-to-cart, checkout start, payment success, time-to-first design; dashboards for conversion, repeat purchase, cohort retention, AR usage.
- **Data migration/versioning**: semantic SQL migrations; blue/green deploys; feature-flag model updates.

## 13. Open Questions & Assumptions
- **Assumptions**: GBP 14.99 per printed backplate, free shell on first order; production via POD partners with <72 h SLA; AR via Model-Viewer + USDZ/GLB per device; supported locales en-GB and en-US with ICU-message i18n.
- **Decisions (2024-06)**
  1. Device coverage at GA: support iPhone 12-15 (all trims), Samsung Galaxy S23/S24 (base and Plus/Ultra), and Google Pixel 7/8 lines, covering an estimated 82 percent of target market demand; publish roadmap for foldables once mesh partners can guarantee tolerances.
  2. Sustainability and take-back: market only substantiated claims (70 percent recycled TPU shell, water-based inks); include prepaid mailer in first shipment for case recycling with TerraCycle partner; publish quarterly impact metrics.
  3. Swap Pass tiers: Essential at GBP 6 per month (two swaps per year, free tracked shipping) and Creator at GBP 10 per month (four swaps, early access drops, 10 percent off accessories); unused swaps roll over one cycle.
  4. B2B program: MOQ 25 units with 10 business day lead time; 100-500 units ship in 15 business days; offer matte or gloss in brand palette (white, charcoal, navy); CSV schema columns `company`, `event`, `deviceModel`, `finish`, `magsafe`, `quantity`, `artworkUrl`.

## Why These Choices
- AR/3D drives conversion for visual products.
- PWA + Expo supports installability and offline tolerance with one codebase.
- `PaymentService` abstraction avoids payment lock-in and aligns with Stripe's intent model.
- WCAG 2.2 compliance and GDPR minimisation reduce legal and UX risk while expanding audience.

---

[1]: https://www.shopify.com/blog/augmented-reality
[2]: https://developers.google.com/web/vitals
[3]: https://www.w3.org/WAI/standards-guidelines/wcag/
[4]: https://gdpr-info.eu/art-5-gdpr/
[5]: https://owasp.org/www-project-top-10-for-large-language-model-applications/
[6]: https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps
[7]: https://stripe.com/docs/payments/payment-intents
[8]: https://www.thetimes.co.uk/article/online-shopping-social-commerce-growth-forecast
[9]: https://www.businessinsider.com/social-commerce-tiktok-instagram-policies-risk-2023-8
