/**
 * Persistent top banner — always visible.
 * Left: AM Consulting logo (links to amconsultingai.com).
 * Right: JFrog logo (the talk's host).
 */
export default function Banner() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-[var(--color-border-subtle)] bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between gap-4">
        {/* AM Consulting — links out */}
        <a
          href="https://www.amconsultingai.com"
          target="_blank"
          rel="noreferrer"
          className="shrink-0 transition-opacity hover:opacity-80"
          aria-label="AM Consulting — amconsultingai.com"
        >
          <img
            src="/img/am-logo.png"
            alt="AM Consulting"
            className="h-7 md:h-8 w-auto object-contain"
          />
        </a>

        {/* In-page navigation */}
        <nav className="hidden md:flex items-center gap-1">
          <a
            href="#abstract"
            className="px-3 py-2 rounded-lg text-[11px] font-mono font-semibold uppercase tracking-widest text-gray-500 hover:text-[var(--color-accent)] hover:bg-blue-50 transition-all"
          >
            Abstract
          </a>
          <a
            href="#climb"
            className="px-3 py-2 rounded-lg text-[11px] font-mono font-semibold uppercase tracking-widest text-gray-500 hover:text-[var(--color-accent)] hover:bg-blue-50 transition-all"
          >
            The 6 Stages
          </a>
          <a
            href="#takeaways"
            className="px-3 py-2 rounded-lg text-[11px] font-mono font-semibold uppercase tracking-widest text-gray-500 hover:text-[var(--color-accent)] hover:bg-blue-50 transition-all"
          >
            Take Action
          </a>
        </nav>

        {/* Host badge */}
        <div className="flex items-center gap-2.5 shrink-0">
          <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-widest text-gray-400">
            For
          </span>
          <span className="flex items-center gap-2">
            <img
              src="/img/jfrog.svg"
              alt="JFrog"
              className="h-6 md:h-7 w-auto object-contain"
            />
            <span className="font-display font-semibold text-[var(--color-ink)] text-base md:text-lg tracking-tight">
              JFrog
            </span>
          </span>
        </div>
      </div>
    </header>
  );
}
