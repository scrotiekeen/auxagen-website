"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/hero";
import { ServicesOverview } from "@/components/services-overview";

/**
 * ScrollTransition — natural scroll, no sticky.
 *
 * The hero scrolls away normally. The services section fades + slides
 * up as it enters the viewport. A gradient bridge blends the two
 * sections visually. Zero scroll resistance.
 */
export function ScrollTransition() {
  return (
    <>
      {/* Hero — scrolls naturally */}
      <Hero />

      {/* Gradient bridge — blends hero's dark void into services section */}
      <div
        className="relative h-24 -mt-24 pointer-events-none"
        style={{
          zIndex: 20,
          background: "linear-gradient(to bottom, transparent, #0D1117)",
        }}
      />

      {/* Services section — fades up into view */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-10%" }}
      >
        <ServicesOverview />
      </motion.div>
    </>
  );
}
