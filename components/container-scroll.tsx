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
