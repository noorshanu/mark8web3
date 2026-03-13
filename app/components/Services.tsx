"use client";

import { motion } from "framer-motion";
import {
  FiCode,
  FiCpu,
  FiGlobe,
  FiLayers,
  FiMic,
  FiSend,
  FiTarget,
  FiUsers,
} from "react-icons/fi";

const services = [
  {
    title: "Web3 product & token strategy",
    icon: FiTarget,
    items: [
      "Tokenomics & utility design",
      "Economic modeling & vesting frameworks",
      "Launch & listing strategy (CEX / DEX)",
      "Roadmap & narrative architecture",
    ],
  },
  {
    title: "Smart contract & dApp development",
    icon: FiCode,
    items: [
      "Custom smart contracts (ERC‑20 / 721 / 1155)",
      "DeFi primitives (staking, farming, vesting)",
      "Launchpad & IDO / INO contracts",
      "Security‑first audits coordination",
    ],
  },
  {
    title: "Protocol, NFT & GameFi builds",
    icon: FiCpu,
    items: [
      "DeFi & infra protocol implementation",
      "NFT collections & mint experiences",
      "GameFi integrations & in‑game economies",
      "Cross‑chain bridges & oracles integration",
    ],
  },
  {
    title: "Listings & liquidity growth",
    icon: FiLayers,
    items: [
      "CEX / DEX listing preparation & introductions",
      "Market making & liquidity strategy",
      "Launchpad partnerships & coordination",
      "On‑chain analytics & health dashboards",
    ],
  },
  {
    title: "Community, socials & AMAs",
    icon: FiUsers,
    items: [
      "Telegram, Discord & X (Twitter) management",
      "Web3 native support & moderation",
      "Global AMAs & spaces booking",
      "Ambassador & community programs",
    ],
  },
  {
    title: "Influencer & media campaigns",
    icon: FiSend,
    items: [
      "Crypto KOL & creator campaigns",
      "YouTube, TikTok & X content",
      "PR, launch announcements & features",
      "Regional language campaigns",
    ],
  },
  {
    title: "Brand, website & funnel",
    icon: FiGlobe,
    items: [
      "Landing pages optimised for Web3",
      "Brand identity & pitch assets",
      "Investor decks & one‑pagers",
      "Analytics, funnels & conversion tracking",
    ],
  },
  {
    title: "Ongoing growth & advisory",
    icon: FiMic,
    items: [
      "Founder advisory & growth office hours",
      "KPI dashboards & reporting",
      "Experiment design & optimization",
      "Fundraising & partnership support",
    ],
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 130, damping: 18 },
  },
};

export const Services = () => {
  return (
    <section
      id="services"
      className="border-b border-neutral-900 bg-linear-to-b from-black via-neutral-950 to-black py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
              WEB3 SERVICES
            </p>
            <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight text-neutral-50 sm:text-3xl md:text-4xl">
              From zero to{" "}
              <span className="bg-linear-to-r from-amber-300 via-amber-100 to-emerald-300 bg-clip-text text-transparent">
                listed & loved
              </span>
              .
            </h2>
          </div>
          <p className="max-w-xl text-sm text-neutral-400 sm:text-base">
            Every engagement is bespoke, but these are the endpoints we hit: from
            hands‑on smart contract development to deep community work, listings
            and always‑on growth.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="grid gap-5 md:grid-cols-2"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                variants={card}
                className="group relative overflow-hidden rounded-3xl border border-neutral-900 bg-neutral-950/70 p-5 shadow-[0_0_40px_rgba(0,0,0,0.85)] transition-transform duration-200 hover:-translate-y-1.5 hover:border-amber-300/40"
              >
                <div className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rounded-full bg-amber-300/5 blur-3xl transition-opacity group-hover:opacity-100" />
                <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-emerald-300/5 blur-3xl" />

                <div className="relative flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-neutral-900 text-amber-300">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-neutral-50 sm:text-base">
                    {service.title}
                  </h3>
                </div>

                <ul className="relative mt-4 space-y-1.5 text-xs text-neutral-400 sm:text-[13px]">
                  {service.items.map((itemText) => (
                    <li key={itemText} className="flex gap-2">
                      <span className="mt-[6px] h-[3px] w-[3px] rounded-full bg-amber-300" />
                      <span>{itemText}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

