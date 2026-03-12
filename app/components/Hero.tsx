"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiTrendingUp } from "react-icons/fi";
import { SiBinance, SiEthereum, SiSolana, SiTelegram } from "react-icons/si";

const heroParent = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  },
};

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden border-b border-neutral-900/80 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.19),transparent_60%),radial-gradient(circle_at_bottom,rgba(45,212,191,0.16),transparent_55%),linear-gradient(to_bottom,#020617,#020617)] pt-28 pb-20 md:pt-32 md:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen">
        <div className="grid h-full w-full grid-cols-2 gap-6">
          <div className="neon-grid" />
          <div className="neon-grid neon-grid-soft" />
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 md:flex-row md:items-start md:gap-16 md:px-6">
        <motion.div
          variants={heroParent}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-xl space-y-7 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-black/60 px-3 py-1 text-xs font-medium text-amber-200 shadow-[0_0_28px_rgba(251,191,36,0.28)] backdrop-blur">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-300 text-[10px] font-black text-black">
              NEW
            </span>
            <span>End‑to‑end Web3 launch & growth studio</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-neutral-50 sm:text-5xl md:text-6xl">
              Launch, scale & list
              <span className="bg-linear-to-r from-amber-300 via-amber-200 to-emerald-300 bg-clip-text text-transparent">
                {" "}
                Web3 projects
              </span>
              with confidence.
            </h1>
            <p className="text-pretty text-sm text-neutral-400 sm:text-base">
              From tokenomics and smart contract development to CEX / DEX
              listings, influencer campaigns and 24/7 community management —
              MARK8 turns your Web3 idea into a high‑signal brand.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
            <div className="flex gap-3">
              <button
                className="group inline-flex items-center gap-2 rounded-full bg-amber-300 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-black shadow-[0_0_36px_rgba(251,191,36,0.7)] transition hover:bg-amber-200"
                onClick={() => {
                  const el = document.querySelector("#contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Book a call
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </button>
              <button
                className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-black/40 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-100 hover:border-amber-300/80 hover:text-amber-200"
                onClick={() => {
                  const el = document.querySelector("#services");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View services
              </button>
            </div>

            <div className="flex items-center gap-3 text-xs text-neutral-400">
              <div className="flex -space-x-2">
                <div className="h-7 w-7 rounded-full bg-emerald-400/80 ring-2 ring-black" />
                <div className="h-7 w-7 rounded-full bg-amber-400/80 ring-2 ring-black" />
                <div className="h-7 w-7 rounded-full bg-sky-400/80 ring-2 ring-black" />
              </div>
              <p>
                <span className="font-semibold text-emerald-300">
                  100+ campaigns
                </span>{" "}
                delivered for Web3 brands
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-500">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-black/40 px-3 py-1">
              <FiTrendingUp className="text-emerald-300" />
              <span>Listing, liquidity & growth handled end‑to‑end</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 border-t border-neutral-900 pt-6 text-xs text-neutral-500">
            <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500">
              TRUSTED ACROSS CHAINS
            </span>
            <div className="flex items-center gap-4 text-neutral-400">
              <span className="inline-flex items-center gap-1">
                <SiBinance className="text-amber-300" />
                <span>BNB Chain</span>
              </span>
              <span className="inline-flex items-center gap-1">
                <SiEthereum className="text-indigo-300" />
                <span>Ethereum</span>
              </span>
              <span className="inline-flex items-center gap-1">
                <SiSolana className="text-emerald-300" />
                <span>Solana</span>
              </span>
              <span className="hidden items-center gap-1 sm:inline-flex">
                <SiTelegram className="text-sky-300" />
                <span>Crypto‑native communities</span>
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.12, type: "spring", stiffness: 120, damping: 18 }}
          className="relative z-10 w-full max-w-md md:max-w-lg"
        >
          <div className="relative overflow-hidden rounded-3xl border border-amber-200/20 bg-linear-to-b from-neutral-900/60 via-black to-black/90 p-px shadow-[0_0_70px_rgba(0,0,0,0.9)]">
            <div className="relative h-full w-full rounded-[22px] bg-linear-to-b from-neutral-950/80 to-black p-5">
              <div className="mb-4 flex items-center justify-between text-xs text-neutral-400">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Live campaign monitor
                </span>
                <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                  On‑chain
                </span>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-neutral-800/80 bg-neutral-950/40 p-4">
                  <div className="flex items-center justify-between text-xs text-neutral-400">
                    <span>Token launch health</span>
                    <span className="font-mono text-emerald-300">94 / 100</span>
                  </div>
                  <div className="mt-3 h-2 w-full rounded-full bg-neutral-900">
                    <div className="h-2 w-[94%] rounded-full bg-linear-to-r from-emerald-400 via-amber-300 to-amber-500 shadow-[0_0_20px_rgba(74,222,128,0.6)]" />
                  </div>
                  <p className="mt-3 text-[11px] text-neutral-500">
                    Liquidity, holder distribution, listing visibility & community momentum monitored in real‑time.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded-2xl border border-neutral-800/80 bg-neutral-950/40 p-3">
                    <p className="text-neutral-400">CEX / DEX listings</p>
                    <p className="mt-2 text-2xl font-semibold text-neutral-50">
                      32
                      <span className="ml-1 text-xs text-emerald-400">live</span>
                    </p>
                    <p className="mt-2 text-[11px] text-neutral-500">
                      Curated tier‑1 / tier‑2 exchanges and liquidity partners.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-neutral-800/80 bg-neutral-950/40 p-3">
                    <p className="text-neutral-400">Community growth</p>
                    <p className="mt-2 text-2xl font-semibold text-neutral-50">
                      218%
                      <span className="ml-1 text-xs text-emerald-400">QoQ</span>
                    </p>
                    <p className="mt-2 text-[11px] text-neutral-500">
                      Telegram, X, Discord, KOLs & spaces managed for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-amber-300/15 blur-3xl" />
            <div className="pointer-events-none absolute -left-6 bottom-0 h-32 w-32 rounded-full bg-emerald-300/10 blur-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

