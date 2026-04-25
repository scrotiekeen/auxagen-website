"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { User } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] bg-[#0D1117] flex items-center">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Copy ──────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.1] tracking-tight">
              A business owner's time is money.
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed max-w-prose">
              If you're losing 20 hours a week to slow lead response, manual
              workflows, and sales follow-ups that never happen, you're losing{" "}
              <span className="text-emerald-400 font-semibold">$115,000</span>{" "}
              a year. Not because you're bad at what you do — because there are
              only so many hours in a week. Auxano fixes that, and helps you get
              ahead.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-sm tracking-wide w-fit"
              >
                Book your free consultation →
              </Link>
            </motion.div>
          </motion.div>

          {/* ── Right: Photo placeholder ─────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div
              className="relative w-full max-w-[340px] aspect-[3/4] rounded-2xl border border-white/10 bg-white/[0.03] flex flex-col items-center justify-center gap-3 overflow-hidden"
              style={{ boxShadow: "0 0 60px rgba(16,185,129,0.05)" }}
            >
              {/* Subtle inner gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-emerald-900/10 pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center gap-3 text-center px-6">
                <div className="w-16 h-16 rounded-full border border-white/10 bg-white/[0.05] flex items-center justify-center">
                  <User className="w-8 h-8 text-white/20" />
                </div>
                <p className="text-white/25 text-sm font-medium tracking-wide uppercase">
                  Photo coming soon
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
