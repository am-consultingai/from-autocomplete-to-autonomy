import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Lock, Sparkles } from "lucide-react";
import { LadderRung } from "../types";

const RUNGS_DATA: LadderRung[] = [
  {
    index: 6,
    label: "Compounding",
    teaser: "do you know where everything came from?",
    locked: true,
  },
  {
    index: 5,
    label: "Autonomy",
    teaser: "can it learn — unwatched?",
    locked: true,
  },
  {
    index: 4,
    label: "Orchestrate",
    teaser: "can many move as one?",
    locked: true,
  },
  {
    index: 3,
    label: "Delegate",
    teaser: "can it check its own work?",
    locked: true,
  },
  {
    index: 2,
    label: "Generate",
    teaser: "does it know your world?",
    locked: true,
  },
  {
    index: 1,
    label: "Assist",
    teaser: "can you trust one answer?",
    locked: true,
  },
];

export default function LockedLadder() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const activeIndex = hoveredIndex !== null ? hoveredIndex : focusedIndex;

  return (
    <div id="locked-ladder-container" className="relative w-full max-w-3xl mx-auto py-12 px-4 md:px-0">
      {/* Visual Climb Guide Line running behind the staircase */}
      <div className="absolute top-8 left-1/2 bottom-8 w-px bg-radial from-[var(--color-gold-accent)] to-transparent opacity-20 pointer-events-none hidden md:block" />

      {/* Decorative vertical connection line on the left side of the list */}
      <div className="absolute left-[34px] top-12 bottom-12 w-0.5 bg-gradient-to-b from-[var(--color-gold-accent)] via-[rgba(11,11,15,0.06)] to-[rgba(11,11,15,0.04)] pointer-events-none md:left-[42px]" />

      <div className="flex flex-col gap-5 relative z-10">
        {RUNGS_DATA.map((rung) => {
          const isSelected = activeIndex === rung.index;
          
          // Stepped indentation to create an ascending right-to-left or left-to-right look as we climb
          // Rung 1 (bottom) has 0 indent, climbing up to Rung 6 which has the most indent on desktop
          const stepPercent = (rung.index - 1) * 8; // Steps up and right: index 1 -> 0%, 6 -> 40%
          
          return (
            <div
              key={rung.index}
              id={`ladder-rung-${rung.index}`}
              style={{
                marginLeft: `${stepPercent}%`,
              }}
              className="transition-all duration-300 ease-out w-full max-w-xl md:max-w-2xl"
            >
              <div
                role="button"
                tabIndex={0}
                aria-label={`Rung ${rung.index}: ${rung.label}. ${rung.teaser}. Locked — revealed during the talk.`}
                onMouseEnter={() => setHoveredIndex(rung.index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onFocus={() => setFocusedIndex(rung.index)}
                onBlur={() => setFocusedIndex(null)}
                onClick={() => {
                  // Tactile trigger for mobile tapping
                  setHoveredIndex(rung.index);
                  setTimeout(() => setHoveredIndex(null), 1800);
                }}
                className={`group relative flex items-center gap-4 p-4 md:p-5 rounded-lg border text-left cursor-pointer transition-all duration-300 md:group-hover:-translate-y-0.5 ${
                  isSelected
                    ? "border-[var(--color-gold-accent)] bg-white shadow-md shadow-amber-500/5"
                    : "border-[rgba(11,11,15,0.08)] bg-white/70 hover:border-[rgba(11,11,15,0.2)] md:hover:bg-white"
                }`}
              >
                {/* Rung Number Circle with climbing timeline visual */}
                <div
                  className={`flex items-center justify-center w-9 h-9 rounded-full text-sm font-mono font-semibold transition-all duration-300 shrink-0 ${
                    isSelected
                      ? "bg-[var(--color-gold-accent)] text-white"
                      : "bg-[rgba(11,11,15,0.05)] text-[var(--color-ink)]"
                  }`}
                >
                  {rung.index}
                </div>

                {/* Info and Teaser Question */}
                <div className="flex-1 min-w-0 pr-8">
                  <span className="font-display block text-base md:text-lg font-medium text-[var(--color-ink)] leading-tight">
                    {rung.label}
                  </span>
                  <span className="font-mono text-xs md:text-sm text-gray-500 block mt-1 tracking-tight italic">
                    “{rung.teaser}”
                  </span>
                </div>

                {/* Immutable Lock Icon representing the talk restriction */}
                <div className="relative shrink-0 flex items-center justify-center">
                  <Lock
                    size={16}
                    className={`transition-colors duration-300 ${
                      isSelected ? "text-[var(--color-gold-accent)] scale-110" : "text-gray-300 group-hover:text-amber-600"
                    }`}
                  />
                  
                  {/* Floating Tooltip saying "Revealed live" inside the rung */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 5 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-7 py-1 px-2 bg-[var(--color-ink)] text-white text-[10px] uppercase tracking-widest font-mono rounded pointer-events-none whitespace-nowrap flex items-center gap-1 shadow-md border border-neutral-800"
                      >
                        <Sparkles size={8} className="text-[var(--color-gold-accent)] animate-pulse" />
                        Revealed live
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Subtle bottom active bar indicator */}
                {isSelected && (
                  <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-amber-500 to-[var(--color-gold-accent)]" />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Required caption verbatim below the ladder */}
      <div id="locked-ladder-caption" className="mt-8 text-center px-4">
        <p className="font-sans text-sm md:text-base italic text-gray-600 max-w-xl mx-auto leading-relaxed">
          Which rung are you on? The answer — and the one problem standing between you and the next — revealed live.
        </p>
      </div>
    </div>
  );
}
