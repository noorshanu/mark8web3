"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export const CTA = () => {
  return (
    <section className="border-b border-neutral-900 bg-black/95 py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
          className="relative overflow-hidden rounded-3xl border border-amber-300/35 bg-linear-to-r from-amber-300/10 via-neutral-950 to-emerald-300/10 p-6 text-center text-neutral-50 shadow-[0_0_70px_rgba(251,191,36,0.25)] md:text-left"
        >
          <div className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-amber-300/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-emerald-300/10 blur-3xl" />

          <div className="relative flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
                READY TO LAUNCH?
              </p>
              <h2 className="text-balance text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl">
                Let&apos;s map your fastest path from idea to mainnet.
              </h2>
              <p className="max-w-xl text-sm text-amber-50/80 sm:text-[15px]">
                Share where you are today — pre‑launch, live or scaling — and
                we&apos;ll send back a clear, practical game‑plan you can act on,
                even if we don&apos;t end up working together.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 md:items-end">
              <button
                onClick={() => {
                  const el = document.querySelector("#contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="group inline-flex items-center gap-2 rounded-full bg-amber-300 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-black shadow-[0_0_36px_rgba(251,191,36,0.7)] transition hover:bg-amber-200"
              >
                Book a discovery call
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </button>
              <p className="text-[11px] text-amber-100/80">
                100% free, no obligation. We respond within 24 hours.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

