# Auxano Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the Auxano AI consulting website — a 3-page Next.js site (Home, Services, Contact) with animated hero, service cards, scroll animation showcase, and a 3-step contact wizard.

**Architecture:** Next.js 15 App Router with TypeScript. All pages are server components except interactive elements (nav mobile menu, typewriter, scroll animation, contact wizard). Components organized under `components/` by feature. Tailwind CSS for styling with shadcn/ui primitives. Framer Motion for animations. Form submissions via Resend API route.

**Tech Stack:** Next.js 15, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, Lucide React, Resend, Vercel

**Design Spec:** `docs/superpowers/specs/2026-04-13-auxano-website-design.md`

---

## File Structure

```
auxano-site/
├── app/
│   ├── layout.tsx              # Root layout — Inter font, metadata, nav + footer
│   ├── page.tsx                # Homepage — hero, services overview, showcase, CTA
│   ├── services/
│   │   └── page.tsx            # Services page — detailed service sections
│   ├── contact/
│   │   └── page.tsx            # Contact page — hosts the wizard
│   └── api/
│       └── contact/
│           └── route.ts        # POST handler — validates + sends email via Resend
├── components/
│   ├── ui/
│   │   └── cpu-architecture.tsx    # Modified SVG component (Auxano branding)
│   ├── nav.tsx                     # Fixed top nav with mobile hamburger
│   ├── footer.tsx                  # Site footer
│   ├── hero.tsx                    # Hero section (headline, typewriter, SVG, CTAs)
│   ├── typewriter.tsx              # Typewriter effect component
│   ├── services-overview.tsx       # 4 service cards grid
│   ├── service-card.tsx            # Individual service card
│   ├── showcase.tsx                # Container scroll animation section
│   ├── container-scroll.tsx        # Aceternity scroll animation component
│   ├── bottom-cta.tsx              # "Ready to Grow?" CTA section
│   ├── contact-wizard.tsx          # 3-step form wizard (client component)
│   └── step-indicator.tsx          # Progress dots for wizard
├── lib/
│   └── utils.ts                    # cn() utility (shadcn)
├── public/
│   └── showcase-screenshot.png     # Real project screenshot for scroll animation
├── globals.css                     # Tailwind directives + CPU animation keyframes
├── tailwind.config.ts
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## Task 1: Project Scaffolding

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `tailwind.config.ts`, `app/globals.css`, `app/layout.tsx`, `app/page.tsx`, `lib/utils.ts`, `postcss.config.mjs`

- [ ] **Step 1: Initialize Next.js project**

```bash
cd "/mnt/d/AI Projects/Corbin WorkSpace/ai-consulting-site"
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --turbopack --yes
```

Expected: Next.js 15 project scaffolded with Tailwind and App Router.

- [ ] **Step 2: Install dependencies**

```bash
npm install framer-motion lucide-react resend clsx tailwind-merge
```

- [ ] **Step 3: Initialize shadcn/ui**

```bash
npx shadcn@latest init -d
```

Select defaults. This creates `lib/utils.ts` with the `cn()` helper and configures component paths.

- [ ] **Step 4: Configure Tailwind with Auxano brand colors**

Replace the content of `tailwind.config.ts`:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        auxano: {
          "dark-base": "#111827",
          "darker": "#0D1117",
          primary: "#10B981",
          secondary: "#34D399",
          light: "#6EE7B7",
          tint: "#ECFDF5",
          card: "#1E293B",
          border: "#374151",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] **Step 5: Set up globals.css with base styles and CPU animation keyframes**

Replace `app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-auxano-darker text-white antialiased;
  }
}

/* CPU Architecture SVG Animations */
.cpu-architecture {
  offset-anchor: 10px 0px;
  animation: animation-path;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.75, -0.01, 0, 0.99);
}

.cpu-line-1 {
  offset-path: path("M 5 30 h 120 q 8 0 8 8 v 55");
  animation-duration: 5s;
  animation-delay: 1s;
}

.cpu-line-2 {
  offset-path: path("M 295 15 h -120 q -8 0 -8 8 v 70");
  animation-delay: 6s;
  animation-duration: 2s;
}

.cpu-line-3 {
  offset-path: path("M 210 25 v 40 q 0 8 -8 8 h -20");
  animation-delay: 4s;
  animation-duration: 6s;
}

.cpu-line-4 {
  offset-path: path("M 270 135 v -40 q 0 -8 -8 -8 h -80");
  animation-delay: 3s;
  animation-duration: 3s;
}

.cpu-line-5 {
  offset-path: path(
    "M 220 110 h 25 q 8 0 8 8 v 16 q 0 8 -8 8 h -65 q -8 0 -8 -8 v -40"
  );
  animation-delay: 9s;
  animation-duration: 4s;
}

.cpu-line-6 {
  offset-path: path("M 148 160 v -68");
  animation-delay: 3s;
  animation-duration: 7s;
}

.cpu-line-7 {
  offset-path: path(
    "M 138 150 v -25 q 0 -8 -8 -8 h -16 q -8 0 -8 -8 v -8 q 0 -8 8 -8 h 30"
  );
  animation-delay: 4s;
  animation-duration: 4s;
}

.cpu-line-8 {
  offset-path: path("M 40 50 h 40 q 8 0 8 8 v 10 q 0 8 8 8 h 48");
  animation-delay: 3s;
  animation-duration: 3s;
}

@keyframes animation-path {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}
```

- [ ] **Step 6: Set up root layout**

Replace `app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auxano — AI Built Around Your Business",
  description:
    "AI consulting and development that grows with you, not past you. Strategy, builds, analytics, and ongoing support for businesses ready to harness AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
```

- [ ] **Step 7: Create placeholder homepage**

Replace `app/page.tsx`:

```tsx
export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold text-auxano-primary">Auxano</h1>
    </main>
  );
}
```

- [ ] **Step 8: Verify build**

```bash
cd "/mnt/d/AI Projects/Corbin WorkSpace/ai-consulting-site"
npm run build
```

Expected: Build succeeds with no errors.

- [ ] **Step 9: Commit**

```bash
git add -A
git commit -m "feat: scaffold Next.js project with Tailwind, shadcn/ui, and Auxano brand config"
```

---

## Task 2: Navigation Component

**Files:**
- Create: `components/nav.tsx`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Create the navigation component**

Create `components/nav.tsx`:

```tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-auxano-darker/80 backdrop-blur-md border-b border-auxano-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white tracking-tight">
          Auxano
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm transition-colors",
                pathname === link.href
                  ? "text-auxano-secondary"
                  : "text-gray-400 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:inline-flex bg-auxano-primary text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-emerald-600 transition-colors"
          >
            Get Started
          </Link>
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-auxano-darker border-t border-auxano-border">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "text-sm transition-colors",
                  pathname === link.href
                    ? "text-auxano-secondary"
                    : "text-gray-400 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="bg-auxano-primary text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-emerald-600 transition-colors text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
```

- [ ] **Step 2: Create the footer component**

Create `components/footer.tsx`:

```tsx
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-auxano-dark-base border-t border-auxano-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="text-xl font-bold text-white mb-2">Auxano</div>
            <p className="text-sm text-gray-400">
              AI Built Around Your Business — Growing With You, Not Past You.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            <div className="text-sm font-semibold text-auxano-secondary uppercase tracking-wider mb-1">
              Navigation
            </div>
            <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">Home</Link>
            <Link href="/services" className="text-sm text-gray-400 hover:text-white transition-colors">Services</Link>
            <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2">
            <div className="text-sm font-semibold text-auxano-secondary uppercase tracking-wider mb-1">
              Get In Touch
            </div>
            <a
              href="mailto:corcolt2114@gmail.com"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              corcolt2114@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-auxano-border text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Auxano. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 3: Add Nav and Footer to root layout**

Update `app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auxano — AI Built Around Your Business",
  description:
    "AI consulting and development that grows with you, not past you. Strategy, builds, analytics, and ongoing support for businesses ready to harness AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Nav />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

- [ ] **Step 4: Verify build**

```bash
npm run build
```

Expected: Build succeeds. Nav and footer render on the placeholder homepage.

- [ ] **Step 5: Commit**

```bash
git add components/nav.tsx components/footer.tsx app/layout.tsx
git commit -m "feat: add fixed navigation with mobile menu and site footer"
```

---

## Task 3: CPU Architecture SVG Component (Auxano Branded)

**Files:**
- Create: `components/ui/cpu-architecture.tsx`

This is the hero centerpiece — the animated circuit board SVG rebranded from "CPU" to "AUXANO". Scaled up with a larger viewBox (300x170 instead of 200x100), more circuit paths, and emerald-themed gradients.

- [ ] **Step 1: Create the Auxano CPU Architecture component**

Create `components/ui/cpu-architecture.tsx`:

```tsx
import { cn } from "@/lib/utils";
import React from "react";

export interface AuxanoChipProps {
  className?: string;
  width?: string;
  height?: string;
  text?: string;
  showConnections?: boolean;
  lineMarkerSize?: number;
  animateText?: boolean;
  animateLines?: boolean;
  animateMarkers?: boolean;
}

export function AuxanoChip({
  className,
  width = "100%",
  height = "100%",
  text = "AUXANO",
  showConnections = true,
  animateText = true,
  lineMarkerSize = 18,
  animateLines = true,
  animateMarkers = true,
}: AuxanoChipProps) {
  return (
    <svg
      className={cn("text-muted", className)}
      width={width}
      height={height}
      viewBox="0 0 300 170"
    >
      {/* Circuit Paths */}
      <g
        stroke="currentColor"
        fill="none"
        strokeWidth="0.4"
        strokeDasharray="100 100"
        pathLength="100"
        markerStart="url(#auxano-circle-marker)"
      >
        {/* Path 1 — top-left to chip */}
        <path
          strokeDasharray="100 100"
          pathLength="100"
          d="M 5 30 h 120 q 8 0 8 8 v 55"
        />
        {/* Path 2 — top-right to chip */}
        <path
          strokeDasharray="100 100"
          pathLength="100"
          d="M 295 15 h -120 q -8 0 -8 8 v 70"
        />
        {/* Path 3 — right to chip */}
        <path d="M 210 25 v 40 q 0 8 -8 8 h -20" />
        {/* Path 4 — bottom-right to chip */}
        <path d="M 270 135 v -40 q 0 -8 -8 -8 h -80" />
        {/* Path 5 — bottom loop to chip */}
        <path
          strokeDasharray="100 100"
          pathLength="100"
          d="M 220 110 h 25 q 8 0 8 8 v 16 q 0 8 -8 8 h -65 q -8 0 -8 -8 v -40"
        />
        {/* Path 6 — bottom-center up */}
        <path d="M 148 160 v -68" />
        {/* Path 7 — bottom-left to chip */}
        <path d="M 138 150 v -25 q 0 -8 -8 -8 h -16 q -8 0 -8 -8 v -8 q 0 -8 8 -8 h 30" />
        {/* Path 8 — left to chip */}
        <path d="M 40 50 h 40 q 8 0 8 8 v 10 q 0 8 8 8 h 48" />
        {/* Animation */}
        {animateLines && (
          <animate
            attributeName="stroke-dashoffset"
            from="100"
            to="0"
            dur="1s"
            fill="freeze"
            calcMode="spline"
            keySplines="0.25,0.1,0.5,1"
            keyTimes="0; 1"
          />
        )}
      </g>

      {/* Animated Light Orbs */}
      {/* 1 — Emerald */}
      <g mask="url(#auxano-mask-1)">
        <circle className="cpu-architecture cpu-line-1" cx="0" cy="0" r="10" fill="url(#auxano-emerald-grad)" />
      </g>
      {/* 2 — Teal */}
      <g mask="url(#auxano-mask-2)">
        <circle className="cpu-architecture cpu-line-2" cx="0" cy="0" r="10" fill="url(#auxano-teal-grad)" />
      </g>
      {/* 3 — Purple */}
      <g mask="url(#auxano-mask-3)">
        <circle className="cpu-architecture cpu-line-3" cx="0" cy="0" r="10" fill="url(#auxano-purple-grad)" />
      </g>
      {/* 4 — White */}
      <g mask="url(#auxano-mask-4)">
        <circle className="cpu-architecture cpu-line-4" cx="0" cy="0" r="10" fill="url(#auxano-white-grad)" />
      </g>
      {/* 5 — Green */}
      <g mask="url(#auxano-mask-5)">
        <circle className="cpu-architecture cpu-line-5" cx="0" cy="0" r="10" fill="url(#auxano-green-grad)" />
      </g>
      {/* 6 — Amber */}
      <g mask="url(#auxano-mask-6)">
        <circle className="cpu-architecture cpu-line-6" cx="0" cy="0" r="10" fill="url(#auxano-amber-grad)" />
      </g>
      {/* 7 — Cyan */}
      <g mask="url(#auxano-mask-7)">
        <circle className="cpu-architecture cpu-line-7" cx="0" cy="0" r="10" fill="url(#auxano-cyan-grad)" />
      </g>
      {/* 8 — Rose */}
      <g mask="url(#auxano-mask-8)">
        <circle className="cpu-architecture cpu-line-8" cx="0" cy="0" r="10" fill="url(#auxano-rose-grad)" />
      </g>

      {/* Central Chip */}
      <g>
        {/* Chip connections */}
        {showConnections && (
          <g fill="url(#auxano-connection-gradient)">
            <rect x="135" y="60" width="3.5" height="7" rx="1" />
            <rect x="150" y="60" width="3.5" height="7" rx="1" />
            <rect x="165" y="60" width="3.5" height="7" rx="1" />
            <rect x="135" y="103" width="3.5" height="7" rx="1" />
            <rect x="150" y="103" width="3.5" height="7" rx="1" />
            <rect x="165" y="103" width="3.5" height="7" rx="1" />
            <rect x="118" y="78" width="7" height="3.5" rx="1" />
            <rect x="118" y="90" width="7" height="3.5" rx="1" />
            <rect x="178" y="78" width="7" height="3.5" rx="1" />
            <rect x="178" y="90" width="7" height="3.5" rx="1" />
          </g>
        )}
        {/* Main Chip Rectangle */}
        <rect
          x="125"
          y="67"
          width="53"
          height="36"
          rx="3"
          fill="#181818"
          filter="url(#auxano-glow)"
        />
        {/* Chip Text — AUXANO */}
        <text
          x="151.5"
          y="86"
          fontSize="9"
          fill={animateText ? "url(#auxano-text-gradient)" : "white"}
          fontWeight="700"
          letterSpacing="0.12em"
          textAnchor="middle"
        >
          {text}
        </text>
        {/* Subtitle — INTELLIGENCE */}
        <text
          x="151.5"
          y="96"
          fontSize="4"
          fill="#34D399"
          fontWeight="400"
          letterSpacing="0.25em"
          textAnchor="middle"
        >
          INTELLIGENCE
        </text>
      </g>

      {/* Defs — Masks, Gradients, Filters */}
      <defs>
        {/* Masks */}
        <mask id="auxano-mask-1">
          <path d="M 5 30 h 120 q 8 0 8 8 v 55" strokeWidth="0.6" stroke="white" />
        </mask>
        <mask id="auxano-mask-2">
          <path d="M 295 15 h -120 q -8 0 -8 8 v 70" strokeWidth="0.6" stroke="white" />
        </mask>
        <mask id="auxano-mask-3">
          <path d="M 210 25 v 40 q 0 8 -8 8 h -20" strokeWidth="0.6" stroke="white" />
        </mask>
        <mask id="auxano-mask-4">
          <path d="M 270 135 v -40 q 0 -8 -8 -8 h -80" strokeWidth="0.6" stroke="white" />
        </mask>
        <mask id="auxano-mask-5">
          <path d="M 220 110 h 25 q 8 0 8 8 v 16 q 0 8 -8 8 h -65 q -8 0 -8 -8 v -40" strokeWidth="0.6" stroke="white" />
        </mask>
        <mask id="auxano-mask-6">
          <path d="M 148 160 v -68" strokeWidth="0.6" stroke="white" />
        </mask>
        <mask id="auxano-mask-7">
          <path d="M 138 150 v -25 q 0 -8 -8 -8 h -16 q -8 0 -8 -8 v -8 q 0 -8 8 -8 h 30" strokeWidth="0.6" stroke="white" />
        </mask>
        <mask id="auxano-mask-8">
          <path d="M 40 50 h 40 q 8 0 8 8 v 10 q 0 8 8 8 h 48" strokeWidth="0.6" stroke="white" />
        </mask>

        {/* Light Gradients */}
        <radialGradient id="auxano-emerald-grad" fx="1">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="50%" stopColor="#059669" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="auxano-teal-grad" fx="1">
          <stop offset="0%" stopColor="#2DD4BF" />
          <stop offset="50%" stopColor="#14B8A6" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="auxano-purple-grad" fx="1">
          <stop offset="0%" stopColor="#A855F7" />
          <stop offset="50%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="auxano-white-grad" fx="1">
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="auxano-green-grad" fx="1">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="auxano-amber-grad" fx="1">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="auxano-cyan-grad" fx="1">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="auxano-rose-grad" fx="1">
          <stop offset="0%" stopColor="#f43f5e" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>

        {/* Emerald glow filter */}
        <filter id="auxano-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#10B981" floodOpacity="0.3" />
          <feDropShadow dx="1.5" dy="1.5" stdDeviation="1" floodColor="black" floodOpacity="0.2" />
        </filter>

        {/* Circle markers at path starts */}
        <marker
          id="auxano-circle-marker"
          viewBox="0 0 10 10"
          refX="5"
          refY="5"
          markerWidth={lineMarkerSize}
          markerHeight={lineMarkerSize}
        >
          <circle cx="5" cy="5" r="2" fill="black" stroke="#232323" strokeWidth="0.5">
            {animateMarkers && (
              <animate attributeName="r" values="0; 3; 2" dur="0.5s" />
            )}
          </circle>
        </marker>

        {/* Connection gradient */}
        <linearGradient id="auxano-connection-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4F4F4F" />
          <stop offset="60%" stopColor="#121214" />
        </linearGradient>

        {/* Shimmering text gradient */}
        <linearGradient id="auxano-text-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#666666">
            <animate attributeName="offset" values="-2; -1; 0" dur="5s" repeatCount="indefinite" calcMode="spline" keyTimes="0; 0.5; 1" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" />
          </stop>
          <stop offset="25%" stopColor="white">
            <animate attributeName="offset" values="-1; 0; 1" dur="5s" repeatCount="indefinite" calcMode="spline" keyTimes="0; 0.5; 1" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" />
          </stop>
          <stop offset="50%" stopColor="#666666">
            <animate attributeName="offset" values="0; 1; 2;" dur="5s" repeatCount="indefinite" calcMode="spline" keyTimes="0; 0.5; 1" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" />
          </stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```

Expected: Build succeeds. Component compiles without errors.

- [ ] **Step 3: Commit**

```bash
git add components/ui/cpu-architecture.tsx
git commit -m "feat: add Auxano-branded CPU architecture SVG with animated circuit paths"
```

---

## Task 4: Typewriter Component

**Files:**
- Create: `components/typewriter.tsx`

- [ ] **Step 1: Create the typewriter component**

Create `components/typewriter.tsx`:

```tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

interface TypewriterProps {
  prefix: string;
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
  cursorClassName?: string;
}

export function Typewriter({
  prefix,
  phrases,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
  className,
  cursorClassName,
}: TypewriterProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentPhrase = phrases[phraseIndex];

  const tick = useCallback(() => {
    if (!isDeleting) {
      if (charIndex < currentPhrase.length) {
        setCharIndex((prev) => prev + 1);
        return typingSpeed;
      }
      setIsDeleting(true);
      return pauseDuration;
    }

    if (charIndex > 0) {
      setCharIndex((prev) => prev - 1);
      return deletingSpeed;
    }

    setIsDeleting(false);
    setPhraseIndex((prev) => (prev + 1) % phrases.length);
    return typingSpeed;
  }, [charIndex, isDeleting, currentPhrase, phrases.length, typingSpeed, deletingSpeed, pauseDuration]);

  useEffect(() => {
    const timeout = setTimeout(tick, tick());
    return () => clearTimeout(timeout);
  }, [tick]);

  return (
    <span className={cn("text-gray-400", className)}>
      {prefix}
      <span className="text-auxano-secondary">
        {currentPhrase.slice(0, charIndex)}
      </span>
      <span
        className={cn(
          "inline-block w-[2px] h-[1em] bg-auxano-primary ml-0.5 align-middle animate-pulse",
          cursorClassName
        )}
      />
    </span>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add components/typewriter.tsx
git commit -m "feat: add typewriter effect component with configurable phrases"
```

---

## Task 5: Hero Section

**Files:**
- Create: `components/hero.tsx`

- [ ] **Step 1: Create the hero section**

Create `components/hero.tsx`:

```tsx
"use client";

import Link from "next/link";
import { AuxanoChip } from "@/components/ui/cpu-architecture";
import { Typewriter } from "@/components/typewriter";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-auxano-darker flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      {/* Headline */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
          AI Built Around Your Business
        </h1>
        <p className="text-lg sm:text-xl text-auxano-light mb-4">
          Growing With You, Not Past You.
        </p>
        <div className="text-base sm:text-lg">
          <Typewriter
            prefix="We build AI solutions that "
            phrases={[
              "automate your workflows.",
              "turn data into decisions.",
              "grow your business.",
              "save you time and money.",
            ]}
          />
        </div>
      </div>

      {/* Auxano Chip SVG — Centered Centerpiece */}
      <div className="w-full max-w-4xl mx-auto my-8">
        <AuxanoChip
          className="w-full h-auto"
          text="AUXANO"
          animateText
          animateLines
          animateMarkers
        />
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <Link
          href="/contact"
          className="bg-auxano-primary text-white font-semibold px-8 py-3 rounded-lg hover:bg-emerald-600 transition-colors text-center"
        >
          Get Started
        </Link>
        <Link
          href="/services"
          className="border border-auxano-secondary text-auxano-secondary font-semibold px-8 py-3 rounded-lg hover:bg-auxano-secondary/10 transition-colors text-center"
        >
          Our Services
        </Link>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add components/hero.tsx
git commit -m "feat: add hero section with headline, typewriter, and centered Auxano chip"
```

---

## Task 6: Services Overview Section

**Files:**
- Create: `components/service-card.tsx`, `components/services-overview.tsx`

- [ ] **Step 1: Create the service card component**

Create `components/service-card.tsx`:

```tsx
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export function ServiceCard({ icon: Icon, title, description, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "block bg-auxano-dark-base border border-auxano-border rounded-xl p-6",
        "hover:border-auxano-primary hover:-translate-y-1 transition-all duration-300"
      )}
    >
      <Icon className="text-auxano-primary mb-4" size={28} />
      <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </Link>
  );
}
```

- [ ] **Step 2: Create the services overview section**

Create `components/services-overview.tsx`:

```tsx
import { Brain, Zap, BarChart3, RefreshCw } from "lucide-react";
import { ServiceCard } from "@/components/service-card";

const services = [
  {
    icon: Brain,
    title: "AI Strategy Consulting",
    description: "Audit your business. Identify AI opportunities. Build a roadmap with clear ROI.",
    href: "/services#strategy",
  },
  {
    icon: Zap,
    title: "Website & App Development",
    description: "AI-powered websites, web apps, and custom tools built for your workflow.",
    href: "/services#builds",
  },
  {
    icon: BarChart3,
    title: "Data Analytics & Dashboards",
    description: "Turn messy data into clear insights. Custom dashboards and reporting.",
    href: "/services#analytics",
  },
  {
    icon: RefreshCw,
    title: "Ongoing Support & Retainers",
    description: "Monthly plans to maintain, optimize, and expand your AI systems.",
    href: "/services#support",
  },
];

export function ServicesOverview() {
  return (
    <section className="bg-auxano-darker py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          What We Do
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          From strategy to execution to ongoing support — we help businesses harness AI at every stage.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Verify build**

```bash
npm run build
```

- [ ] **Step 4: Commit**

```bash
git add components/service-card.tsx components/services-overview.tsx
git commit -m "feat: add services overview section with 4 linked cards"
```

---

## Task 7: Container Scroll Animation (Showcase Section)

**Files:**
- Create: `components/container-scroll.tsx`, `components/showcase.tsx`
- Add: `public/showcase-screenshot.png`

- [ ] **Step 1: Create the container scroll animation component**

Create `components/container-scroll.tsx`:

```tsx
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ContainerScrollProps {
  children: React.ReactNode;
}

export function ContainerScroll({ children }: ContainerScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [25, 0, 0, -10]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.85, 1, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.6]);
  const translateY = useTransform(scrollYProgress, [0, 0.4], [100, 0]);

  return (
    <div ref={containerRef} className="py-20" style={{ perspective: "1200px" }}>
      <motion.div
        style={{
          rotateX,
          scale,
          opacity,
          translateY,
        }}
        className="mx-auto max-w-5xl"
      >
        {/* Laptop Frame */}
        <div className="bg-auxano-dark-base rounded-2xl border border-auxano-border p-3 shadow-2xl">
          {/* Screen bezel */}
          <div className="bg-auxano-card rounded-xl overflow-hidden border border-auxano-border">
            {/* Top bar */}
            <div className="flex items-center gap-2 px-4 py-2 bg-auxano-dark-base border-b border-auxano-border">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <div className="flex-1 mx-4">
                <div className="bg-auxano-card rounded-md h-5 max-w-xs mx-auto" />
              </div>
            </div>
            {/* Screen Content */}
            <div className="aspect-video">{children}</div>
          </div>
        </div>
        {/* Laptop base */}
        <div className="mx-auto w-1/3 h-3 bg-auxano-dark-base rounded-b-xl border-x border-b border-auxano-border" />
      </motion.div>
    </div>
  );
}
```

- [ ] **Step 2: Create the showcase section**

Create `components/showcase.tsx`:

```tsx
import Image from "next/image";
import { ContainerScroll } from "@/components/container-scroll";

export function Showcase() {
  return (
    <section className="bg-auxano-dark-base py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          What We&apos;ve Built
        </h2>
        <p className="text-gray-400 text-center mb-4 max-w-2xl mx-auto">
          Real projects. Real results. Here&apos;s a look at our recent work.
        </p>

        <ContainerScroll>
          <Image
            src="/showcase-screenshot.png"
            alt="Project screenshot showing a dashboard built by Auxano"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            priority={false}
          />
        </ContainerScroll>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Add a placeholder screenshot**

For now, use a placeholder. Corbin will replace with a real screenshot later.

```bash
# Download a dark-themed dashboard screenshot from Unsplash as placeholder
curl -L "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop" -o public/showcase-screenshot.png
```

If the download fails, create a simple SVG placeholder instead:

```bash
cat > public/showcase-screenshot.png << 'EOF'
This file should be replaced with a real project screenshot.
EOF
```

- [ ] **Step 4: Verify build**

```bash
npm run build
```

- [ ] **Step 5: Commit**

```bash
git add components/container-scroll.tsx components/showcase.tsx public/showcase-screenshot.png
git commit -m "feat: add showcase section with 3D container scroll animation"
```

---

## Task 8: Bottom CTA Section

**Files:**
- Create: `components/bottom-cta.tsx`

- [ ] **Step 1: Create the bottom CTA section**

Create `components/bottom-cta.tsx`:

```tsx
import Link from "next/link";

export function BottomCta() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-emerald-900/40 to-auxano-darker rounded-2xl border border-auxano-border p-12 md:p-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Grow?
        </h2>
        <p className="text-auxano-light text-lg mb-8 max-w-xl mx-auto">
          Let&apos;s talk about what AI can do for your business.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-auxano-primary text-white font-semibold px-10 py-4 rounded-lg hover:bg-emerald-600 transition-colors text-lg"
        >
          Book a Free Consultation
        </Link>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/bottom-cta.tsx
git commit -m "feat: add bottom CTA section with gradient background"
```

---

## Task 9: Assemble Homepage

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Assemble all homepage sections**

Replace `app/page.tsx`:

```tsx
import { Hero } from "@/components/hero";
import { ServicesOverview } from "@/components/services-overview";
import { Showcase } from "@/components/showcase";
import { BottomCta } from "@/components/bottom-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <Showcase />
      <BottomCta />
    </>
  );
}
```

- [ ] **Step 2: Verify build and visual check**

```bash
npm run build && npm run start
```

Open `http://localhost:3000` and verify:
- Nav renders fixed at top
- Hero shows headline, typewriter, centered Auxano SVG, CTAs
- Services overview shows 4 cards
- Scroll animation works on the showcase section
- Bottom CTA renders with gradient
- Footer renders at bottom

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: assemble homepage with hero, services, showcase, and CTA sections"
```

---

## Task 10: Services Page

**Files:**
- Create: `app/services/page.tsx`

- [ ] **Step 1: Create the services page**

Create `app/services/page.tsx`:

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Brain, Zap, BarChart3, RefreshCw } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Auxano",
  description: "AI strategy consulting, custom builds, data analytics, and ongoing support for businesses ready to grow with AI.",
};

interface ServiceSectionProps {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  includes: string[];
  process: { step: string; label: string }[];
  ctaLabel: string;
  serviceParam: string;
}

function ServiceSection({
  id,
  icon: Icon,
  title,
  description,
  includes,
  process,
  ctaLabel,
  serviceParam,
}: ServiceSectionProps) {
  return (
    <section id={id} className="py-20 border-b border-auxano-border last:border-b-0 scroll-mt-20">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-auxano-primary/10 rounded-xl">
          <Icon className="text-auxano-primary" size={32} />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
      </div>

      <p className="text-gray-400 text-lg mb-8 max-w-3xl">{description}</p>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* What's Included */}
        <div>
          <h3 className="text-sm font-semibold text-auxano-secondary uppercase tracking-wider mb-4">
            What&apos;s Included
          </h3>
          <ul className="space-y-2">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-2 text-gray-300 text-sm">
                <span className="text-auxano-primary mt-1">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* How It Works */}
        <div>
          <h3 className="text-sm font-semibold text-auxano-secondary uppercase tracking-wider mb-4">
            How It Works
          </h3>
          <div className="space-y-4">
            {process.map((p, i) => (
              <div key={p.step} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-auxano-primary/20 text-auxano-primary text-sm font-bold flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{p.step}</div>
                  <div className="text-gray-400 text-xs">{p.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Link
        href={`/contact?service=${serviceParam}`}
        className="inline-block bg-auxano-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-emerald-600 transition-colors text-sm"
      >
        {ctaLabel}
      </Link>
    </section>
  );
}

const servicesData: ServiceSectionProps[] = [
  {
    id: "strategy",
    icon: Brain,
    title: "AI Strategy Consulting",
    description: "We audit your business operations, identify where AI can save time and money, and deliver a clear implementation roadmap.",
    includes: [
      "Business process audit",
      "AI opportunity analysis",
      "ROI projections",
      "Prioritized implementation roadmap",
      "Technology recommendations",
    ],
    process: [
      { step: "Discovery Call", label: "We learn about your business and goals" },
      { step: "Deep Dive Audit", label: "We analyze your operations and data" },
      { step: "Strategy Delivery", label: "You get a clear, actionable roadmap" },
    ],
    ctaLabel: "Get Started with Strategy",
    serviceParam: "strategy",
  },
  {
    id: "builds",
    icon: Zap,
    title: "Website & App Development",
    description: "We build AI-powered websites, web applications, and custom tools tailored to your business needs.",
    includes: [
      "Custom design",
      "Responsive development",
      "AI feature integration",
      "Performance optimization",
      "Deployment & hosting",
      "Training & documentation",
    ],
    process: [
      { step: "Requirements", label: "We define scope, features, and timeline" },
      { step: "Design & Build", label: "We design and develop your solution" },
      { step: "Launch & Handoff", label: "We deploy, train your team, and hand over" },
    ],
    ctaLabel: "Get Started with a Build",
    serviceParam: "build",
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Data Analytics & Dashboards",
    description: "We turn your business data into actionable insights with custom dashboards and automated reporting.",
    includes: [
      "Data audit & cleanup",
      "Custom dashboard design",
      "Interactive visualizations",
      "Automated reports",
      "KPI tracking",
      "Data pipeline setup",
    ],
    process: [
      { step: "Data Assessment", label: "We review your data sources and quality" },
      { step: "Dashboard Build", label: "We design and build your dashboards" },
      { step: "Training & Iteration", label: "We train your team and refine together" },
    ],
    ctaLabel: "Get Started with Analytics",
    serviceParam: "analytics",
  },
  {
    id: "support",
    icon: RefreshCw,
    title: "Ongoing Support & Retainers",
    description: "Monthly partnership to maintain, optimize, and expand your AI systems as your business grows.",
    includes: [
      "Priority support",
      "System monitoring",
      "Performance optimization",
      "Feature updates",
      "Monthly strategy check-ins",
    ],
    process: [
      { step: "Onboarding", label: "We learn your systems and set up monitoring" },
      { step: "Monthly Cycles", label: "Continuous improvements and support" },
      { step: "Quarterly Reviews", label: "Strategic reviews and roadmap updates" },
    ],
    ctaLabel: "Get Started with Support",
    serviceParam: "support",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-auxano-darker min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Our Services
        </h1>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl">
          From strategy to execution to ongoing support — everything your business needs to grow with AI.
        </p>

        {servicesData.map((service) => (
          <ServiceSection key={service.id} {...service} />
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add app/services/page.tsx
git commit -m "feat: add services page with detailed breakdown of all 4 offerings"
```

---

## Task 11: Contact Page — 3-Step Wizard

**Files:**
- Create: `components/step-indicator.tsx`, `components/contact-wizard.tsx`, `app/contact/page.tsx`

- [ ] **Step 1: Create the step indicator**

Create `components/step-indicator.tsx`:

```tsx
import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      {Array.from({ length: totalSteps }, (_, i) => (
        <div key={i} className="flex items-center gap-2">
          <div
            className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors",
              i + 1 <= currentStep
                ? "bg-auxano-primary text-white"
                : "bg-auxano-card text-gray-500 border border-auxano-border"
            )}
          >
            {i + 1}
          </div>
          {i < totalSteps - 1 && (
            <div
              className={cn(
                "w-8 h-0.5 transition-colors",
                i + 1 < currentStep ? "bg-auxano-primary" : "bg-auxano-border"
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Create the contact wizard**

Create `components/contact-wizard.tsx`:

```tsx
"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { StepIndicator } from "@/components/step-indicator";
import Link from "next/link";

const serviceOptions = [
  { value: "strategy", label: "AI Strategy", icon: "🧠" },
  { value: "build", label: "Custom Build (Website or App)", icon: "⚡" },
  { value: "analytics", label: "Data & Analytics", icon: "📊" },
  { value: "support", label: "Ongoing Support", icon: "🔄" },
  { value: "unsure", label: "Not sure yet — help me figure it out", icon: "🤔", highlight: true },
];

const teamOptions = [
  { value: "solo", label: "Just me" },
  { value: "small", label: "2-10 people" },
  { value: "medium", label: "11-50 people" },
  { value: "large", label: "50+ people" },
];

export function ContactWizard() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service");

  const [step, setStep] = useState(preselectedService ? 2 : 1);
  const [service, setService] = useState(preselectedService || "");
  const [teamSize, setTeamSize] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ service, teamSize, name, email, message }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4">✅</div>
        <h2 className="text-2xl font-bold text-white mb-2">Got it!</h2>
        <p className="text-gray-400 mb-8">
          We&apos;ll be in touch within 24 hours.
        </p>
        <Link
          href="/"
          className="inline-block bg-auxano-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-emerald-600 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto">
      <StepIndicator currentStep={step} totalSteps={3} />

      {/* Step 1: Service Selection */}
      {step === 1 && (
        <div>
          <h2 className="text-xl font-bold text-white text-center mb-2">
            What are you looking for?
          </h2>
          <p className="text-gray-400 text-center text-sm mb-6">
            Pick the option that best describes your needs.
          </p>
          <div className="flex flex-col gap-3">
            {serviceOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => {
                  setService(opt.value);
                  setStep(2);
                }}
                className={cn(
                  "flex items-center gap-3 p-4 rounded-xl text-left transition-all",
                  opt.highlight
                    ? "bg-emerald-900/30 border-2 border-auxano-primary text-auxano-light hover:bg-emerald-900/50"
                    : "bg-auxano-card border border-auxano-border text-gray-300 hover:border-auxano-primary hover:text-white"
                )}
              >
                <span className="text-xl">{opt.icon}</span>
                <span className="font-medium text-sm">{opt.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Team Size */}
      {step === 2 && (
        <div>
          <h2 className="text-xl font-bold text-white text-center mb-2">
            How big is your team?
          </h2>
          <p className="text-gray-400 text-center text-sm mb-6">
            This helps us tailor our approach to your scale.
          </p>
          <div className="flex flex-col gap-3">
            {teamOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => {
                  setTeamSize(opt.value);
                  setStep(3);
                }}
                className="flex items-center gap-3 p-4 rounded-xl text-left bg-auxano-card border border-auxano-border text-gray-300 hover:border-auxano-primary hover:text-white transition-all"
              >
                <span className="font-medium text-sm">{opt.label}</span>
              </button>
            ))}
          </div>
          <button
            onClick={() => setStep(1)}
            className="mt-4 text-sm text-gray-500 hover:text-gray-300 transition-colors"
          >
            ← Back
          </button>
        </div>
      )}

      {/* Step 3: Contact Details */}
      {step === 3 && (
        <form onSubmit={handleSubmit}>
          <h2 className="text-xl font-bold text-white text-center mb-2">
            Tell us about yourself
          </h2>
          <p className="text-gray-400 text-center text-sm mb-6">
            Almost done — just the basics.
          </p>

          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-auxano-card border border-auxano-border rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-auxano-primary transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-auxano-card border border-auxano-border rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-auxano-primary transition-colors"
            />
            <textarea
              placeholder="What's the biggest challenge in your business right now?"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-auxano-card border border-auxano-border rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-auxano-primary transition-colors resize-none"
            />

            {error && (
              <p className="text-red-400 text-sm">{error}</p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-auxano-primary text-white font-semibold py-3 rounded-lg hover:bg-emerald-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? "Sending..." : "Send It →"}
            </button>
          </div>

          <button
            type="button"
            onClick={() => setStep(2)}
            className="mt-4 text-sm text-gray-500 hover:text-gray-300 transition-colors"
          >
            ← Back
          </button>
        </form>
      )}
    </div>
  );
}
```

- [ ] **Step 3: Create the contact page**

Create `app/contact/page.tsx`:

```tsx
import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactWizard } from "@/components/contact-wizard";

export const metadata: Metadata = {
  title: "Contact — Auxano",
  description: "Get started with Auxano. Tell us about your business and we'll show you how AI can help you grow.",
};

export default function ContactPage() {
  return (
    <div className="bg-auxano-darker min-h-screen">
      <div className="max-w-2xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-2">
          Let&apos;s Talk
        </h1>
        <p className="text-gray-400 text-center mb-12">
          Tell us what you need — we&apos;ll take it from there.
        </p>

        <Suspense fallback={<div className="text-center text-gray-500">Loading...</div>}>
          <ContactWizard />
        </Suspense>
      </div>
    </div>
  );
}
```

Note: `ContactWizard` uses `useSearchParams()` so it must be wrapped in `<Suspense>` in a Server Component.

- [ ] **Step 4: Verify build**

```bash
npm run build
```

- [ ] **Step 5: Commit**

```bash
git add components/step-indicator.tsx components/contact-wizard.tsx app/contact/page.tsx
git commit -m "feat: add contact page with 3-step wizard and service pre-selection"
```

---

## Task 12: Contact API Route (Resend)

**Files:**
- Create: `app/api/contact/route.ts`
- Create: `.env.local` (not committed)

- [ ] **Step 1: Create the API route**

Create `app/api/contact/route.ts`:

```ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const serviceLabels: Record<string, string> = {
  strategy: "AI Strategy Consulting",
  build: "Website & App Development",
  analytics: "Data Analytics & Dashboards",
  support: "Ongoing Support & Retainers",
  unsure: "Not sure yet — needs guidance",
};

const teamLabels: Record<string, string> = {
  solo: "Just me",
  small: "2-10 people",
  medium: "11-50 people",
  large: "50+ people",
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { service, teamSize, name, email, message } = body;

    // Validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }
    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Valid email is required." }, { status: 400 });
    }
    if (!service || !serviceLabels[service]) {
      return NextResponse.json({ error: "Please select a service." }, { status: 400 });
    }
    if (!teamSize || !teamLabels[teamSize]) {
      return NextResponse.json({ error: "Please select a team size." }, { status: 400 });
    }

    await resend.emails.send({
      from: "Auxano Contact <onboarding@resend.dev>",
      to: "corcolt2114@gmail.com",
      subject: `New Auxano Lead: ${name} — ${serviceLabels[service]}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${serviceLabels[service]}</p>
        <p><strong>Team Size:</strong> ${teamLabels[teamSize]}</p>
        <p><strong>Message:</strong> ${message || "No message provided."}</p>
      `,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
```

- [ ] **Step 2: Create .env.local (do NOT commit)**

Create `.env.local`:

```
RESEND_API_KEY=re_your_api_key_here
```

Corbin: Sign up at https://resend.com, create an API key, and paste it here.

- [ ] **Step 3: Add .env.local to .gitignore**

Verify `.gitignore` already contains `.env*`. If not, add it.

- [ ] **Step 4: Verify build**

```bash
npm run build
```

Expected: Build succeeds. The API route compiles. (Email sending won't work without a real API key, but the build should pass.)

- [ ] **Step 5: Commit**

```bash
git add app/api/contact/route.ts
git commit -m "feat: add contact form API route with Resend email delivery"
```

---

## Task 13: Final Build Verification & Polish

**Files:**
- Possibly modify: any file that has build warnings or visual issues

- [ ] **Step 1: Full build check**

```bash
npm run build
```

Expected: Build succeeds with zero errors. Note any warnings.

- [ ] **Step 2: Run dev server and visual QA**

```bash
npm run dev
```

Open `http://localhost:3000` and verify every page:

**Homepage (`/`):**
- [ ] Nav bar fixed at top, links work, mobile menu toggles
- [ ] Hero: headline, tagline, typewriter cycles through phrases
- [ ] Auxano chip SVG renders centered with animations
- [ ] CTA buttons link to /contact and /services
- [ ] Services overview: 4 cards render, hover effects work, links go to /services#section
- [ ] Showcase: scroll animation rotates the laptop mockup on scroll
- [ ] Bottom CTA: gradient renders, button links to /contact
- [ ] Footer renders with correct links and year

**Services (`/services`):**
- [ ] Page title and intro render
- [ ] All 4 service sections render with includes and process steps
- [ ] CTA buttons link to /contact with service pre-selected
- [ ] Hash navigation (#strategy, #builds, etc.) scrolls to correct section

**Contact (`/contact`):**
- [ ] Step indicator shows progress
- [ ] Step 1: all 5 options render, "not sure" is highlighted
- [ ] Step 2: team size options render, back button works
- [ ] Step 3: form fields render, back button works
- [ ] Pre-selection via URL param works (e.g., /contact?service=strategy skips to step 2)
- [ ] Validation: submit with empty fields shows HTML5 required messages

**Responsive (resize browser):**
- [ ] Mobile nav hamburger works
- [ ] Service cards stack on mobile
- [ ] Hero SVG scales down
- [ ] Contact wizard is full-width on mobile

- [ ] **Step 3: Fix any issues found**

Address any visual or functional issues found during QA.

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "fix: polish and QA — final build verification"
```

---

## Summary

| Task | Description | Commit Message |
|------|-------------|----------------|
| 1 | Project scaffolding | `feat: scaffold Next.js project with Tailwind, shadcn/ui, and Auxano brand config` |
| 2 | Nav + Footer | `feat: add fixed navigation with mobile menu and site footer` |
| 3 | CPU Architecture SVG | `feat: add Auxano-branded CPU architecture SVG with animated circuit paths` |
| 4 | Typewriter | `feat: add typewriter effect component with configurable phrases` |
| 5 | Hero section | `feat: add hero section with headline, typewriter, and centered Auxano chip` |
| 6 | Services overview | `feat: add services overview section with 4 linked cards` |
| 7 | Scroll animation showcase | `feat: add showcase section with 3D container scroll animation` |
| 8 | Bottom CTA | `feat: add bottom CTA section with gradient background` |
| 9 | Assemble homepage | `feat: assemble homepage with hero, services, showcase, and CTA sections` |
| 10 | Services page | `feat: add services page with detailed breakdown of all 4 offerings` |
| 11 | Contact wizard | `feat: add contact page with 3-step wizard and service pre-selection` |
| 12 | Contact API route | `feat: add contact form API route with Resend email delivery` |
| 13 | Final QA & polish | `fix: polish and QA — final build verification` |
