"use client";

import { motion } from "framer-motion";
import { Layers, UserCheck, GraduationCap, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Pillar {
  number: string;
  icon: LucideIcon;
  title: string;
  body: string;
}

const PILLARS: Pillar[] = [
  {
    number: "01",
    icon: Layers,
    title: "One team, three disciplines",
    body: "Most agencies pick a lane. We run consulting, web & software, and AI strategy under one roof — same team, same project, no vendor handoffs.",
  },
  {
    number: "02",
    icon: UserCheck,
    title: "Owners talk to owners",
    body: "We run businesses ourselves. We've felt the 20-hour-a-week leak and the hire-vs-build dilemma. We don't speak agency — we speak owner.",
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "Built to hand off",
    body: "Every engagement includes a Training Handoff and Wrap-Up phase. We build to make you independent, not to keep you dependent on retainers.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "AI-native, not bolted on",
    body: "We don't graft AI onto old systems as an afterthought. We build with it from the foundation, because we live with it every day ourselves.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export function WhyDifferent() {
  return (
    <section className="relative bg-auxano-darker py-24 px-6 overflow-hidden">
      {/* Ambient emerald accent — top center, subtle */}
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(16,185,129,0.08) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="flex flex-col items-center text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-emerald-500/40" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
              Why Auxano
            </span>
            <span className="w-8 h-px bg-emerald-500/40" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05] max-w-3xl">
            Built different on purpose.
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mt-5 max-w-2xl leading-relaxed">
            Four reasons business owners choose Auxano over a traditional agency,
            a freelance contractor, or an in-house hire.
          </p>
        </motion.div>

        {/* Pillar cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.number}
                variants={cardVariants}
                className="group relative h-full"
              >
                <div
                  className="relative h-full flex flex-col bg-auxano-dark-base/80 border border-auxano-border rounded-2xl p-7 backdrop-blur-sm transition-all duration-300 group-hover:border-emerald-500/50 group-hover:-translate-y-1"
                  style={{
                    boxShadow:
                      "inset 0 1px 0 rgba(255,255,255,0.03)",
                  }}
                >
                  {/* Hover glow */}
                  <div
                    aria-hidden
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 0%, rgba(16,185,129,0.10) 0%, transparent 60%)",
                    }}
                  />

                  {/* Number + icon row */}
                  <div className="relative flex items-start justify-between mb-6">
                    <span className="text-5xl font-black tracking-tighter text-emerald-500/15 leading-none select-none">
                      {pillar.number}
                    </span>
                    <div className="p-2.5 bg-auxano-primary/10 rounded-xl group-hover:bg-auxano-primary/20 transition-colors duration-300">
                      <Icon className="text-auxano-primary" size={20} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="relative text-white font-bold text-lg leading-snug mb-3">
                    {pillar.title}
                  </h3>

                  {/* Body */}
                  <p className="relative text-gray-400 text-sm leading-relaxed">
                    {pillar.body}
                  </p>

                  {/* Bottom emerald accent bar — animates on hover */}
                  <div className="relative mt-auto pt-6">
                    <div className="h-px bg-gradient-to-r from-emerald-500/0 via-emerald-500/30 to-emerald-500/0 transition-all duration-500 group-hover:via-emerald-400/70" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
