"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, TrendingDown, Zap } from "lucide-react";

/**
 * Value Prop section.
 * Left: copy + CTA. Right: "Cost of Doing Nothing" data card —
 * a polished, on-brand panel that visually reinforces the $115K stat
 * instead of a generic photo placeholder.
 */

const COST_METRICS = [
  {
    icon: Clock,
    label: "Hours lost per week",
    value: "20+",
    sub: "to manual workflows & follow-ups",
    width: "62%",
  },
  {
    icon: TrendingDown,
    label: "Annual revenue leak",
    value: "$115K",
    sub: "in delayed leads & dropped pipeline",
    width: "88%",
    highlight: true,
  },
  {
    icon: Zap,
    label: "Lead response delay",
    value: "38% slower",
    sub: "vs. teams with automation in place",
    width: "44%",
  },
];

export function ValueProp() {
  return (
    <section className="bg-auxano-darker py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Copy ──────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.1] tracking-tight">
              A business owner&apos;s time is money.
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-prose">
              If you&apos;re losing 20 hours a week to slow lead response, manual
              workflows, and sales follow-ups that never happen, you&apos;re losing{" "}
              <span className="text-emerald-400 font-semibold">$115,000</span>{" "}
              a year. Not because you&apos;re bad at what you do — because there are
              only so many hours in a week. Auxano fixes that, and helps you get
              ahead.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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

          {/* ── Right: "Cost of Doing Nothing" data card ────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div
              className="relative w-full max-w-[460px] rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-emerald-900/10 p-8 backdrop-blur-sm overflow-hidden"
              style={{ boxShadow: "0 0 80px rgba(16,185,129,0.07)" }}
            >
              {/* Ambient glow */}
              <div
                className="absolute -top-24 -right-24 w-64 h-64 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(16,185,129,0.18) 0%, transparent 70%)",
                  filter: "blur(40px)",
                }}
              />

              {/* Card header */}
              <div className="relative flex items-center gap-3 mb-1">
                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400/90">
                  Live Estimate
                </span>
              </div>

              <h3 className="relative text-2xl font-bold text-white mt-2 mb-7 leading-tight">
                The Cost of Doing Nothing
              </h3>

              {/* Metrics list */}
              <div className="relative flex flex-col gap-5">
                {COST_METRICS.map((metric, i) => {
                  const Icon = metric.icon;
                  return (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 0.4 + i * 0.12,
                        ease: "easeOut",
                      }}
                      className="flex flex-col gap-1.5"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <Icon
                            className={`w-4 h-4 shrink-0 ${
                              metric.highlight ? "text-emerald-400" : "text-emerald-500/70"
                            }`}
                          />
                          <span className="text-xs font-medium uppercase tracking-wider text-gray-400 truncate">
                            {metric.label}
                          </span>
                        </div>
                        <span
                          className={`text-lg font-bold tabular-nums shrink-0 ${
                            metric.highlight ? "text-emerald-400" : "text-white"
                          }`}
                        >
                          {metric.value}
                        </span>
                      </div>

                      {/* Animated bar */}
                      <div className="relative h-1 rounded-full bg-white/[0.04] overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: metric.width }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: 0.6 + i * 0.12,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className={`absolute inset-y-0 left-0 rounded-full ${
                            metric.highlight
                              ? "bg-gradient-to-r from-emerald-500 to-emerald-300 shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                              : "bg-emerald-500/40"
                          }`}
                        />
                      </div>

                      <p className="text-xs text-gray-500 leading-relaxed mt-0.5">
                        {metric.sub}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Card footer divider + caption */}
              <div className="relative mt-7 pt-5 border-t border-white/5">
                <p className="text-[11px] text-gray-500 leading-relaxed">
                  Based on industry averages for owner-led businesses with 5–25
                  employees. Your numbers may be worse — or fixable.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
