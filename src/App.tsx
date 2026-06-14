import { 
  Map as MapIcon, 
  Compass, 
  Cpu, 
  KeyRound, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  ChevronRight,
  TrendingUp,
  Award
} from "lucide-react";
import ScrollReveal from "./components/ScrollReveal";
import LockedLadder from "./components/LockedLadder";
import ClimbMotif from "./components/ClimbMotif";

export default function App() {
  return (
    <main className="cinematic-bg-light min-h-screen text-[var(--color-ink)] selection:bg-[var(--color-gold-accent)] selection:text-white">
      
      {/* 1. HERO SECTION (#hero) */}
      <section 
        id="hero" 
        className="relative min-h-screen flex flex-col justify-between pt-16 pb-20 px-6 overflow-hidden md:px-12 lg:px-24 border-b border-[var(--color-border-subtle)]"
      >
        <ClimbMotif />
        
        {/* Subtle top banner/tag */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[var(--color-gold-accent)] animate-pulse" />
            <span className="font-mono text-xs tracking-widest uppercase text-gray-500 font-medium">Invited Talk Preview</span>
          </div>
          <span className="font-mono text-xs text-gray-400">Session III</span>
        </div>

        {/* Core display titles */}
        <div className="relative z-10 w-full max-w-5xl mx-auto my-auto py-12 flex flex-col justify-center">
          {/* Spatial concept helper labels mimicking "Autocomplete" (low-left) to "Autonomy" (high-right) */}
          <div className="w-full flex justify-between mb-8 max-w-lg opacity-40 font-mono text-xs select-none pointer-events-none self-center md:self-start">
            <span className="flex items-center gap-1.5 transform translate-y-3">
              <span className="font-mono text-neutral-400">01</span> Autocomplete
            </span>
            <div className="flex-1 border-t border-dashed border-neutral-300 mx-4 self-end" />
            <span className="flex items-center gap-1.5 text-[var(--color-gold-accent)] font-semibold transform -translate-y-3">
              Autonomy <span className="font-mono">06</span>
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[var(--color-ink)] leading-[1.05] max-w-4xl">
            From Autocomplete <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-ink)] via-neutral-800 to-[var(--color-gold-accent)]">
              to Autonomy
            </span>
          </h1>

          <div className="mt-8 md:mt-12 max-w-2xl">
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-gray-700 tracking-tight font-medium leading-relaxed">
              The next level of AI adoption — and how far we've already climbed
            </h3>
            
            <p className="font-sans text-sm md:text-base text-gray-500 font-mono tracking-tight mt-4">
              A trip from where AI is today to where it's heading next.
            </p>
          </div>
        </div>

        {/* Hero bottom indicator */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex justify-between items-center text-gray-400 font-mono text-xs">
          <span>Scroll to explore the climb</span>
          <div className="flex gap-1 h-8 items-center">
            <div className="w-1 h-1 bg-[var(--color-gold-accent)] rounded-full animate-bounce [animation-delay:0.1s]" />
            <div className="w-1 h-1 bg-[var(--color-gold-accent)] rounded-full animate-bounce [animation-delay:0.3s]" />
            <div className="w-1 h-1 bg-[var(--color-gold-accent)] rounded-full animate-bounce [animation-delay:0.5s]" />
          </div>
        </div>
      </section>

      {/* 2. THE TENSION (#tension) */}
      <section 
        id="tension" 
        className="py-32 md:py-48 px-6 bg-white border-b border-[var(--color-border-subtle)] relative"
      >
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-mono text-xs uppercase tracking-widest text-amber-600 font-semibold mb-6">The Current State</p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-[var(--color-ink)] leading-snug">
              Everyone's asking how smart the model is.
            </h2>
            <p className="font-sans text-lg sm:text-xl md:text-2xl text-gray-600 mt-8 max-w-2xl mx-auto leading-relaxed">
              It's the wrong question — and the answer to the right one is far more exciting.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. THE BRIDGE (#bridge) */}
      <section 
        id="bridge" 
        className="py-24 md:py-32 px-6 max-w-5xl mx-auto border-b border-[var(--color-border-subtle)]"
      >
        <ScrollReveal className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-gray-400 font-medium mb-6">Contextualizing the Journey</p>
          
          {/* Aesthetic chips outlining the progress: Skills -> Pipelines -> The Map */}
          <div className="flex flex-wrap items-center gap-2 mb-10">
            <span className="font-mono text-xs py-1.5 px-3 rounded bg-gray-100 text-gray-400 border border-gray-200">
              01. Skills
            </span>
            <ChevronRight size={14} className="text-neutral-300" />
            <span className="font-mono text-xs py-1.5 px-3 rounded bg-gray-100 text-gray-400 border border-gray-200">
              02. Pipelines
            </span>
            <ChevronRight size={14} className="text-neutral-300" />
            <span className="font-mono text-xs py-1.5 px-3 rounded bg-amber-500/10 text-[var(--color-gold-accent)] border border-amber-500/20 font-semibold">
              03. The Map (This Session)
            </span>
          </div>

          <p className="font-sans text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-light">
            You've just seen what we're building.
          </p>
          <p className="font-sans text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-light">
            The sessions before this one showed skills becoming first-class artifacts — packaged, shared, and scanned for trust — and a pipeline that tests and vets them before they ship.
          </p>
          <p className="font-sans text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-light font-medium text-[var(--color-ink)]">
            Now pull the camera back.
          </p>
          <p className="font-sans text-lg md:text-xl text-gray-800 leading-relaxed font-light">
            Because what you just saw isn't the start of the story. <b className="font-semibold text-[var(--color-gold-accent)] font-display">It's one of the hardest steps on a ladder most companies haven't even found.</b>
          </p>
        </ScrollReveal>
      </section>

      {/* 4. THE TRIP (#trip) */}
      <section 
        id="trip" 
        className="py-24 md:py-32 px-6 max-w-5xl mx-auto border-b border-[var(--color-border-subtle)]"
      >
        <ScrollReveal className="max-w-3xl ml-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-amber-600 font-semibold mb-6">The Abstract</p>
          
          <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed font-light">
            <p>
              This talk pulls the camera all the way back.
            </p>
            <p>
              We'll trace the climb from typing prompts to commanding fleets of agents that run, verify, and improve on their own — and lay it out as a single map you can place yourself on.
            </p>
            <p>
              At each level, there's one capability you unlock, and one problem you have to solve to reach the next. And as we climb, something will become clear: the work happening here already lives higher up that mountain than it feels.
            </p>
            
            <p className="font-mono text-sm uppercase text-[var(--color-ink)] font-semibold mt-12 bg-neutral-100 py-3 px-4 inline-block border border-neutral-200 rounded">
              A trip from where AI is now to where it's going next.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* 5. THE CLIMB — INTERACTIVE LADDER (#climb) */}
      <section 
        id="climb" 
        className="py-28 md:py-36 px-6 bg-stone-50 border-b border-[var(--color-border-subtle)] relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-mono text-xs uppercase tracking-widest text-gray-400 font-medium mb-4">Interactive Diagnostic</p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-ink)]">
              Six levels separate “AI as a tool” from “AI that runs the work.”
            </h2>
            <p className="font-sans text-sm sm:text-base text-gray-500 mt-4 max-w-xl mx-auto leading-relaxed">
              Each one gives you a new power — and hands you a single problem to solve.
            </p>
          </div>

          <LockedLadder />
        </div>
      </section>

      {/* 6. WHAT YOU'LL WALK AWAY WITH (#takeaways) */}
      <section 
        id="takeaways" 
        className="py-28 md:py-36 px-6 max-w-6xl mx-auto border-b border-[var(--color-border-subtle)]"
      >
        <div className="mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-amber-600 font-semibold mb-4">Syllabus Highlights</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-ink)]">
            What You'll Walk Away With
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Card 1 */}
          <ScrollReveal delay={0} className="flex gap-4 p-6 rounded-lg bg-white border border-[rgba(11,11,15,0.06)] hover:border-[rgba(224,168,46,0.3)] transition-colors duration-300">
            <div className="p-3 bg-amber-50 rounded-lg text-[var(--color-gold-accent)] shrink-0 h-12 w-12 flex items-center justify-center">
              <MapIcon size={20} />
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg text-[var(--color-ink)] mb-2">
                A map you can locate yourself on
              </h3>
              <p className="font-sans text-sm text-gray-500 leading-relaxed">
                the levels of AI, from first assistant to self-improving organization, with real companies at each rung.
              </p>
            </div>
          </ScrollReveal>

          {/* Card 2 */}
          <ScrollReveal delay={0.1} className="flex gap-4 p-6 rounded-lg bg-white border border-[rgba(11,11,15,0.06)] hover:border-[rgba(224,168,46,0.3)] transition-colors duration-300">
            <div className="p-3 bg-amber-50 rounded-lg text-[var(--color-gold-accent)] shrink-0 h-12 w-12 flex items-center justify-center">
              <Compass size={20} />
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg text-[var(--color-ink)] mb-2">
                The one challenge at every step
              </h3>
              <p className="font-sans text-sm text-gray-500 leading-relaxed">
                context, harness, orchestration, feedback, provenance — so you know which problem is actually yours to solve next.
              </p>
            </div>
          </ScrollReveal>

          {/* Card 3 */}
          <ScrollReveal delay={0.15} className="flex gap-4 p-6 rounded-lg bg-white border border-[rgba(11,11,15,0.06)] hover:border-[rgba(224,168,46,0.3)] transition-colors duration-300">
            <div className="p-3 bg-neutral-50 rounded-lg text-[var(--color-ink)] shrink-0 h-12 w-12 flex items-center justify-center">
              <Cpu size={20} />
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg text-[var(--color-ink)] mb-2">
                Why the model is no longer the moat
              </h3>
              <p className="font-sans text-sm text-gray-500 leading-relaxed">
                and what shifts every remaining advantage to the things you control.
              </p>
            </div>
          </ScrollReveal>

          {/* Card 4 */}
          <ScrollReveal delay={0.2} className="flex gap-4 p-6 rounded-lg bg-white border border-[rgba(11,11,15,0.06)] hover:border-[rgba(224,168,46,0.3)] transition-colors duration-300">
            <div className="p-3 bg-stone-100 rounded-lg text-[var(--color-gold-accent)] shrink-0 h-12 w-12 flex items-center justify-center">
              <KeyRound size={20} />
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg text-[var(--color-ink)] mb-2">
                The two moats that are still yours
              </h3>
              <p className="font-sans text-sm text-gray-500 leading-relaxed">
                and what it costs to turn one into the other.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* 7. THE THESIS — THREE PULL-QUOTES (#thesis) */}
      <section 
        id="thesis" 
        className="py-28 md:py-40 px-6 bg-white border-b border-[var(--color-border-subtle)]"
      >
        <div className="max-w-4xl mx-auto space-y-32">
          
          {/* Thesis item 1 */}
          <ScrollReveal className="relative border-l-4 border-[var(--color-gold-accent)] pl-6 md:pl-10">
            <span className="font-mono text-xs text-amber-500 uppercase tracking-widest font-semibold block mb-4">Thesis One</span>
            <blockquote className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-ink)] leading-snug">
              “Attention was all you needed. Engineering is all that's left.”
            </blockquote>
            <p className="font-sans text-base md:text-lg text-gray-500 mt-6 leading-relaxed font-light">
              The core technology matured years ago. The same architecture has powered every model since 2017. The breakthroughs now aren't in the model — they're in what we build around it.
            </p>
          </ScrollReveal>

          {/* Thesis item 2 */}
          <ScrollReveal className="relative border-l-4 border-[var(--color-gold-accent)] pl-6 md:pl-10">
            <span className="font-mono text-xs text-amber-500 uppercase tracking-widest font-semibold block mb-4">Thesis Two</span>
            <blockquote className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-ink)] leading-snug">
              “Capability is free. Trust is earned.”
            </blockquote>
            <p className="font-sans text-base md:text-lg text-gray-500 mt-6 leading-relaxed font-light">
              The model climbs on its own. Value doesn't. Every level demands a discipline you have to build — and the thread running through all of them is trust.
            </p>
          </ScrollReveal>

          {/* Thesis item 3 */}
          <ScrollReveal className="relative border-l-4 border-[var(--color-gold-accent)] pl-6 md:pl-10">
            <span className="font-mono text-xs text-amber-500 uppercase tracking-widest font-semibold block mb-4">Thesis Three</span>
            <blockquote className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-ink)] leading-snug">
              “Stop renting a model that learned from everyone. Start owning one that learned from you.”
            </blockquote>
            <p className="font-sans text-base md:text-lg text-gray-500 mt-6 leading-relaxed font-light">
              Once the model is a commodity, the only durable edge is the engineering you wrap around it and the data only you have.
            </p>
          </ScrollReveal>

        </div>
      </section>

      {/* 8. THE HOLY GRAIL (#grail) — INVERTED SECTION */}
      <section 
        id="grail" 
        className="cinematic-bg-dark text-white py-36 md:py-48 px-6 relative overflow-hidden"
      >
        <ClimbMotif summitGlow={true} />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 mb-6 py-1 px-3.5 bg-amber-500/10 border border-amber-500/20 rounded-full">
              <Sparkles size={14} className="text-[var(--color-gold-accent)]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-gold-accent)] font-semibold">The Destination</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-tight max-w-3xl mx-auto">
              There's a place at the top of this climb that <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">every serious team</span> is now racing toward.
            </h2>

            <div className="mt-10 max-w-2xl mx-auto text-stone-300 text-lg sm:text-xl font-light leading-relaxed space-y-6">
              <p>
                Not a smarter model — a <span className="text-white italic">system</span>. Agents that wake up, do the work, and get smarter overnight. Software that compounds, learning from context and data no one else has.
              </p>
              
              <p className="text-white font-semibold font-display text-xl sm:text-2xl pt-6 border-t border-neutral-800 tracking-tight">
                The holy grail isn't a smarter model. It's a system that climbs while you sleep.
              </p>
              
              <p className="font-mono text-sm text-gray-500 pt-4">
                We'll end exactly there.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 9. ABOUT THE SPEAKER (#speaker) */}
      <section 
        id="speaker" 
        className="py-24 md:py-32 px-6 max-w-5xl mx-auto border-b border-[var(--color-border-subtle)]"
      >
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          
          {/* Speaker representation with elegant abstract portrait skeleton */}
          <div className="w-48 h-48 rounded-full border border-dashed border-amber-400/40 relative flex items-center justify-center p-4 bg-amber-50/20 shrink-0">
            <div className="absolute inset-2 rounded-full border border-amber-400/20 animate-spin [animation-duration:20s]" />
            <div className="w-36 h-36 rounded-full bg-gradient-to-tr from-amber-500/20 to-stone-500/5 border border-amber-400/10 flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 opacity-60 text-stone-600">
                <path d="M50 45 C57 45, 62 40, 62 32 C62 24, 57 19, 50 19 C43 19, 38 24, 38 32 C38 40, 43 45, 50 45 Z" fill="currentColor" />
                <path d="M50 50 C32 50, 20 62, 20 78 L80 78 C80 62, 68 50, 50 50 Z" fill="currentColor" />
              </svg>
            </div>
            <Award className="absolute bottom-2 right-2 text-[var(--color-gold-accent)]" size={18} />
          </div>

          <ScrollReveal className="flex-1">
            <p className="font-mono text-xs uppercase tracking-widest text-amber-600 font-semibold mb-4">The Presenter</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-6">
              About the Speaker
            </h2>
            <div className="font-sans text-gray-600 leading-relaxed text-base space-y-4 font-light">
              <p>
                An AI strategist and consultant who works with engineering organizations on what it actually takes to move from using AI to compounding with it — turning frontier capability into real, durable value.
              </p>
              <p className="italic text-gray-500 text-sm">
                As a long-term advisor to frontier engineering teams, they help translate algorithmic developments into highly cohesive corporate architectures, bridging systems design with organizational goals.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* 10. WHERE IT FITS (#agenda) */}
      <section 
        id="agenda" 
        className="py-24 md:py-32 px-6 bg-stone-50/60 border-b border-[var(--color-border-subtle)]"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-mono text-xs uppercase tracking-widest text-gray-400 font-medium mb-4">Agenda Continuum</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-ink)]">
              Where It Fits
            </h2>
          </div>

          {/* Timeline of three sessions */}
          <div className="relative border-l border-gray-200 ml-4 md:ml-32 md:pl-16 space-y-12">
            
            {/* Session 1 */}
            <div className="relative pl-6">
              <div className="absolute -left-[6px] top-1.5 w-3 h-3 rounded-full bg-gray-300" />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <span className="font-mono text-xs font-semibold text-gray-400 uppercase tracking-widest">Session I &bull; Complete</span>
                <span className="text-xs text-gray-400 font-mono">Earlier Today</span>
              </div>
              <h3 className="font-display font-medium text-gray-400 text-base mt-2">
                First-Class Skills Integration
              </h3>
              <p className="text-xs text-gray-400 font-sans mt-1">
                Deep dive into building reliable atomic units of AI execution, scanned for enterprise security standards.
              </p>
            </div>

            {/* Session 2 */}
            <div className="relative pl-6">
              <div className="absolute -left-[6px] top-1.5 w-3 h-3 rounded-full bg-gray-300" />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <span className="font-mono text-xs font-semibold text-gray-400 uppercase tracking-widest">Session II &bull; Complete</span>
                <span className="text-xs text-gray-400 font-mono">Earlier Today</span>
              </div>
              <h3 className="font-display font-medium text-gray-400 text-base mt-2">
                Unified Validation & Deployment Pipelines
              </h3>
              <p className="text-xs text-gray-400 font-sans mt-1">
                How atomic skills are tested, versioned, vetted, and validated incrementally before moving to production runtimes.
              </p>
            </div>

            {/* Session 3 — Highlighted */}
            <div className="relative pl-6 border-l-2 border-[var(--color-gold-accent)] -ml-[1px]">
              <div className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-[var(--color-gold-accent)] ring-4 ring-amber-400/20" />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <span className="font-mono text-xs font-bold text-[var(--color-gold-accent)] uppercase tracking-widest flex items-center gap-1.5">
                  Session III &bull; Closing Keynote <span className="inline-block px-1.5 py-0.5 rounded text-[10px] bg-amber-500/10 text-[var(--color-gold-accent)]">Live Now</span>
                </span>
                <span className="text-xs text-amber-600 font-mono font-medium flex items-center gap-1">
                  <Clock size={12} /> ~40 minutes
                </span>
              </div>
              <h3 className="font-display font-semibold text-[var(--color-ink)] text-lg mt-2">
                From Autocomplete to Autonomy
              </h3>
              <p className="text-sm font-sans text-gray-600 mt-2 font-light">
                The third and final session of the set. The first two showed what we're shipping today. This one places that work on the bigger map — and looks down the road it was built for.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 11. CLOSE (#close) */}
      <section 
        id="close" 
        className="py-32 md:py-48 px-6 bg-white relative overflow-hidden"
      >
        {/* Faint, fading ClimbMotif as climb reaches the apex */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <ClimbMotif />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-mono text-xs uppercase tracking-widest text-gray-400 font-medium mb-6">In Closing</p>
            
            <p className="font-sans text-lg sm:text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-light mb-8">
              The model keeps climbing whether we do or not.
            </p>
            
            <p className="font-sans text-lg sm:text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-light mb-16">
              This is a chance to see how far we already have — and what the next ascent looks like.
            </p>

            <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-16" />

            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-[var(--color-ink)] leading-snug max-w-2xl mx-auto">
              You may be further ahead than you think. <br />
              <span className="text-[var(--color-gold-accent)] font-display italic">And the most exciting climb is the one still in front of you.</span>
            </h2>
          </ScrollReveal>
        </div>
      </section>

    </main>
  );
}
