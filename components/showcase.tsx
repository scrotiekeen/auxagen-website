"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";

interface ProjectStat {
  label: string;
  value: string;
}

interface Project {
  number: string;
  category: string;
  title: string;
  domain: string;
  liveUrl?: string;
  isPrivate?: boolean;
  description: string;
  stack: string[];
  stats: ProjectStat[];
  image: string;
  alt: string;
  accentClass: string;
}

const PROJECTS: Project[] = [
  {
    number: "01",
    category: "Marketing site · Lead generation",
    title: "Higher Grounds Drone Service",
    domain: "hgdrone.com",
    liveUrl: "https://hgdrone.com",
    description:
      "A custom marketing site for an FAA Part 107 drone operator serving real estate, golf, and event clients. Designed to convert visitors into booked shoots — service breakdowns with tiered pricing, aerial portfolio galleries, blog, and a streamlined quote-request flow.",
    stack: ["Next.js 16", "Tailwind", "Framer Motion", "BunnyCDN", "Vercel"],
    stats: [
      { label: "Static pages", value: "25" },
      { label: "Lighthouse SEO", value: "100" },
      { label: "Status", value: "Live" },
    ],
    image: "/showcase-frontend.png",
    alt: "Higher Grounds Drone Service homepage — professional aerial services with tiered pricing",
    accentClass: "from-emerald-500/30 to-teal-400/0",
  },
  {
    number: "02",
    category: "Internal tool · Admin dashboard",
    title: "Auxano Client Portal",
    domain: "auxagen.dev",
    isPrivate: true,
    description:
      "A custom client management portal for internal operations. Real-time client health monitoring, lead tracking, market indices, stock watchlists, Google Ads integration, and admin controls — all behind authenticated access with Supabase RLS.",
    stack: ["Next.js 16", "Supabase", "Recharts", "Tailwind v4", "TypeScript"],
    stats: [
      { label: "Routes", value: "20+" },
      { label: "Auth", value: "RLS" },
      { label: "Status", value: "Live · Internal" },
    ],
    image: "/showcase-backend.png",
    alt: "Auxano Client Portal dashboard — admin overview with client health, market data, and analytics",
    accentClass: "from-emerald-400/30 to-cyan-400/0",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const staggerKids = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

export function Showcase() {
  return (
    <section className="relative bg-auxano-dark-base py-28 px-6 overflow-hidden">
      {/* Ambient bloom — top left */}
      <div
        aria-hidden
        className="absolute -top-32 -left-32 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(16,185,129,0.08) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="flex flex-col items-center text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-emerald-500/40" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
              Our Work
            </span>
            <span className="w-8 h-px bg-emerald-500/40" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05] max-w-3xl">
            Real systems, in production.
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mt-5 max-w-2xl leading-relaxed">
            Two recent builds — a public marketing site and a private internal tool.
            Both deployed, both in active use today.
          </p>
        </motion.div>

        {/* Project rows */}
        <div className="space-y-28 lg:space-y-32">
          {PROJECTS.map((project, i) => {
            const isReverse = i % 2 === 1;
            return (
              <motion.div
                key={project.number}
                className={`flex flex-col ${
                  isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-10 lg:gap-16 items-center`}
                variants={staggerKids}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
              >
                {/* ── Text column ──────────────────────────────────────────── */}
                <motion.div
                  className="flex-1 flex flex-col gap-5 w-full"
                  variants={fadeUp}
                >
                  {/* Eyebrow row: number + category */}
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold tracking-[0.2em] text-emerald-400">
                      {project.number}
                    </span>
                    <span className="w-6 h-px bg-emerald-500/40" />
                    <span className="text-xs font-medium uppercase tracking-wider text-gray-400">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-base leading-relaxed max-w-xl">
                    {project.description}
                  </p>

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-2.5 py-1 rounded-md bg-emerald-500/[0.06] border border-emerald-500/15 text-emerald-300/90"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-3 gap-4 pt-3 max-w-md">
                    {project.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="flex flex-col gap-0.5 border-l border-emerald-500/30 pl-3"
                      >
                        <span className="text-lg font-bold text-white tabular-nums leading-none">
                          {stat.value}
                        </span>
                        <span className="text-[11px] uppercase tracking-wider text-gray-500 leading-none mt-1">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Live link / private indicator */}
                  <div className="pt-2">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        <span>Visit {project.domain}</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    ) : (
                      <div className="inline-flex items-center gap-2 text-sm font-medium text-gray-500">
                        <Lock className="w-3.5 h-3.5" />
                        <span>{project.domain} · authenticated access only</span>
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* ── Image column ──────────────────────────────────────────── */}
                <motion.div className="flex-1 w-full" variants={fadeUp}>
                  <div className="group relative">
                    {/* Outer glow on hover */}
                    <div
                      aria-hidden
                      className={`absolute -inset-2 rounded-2xl bg-gradient-to-br ${project.accentClass} opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 pointer-events-none`}
                    />

                    {/* Browser frame mockup — refined */}
                    <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 bg-[#0f1117] transition-transform duration-500 group-hover:-translate-y-0.5">
                      {/* Browser chrome */}
                      <div className="flex items-center gap-3 px-3.5 py-2.5 bg-[#161922] border-b border-white/5">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]/80" />
                        </div>
                        <div className="flex-1 mx-2">
                          <div className="bg-black/40 rounded px-3 py-1 flex items-center gap-2 border border-white/5">
                            <Lock className="w-3 h-3 text-emerald-500/60 shrink-0" />
                            <span className="text-gray-400 text-[11px] truncate font-mono">
                              {project.domain}
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* Screenshot */}
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.alt}
                          fill
                          sizes="(min-width: 1024px) 50vw, 100vw"
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.015]"
                        />
                        {/* Subtle inner gradient at top — frame depth */}
                        <div
                          aria-hidden
                          className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-black/20 to-transparent pointer-events-none"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
