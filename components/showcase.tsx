"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Front-End Software",
    description:
      "A fully custom website built for a professional drone services company. Designed to convert visitors into booked clients — featuring service breakdowns with tiered pricing, aerial portfolio galleries, and a streamlined quote request flow. Built with Next.js, Tailwind CSS, and deployed on Vercel with a custom domain.",
    image: "/showcase-frontend.png",
    alt: "Higher Ground Drone Services website — professional aerial services with tiered pricing",
    imagePosition: "right" as const,
  },
  {
    title: "Backend Dashboard",
    description:
      "A custom-built client management portal for internal operations. Features real-time client health monitoring, lead tracking, market indices, stock watchlists, analytics integrations, and admin controls — all behind a secure login. Built with Next.js, Supabase, and real-time data feeds.",
    image: "/showcase-backend.png",
    alt: "Client portal dashboard — admin overview with client health, market data, and analytics",
    imagePosition: "left" as const,
  },
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export function Showcase() {
  return (
    <section className="bg-auxano-dark-base py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What We&apos;ve Built
        </motion.h2>
        <motion.p
          className="text-gray-400 text-lg md:text-xl text-center mb-20 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Real projects. Real results. Here&apos;s a look at our recent work.
        </motion.p>

        <div className="space-y-24">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className={`flex flex-col ${
                project.imagePosition === "right"
                  ? "lg:flex-row"
                  : "lg:flex-row-reverse"
              } gap-10 lg:gap-16 items-center`}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              {/* Text side */}
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Image side */}
              <div className="flex-1 w-full">
                <div className="relative rounded-2xl overflow-hidden border border-auxano-border shadow-2xl shadow-black/40">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    width={1920}
                    height={1080}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
