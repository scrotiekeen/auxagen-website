"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { Hero } from "@/components/hero";
import { ServicesOverview } from "@/components/services-overview";

// Particles that burst outward from center as you scroll past the hero
const SCATTER_PARTICLES = [
  { angle: 0,   distance: 340, color: "#10B981", size: 3   },
  { angle: 30,  distance: 290, color: "#34D399", size: 2   },
  { angle: 60,  distance: 370, color: "#6EE7B7", size: 1.5 },
  { angle: 90,  distance: 310, color: "#10B981", size: 2.5 },
  { angle: 120, distance: 355, color: "#34D399", size: 2   },
  { angle: 150, distance: 320, color: "#6EE7B7", size: 1.5 },
  { angle: 180, distance: 300, color: "#10B981", size: 3   },
  { angle: 210, distance: 345, color: "#34D399", size: 2   },
  { angle: 240, distance: 375, color: "#6EE7B7", size: 1.5 },
  { angle: 270, distance: 325, color: "#10B981", size: 2   },
  { angle: 300, distance: 265, color: "#34D399", size: 2.5 },
  { angle: 330, distance: 385, color: "#6EE7B7", size: 1.5 },
];

// Individual scatter particle — needs its own hook calls, so it's a sub-component
function ScatterParticle({
  progress,
  angle,
  distance,
  color,
  size,
}: {
  progress: MotionValue<number>;
  angle: number;
  distance: number;
  color: string;
  size: number;
}) {
  const rad = (angle * Math.PI) / 180;
  const x = useTransform(progress, [0.22, 0.82], [0, Math.cos(rad) * distance]);
  const y = useTransform(progress, [0.22, 0.82], [0, Math.sin(rad) * distance]);
  const opacity = useTransform(progress, [0.18, 0.28, 0.68, 0.84], [0, 1, 0.65, 0]);
  const scale = useTransform(progress, [0.22, 0.82], [1.6, 0.15]);

  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: "50%",
        top: "50%",
        width: size,
        height: size,
        marginLeft: -size / 2,
        marginTop: -size / 2,
        backgroundColor: color,
        boxShadow: `0 0 ${size * 4}px ${size}px ${color}70`,
        x,
        y,
        opacity,
        scale,
      }}
    />
  );
}

/**
 * ScrollTransition wraps Hero + ServicesOverview with a cinematic scroll-linked
 * animation. The hero is held sticky while a glowing emerald scan line sweeps
 * downward and particles scatter outward — then the services section rises in.
 *
 * Container: 200vh | Sticky hero: 100vh | Transition scroll window: ~100vh
 * useScroll offset ["start start","end end"] maps 0→1 over the exact sticky window.
 */
export function ScrollTransition() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ── Hero transforms ─────────────────────────────────────────────
  // Subtle zoom into the void as hero recedes
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.07]);
  // Fade out — starts at 45%, fully gone by 90%
  const heroOpacity = useTransform(scrollYProgress, [0.45, 0.9], [1, 0]);

  // ── Emerald scan line ────────────────────────────────────────────
  // Sweeps from -1% to 103% of viewport height
  const scanTop = useTransform(scrollYProgress, [0.07, 0.62], ["-1%", "103%"]);
  const scanOpacity = useTransform(
    scrollYProgress,
    [0.04, 0.12, 0.57, 0.67],
    [0, 1, 1, 0]
  );

  // ── Dark overlay ─────────────────────────────────────────────────
  // Creeps in after the scan line has passed — hero descends into the abyss
  const overlayOpacity = useTransform(scrollYProgress, [0.42, 0.95], [0, 1]);

  // ── Residual ghost lines — echo the scan passage ─────────────────
  const ghost1Opacity = useTransform(
    scrollYProgress,
    [0.30, 0.37, 0.44],
    [0, 0.5, 0]
  );
  const ghost2Opacity = useTransform(
    scrollYProgress,
    [0.40, 0.47, 0.54],
    [0, 0.35, 0]
  );

  return (
    <>
      {/* ── Transition zone: hero held sticky while animations play ── */}
      {/*
        200vh container + offset["start start","end end"] means scrollYProgress
        goes 0→1 over exactly the 100vh window that the hero is sticky.
      */}
      <div ref={containerRef} className="relative" style={{ height: "200vh" }}>
        <div
          className="sticky top-0 overflow-hidden"
          style={{ height: "100vh" }}
        >
          {/* ── Hero — scales + fades as it recedes ── */}
          <motion.div
            className="absolute inset-0"
            style={{ scale: heroScale, opacity: heroOpacity }}
          >
            <Hero />
          </motion.div>

          {/* ── Scatter particles — burst from chip center ── */}
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 52 }}>
            {SCATTER_PARTICLES.map((p, i) => (
              <ScatterParticle
                key={i}
                progress={scrollYProgress}
                angle={p.angle}
                distance={p.distance}
                color={p.color}
                size={p.size}
              />
            ))}
          </div>

          {/* ── Ghost echo lines — residue after scan sweeps ── */}
          <motion.div
            className="absolute inset-x-0 pointer-events-none"
            style={{ top: "36%", opacity: ghost1Opacity, zIndex: 55 }}
          >
            <div
              style={{
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent 5%, rgba(16,185,129,0.45) 35%, rgba(16,185,129,0.22) 65%, transparent 95%)",
              }}
            />
          </motion.div>
          <motion.div
            className="absolute inset-x-0 pointer-events-none"
            style={{ top: "63%", opacity: ghost2Opacity, zIndex: 55 }}
          >
            <div
              style={{
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent 5%, rgba(52,211,153,0.35) 40%, rgba(52,211,153,0.18) 60%, transparent 95%)",
              }}
            />
          </motion.div>

          {/* ── Emerald scan line — the centrepiece ── */}
          <motion.div
            className="absolute inset-x-0 pointer-events-none"
            style={{ top: scanTop, opacity: scanOpacity, zIndex: 58 }}
          >
            {/* Soft glow above the line — light leaking back upward */}
            <div
              style={{
                position: "absolute",
                top: "-52px",
                left: 0,
                right: 0,
                height: "52px",
                background:
                  "linear-gradient(to top, rgba(16,185,129,0.20), transparent)",
              }}
            />
            {/* The scan line itself */}
            <div
              style={{
                height: "2px",
                background:
                  "linear-gradient(90deg, transparent 0%, #10B981 12%, #6EE7B7 50%, #10B981 88%, transparent 100%)",
                boxShadow:
                  "0 0 8px 2px #10B981, 0 0 28px 6px rgba(16,185,129,0.65), 0 0 70px 18px rgba(16,185,129,0.28)",
              }}
            />
            {/* Bloom beneath the line — light falling into the void */}
            <div
              style={{
                height: "96px",
                background:
                  "linear-gradient(to bottom, rgba(16,185,129,0.30) 0%, rgba(16,185,129,0.09) 55%, transparent 100%)",
              }}
            />
          </motion.div>

          {/* ── Dark overlay — abyss closes in after scan ── */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ opacity: overlayOpacity, zIndex: 54 }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse 120% 120% at 50% 40%, #080e18 0%, #0D1117 55%, #020408 100%)",
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* ── Services section — slides up from the darkness ── */}
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: "-8%" }}
      >
        <ServicesOverview />
      </motion.div>
    </>
  );
}
