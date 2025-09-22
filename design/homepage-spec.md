# Custom Phone Case Store Homepage -- Visual Mockup Spec

## Brand & Experience North Star
- Feel premium yet playful; celebrate personal expression with frictionless customisation.
- Prioritise conversion clarity: primary CTA stays visible across breakpoints; secondary paths remain discoverable without competing.
- Build trust through real people imagery, transparent policies, and visible social proof.

## Global Foundations
- **Grid:** 12-column, 1200-1280px max content width. Gutters 24px desktop, 16px tablet, 12px mobile. Safe margins 32px desktop, 20px tablet, 16px mobile.
- **Typography:** Inter (fallback SF Pro / Helvetica Neue). Weights 400, 600, 700.
  - Display H1 56/64 desktop, 40/48 tablet, 32/40 mobile.
  - H2 40/48 desktop, 32/40 tablet, 28/34 mobile.
  - H3 28/34 desktop, 24/30 tablet, 20/26 mobile.
  - Body Large 18/28, Body 16/26, Caption 14/22, Microcopy 12/18.
- **Colour Tokens:**
  - --canvas-dark: #0B0D10
  - --canvas-light: #FFFFFF
  - --surface-glass: rgba(15,18,23,0.65)
  - --surface-card: rgba(255,255,255,0.06) on dark / #F8F9FB on light
  - --text-primary: #F9FAFB on dark / #101419 on light
  - --text-secondary: rgba(249,250,251,0.78) on dark / #4B5563 on light
  - --accent-gradient: linear-gradient(90deg,#6EE7F9 0%,#A78BFA 50%,#F472B6 100%)
  - --accent-solid: #8B5CF6 (fallback for high-contrast mode)
  - --border-hairline: rgba(255,255,255,0.12) on dark / rgba(16,20,25,0.1) on light
  - --focus-ring: #6EE7F9
- **Shadows & Glass:**
  - Hero glass panel: 0 20px 45px rgba(11,13,16,0.45) + backdrop-blur(28px) + inset 0 0 0 1px rgba(255,255,255,0.08).
  - Cards hover: 0 14px 32px rgba(15,20,26,0.22).
  - Buttons rest: 0 10px 20px rgba(108,90,255,0.25).
- **Spacing Scale (px):** 8, 12, 16, 24, 32, 48, 64, 96. Vertical section spacing 96 desktop, 64 tablet, 48 mobile.
- **Iconography:** Stroke 1.75px, rounded caps, 20-32px bounding boxes.
- **Accessibility:** Contrast ratio ≥ 4.5:1, focus rings 2px offset + 2px width. Prefers-reduced-motion swaps animated assets for static alternatives and removes parallax.

## Navigation & Persistent Elements
- Header 72px desktop/tablet, 64px mobile. Sticky with subtle backdrop blur and hairline bottom border.
- Left: logotype. Centre: nav links Shop, Create, Inspiration, Support. Right: search icon button, account icon button, bag pill (count + total) with accent gradient outline.
- Mobile nav: hamburger opens full-screen menu; primary CTA `Start Designing` anchored bottom.
- Sticky mobile CTA appears after hero scroll threshold: 56px pill spanning 90% width, gradient fill, label `Start Designing`.

## Section Blueprints
`[]` image tiles, `()` text blocks, `{}` interactive controls.

### 1. Hero -- Inspire
```
Desktop
-----------------------------------------------------------
|             lifestyle image full-bleed                  |
|  +-------------------------------+                      |
|  |   (H1)                        |                      |
|  |   (Subcopy)                   |                      |
|  |   {Primary}{Secondary}        |                      |
|  |   (Micro trust line)          |                      |
|  +-------------------------------+                      |
|               floating cases cluster (right)            |
-----------------------------------------------------------

Mobile
---------------------
| lifestyle image    |
| +---------------+  |
| | (H1)          |  |
| | (Subcopy)     |  |
| | {Primary}     |  |
| | {Secondary}   |  |
| | (Microcopy)   |  |
| +---------------+  |
---------------------
```
- **Copy:**
  - H1: Your Phone. Your Design. Your Style.
  - Sub: Design a case that’s unmistakably you — photos, art, text & more.
  - Microcopy: MagSafe-ready • Ships from the UK in 48 hours.
- **Imagery:** Rooftop sunset with diverse friends laughing, showcasing vivid custom cases. Backup: blurred city night bokeh with floating case renders if photography unavailable.
- **Components:** Soft glass panel (480px desktop, centred-left), radius 28px. Buttons 52px tall; 16px gap horizontal, stack with 12px gap on mobile.
- **Interactions:**
  - Primary hover: translateY(-2px) + glow ring rgba(110,231,249,0.55). Focus: 2px focus ring + 2px offset shadow.
  - Secondary hover: background rgba(255,255,255,0.14); focus ring matches primary.
  - Scroll cue arrow bottom centre pulsing; replaced by static icon for reduced motion.
- **Responsive Notes:** Hero height 90vh desktop, 100vh mobile with safe-area padding. Text capped at 520px width. On <768px apply gradient scrim to maintain text contrast.

### 2. How It Works -- Explain
```
Desktop
-----------------------------------------------------------
| (H2)                               (Support copy)       |
| [Card1] [Card2] [Card3]                                |
-----------------------------------------------------------

Mobile
-----------------
| (H2)          |
| (Support)     |
| [Card1]       |
| [Card2]       |
| [Card3]       |
-----------------
```
- **Heading:** How it works.
- **Support Copy:** Three easy steps to your perfect case.
- **Cards:**
  1. Title: Upload your design -- Copy: Drag & drop PNG, JPG or HEIC in seconds.
     - Visual: dashed drag area overlaying phone outline, file-type icons.
  2. Title: Preview on your phone -- Copy: Spin the 3D phone to check every angle.
     - Visual: looping rotation; static triple-angle panel when reduced motion.
  3. Title: Checkout & enjoy -- Copy: Fast UK delivery with 12-month peace of mind.
     - Visual: candid unboxing photo with smile.
- **Styling:** Cards min-height 320px desktop, 260px tablet, 220px mobile. Radius 20px, hairline border, inner glow inset 0 0 0 12px rgba(110,231,249,0.06).
- **Interactions:** Hover lift 4px + accent glow. Focus adds 2px gradient ring.
- **Responsive Notes:** Stack vertically with 24px gap on mobile. For <360px width allow horizontal scroll with scroll-snap.

### 3. Showcase Gallery -- Convert
```
Desktop
-----------------------------------------------------------
| (H2)                 [Filter pills]                     |
| [1:1][4:5][1:1][Lifestyle]                              |
| [4:5][1:1][Lifestyle][1:1]                              |
-----------------------------------------------------------

Mobile
---------------------------
| (H2)                  |
| [filter carousel]     |
| [4:5]                 |
| [1:1]                 |
| [Lifestyle]           |
---------------------------
```
- **Heading:** Best-selling custom looks.
- **Filter Pills:** All, Bold, Minimal, Photo Collage, Patterns (non-primary action, optional future state).
- **Card Hover/Tap Reveal:**
  - Title example: Neon Pulse Gradient.
  - Compatible: iPhone 15 Pro, Galaxy S24.
  - Price: From £32.
  - Rating: ★★★★★ 4.9.
  - Favourite heart button top-right.
- **Imagery:** 6-8 product tiles mixing macro textures and clean lifestyle setups (desk flat-lay, café table, pocket shot). Include two lifestyle ratio tiles (4:5) to break grid.
- **Interactions:** Hover scales to 102%, overlay slides up with details; focus triggers same overlay for keyboard users. Tap toggles details on mobile (tap outside to close).
- **Responsive Notes:** Mobile uses 2-column masonry with 12px gutters; ensure heart tap target ≥44px.

### 4. Customer Happiness -- Social Proof
```
Desktop
-----------------------------------------------------------
| (H2)                                  {Prev}{Next}      |
| [Card][Card][Card]                                     |
-----------------------------------------------------------

Mobile
---------------------
| (H2)              |
| [Card]            |
| {Dots}            |
---------------------
```
- **Heading:** Loved by creators across the UK.
- **Card Content:**
  - Stars row: ★★★★★
  - Quote example: “The design tool was so easy — I love my case!”
  - Meta: Amelia, Manchester · iPhone 15 Pro.
  - Portrait photo (circle) overlapping case close-up.
- **Background:** Soft pastel wash blending muted accent gradient with 10% opacity abstract blobs.
- **Carousel:** Auto-advance every 6s, pause on hover, swipeable on touch. Provide prev/next arrows (56px pill, translucent) and pagination dots.
- **Accessibility:** Carousel announces slide changes politely via visually hidden text; arrows and dots keyboard focusable with accent focus ring.

### 5. Inspiration -- Motivate
```
Desktop
-----------------------------------------------------------
| (H2)                           (Subcopy)               |
| [Wide lifestyle][Tall tile][Tall tile]                  |
| [Wide collage][Small tile][Small tile]                 |
-----------------------------------------------------------

Mobile
------------------------------
| (H2)                       |
| [Wide lifestyle]           |
| [Small tile]               |
| [Tall tile]                |
| [Small tile]               |
| [Wide collage]             |
------------------------------
```
- **Heading:** Think outside the case.
- **Subcopy:** From festival-ready finishes to eco options, find your spark.
- **Tiles & Captions:**
  - Skateboarder mid-trick with phone in hand -- caption: Festival-proof finishes.
  - Festival group selfie with neon lighting -- caption: Designs that pop on camera.
  - Eco-friendly biodegradable case in mossy setting -- caption: Eco options available.
  - Designer sketching on iPad beside customised phone -- caption: Artist collabs.
  - Optional desk flat-lay with stickers -- caption: Make it yours.
- **Layout:** Masonry collage with 12px gaps, captions as frosted pill overlays bottom-left (background rgba(0,0,0,0.55), text white 14/22).

### 6. Customiser Tool Preview -- Demonstrate
```
Desktop
-----------------------------------------------------------
| (H2)                                     (Subcopy)      |
| [Large mockup: toolbar | phone preview | summary]       |
| {Primary}{Secondary}{Tertiary}                          |
| [Thumbnail chips horizontally]                          |
-----------------------------------------------------------

Mobile
------------------------
| (H2)                 |
| (Subcopy)            |
| [Tool mockup]        |
| {Primary}            |
| {Secondary}          |
| {Tertiary}           |
| [Thumbnail scroll]   |
------------------------
```
- **Heading:** See your design come alive in real time.
- **Subcopy:** Personalise colours, stickers, and text with instant 360° previews.
- **Mockup:** Interface showing left sidebar (Upload, Templates, Text), central live phone preview, right order summary. Use accent gradient on active tool tab.
- **CTA Trio:**
  - Primary: Start Designing.
  - Secondary: Upload Photo.
  - Tertiary: Try a Template (outline pill with accent stroke 2px).
- **Thumbnails:** Three pill chips (Bold art, Minimal text, Playful doodles). Hover/focus highlights chip and swaps preview.
- **Interactions:** Hover over mockup reveals hotspots; keyboard focus cycle uses visible outlines. Provide static triple-angle preview if prefers-reduced-motion.

### 7. Trust & Social Proof -- Reinforce
```
Desktop
-----------------------------------------------------------
| (H2)                                                 |
| [Press logos row]                                   |
| [UGC grid 3x2]                                      |
| [Badge row]                                         |
-----------------------------------------------------------

Mobile
--------------------------
| (H2)                   |
| [Press logo carousel]  |
| [UGC grid 2x2]         |
| [Badge stack]          |
--------------------------
```
- **Heading:** Trusted by thousands.
- **Press Line:** Wired, Hypebeast, TechCrunch logos in monochrome 60% opacity, 24px height. Provide alt text.
- **UGC Grid:** 4-6 square tiles styled like Instagram posts. Each shows photo, handle, caption snippet (<40 chars), like count. Tap opens accessible lightbox (aria-modal true, close button visible).
- **Badges:** MagSafe-compatible, 12-month warranty, UK shipping & returns, Eco options available. Each pill 56px tall with icon left, accent outline, subtle glow on hover.

### 8. Footer -- Convert & Support
```
Desktop
-----------------------------------------------------------
| [Nav columns][Newsletter signup][Support summary]      |
| [Social icons centered]                               |
| [Divider]                                             |
| [Smallprint links][Country selector]                  |
-----------------------------------------------------------

Mobile
---------------------------
| [Accordion nav]        |
| [Newsletter block]     |
| [Social icons]         |
| [Smallprint stack]     |
| [Country selector]     |
---------------------------
```
- **Navigation Columns:**
  - Shop: New In, Best Sellers, Photo Cases, Artist Collabs.
  - Create: Custom Builder, Templates, Materials, Accessories.
  - Support: Help Centre, Track Order, Delivery & Returns, Contact.
  - About: Our Story, Sustainability, Careers, Press.
- **Newsletter Copy:**
  - Headline: Get 10% off your first custom case.
  - Body: No spam, just launch drops and design tips.
  - Email input 48px height, placeholder "your@email.com". Consent note: By subscribing you agree to our Privacy Policy.
  - Include unticked checkbox "Email me personalised offers".
- **CTA:** Gradient pill submit button 48px tall, label "Join the list".
- **Support Summary:** Small column listing customer service hours and live chat availability.
- **Social Icons:** Instagram, TikTok, Pinterest, YouTube. 32px line icons with focus ring and aria-labels.
- **Smallprint:** Delivery, Returns, Privacy, Terms, Accessibility. Country selector pill with UK flag + GBP text.

## Component Specifications
- **Buttons:** Rounded-full (56px hero, 48px elsewhere). Primary uses accent gradient with inset 0 1px 0 rgba(255,255,255,0.35). Hover lifts 2px with glow 0 0 12px rgba(167,139,250,0.45). Active presses down 1px, shadow reduces. Disabled opacity 0.4 but maintain 4.5:1 text contrast.
- **Secondary Buttons:** Glass background rgba(255,255,255,0.08) on dark, 1px accent stroke. Hover background rgba(255,255,255,0.16). Focus ring identical to primary.
- **Form Fields:** Rounded 16px, min height 44px, padding 16x18. Background rgba(15,18,23,0.6) on dark / #F1F3F6 on light. Focus ring 2px accent with 4px soft shadow. Error state border #F87171 plus helper text 14/22.
- **Cards:** Radius 20px, background rgba(255,255,255,0.04) on dark. Hairline border var(--border-hairline). Hover lifts 4px; focus ring accent + transparent outline.
- **Focus States:** Always use 2px accent border with 2px offset. Dots and carousel arrows show rectangular focus indicator.
- **Motion:** Standard hover/entrance animation 200-400ms ease-out. For prefers-reduced-motion, disable translations, provide static image swaps, and avoid auto-rotations.

## Imagery Direction
- Diverse, real subjects. Avoid stock clichés; aim for candid energy with authentic environments (urban rooftop, coffee shop, nature).
- Highlight case finishes (matte, gloss, biodegradable texture, glitter). Maintain consistent cool-shadow/warm-highlight grade to echo neon gradient.
- Macro shots should show tactile details and edge precision to suggest quality craftsmanship.

## Responsive Behaviour Summary
- Mobile-first single column, progressive enhancement for larger breakpoints.
- Breakpoints: base (<600), medium (600-959), large (960-1279), wide (≥1280).
- Ensure CTAs stay ≥48px height with 16px horizontal padding. Balance whitespace by reducing vertical gaps to 48px on mobile while preserving hierarchy via typography scaling.
- Keep hero text within top 60% viewport to avoid primary CTA dropping below initial fold.

## Accessibility & Performance Checklist
- Provide descriptive alt text for informative imagery; mark decorative assets `aria-hidden="true"`.
- Gallery hover info accessible via focus and toggled with Enter/Space.
- Carousel announces slide changes via visually hidden status text (`aria-live="polite"`).
- Lazy-load offscreen imagery with responsive `srcset`. Use WebP/AVIF plus JPEG fallback.
- Optimise hero photo ≤400KB, provide CSS gradient overlay fallback.
- Newsletter form includes inline error messaging and success toast confirmation.

## Content Inventory
- Hero CTA label reused across hero, tool preview, sticky mobile CTA.
- Prepare 6 testimonials covering varied UK cities and phone models.
- Curate 8 gallery items: 5 product macros, 3 lifestyle scenes, with SKU references for merchandising team.
- UGC tiles sourced from #MyCustomCase with creator permissions logged.

## Handoff Notes
- Supply devs with token sheet for colours, spacing, typography. Reference this spec for state behaviours.
- Provide fallback solid accent (#8B5CF6) when gradients disabled.
- Document analytics events: Hero Start Designing click, Gallery favourite, Customiser entry, Newsletter submit.
