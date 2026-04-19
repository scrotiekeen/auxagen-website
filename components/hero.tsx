"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { AuxanoChip } from "@/components/ui/cpu-architecture";
import { Typewriter } from "@/components/typewriter";

// Static particle field — deterministic positions for SSR consistency
const PARTICLES = [
  { x: 5,  y: 20, s: 2,   d: 0,   dur: 12, color: "#10B981", opacity: 0.45 },
  { x: 12, y: 65, s: 1.5, d: 3,   dur: 9,  color: "#34D399", opacity: 0.35 },
  { x: 20, y: 35, s: 1,   d: 1.5, dur: 15, color: "#6EE7B7", opacity: 0.3  },
  { x: 28, y: 80, s: 2.5, d: 5,   dur: 8,  color: "#10B981", opacity: 0.5  },
  { x: 35, y: 10, s: 1,   d: 2,   dur: 11, color: "#2DD4BF", opacity: 0.3  },
  { x: 42, y: 55, s: 1.5, d: 7,   dur: 13, color: "#34D399", opacity: 0.4  },
  { x: 50, y: 28, s: 1,   d: 4,   dur: 10, color: "#ffffff", opacity: 0.2  },
  { x: 58, y: 75, s: 2,   d: 1,   dur: 14, color: "#10B981", opacity: 0.45 },
  { x: 65, y: 18, s: 1.5, d: 6,   dur: 9,  color: "#6EE7B7", opacity: 0.35 },
  { x: 72, y: 50, s: 1,   d: 3,   dur: 12, color: "#2DD4BF", opacity: 0.3  },
  { x: 80, y: 85, s: 2,   d: 8,   dur: 7,  color: "#10B981", opacity: 0.5  },
  { x: 88, y: 40, s: 1.5, d: 2.5, dur: 11, color: "#34D399", opacity: 0.35 },
  { x: 95, y: 25, s: 1,   d: 5,   dur: 14, color: "#6EE7B7", opacity: 0.3  },
  { x: 92, y: 72, s: 2.5, d: 0.5, dur: 10, color: "#10B981", opacity: 0.5  },
  { x: 3,  y: 50, s: 1.5, d: 4,   dur: 13, color: "#2DD4BF", opacity: 0.35 },
  { x: 75, y: 90, s: 1,   d: 7,   dur: 8,  color: "#34D399", opacity: 0.3  },
  { x: 45, y: 92, s: 2,   d: 3,   dur: 11, color: "#10B981", opacity: 0.4  },
  { x: 22, y: 5,  s: 1.5, d: 6,   dur: 9,  color: "#6EE7B7", opacity: 0.3  },
  { x: 55, y: 4,  s: 1,   d: 1,   dur: 15, color: "#2DD4BF", opacity: 0.25 },
  { x: 68, y: 60, s: 2,   d: 8,   dur: 10, color: "#10B981", opacity: 0.45 },
  { x: 82, y: 15, s: 1.5, d: 4,   dur: 12, color: "#34D399", opacity: 0.35 },
  { x: 15, y: 90, s: 2,   d: 2,   dur: 9,  color: "#10B981", opacity: 0.4  },
  { x: 38, y: 45, s: 1,   d: 9,   dur: 14, color: "#6EE7B7", opacity: 0.25 },
  { x: 62, y: 38, s: 1.5, d: 3.5, dur: 11, color: "#2DD4BF", opacity: 0.35 },
  { x: 8,  y: 42, s: 2,   d: 5.5, dur: 8,  color: "#34D399", opacity: 0.4  },
  { x: 90, y: 55, s: 1,   d: 7,   dur: 13, color: "#10B981", opacity: 0.35 },
  { x: 48, y: 14, s: 2.5, d: 2,   dur: 10, color: "#ffffff", opacity: 0.18 },
  { x: 30, y: 60, s: 1.5, d: 6,   dur: 12, color: "#6EE7B7", opacity: 0.3  },
  { x: 70, y: 30, s: 1,   d: 4,   dur: 9,  color: "#2DD4BF", opacity: 0.28 },
  { x: 55, y: 70, s: 2,   d: 1,   dur: 14, color: "#10B981", opacity: 0.45 },
];

// Concentric ring sizes (px) — centered on the chip
const RINGS = [160, 280, 420, 580];

export function Hero() {
  return (
    <section className="relative min-h-screen bg-auxano-darker flex flex-col items-center justify-center px-4 sm:px-6 py-20 overflow-hidden">

      {/* ── Layer 1: Dot grid ───────────────────────────────────────── */}
      <div className="absolute inset-0 hero-dot-grid pointer-events-none" />

      {/* ── Layer 2: Concentric pulsing rings (centered on chip) ────── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {RINGS.map((size, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-emerald-500/[0.07] hero-ring"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${5 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* ── Layer 3: Floating particles ─────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full hero-particle"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.s}px`,
              height: `${p.s}px`,
              backgroundColor: p.color,
              opacity: p.opacity,
              animationDuration: `${p.dur}s`,
              animationDelay: `${p.d}s`,
              boxShadow: `0 0 ${p.s * 3}px ${p.color}`,
            }}
          />
        ))}
      </div>

      {/* ── Layer 4: Radial vignette — spotlight on chip center ──────── */}
      <div className="absolute inset-0 hero-vignette pointer-events-none" />

      {/* ── Layer 5: Ambient emerald bloom behind chip ───────────────── */}
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none hero-ambient-bloom"
        style={{ top: "52%" }}
      />

      {/* ── Content ─────────────────────────────────────────────────── */}

      {/* Badge */}
      <motion.div
        className="relative z-10 mb-6"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/[0.06] text-emerald-400 text-xs font-mono tracking-[0.2em] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Enterprise AI Consulting
        </div>
      </motion.div>

      {/* Headline */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto mb-3"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
      >
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-4 hero-headline">
          AI Built Around<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">
            Your Business
          </span>
        </h1>
        <p className="text-base sm:text-lg text-emerald-300/60 mb-4 font-light tracking-widest uppercase text-sm">
          Growing With You, Not Past You.
        </p>
        <div className="text-sm sm:text-base text-slate-500 font-mono">
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
      </motion.div>

      {/* CPU Chip — Hero Centerpiece */}
      <motion.div
        className="relative z-10 w-full max-w-5xl mx-auto my-2 sm:my-4"
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Chip glow layer */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-64 h-24 rounded-full hero-chip-glow" />
        </div>
        <AuxanoChip
          className="w-full h-auto text-[#152215]"
          text="AUXANO AGENCY"
          animateText
          animateLines
          animateMarkers
        />
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        className="relative z-10 flex flex-col sm:flex-row gap-4 mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
      >
        <Link
          href="/contact"
          className="group relative bg-auxano-primary text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-emerald-500 transition-all text-center text-sm tracking-wide overflow-hidden"
        >
          <span className="relative z-10">Get Started</span>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>
        <Link
          href="/services"
          className="border border-emerald-500/30 text-emerald-400 font-semibold px-8 py-3.5 rounded-lg hover:bg-emerald-500/10 hover:border-emerald-400/50 transition-all text-center text-sm tracking-wide"
        >
          Our Services
        </Link>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <ChevronDown className="w-5 h-5 text-emerald-500/40" />
      </motion.div>
    </section>
  );
}
