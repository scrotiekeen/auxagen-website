# Auxano — AI Consulting Website Design Spec

## Overview

**Auxano** (Greek: "to grow, to increase") is an AI consulting business that helps small-to-midsize businesses implement AI into their operations. The website serves as the primary sales funnel — establish credibility, showcase services, and convert visitors into consultation leads.

**Tagline:** "AI Built Around Your Business — Growing With You, Not Past You."

**Target Audience:** Small businesses and mid-market companies (scaling up over time) who know they need AI but don't know where to start.

**Brand Tone:** Approachable + Bold. Friendly enough to not intimidate small business owners, confident enough to create urgency. "We make AI simple, and your competitors are already behind."

---

## Brand Identity

### Colors — Emerald & Dark

| Role | Hex | Usage |
|------|-----|-------|
| Dark Base | `#111827` | Page backgrounds, cards |
| Darker Base | `#0D1117` | Hero background, sections needing depth |
| Primary | `#10B981` | CTAs, active states, key accents |
| Secondary | `#34D399` | Highlights, nav active state, labels |
| Light Accent | `#6EE7B7` | Tagline text, subtle highlights |
| Tint | `#ECFDF5` | Light background areas if needed |
| Card BG | `#1E293B` | Card backgrounds, input fields |
| Border | `#374151` | Subtle borders, dividers |
| Text Primary | `#FFFFFF` | Headlines, primary text |
| Text Secondary | `#9CA3AF` | Body text, descriptions |
| Text Muted | `#6B7280` | Captions, helper text |

### Typography

- Headlines: System UI / Inter, bold (700-800), tight letter-spacing
- Body: System UI / Inter, regular (400), comfortable line-height
- Accents: Uppercase with wide letter-spacing for labels and categories

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 15 (App Router) + TypeScript |
| Styling | Tailwind CSS |
| UI Components | shadcn/ui |
| Animation | Framer Motion |
| Community Components | 21st.dev / Aceternity UI |
| Icons | Lucide React |
| Hosting | Vercel |
| Git | GitHub, email: corcolt2114@gmail.com |

---

## Sitemap — 3 Pages

### 1. Home (`/`)
The primary landing page and sales funnel entry point.

### 2. Services (`/services`)
Detailed breakdown of each service offering.

### 3. Contact (`/contact`)
3-step mini wizard intake form.

### Navigation
- Fixed top nav bar
- Left: Auxano logo/wordmark
- Center: Home | Services | Contact
- Right: "Get Started" CTA button (emerald, links to /contact)
- Mobile: Hamburger menu

---

## Page Designs

### Homepage (`/`)

#### Section 1 — Hero (Full Viewport)

**Layout:** Centered, stacked vertically. No sidebar split.

**Content (top to bottom):**

1. **Headline:** "AI Built Around Your Business" — large, white, bold
2. **Tagline:** "Growing With You, Not Past You." — emerald light accent color
3. **Typewriter Effect:** Uses danielpetho's typewriter component from 21st.dev
   - Static prefix: "We build AI solutions that..."
   - Rotating phrases:
     - "automate your workflows"
     - "turn data into decisions"
     - "grow your business"
     - "save you time and money"
4. **Auxano CPU Architecture SVG** — CENTERED, full-width, dramatic
   - Based on svg-ui/cpu-architecture component from 21st.dev
   - Modifications from original:
     - Text changed from "CPU" to "AUXANO"
     - Scaled up significantly — dominates the viewport
     - Color scheme adapted to emerald palette (replace blue/cyan gradients with emerald greens, keep variety in other path colors for visual interest)
     - More circuit paths added for complexity and drama
     - Central chip styled larger with subtle emerald glow/shadow
     - Subtitle under chip text: "INTELLIGENCE" in small emerald caps
   - All animations preserved: path drawing on load, glowing light orbs traveling along circuit paths, text gradient shimmer, marker pop-in
5. **CTA Buttons:** Centered below the SVG
   - Primary: "Get Started" (filled emerald)
   - Secondary: "Our Services" (outlined emerald)

**Background:** `#0D1117` — darkest shade for maximum contrast with the SVG animation

#### Section 2 — Services Overview

**Layout:** 4 cards in a horizontal grid (2x2 on mobile)

**Cards:**

1. **AI Strategy Consulting**
   - Icon: Brain (Lucide)
   - Short: "Audit your business. Identify AI opportunities. Build a roadmap with clear ROI."

2. **Website & App Development**
   - Icon: Zap (Lucide)
   - Short: "AI-powered websites, web apps, and custom tools built for your workflow."

3. **Data Analytics & Dashboards**
   - Icon: BarChart3 (Lucide)
   - Short: "Turn messy data into clear insights. Custom dashboards and reporting."

4. **Ongoing Support & Retainers**
   - Icon: RefreshCw (Lucide)
   - Short: "Monthly plans to maintain, optimize, and expand your AI systems."

**Card Style:** Dark card (`#111827`) with subtle border, icon top-left, title in white, description in muted text. Hover: border shifts to emerald, subtle lift.

Each card links to the corresponding section on `/services`.

#### Section 3 — What We've Built (Container Scroll Animation)

**Component:** Aceternity's container-scroll-animation from 21st.dev

**Content:** A laptop/device mockup that rotates in 3D as the user scrolls. The screen shows a screenshot of a real project Corbin has built (dashboard, app, or site).

**Heading:** "What We've Built" — centered above the animation
**Subheading:** Brief one-liner about the project shown

**Note:** Start with 1-2 real screenshots. No fake stats or fabricated case study data. Just visual proof of capability.

#### Section 4 — Bottom CTA

**Layout:** Full-width section with gradient background (`#064E3B` → `#111827`)
**Headline:** "Ready to Grow?"
**Subtext:** "Let's talk about what AI can do for your business."
**Button:** "Book a Free Consultation" (filled emerald, links to /contact)

#### Footer

- Left: Auxano wordmark + tagline
- Center: Quick links (Home, Services, Contact)
- Right: Email contact, social links if applicable
- Bottom: © 2026 Auxano. All rights reserved.

---

### Services Page (`/services`)

**Layout:** Vertical scroll, one section per service. Each section gets a detailed breakdown.

**Per Service Section:**
- Service title (large)
- 2-3 sentence description of what it is and who it's for
- **What's Included** — bulleted list of deliverables
- **How It Works** — 3-step process (e.g., "1. Discovery Call → 2. Strategy Document → 3. Implementation Roadmap")
- CTA button: "Get Started with [Service Name]" → links to /contact with service pre-selected

**Services:**

1. **AI Strategy Consulting**
   - What: We audit your business operations, identify where AI can save time and money, and deliver a clear implementation roadmap.
   - Includes: Business process audit, AI opportunity analysis, ROI projections, prioritized implementation roadmap, technology recommendations
   - Process: Discovery Call → Deep Dive Audit → Strategy Delivery

2. **Website & App Development**
   - What: We build AI-powered websites, web applications, and custom tools tailored to your business needs.
   - Includes: Custom design, responsive development, AI feature integration, performance optimization, deployment, training
   - Process: Requirements → Design & Build → Launch & Handoff

3. **Data Analytics & Dashboards**
   - What: We turn your business data into actionable insights with custom dashboards and automated reporting.
   - Includes: Data audit, dashboard design, custom visualizations, automated reports, KPI tracking, data pipeline setup
   - Process: Data Assessment → Dashboard Build → Training & Iteration

4. **Ongoing Support & Retainers**
   - What: Monthly partnership to maintain, optimize, and expand your AI systems as your business grows.
   - Includes: Priority support, system monitoring, performance optimization, feature updates, monthly strategy check-ins
   - Process: Onboarding → Monthly Cycles → Quarterly Reviews

---

### Contact Page (`/contact`)

**Layout:** Centered card with the 3-step mini wizard

#### Step 1: "What are you looking for?"
Large clickable option cards (one selection):
- 🧠 AI Strategy
- ⚡ Custom Build (Website or App)
- 📊 Data & Analytics
- 🔄 Ongoing Support
- 🤔 **Not sure yet — help me figure it out** (highlighted with emerald border/background to stand out as the friendly option)

#### Step 2: "How big is your team?"
Large clickable option cards (one selection):
- Just me
- 2-10 people
- 11-50 people
- 50+ people

#### Step 3: "Tell us about yourself"
Simple form (3 fields):
- Name (text input)
- Email (email input)
- Brief message — "What's the biggest challenge in your business right now?" (textarea, 3 lines max)
- Submit button: "Send It →" (filled emerald)

**After Submit:** Success state with confirmation message: "Got it! We'll be in touch within 24 hours." + option to return home.

**Progress Indicator:** Subtle step indicator (1 — 2 — 3) at the top of the wizard showing where they are.

**Form Handling:** For MVP, use Resend via a Next.js API route (`/api/contact`) to deliver form submissions to corcolt2114@gmail.com. No database needed initially. Include basic validation (required fields, email format) on both client and server.

---

## Component Integration Notes

### CPU Architecture SVG (Hero)
- Source: 21st.dev `svg-ui/cpu-architecture`
- Install to `/components/ui/cpu-architecture.tsx`
- Props to customize:
  - `text="AUXANO"` (instead of "CPU")
  - `width="100%"` / `height="100%"` — scale to fill hero
  - All animation props enabled (`animateText`, `animateLines`, `animateMarkers`)
- Extend the SVG viewBox and add more circuit paths for a larger, more complex look
- Adapt color gradients to use emerald tones for the primary glow
- Add CSS animations to `globals.css` as specified in the component prompt
- Central chip should be larger, with "AUXANO" text bigger and "INTELLIGENCE" subtitle added below

### Container Scroll Animation (What We've Built)
- Source: 21st.dev `aceternity/container-scroll-animation`
- Install via shadcn/21st.dev CLI
- Place a real screenshot inside the laptop mockup
- Dark theme compatible

### Typewriter (Hero subtitle)
- Source: 21st.dev `danielpetho/typewriter`
- Install via shadcn/21st.dev CLI
- Configure with rotating phrases array
- Style to match emerald secondary color

---

## Responsive Behavior

- **Desktop (1024px+):** Full layouts as designed
- **Tablet (768-1023px):** Services cards go 2x2, hero SVG scales down proportionally
- **Mobile (< 768px):** Single column, hamburger nav, hero SVG scales to fit, wizard steps go full-width stacked, services cards stack vertically

---

## What's NOT In Scope (For Now)

- About page (cut — will add later)
- Blog / Insights page (cut — no free advice for now)
- Case studies page (cut — not enough data yet)
- CMS integration (can add later for blog)
- Authentication / user accounts
- Pricing page (consultative sales model, not self-serve)
- Analytics/tracking (can add post-launch)
