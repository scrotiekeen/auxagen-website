"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { AuxanoChip } from "@/components/ui/cpu-architecture";

// Sparse space dust — just enough to feel alive in the void
const PARTICLES = [
  { x: 8,  y: 15, s: 1,   d: 0,   dur: 40, color: "#ffffff", opacity: 0.25 },
  { x: 25, y: 70, s: 1,   d: 5,   dur: 35, color: "#e0f0ff", opacity: 0.20 },
  { x: 42, y: 8,  s: 1,   d: 3,   dur: 45, color: "#10B981", opacity: 0.18 },
  { x: 60, y: 85, s: 1,   d: 8,   dur: 30, color: "#ffffff", opacity: 0.22 },
  { x: 78, y: 30, s: 1,   d: 2,   dur: 38, color: "#c0d8ff", opacity: 0.20 },
  { x: 92, y: 60, s: 1,   d: 6,   dur: 42, color: "#10B981", opacity: 0.15 },
  { x: 15, y: 45, s: 1.5, d: 4,   dur: 28, color: "#ffffff", opacity: 0.18 },
  { x: 50, y: 50, s: 1,   d: 10,  dur: 50, color: "#e0f0ff", opacity: 0.12 },
  { x: 85, y: 88, s: 1,   d: 7,   dur: 36, color: "#34D399", opacity: 0.15 },
  { x: 35, y: 92, s: 1,   d: 1,   dur: 32, color: "#ffffff", opacity: 0.20 },
];

// Concentric ring sizes (px) — centered on the chip
const RINGS = [200, 360, 520, 700];

export function Hero() {
  return (
    <section className="relative min-h-screen hero-space-bg overflow-hidden">

      {/* ── Layer 0a: Deep space star field (sparse — abyss feel) ───── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="hero-starfield-small" style={{ opacity: 0.35 }} />
        <div className="hero-starfield-bright" style={{ opacity: 0.5 }} />
      </div>

      {/* ── Layer 0b: CPU circuit board — full hero background ──────────── */}
      <div className="absolute inset-0 z-0">
        <AuxanoChip
          className="w-full h-full text-[#1a4a2a]"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          animateLines
          animateMarkers
        />
      </div>

      {/* ── Layer 1a: Subtle nebula wash (just one faint emerald hint) ── */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <div className="hero-nebula-emerald" style={{ opacity: 0.04 }} />
      </div>

      {/* ── Layer 1b: Dot grid ──────────────────────────────────────── */}
      <div className="absolute inset-0 z-[1] hero-dot-grid pointer-events-none" />

      {/* ── Layer 2: Concentric pulsing rings (centered on chip) ────── */}
      <div className="absolute inset-0 z-[2] flex items-center justify-center pointer-events-none">
        {RINGS.map((size, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-emerald-500/[0.04] hero-ring"
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
      <div className="absolute inset-0 z-[3] pointer-events-none overflow-hidden">
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

      {/* ── Layer 4: Radial vignette — darkens edges ─────────────────── */}
      <div className="absolute inset-0 z-[4] hero-vignette pointer-events-none" />

      {/* ── Layer 5: Ambient emerald bloom behind chip ───────────────── */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[5] pointer-events-none hero-ambient-bloom"
      />

      {/* ── Layer 6: Content — centered over chip ─────────────────────── */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 text-center gap-4">

        {/* Headline + subtitle — the chip body frames this block */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-3 hero-headline">
            Solutions Engineered<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">
              For Your Business
            </span>
          </h1>
          <p className="text-emerald-300/60 font-light tracking-widest uppercase text-xs">
            Growing With You, Not Past You.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
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
            className="border border-emerald-500/30 text-emerald-400 font-semibold px-8 py-3.5 rounded-lg hover:bg-emerald-500/10 hover:border-emerald-400/50 transition-all text-center text-sm tracking-wide backdrop-blur-sm"
          >
            Our Services
          </Link>
        </motion.div>
      </div>

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
