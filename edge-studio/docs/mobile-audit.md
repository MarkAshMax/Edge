# Mobile UX Audit Checklist

| Status | Issue | Location | Proposed Solution | Risk |
| --- | --- | --- | --- | --- |
| [ ] | No dedicated mobile navigation; hamburger button does nothing, no focus trap or scroll lock. | `components/ui/Header.tsx` | Introduce feature-flagged `<MobileNav />` sheet with accessible focus management, inert background, ESC/backdrop close; ensure tap targets ≥44px. | High |
| [ ] | Fixed `min-h-[92vh]` hero causes iOS Safari viewport jump and no safe-area padding. | `components/ui/Hero.tsx` | Replace with CSS custom property using `min(100vh, 100dvh)` fallback, add top padding using safe-area vars. | Medium |
| [ ] | Typography uses static `text-4xl`, `sm:text-5xl` etc; body base under 16px on small screens. | `app/globals.css`, multiple components | Implement fluid type scale via CSS `clamp()` tokens and Tailwind `text-[length:var(--token)]` utilities; set base `font-size` ≥16px. | Medium |
| [ ] | Header CTAs (`Start` button, icon buttons) under 44px tall on mobile. | `components/ui/Header.tsx` | Adjust sizes to `h-11`/`h-12`, add padding, enforce minimum tap area via utility class. | Medium |
| [ ] | Large horizontal padding `px-6` at 320px yields cramped content & occasional overflow from gradients. | `components/ui/*` (Hero, Gallery, Testimonials, etc.) | Use container queries / clamp-based padding tokens to adapt spacing; confirm no overflow using `overflow-x-hidden`. | Medium |
| [ ] | No dark/light mode toggle and `color-scheme` hints missing for forms. | `app/layout.tsx`, `app/globals.css` | Define CSS cascade layers, `color-scheme`, and respect `prefers-color-scheme`; adjust surfaces for contrast. | Low |
| [ ] | Sticky CTA lacks safe-area support and uses pointer-events gating that can trap focus. | `components/ui/StickyCTA.tsx` | Add env-safe area padding, manage focus order, ensure show/hide uses `aria-hidden` & `role`. | Medium |
| [ ] | No automated mobile accessibility/performance checks. | Tooling | Add Lighthouse CI, Playwright @ multiple widths, axe-core integration, ESLint/Stylelint tasks in GitHub Actions. | Medium |
| [ ] | Images/gradients missing `aspect-ratio` + `content-visibility` for below-the-fold sections leading to potential CLS/TBT regression. | `components/ui/Gallery.tsx`, `components/ui/PressAndUGC.tsx`, `components/ui/HowItWorks.tsx` | Add `aspect-[x/y]` tokens, ensure media lazy loads, use `content-visibility: auto` wrappers. | Low |
| [ ] | `Testimonials` carousel auto-plays even when `prefers-reduced-motion` and lacks pause controls. | `components/ui/Testimonials.tsx` | Respect reduced motion by disabling autoplay, add pause button, expose live region messaging improvements. | Medium |
