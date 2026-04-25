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
**MVP built + major hero overhaul complete (15 commits in one session).**

### Pages
- `/` — Homepage: hero (full-screen CPU circuit board + headline framed by chip), services overview cards, 3D scroll showcase, bottom CTA
- `/services` — Detailed service breakdowns with "What's Included" and "How It Works" for each
- `/contact` — 3-step mini wizard (service → team size → contact info) with URL pre-selection support
- `/api/contact` — POST route, validates + sends email via Resend

### Key Components
- `components/ui/cpu-architecture.tsx` — Full-screen animated circuit board SVG (14 paths, 34 pins, pulsing glow, corner accents, line hierarchy). ViewBox 1200x800 with preserveAspectRatio. The chip frames the headline text — no text inside the SVG itself.
- `components/hero.tsx` — Deep space abyss background, sparse star field, floating particles, concentric rings, vignette. Headline + subtitle + CTAs centered over the chip frame.
- `components/scroll-transition.tsx` — Wraps Hero + ServicesOverview. Natural scroll (no sticky), gradient bridge between sections, services fade-in on viewport entry.
- `components/typewriter.tsx` — Rotating phrase typewriter effect (moved to services section)
- `components/services-overview.tsx` — Service cards with typewriter intro
- `components/nav.tsx` — Fixed nav, "Auxano Agency" centered, links + CTA on the right
- `components/container-scroll.tsx` — Framer Motion 3D laptop rotation on scroll
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
- Remote: Not yet created on GitHub
- Deploy: Not yet deployed to Vercel
- Git email: corcolt2114@gmail.com (ALWAYS use this)

## Key Decisions
- Tailwind v4 — colors are CSS variables in globals.css, not tailwind.config.ts
- No About page or Blog (cut intentionally — no free advice, add later)
- No case studies page (not enough data yet — showcase section uses real screenshots instead)
- Contact form uses Resend — needs API key in .env.local
- Services page CTAs pre-select the service in the contact wizard via URL params

## What Needs To Be Done
1. Corbin needs to sign up at resend.com and add API key to .env.local
2. Replace public/showcase-screenshot.png with a real project screenshot
3. Create GitHub repo and push
4. Deploy to Vercel with RESEND_API_KEY env var
5. Corbin may want to continue polishing other sections (services, showcase, contact, footer)
6. Potential: rebrand to Auxagen domain (auxagen.co)
7. Potential: custom domain setup
8. Browser caching issue — Corbin's browser aggressively caches old versions. He may need to use incognito or clear cache between changes.

## Last Session
- **Date:** 2026-04-24
- **What was done:** Circuit board cleanup — reduced PATHS from 24 to 14. Removed corner staircases (4), redundant branch paths (2), inner shortcuts (2), and one noisy path from each side group. Kept all 4 cardinal groups with clean sweeps + arteries. ARTERY_INDICES updated to `{1,4,7,8,11,12}`. Secondary line opacity lowered to 0.4, stroke thinned to 1. CSS cpu-line classes trimmed from 24 to 14. Chip body, pins, corner accents, glow effects all intact. Build passes clean. Committed `144a9fa`.
- **What's next:** Corbin reviews over video background at localhost (use incognito). May continue polishing other sections or move to deploy once satisfied.
