# Auxano — AI Consulting Website

## What This Is
Website for Auxano, Corbin's AI consulting business. Helps small-to-midsize businesses implement AI — offering strategy consulting, custom web/app builds, data analytics & dashboards, and ongoing support retainers. The site is a sales funnel: establish credibility → showcase services → convert visitors to consultation leads.

## Tech Stack
- Framework: Next.js 16 (App Router) + TypeScript
- Styling: Tailwind CSS v4 (colors via @theme inline CSS variables in globals.css, NOT tailwind.config.ts)
- UI Components: shadcn/ui
- Animation: Framer Motion
- Icons: Lucide React
- Email: Resend (contact form → corcolt2114@gmail.com)
- Hosting: Vercel (not yet deployed)

## Current State
**MVP is built — all 13 implementation tasks complete.**

### Pages
- `/` — Homepage: hero (Auxano chip SVG + typewriter + CTAs), services overview cards, 3D scroll showcase, bottom CTA
- `/services` — Detailed service breakdowns with "What's Included" and "How It Works" for each
- `/contact` — 3-step mini wizard (service → team size → contact info) with URL pre-selection support
- `/api/contact` — POST route, validates + sends email via Resend

### Key Components
- `components/ui/cpu-architecture.tsx` — Auxano-branded animated circuit board SVG (hero centerpiece)
- `components/typewriter.tsx` — Rotating phrase typewriter effect
- `components/container-scroll.tsx` — Framer Motion 3D laptop rotation on scroll
- `components/contact-wizard.tsx` — Client-side multi-step form
- `components/nav.tsx` — Fixed nav with mobile hamburger
- `components/footer.tsx` — Site footer

### Brand
- Name: Auxano (Greek: "to grow")
- Tagline: "AI Built Around Your Business — Growing With You, Not Past You."
- Colors: Emerald & Dark (#10B981 primary, #111827 dark base, #0D1117 darker)
- Tone: Approachable + Bold

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
5. Visual polish pass — Corbin to review and provide feedback on look/feel
6. Potential: custom domain setup

## Last Session
- **Date:** 2026-04-13
- **What was done:** Full MVP build — 13 tasks executed across 3 agent dispatches. Project scaffolded, all components built, all pages assembled, contact API route created. Fixed typewriter infinite re-render bug.
- **What's next:** Corbin to review visuals, provide feedback. Then polish pass + deploy.
