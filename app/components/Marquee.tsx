"use client";

import { motion } from "framer-motion";
import {
  SiBinance,
  SiEthereum,
  SiSolana,
  SiPolygon,
  SiTelegram,
  SiX,
  SiDiscord,
} from "react-icons/si";

const items = [
  { label: "Token Launchpads", icon: SiBinance },
  { label: "DeFi Protocols", icon: SiEthereum },
  { label: "NFT & Gaming", icon: SiSolana },
  { label: "Layer 2 Rollups", icon: SiPolygon },
  { label: "Infrastructure", icon: SiEthereum },
  { label: "Telegram Growth", icon: SiTelegram },
  { label: "X (Twitter) Spaces", icon: SiX },
  { label: "Discord Communities", icon: SiDiscord },
];

export const Marquee = () => {
  const loop = [...items, ...items];

  return (
    <section className="border-b border-neutral-900 bg-black/95 py-6">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-3 flex items-center justify-between gap-4 text-xs text-neutral-500">
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            LIVE WEB3 ECOSYSTEM
          </span>
          <span className="hidden rounded-full border border-neutral-800 px-2 py-1 text-[11px] uppercase tracking-[0.2em] text-neutral-400 sm:inline-flex">
            From idea &rarr; listing &rarr; scale
          </span>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-linear-to-r from-neutral-950/90 via-black to-neutral-950/90 py-3">
          <motion.div
            className="flex min-w-max items-center gap-8 px-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 26,
              ease: "linear",
            }}
          >
            {loop.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={`${item.label}-${idx}`}
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-black/60 px-4 py-2 text-xs text-neutral-200 shadow-[0_0_28px_rgba(0,0,0,0.85)]"
                >
                  <Icon className="h-4 w-4 text-amber-300" />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </motion.div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-linear-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-linear-to-l from-black to-transparent" />
        </div>
      </div>
    </section>
  );
};

