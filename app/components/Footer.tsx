import { SiTelegram, SiX, SiDiscord } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="border-t border-neutral-900/80 bg-black py-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-xs text-neutral-500 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="space-y-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-500">
            MARK8 • WEB3 GROWTH STUDIO
          </p>
          <p className="max-w-md text-[11px] text-neutral-500">
            Not investment advice. Nothing on this site constitutes an offer to
            sell or the solicitation of an offer to buy any security or token.
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 md:items-end">
          <div className="flex items-center gap-3 text-neutral-300">
            <a
              href="https://t.me/your_telegram"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-neutral-800 bg-neutral-950 text-sky-300 hover:border-sky-300/70"
            >
              <SiTelegram className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://x.com/your_handle"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-neutral-800 bg-neutral-950 text-neutral-200 hover:border-amber-300/70"
            >
              <SiX className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://discord.gg/your_invite"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-neutral-800 bg-neutral-950 text-indigo-200 hover:border-indigo-300/70"
            >
              <SiDiscord className="h-3.5 w-3.5" />
            </a>
          </div>
          <p className="text-[11px] text-neutral-600">
            © {new Date().getFullYear()} MARK8 Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

