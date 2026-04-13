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
