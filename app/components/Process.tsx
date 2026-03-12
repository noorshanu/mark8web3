"use client";

import { motion } from "framer-motion";

const steps = [
  {
    label: "01",
    title: "Discovery & diagnostics",
    body: "We unpack your vision, current assets, gaps and constraints — then benchmark your market, token and narrative against what works right now.",
  },
  {
    label: "02",
    title: "Architecture & roadmap",
    body: "We design tokenomics, user journeys, launch & listing strategy plus a concrete, realistic roadmap across build, launch and growth phases.",
  },
  {
    label: "03",
    title: "Build, ship & harden",
    body: "Smart contracts, dApps, brand and funnels are implemented in parallel. We coordinate audits, infrastructure and battle‑test everything with you.",
  },
  {
    label: "04",
    title: "Launch, list & grow",
    body: "Listings, liquidity, influencers, AMAs, PR and performance campaigns go live with dashboards that track both off‑chain and on‑chain KPIs.",
  },
  {
    label: "05",
    title: "Iterate & scale",
    body: "We double‑down on what compounds, retire what doesn’t, and keep building with you as markets, regulations and narratives shift.",
  },
];

export const Process = () => {
  return (
    <section
      id="process"
      className="border-b border-neutral-900 bg-linear-to-b from-black via-neutral-950 to-black py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
              OUR PROCESS
            </p>
            <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight text-neutral-50 sm:text-3xl md:text-4xl">
              A clear lane from{" "}
              <span className="bg-linear-to-r from-amber-300 via-amber-100 to-emerald-300 bg-clip-text text-transparent">
                idea to impact
              </span>
              .
            </h2>
          </div>
          <p className="max-w-xl text-sm text-neutral-400 sm:text-base">
            We keep founders out of Slack chaos and into leverage. A simple,
            transparent process where you always know what&apos;s live, what&apos;s
            next and what&apos;s moving the needle.
          </p>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute left-[10px] top-3 bottom-3 hidden w-px bg-linear-to-b from-amber-300 via-neutral-700 to-emerald-300 md:block" />

          <ol className="space-y-4 text-sm text-neutral-300">
            {steps.map((step, index) => (
              <motion.li
                key={step.label}
                initial={{ opacity: 0, x: 26 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  delay: index * 0.04,
                  type: "spring",
                  stiffness: 130,
                  damping: 18,
                }}
                className="relative grid gap-3 rounded-3xl border border-neutral-900 bg-neutral-950/80 p-4 md:grid-cols-[auto_minmax(0,1fr)] md:items-start"
              >
                <div className="flex items-center gap-3 md:flex-col md:items-start">
                  <div className="relative flex h-8 w-8 items-center justify-center rounded-2xl bg-neutral-900 text-[11px] font-semibold text-amber-300">
                    {step.label}
                    <span className="pointer-events-none absolute -z-10 h-8 w-8 rounded-2xl border border-amber-300/40" />
                  </div>
                  <span className="hidden text-[11px] uppercase tracking-[0.22em] text-neutral-500 md:inline">
                    STEP
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-neutral-50 sm:text-base">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs text-neutral-400 sm:text-[13px]">
                    {step.body}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

