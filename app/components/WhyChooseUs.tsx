"use client";

import { motion } from "framer-motion";
import { FiCompass, FiLock, FiZap } from "react-icons/fi";

const points = [
  {
    icon: FiCompass,
    title: "Crypto‑native, not \"Web2 with a wallet\"",
    body: "We live in Telegram chats, on‑chain dashboards and launchpads — and understand the speed, language and nuance of crypto culture.",
  },
  {
    icon: FiLock,
    title: "Accountable to on‑chain KPIs",
    body: "We align around metrics that actually matter: holder distribution, liquidity depth, organic volume, retention and community depth.",
  },
  {
    icon: FiZap,
    title: "End‑to‑end, senior‑only team",
    body: "Strategy, development, listings and growth are led by seniors who have shipped multiple cycles — no hand‑offs to junior vendors.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section
      id="why-us"
      className="border-b border-neutral-900 bg-black/95 py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
              WHY CHOOSE US
            </p>
            <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight text-neutral-50 sm:text-3xl md:text-4xl">
              A single partner across{" "}
              <span className="bg-linear-to-r from-amber-300 via-amber-100 to-emerald-300 bg-clip-text text-transparent">
                build, launch & scale
              </span>
              .
            </h2>
          </div>
          <p className="max-w-xl text-sm text-neutral-400 sm:text-base">
            You don&apos;t need five agencies who don&apos;t talk to each other.
            You need one senior team that deeply understands token design, UX,
            exchange relationships and 24/7 community at the same time.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.1fr)] md:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring" as const, stiffness: 140, damping: 18 }}
            className="space-y-4"
          >
            {points.map((point) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.title}
                  className="rounded-3xl border border-neutral-800 bg-neutral-950/70 p-4 text-sm text-neutral-300"
                >
                  <div className="mb-2 flex items-center gap-2 text-neutral-50">
                    <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-neutral-900 text-amber-300">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="font-semibold">{point.title}</h3>
                  </div>
                  <p className="text-xs text-neutral-400 sm:text-[13px]">
                    {point.body}
                  </p>
                </div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.08, type: "spring" as const, stiffness: 130, damping: 18 }}
            className="space-y-4 rounded-3xl border border-amber-300/30 bg-linear-to-b from-amber-300/10 via-neutral-950/90 to-black/95 p-5 text-xs text-neutral-200 shadow-[0_0_60px_rgba(251,191,36,0.35)]"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-200">
              PERFECT FOR
            </p>
            <ul className="mt-2 space-y-1.5 text-[13px]">
              <li>&bull; Pre‑launch teams validating token & product strategy.</li>
              <li>
                &bull; Live protocols needing deeper liquidity and stickier
                communities.
              </li>
              <li>
                &bull; Web2 teams entering Web3 that need senior crypto‑native
                guidance.
              </li>
            </ul>

            <div className="mt-3 rounded-2xl border border-neutral-800/80 bg-black/40 p-3 text-[11px] text-neutral-400">
              <p>
                &ldquo;MARK8 felt like having an embedded Web3 growth team, not an
                external agency. They understood our token mechanics faster than
                most investors.&rdquo;
              </p>
              <p className="mt-2 text-[11px] text-neutral-500">
                — Founder, DeFi infrastructure protocol
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

