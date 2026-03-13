"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SiTelegram } from "react-icons/si";

export const FloatingTelegram = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      setVisible(y > 280);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.a
      href="https://t.me/your_telegram"
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={
        visible
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 40, scale: 0.9 }
      }
      transition={{ type: "spring" as const, stiffness: 250, damping: 22 }}
      className="fixed bottom-5 right-4 z-40 flex items-center gap-2 rounded-full bg-linear-to-r from-sky-400 to-emerald-400 px-4 py-2 text-xs font-semibold text-black shadow-[0_0_40px_rgba(56,189,248,0.75)] md:bottom-6 md:right-6"
    >
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-black/10">
        <SiTelegram className="h-4 w-4" />
      </div>
      <span className="hidden sm:inline">Chat on Telegram</span>
    </motion.a>
  );
};

