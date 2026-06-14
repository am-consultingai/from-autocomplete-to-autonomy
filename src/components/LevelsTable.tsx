import { motion } from "motion/react";
import {
  MessageSquareText,
  Wand2,
  Bot,
  Network,
  Infinity as InfinityIcon,
  TrendingUp,
  MapPin,
  ChevronDown,
  LucideIcon,
} from "lucide-react";

interface Level {
  index: number;
  name: string;
  state: string;
  challenge: string;
  Icon: LucideIcon;
  jfrog?: boolean;
}

const LEVELS: Level[] = [
  { index: 1, name: "Assist",      Icon: MessageSquareText, state: "Finishes your sentences, drafts your emails, answers your questions.", challenge: "Trust — catching it when it's confidently wrong." },
  { index: 2, name: "Generate",    Icon: Wand2,             state: "Describe what you want; it produces the whole thing — a report, a plan, a feature.", challenge: "Context — does it actually know your business?" },
  { index: 3, name: "Delegate",    Icon: Bot,               state: "Hand it a task and it runs it end to end — and checks its own work.", challenge: "Proof — can it verify itself before you stake your name on it?", jfrog: true },
  { index: 4, name: "Orchestrate", Icon: Network,           state: "A whole team of AI workers, running at once, that you direct.", challenge: "Coordination — getting many to move as one, without chaos." },
  { index: 5, name: "Autonomy",    Icon: InfinityIcon,      state: "It runs projects for hours, unwatched — and gets it right.", challenge: "Letting go — trusting it when no one is looking." },
  { index: 6, name: "Compounding", Icon: TrendingUp,        state: "The entire company gets smarter every single day, on its own.", challenge: "Memory — it learns from everything, so you'd better trust what it learned." },
];

export default function LevelsTable() {
  return (
    <div className="w-full">
      {/* Column headers (desktop) */}
      <div className="hidden md:grid grid-cols-[240px_1fr_1.3fr] gap-6 ml-8 pr-4 pb-3 border-b-2 border-[rgba(11,30,58,0.12)]">
        <span className="font-mono text-[11px] uppercase tracking-widest text-gray-400">Stage</span>
        <span className="font-mono text-[11px] uppercase tracking-widest text-gray-400">What it can do</span>
        <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-accent)]">The challenge to solve</span>
      </div>

      {/* Rows, with a downward-traveling beam on the left rail (Stage 1 → Stage 6) */}
      <div className="relative">
        {/* Left rail + animated beam (desktop) */}
        <div className="hidden md:block absolute left-2.5 top-1 bottom-1 w-[3px] rounded-full bg-[var(--color-accent)]/15 overflow-hidden z-20">
          <div className="beam-down absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-transparent via-[var(--color-accent)] to-transparent" />
        </div>
        {/* Direction arrow at the bottom of the rail */}
        <div className="hidden md:block absolute left-2.5 -translate-x-[42%] -bottom-4 text-[var(--color-accent)] z-20">
          <ChevronDown size={18} className="animate-bounce" />
        </div>

        <div className="flex flex-col">
        {LEVELS.map((lv, i) => {
          const Icon = lv.Icon;
          return (
            <motion.div
              key={lv.index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.07, ease: "easeOut" }}
              className={
                lv.jfrog
                  ? "group relative grid md:grid-cols-[240px_1fr_1.3fr] gap-3 md:gap-6 px-4 md:px-5 md:ml-8 py-5 my-2 rounded-xl bg-blue-50 ring-2 ring-[var(--color-accent)]/50 shadow-md shadow-blue-900/5 md:items-center"
                  : "group grid md:grid-cols-[240px_1fr_1.3fr] gap-3 md:gap-6 px-4 md:px-5 md:ml-8 py-5 border-b border-[var(--color-border-subtle)] md:items-center transition-colors hover:bg-blue-50/40"
              }
            >
              {/* "JFrog is here" badge */}
              {lv.jfrog && (
                <div className="absolute -top-3 right-4 flex items-center gap-1.5 bg-[var(--color-accent)] text-white rounded-full pl-2 pr-3 py-1 shadow-lg">
                  <MapPin size={12} className="animate-bounce" />
                  <img src="/img/jfrog.svg" alt="" className="h-3.5 w-auto brightness-0 invert" />
                  <span className="font-mono text-[10px] uppercase tracking-widest font-bold">JFrog is here</span>
                </div>
              )}

              {/* Level */}
              <div className="flex items-center gap-3">
                <span
                  className={`flex items-center justify-center w-11 h-11 rounded-xl shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                    lv.jfrog ? "bg-[var(--color-accent)] text-white shadow-md" : "bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                  }`}
                >
                  <Icon size={20} />
                </span>
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-gray-400">Stage {lv.index}</span>
                  <span className="font-display text-lg font-semibold text-[var(--color-ink)]">{lv.name}</span>
                </div>
              </div>

              {/* State */}
              <div>
                <span className="md:hidden font-mono text-[10px] uppercase tracking-widest text-gray-400 block mb-1">What it can do</span>
                <p className="font-sans text-sm text-gray-600 leading-relaxed">{lv.state}</p>
              </div>

              {/* Challenge */}
              <div className="md:border-l-2 md:border-[rgba(47,99,255,0.3)] md:pl-6">
                <span className="md:hidden font-mono text-[10px] uppercase tracking-widest text-[var(--color-accent)] block mb-1">The challenge to solve</span>
                <p className="font-sans text-sm md:text-base text-[var(--color-ink)] font-medium leading-relaxed">{lv.challenge}</p>
              </div>
            </motion.div>
          );
        })}
        </div>
      </div>

      {/* JFrog context line */}
      <p className="mt-6 text-center font-sans text-sm text-gray-500 leading-relaxed">
        <span className="font-semibold text-[var(--color-ink)]">JFrog is already at Stage 3</span> — AI that takes a task and runs it. Most of the world is still stuck at Stage 1. The next three stages are where the real transformation begins.
      </p>
    </div>
  );
}
