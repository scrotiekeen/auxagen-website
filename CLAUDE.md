# Auxano Agency — Business Website

## What This Is
Website for Auxano Agency (brand: Auxagen), a full-stack business growth agency offering consulting, marketing, AI, web dev, and custom software. The site is a sales funnel: establish credibility → showcase services → convert visitors to consultation leads.

## Tech Stack
- Framework: Next.js 16 (App Router) + TypeScript
- Styling: Tailwind CSS v4 (colors via @theme inline CSS variables in globals.css, NOT tailwind.config.ts)
- UI Components: shadcn/ui
- Animation: Framer Motion
- Icons: Lucide React
- Email: Resend (contact form → corcolt2114@gmail.com)
- Hosting: Vercel (not yet deployed)

## Current State
**Live at auxagen.co — deployed via Vercel auto-deploy on push to master.**

### Pages
- `/` — Homepage: hero (video bg + circuit board overlay, 75vh) → value prop ("A business owner's time is money") → services overview cards → showcase ("What We've Built") → bottom CTA
- `/services` — 3 departments (Business Consulting, Web & Software, AI Strategy) with detailed breakdowns + 5-stage "How It Works" pipeline
- `/contact` — 3-step mini wizard (service → team size → contact info) with URL pre-selection support
- `/api/contact` — POST route, validates + sends email via Resend

### Key Components
- `components/ui/cpu-architecture.tsx` — Animated circuit board SVG (14 paths, 34 pins, pulsing glow, corner accents). ViewBox 1200x800.
- `components/hero.tsx` — Video background (hero-bg.mp4) + circuit board overlay, particles, concentric rings, vignette. 75vh.
- `components/value-prop.tsx` — Two-column: "A business owner's time is money" copy with $115K callout + CTA left, photo placeholder right.
- `components/scroll-transition.tsx` — Wraps Hero → ValueProp → ServicesOverview with gradient bridge. Natural scroll.
- `components/services-overview.tsx` — 3 department cards (title + description, no service lists). Left-aligned heading.
- `components/showcase.tsx` — "What We've Built" with alternating layout, browser frame mockups. Higher Grounds + client portal screenshots.
- `components/nav.tsx` — Fixed nav, "Auxano Agency" centered, links + CTA on the right
- `components/contact-wizard.tsx` — Client-side multi-step form
- `components/footer.tsx` — Site footer

### Brand
- Name: Auxano Agency (brand: Auxagen)
- Tagline: "Solutions Engineered For Your Business — Growing With You, Not Past You."
- Colors: Emerald & Dark (#10B981 primary, #111827 dark base, #0D1117 darker, deep space #060B14)
- Tone: Premium, Approachable, Bold

### Design Decisions from This Session
- Corbin prefers natural scroll — no sticky/hijacked scroll effects
- Less is more — removed badge pill, decluttered hero to just headline + subtitle + CTAs
- Deep space abyss vibe — sparse stars, minimal nebula, void depth, not busy
- CPU chip frames the headline — circuit lines converge on it, chip body is the text backdrop
- Visual hierarchy in circuit lines — 6 thick main arteries vs 18 thinner secondary paths
- Headline is broad: "Solutions Engineered For Your Business" — covers consulting, marketing, AI, dev without pigeonholing

## Git & Deploy
- Remote: github.com/scrotiekeen/auxagen-website
- Deploy: Vercel auto-deploy on push to master
- Domain: auxagen.co (Namecheap, A record → 76.76.21.21)
- Git email: corcolt2114@gmail.com (ALWAYS use this)

## Key Decisions
- Tailwind v4 — colors are CSS variables in globals.css, not tailwind.config.ts
- No About page or Blog (cut intentionally — no free advice, add later)
- No case studies page (not enough data yet — showcase section uses real screenshots instead)
- Contact form uses Resend — needs API key in .env.local
- Services page CTAs pre-select the service in the contact wizard via URL params

## What Needs To Be Done
1. Corbin needs to sign up at resend.com and add API key to .env.local (contact form won't send without it)
2. Compress hero-bg.mp4 (currently 51MB — should be under 5-10MB for production)
3. Continue polishing remaining sections (contact, footer)
4. Browser caching issue — Corbin's browser aggressively caches. Use incognito or hard refresh.
5. Optional: replace value-prop right panel with a real founder photo when available (currently shows "Cost of Doing Nothing" data card).

## Last Session
- **Date:** 2026-04-27
- **What was done:** SEO + polish pass.
  - **Metadata:** full Open Graph, Twitter card, `metadataBase`, canonical, keywords, themeColor, robots directives in `app/layout.tsx`
  - **JSON-LD:** `ProfessionalService` schema with services catalog injected into `<body>` for rich-result eligibility
  - **OG image:** programmatic dynamic OG via `app/opengraph-image.tsx` (Next.js `ImageResponse`) — deep-space gradient, emerald nebula, brand pill, headline, services strip. 1200x630, edge runtime.
  - **Sitemap:** `app/sitemap.ts` (auto-generated `/sitemap.xml`)
  - **Robots:** `app/robots.ts` (allows all, disallows `/api/`, points to sitemap)
  - **Value prop placeholder REPLACED:** `components/value-prop.tsx` — the "Photo coming soon" panel is gone. Replaced with a polished "Cost of Doing Nothing" data card: emerald glow, animated bars, three metrics (20+ hrs/week lost, $115K annual leak highlighted, 38% slower lead response), staggered animations, footer caveat. On-brand, reinforces the left-side $115K narrative.
  - **Footer:** swapped `corcolt2114@gmail.com` → `corbinkuehne@auxagen.co` (business email), added `auxagen.co` link.
  - Build passes clean. New routes: `/opengraph-image`, `/robots.txt`, `/sitemap.xml`. Pushed to master.
- **What's next:** Verify OG previews on LinkedIn/Twitter post-deploy. Add real founder photo if/when desired (panel will need redesign). Compress hero video. Wire Resend.
