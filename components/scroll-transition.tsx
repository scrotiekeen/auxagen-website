"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Hero } from "@/components/hero";
import { ServicesOverview } from "@/components/services-overview";

/**
 * ScrollTransition — premium parallax dissolve.
 *
 * The hero is held sticky while the user scrolls through a 180vh zone.
 * As they scroll:
 *   - Hero content gently fades and drifts upward (parallax lift)
 *   - The void deepens — edges darken further
 *   - A soft emerald light pulses once at the midpoint (like the chip releasing energy)
 *   - Services section slides up smoothly over the fading hero
 *
 * No gimmicks — just depth, motion, and atmosphere.
 */
export function ScrollTransition() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Hero drifts upward slightly as it fades — parallax lift effect
  const heroY = useTransform(scrollYProgress, [0, 0.8], ["0%", "-8%"]);
  const heroOpacity = useTransform(scrollYProgress, [0.15, 0.65], [1, 0]);

  // Void closes in — dark overlay with gradient from edges
  const voidOpacity = useTransform(scrollYProgress, [0.2, 0.75], [0, 1]);

  // Soft emerald pulse — a single breath of light at the transition midpoint
  const pulseOpacity = useTransform(
    scrollYProgress,
    [0.25, 0.42, 0.58, 0.72],
    [0, 0.35, 0.35, 0]
  );
  const pulseScale = useTransform(
    scrollYProgress,
    [0.25, 0.58, 0.72],
    [0.6, 1, 1.3]
  );

  return (
    <>
      {/* Transition zone — hero sticky while scroll drives the dissolve */}
      <div ref={containerRef} className="relative" style={{ height: "180vh" }}>
        <div className="sticky top-0 overflow-hidden" style={{ height: "100vh" }}>

          {/* Hero — drifts up and fades */}
          <motion.div
            className="absolute inset-0"
            style={{ y: heroY, opacity: heroOpacity }}
          >
            <Hero />
          </motion.div>

          {/* Emerald pulse — single soft bloom of light from center */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ opacity: pulseOpacity, zIndex: 50 }}
          >
            <motion.div
              style={{
                width: "500px",
                height: "500px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(16,185,129,0.25) 0%, rgba(16,185,129,0.08) 40%, transparent 70%)",
                filter: "blur(40px)",
                scale: pulseScale,
              }}
            />
          </motion.div>

          {/* Void overlay — darkness swallows the hero */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ opacity: voidOpacity, zIndex: 52 }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(ellipse 100% 100% at 50% 50%, #060B14 0%, #030508 60%, #010203 100%)",
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Services section — rises from the darkness */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-5%" }}
      >
        <ServicesOverview />
      </motion.div>
    </>
  );
}
