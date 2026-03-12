"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-neutral-800/80 bg-black/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <div
          className="flex cursor-pointer items-center gap-2"
          onClick={() => handleNavClick("#top")}
        >
          <img src="/logo.png" alt="logo" className="h-20 w-50" />
        
        </div>

        <div className="hidden items-center gap-8 text-sm font-medium text-neutral-200 md:flex">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="relative overflow-hidden px-2 py-1 transition-colors hover:text-amber-300"
            >
              <span>{item.label}</span>
              <motion.span
                layoutId="nav-underline"
                className="pointer-events-none absolute inset-x-1 -bottom-1 h-px bg-linear-to-r from-transparent via-amber-300 to-transparent"
                initial={false}
                transition={{ type: "spring", stiffness: 450, damping: 40 }}
              />
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contact")}
            className="rounded-full bg-amber-300 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-black shadow-[0_0_32px_rgba(251,191,36,0.6)] transition hover:bg-amber-200"
          >
            Book a call
          </button>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-full border border-neutral-800 p-2 text-neutral-200 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          className="border-t border-neutral-900 bg-black/95 md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 text-sm font-medium text-neutral-200">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="rounded-lg px-2 py-2 text-left hover:bg-neutral-900/70"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="mt-2 rounded-full bg-amber-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-black shadow-[0_0_26px_rgba(251,191,36,0.6)]"
            >
              Book a call
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

