"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 140, damping: 18 } },
};

export const About = () => {
  return (
    <section
      id="about"
      className="border-b border-neutral-900 bg-black/95 py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start"
        >
          <motion.div variants={item} className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
              ABOUT MARK8
            </p>
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-neutral-50 sm:text-3xl md:text-4xl">
              A full‑stack Web3 studio built for{" "}
              <span className="bg-linear-to-r from-amber-300 via-amber-100 to-emerald-300 bg-clip-text text-transparent">
                founders who ship
              </span>
              .
            </h2>
            <p className="text-sm text-neutral-400 sm:text-base">
              We are a crypto‑native team of builders, traders and marketers that
              have lived every stage of a Web3 project lifecycle — from whitepaper
              to IDO, from first lines of Solidity to securing top‑tier listings
              and scaling global communities.
            </p>
            <p className="text-sm text-neutral-400 sm:text-base">
              Instead of hiring separate agencies for development, tokenomics,
              listings, and growth, MARK8 gives you a single senior team that owns
              the end‑to‑end outcome and understands the culture, speed and
              nuance of Web3.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="space-y-4 rounded-3xl border border-neutral-800 bg-linear-to-b from-neutral-950/80 to-black/90 p-5 text-xs text-neutral-300"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-neutral-800 bg-black/60 p-3">
                <p className="text-[11px] text-neutral-400">Projects advised</p>
                <p className="mt-2 text-2xl font-semibold text-neutral-50">70+</p>
                <p className="mt-1 text-[11px] text-neutral-500">
                  Across DeFi, infra, GameFi, NFT, launchpads & tools.
                </p>
              </div>
              <div className="rounded-2xl border border-neutral-800 bg-black/60 p-3">
                <p className="text-[11px] text-neutral-400">Capital supported</p>
                <p className="mt-2 text-2xl font-semibold text-neutral-50">
                  $120M+
                </p>
                <p className="mt-1 text-[11px] text-neutral-500">
                  In raises, volume, incentives & liquidity programs.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-3 text-[11px] text-emerald-100">
              <p className="font-semibold text-emerald-300">
                We measure success in on‑chain KPIs.
              </p>
              <p className="mt-1 text-emerald-100/80">
                Holder distribution, sticky liquidity, organic volume and
                community depth — not just vanity impressions.
              </p>
            </div>

            <div className="grid gap-2 text-[11px] text-neutral-400 sm:grid-cols-2">
              <p>
                • Global team in EU, MENA & Asia for true 24/7 coverage.
              </p>
              <p>• Partner network with exchanges, launchpads and KOLs.</p>
              <p>• Senior technical team across Solidity, Rust & TypeScript.</p>
              <p>• Battle‑tested frameworks from bear & bull markets.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

