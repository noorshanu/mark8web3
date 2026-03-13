"use client";

import { motion } from "framer-motion";
import { FiMail, FiSend, FiUser, FiBriefcase } from "react-icons/fi";
import { SiTelegram, SiX, SiDiscord } from "react-icons/si";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="border-b border-neutral-900 bg-black/95 py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
              CONTACT
            </p>
            <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight text-neutral-50 sm:text-3xl md:text-4xl">
              Tell us where you&apos;re starting from.
            </h2>
          </div>
          <p className="max-w-xl text-sm text-neutral-400 sm:text-base">
            Share a few details and we&apos;ll reply with a short Loom or deck
            walking through opportunities, gaps and concrete next steps tailored
            to your project.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start">
          <motion.form
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring" as const, stiffness: 130, damping: 18 }}
            className="space-y-4 rounded-3xl border border-neutral-900 bg-neutral-950/80 p-5 text-sm text-neutral-200"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-xs text-neutral-400">
                  <FiUser className="h-3.5 w-3.5" />
                  Name
                </label>
                <input
                  type="text"
                  className="h-9 w-full rounded-xl border border-neutral-800 bg-black/60 px-3 text-xs text-neutral-100 outline-none ring-amber-300/0 transition focus:border-amber-300/60 focus:ring-2 focus:ring-amber-300/30"
                  placeholder="Satoshi Nakamoto"
                />
              </div>
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-xs text-neutral-400">
                  <FiMail className="h-3.5 w-3.5" />
                  Email
                </label>
                <input
                  type="email"
                  className="h-9 w-full rounded-xl border border-neutral-800 bg-black/60 px-3 text-xs text-neutral-100 outline-none ring-amber-300/0 transition focus:border-amber-300/60 focus:ring-2 focus:ring-amber-300/30"
                  placeholder="you@project.xyz"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="flex items-center gap-1.5 text-xs text-neutral-400">
                <FiBriefcase className="h-3.5 w-3.5" />
                Project / company
              </label>
              <input
                type="text"
                className="h-9 w-full rounded-xl border border-neutral-800 bg-black/60 px-3 text-xs text-neutral-100 outline-none ring-amber-300/0 transition focus:border-amber-300/60 focus:ring-2 focus:ring-amber-300/30"
                placeholder="Name & chain (if live)"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-neutral-400">
                Where are you today?
              </label>
              <select
                className="h-9 w-full rounded-xl border border-neutral-800 bg-black/60 px-3 text-xs text-neutral-100 outline-none ring-amber-300/0 transition focus:border-amber-300/60 focus:ring-2 focus:ring-amber-300/30"
                defaultValue=""
              >
                <option value="" disabled>
                  Select your stage
                </option>
                <option value="idea">Idea / pre‑whitepaper</option>
                <option value="building">Building / testnet</option>
                <option value="launching">Launching / listing soon</option>
                <option value="live">Live, need growth</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-neutral-400">
                What do you want help with?
              </label>
              <textarea
                rows={4}
                className="w-full rounded-xl border border-neutral-800 bg-black/60 px-3 py-2 text-xs text-neutral-100 outline-none ring-amber-300/0 transition focus:border-amber-300/60 focus:ring-2 focus:ring-amber-300/30"
                placeholder="Share a brief about your project, timelines, key challenges and goals."
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-amber-300 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-black shadow-[0_0_36px_rgba(251,191,36,0.7)] transition hover:bg-amber-200"
            >
              Send brief
              <FiSend className="h-4 w-4" />
            </button>
            <p className="text-[11px] text-neutral-500">
              Prefer to start anonymously? Just drop a burner email and Telegram
              handle — we&apos;ll take it from there.
            </p>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.08, type: "spring" as const, stiffness: 130, damping: 18 }}
            className="space-y-4 rounded-3xl border border-neutral-900 bg-neutral-950/80 p-5 text-xs text-neutral-300"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-400">
              DIRECT CHANNELS
            </p>

            <div className="space-y-3">
              <div>
                <p className="text-[11px] text-neutral-500">Telegram</p>
                <a
                  href="https://t.me/your_telegram"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-0.5 inline-flex items-center gap-2 text-sm text-sky-300 hover:text-sky-200"
                >
                  <SiTelegram className="h-4 w-4" />
                  @mark8_web3
                </a>
              </div>

              <div>
                <p className="text-[11px] text-neutral-500">X (Twitter)</p>
                <a
                  href="https://x.com/your_handle"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-0.5 inline-flex items-center gap-2 text-sm text-neutral-200 hover:text-amber-200"
                >
                  <SiX className="h-4 w-4" />
                  @mark8_web3
                </a>
              </div>

              <div>
                <p className="text-[11px] text-neutral-500">Discord</p>
                <a
                  href="https://discord.gg/your_invite"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-0.5 inline-flex items-center gap-2 text-sm text-indigo-200 hover:text-indigo-100"
                >
                  <SiDiscord className="h-4 w-4" />
                  Join founder hub
                </a>
              </div>
            </div>

            <div className="mt-2 rounded-2xl border border-neutral-800 bg-black/60 p-3 text-[11px] text-neutral-400">
              <p>
                We typically work with teams for 3–12 months. If you&apos;re just
                exploring, we&apos;re still happy to jam for 30 minutes and share
                what&apos;s working in your niche.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

