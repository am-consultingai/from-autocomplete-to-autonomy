import {
  Compass,
  Sparkles,
  ChevronRight,
  Award,
  Quote,
  Bot,
  RefreshCw,
  ShieldCheck,
  Database
} from "lucide-react";
import { motion } from "motion/react";
import ScrollReveal from "./components/ScrollReveal";
import LevelsTable from "./components/LevelsTable";
import ClimbMotif from "./components/ClimbMotif";
import Banner from "./components/Banner";

// Every section shares this content width so their left/right edges line up.
const CONTAINER = "max-w-6xl mx-auto";

export default function App() {
  return (
    <main className="cinematic-bg-light min-h-screen text-[var(--color-ink)] selection:bg-[var(--color-accent)] selection:text-white">

      <Banner />

      {/* 1. HERO (#hero) */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-between pt-24 pb-16 px-6 overflow-hidden border-b border-[var(--color-border-subtle)]"
      >
        {/* Background: speaker on stage (full-bleed) */}
        <div className="absolute inset-0 z-0">
          <img
            src="/img/avishay-stage.jpeg"
            alt="Avishay Meron speaking on stage"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-warm-beige)] via-[var(--color-warm-beige)]/90 to-[var(--color-warm-beige)]/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-warm-beige)] via-[var(--color-warm-beige)]/25 to-[var(--color-warm-beige)]/75" />
        </div>

        {/* Top tag row */}
        <div className={`relative z-10 w-full ${CONTAINER} flex justify-between items-center`}>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
            <span className="font-mono text-xs tracking-widest uppercase text-gray-500 font-medium">Invited Talk Preview</span>
          </div>
          <span className="font-mono text-xs text-gray-400">Session III</span>
        </div>

        {/* Titles */}
        <div className={`relative z-10 w-full ${CONTAINER} my-auto py-8`}>
          <div className="w-full flex justify-between mb-8 max-w-lg opacity-50 font-mono text-xs select-none pointer-events-none">
            <span className="flex items-center gap-1.5 transform translate-y-3">
              <span className="font-mono text-neutral-400">01</span> Autocomplete
            </span>
            <div className="flex-1 border-t border-dashed border-neutral-300 mx-4 self-end" />
            <span className="flex items-center gap-1.5 text-[var(--color-accent)] font-semibold transform -translate-y-3">
              Autonomy <span className="font-mono">06</span>
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[var(--color-ink)] leading-[1.05] max-w-4xl">
            From Autocomplete <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-ink)] via-blue-700 to-[var(--color-accent)]">
              to Autonomy
            </span>
          </h1>

          <div className="mt-8 max-w-2xl">
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-gray-700 tracking-tight font-medium leading-relaxed">
              AI is learning to do the work of entire teams. There are six stages to get there — and most of us don't know which one we're standing on.
            </h3>
            <p className="font-sans text-sm md:text-base text-gray-600 font-mono tracking-tight mt-4">
              Find your stage. Name what's blocking you. Leave knowing your next move.
            </p>
          </div>
        </div>

        {/* Bottom indicator */}
        <div className={`relative z-10 w-full ${CONTAINER} flex justify-between items-center text-gray-400 font-mono text-xs`}>
          <span>Scroll to find your stage</span>
          <div className="flex gap-1 h-8 items-center">
            <div className="w-1 h-1 bg-[var(--color-accent)] rounded-full animate-bounce [animation-delay:0.1s]" />
            <div className="w-1 h-1 bg-[var(--color-accent)] rounded-full animate-bounce [animation-delay:0.3s]" />
            <div className="w-1 h-1 bg-[var(--color-accent)] rounded-full animate-bounce [animation-delay:0.5s]" />
          </div>
        </div>
      </section>

      {/* 2. THE ABSTRACT (#abstract) */}
      <section id="abstract" className="py-10 md:py-14 px-6 border-b border-[var(--color-border-subtle)]">
        <div className={`${CONTAINER} grid lg:grid-cols-2 gap-10 lg:gap-16 items-center`}>
          <ScrollReveal>
            <p className="font-mono text-xs uppercase tracking-widest text-blue-600 font-semibold mb-5">For Everyone In This Room</p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-ink)] leading-snug mb-6">
              What happens when AI stops helping you work — and starts doing the work?
            </h2>
            <div className="space-y-5 text-gray-700 text-base md:text-lg leading-relaxed font-light">
              <p>
                It's already happening — and not just in engineering. AI is drafting the financial analysis, screening the candidates, shaping the product, and shipping the code. It gets there in six stages: from a tool that finishes your sentences to a system that runs entire workflows while you sleep.
              </p>
              <p>
                Most teams are stuck — not because their AI isn't smart enough, but because they have no idea which stage they're on, or what's standing between them and the next. This talk hands you the map: every stage, the one thing blocking you, where JFrog already stands, and the moves that get you to the top.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-blue-900/10 ring-1 ring-[var(--color-border-subtle)]">
              <img
                src="/img/abstract-agents.jpg"
                alt="Autonomous AI agents working in parallel"
                className="w-full h-full object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/40 to-transparent" />
              {/* Dynamic floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/95 backdrop-blur rounded-full pl-2.5 pr-3.5 py-1.5 shadow-lg ring-1 ring-[var(--color-border-subtle)]"
              >
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[var(--color-accent)] text-white">
                  <Bot size={14} />
                </span>
                <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-ink)] font-semibold">
                  Autonomous agents at work
                </span>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. THE BRIDGE (#bridge) */}
      <section id="bridge" className="py-10 md:py-14 px-6 border-b border-[var(--color-border-subtle)]">
        <div className={CONTAINER}>
          <ScrollReveal className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-widest text-gray-400 font-medium mb-5">Where We Are</p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-ink)] leading-snug mb-8">
              Engineering just showed you the machinery. So how far up the curve is JFrog — really?
            </h2>

            <div className="flex flex-wrap items-center gap-2 mb-8">
              <span className="font-mono text-xs py-1.5 px-3 rounded bg-gray-100 text-gray-400 border border-gray-200">01. Skills</span>
              <ChevronRight size={14} className="text-neutral-300" />
              <span className="font-mono text-xs py-1.5 px-3 rounded bg-gray-100 text-gray-400 border border-gray-200">02. Pipelines</span>
              <ChevronRight size={14} className="text-neutral-300" />
              <span className="font-mono text-xs py-1.5 px-3 rounded bg-blue-500/10 text-[var(--color-accent)] border border-blue-500/20 font-semibold">03. The Map (This Session)</span>
            </div>

            <p className="font-sans text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-light">
              The last two sessions went deep into engineering: skills packaged and scanned, pipelines that test and vet them. Impressive — and easy to miss what it actually means for the rest of us.
            </p>
            <p className="font-sans text-lg md:text-xl leading-relaxed mb-6 font-medium text-[var(--color-ink)]">
              It means JFrog has AI that doesn't just answer — it acts.
            </p>
            <p className="font-sans text-lg md:text-xl text-gray-800 leading-relaxed font-light">
              That puts us at <b className="font-semibold text-[var(--color-accent)] font-display">Stage 3 of 6</b> — further than almost any company on Earth. And the thrilling part is what the next three stages unlock: for finance, for HR, for product, for every one of us.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. THE MAP (#climb) */}
      <section id="climb" className="py-10 md:py-14 px-6 bg-slate-50 border-b border-[var(--color-border-subtle)] relative overflow-hidden">
        <div className={CONTAINER}>
          <div className="text-center mb-8">
            <p className="font-mono text-xs uppercase tracking-widest text-gray-400 font-medium mb-4">The Map</p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-ink)]">
              Six stages — from “AI helps me” to “AI runs it.”
            </h2>
            <p className="font-sans text-sm sm:text-base text-gray-500 mt-4 max-w-xl mx-auto leading-relaxed">
              Each stage hands you a new superpower — and one problem you have to crack before you unlock the next.
            </p>
          </div>

          <LevelsTable />

          {/* Citations */}
          <div className="mt-12">
            <p className="font-mono text-xs uppercase tracking-widest text-gray-400 font-medium mb-8 text-center">
              Why the climb — not the model — is the story
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <ScrollReveal className="relative bg-white rounded-xl p-6 md:p-7 border border-[rgba(11,30,58,0.08)] shadow-sm">
                <Quote size={22} className="text-[var(--color-accent)] mb-4" />
                <blockquote className="font-display text-lg md:text-xl text-[var(--color-ink)] leading-snug font-medium">
                  “AI agentic workflows will drive massive AI progress this year — perhaps even more than the next generation of foundation models.”
                </blockquote>
                <footer className="mt-4 font-mono text-xs text-gray-500">
                  <span className="text-[var(--color-ink)] font-semibold">Andrew Ng</span> · Founder, DeepLearning.AI · Stanford
                </footer>
              </ScrollReveal>

              <ScrollReveal delay={0.1} className="relative bg-white rounded-xl p-6 md:p-7 border border-[rgba(11,30,58,0.08)] shadow-sm">
                <Quote size={22} className="text-[var(--color-accent)] mb-4" />
                <blockquote className="font-display text-lg md:text-xl text-[var(--color-ink)] leading-snug font-medium">
                  “We are not going to get to human-level AI by just scaling up LLMs.”
                </blockquote>
                <footer className="mt-4 font-mono text-xs text-gray-500">
                  <span className="text-[var(--color-ink)] font-semibold">Yann LeCun</span> · Chief AI Scientist, Meta · Turing Award
                </footer>
              </ScrollReveal>
            </div>
            <p className="font-sans text-sm text-gray-500 italic text-center mt-8 max-w-2xl mx-auto leading-relaxed">
              The frontier agrees: the next leap isn't a bigger model — it's the engineering and judgment you build around it. That's the climb.
            </p>
          </div>
        </div>
      </section>

      {/* 5. YOUR NEXT MOVE (#takeaways) */}
      <section id="takeaways" className="py-10 md:py-14 px-6 border-b border-[var(--color-border-subtle)]">
        <div className={CONTAINER}>
          <div className="mb-8 max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-widest text-blue-600 font-semibold mb-4">Your Next Move</p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-ink)] mb-3">
              So what do you do Monday morning?
            </h2>
            <p className="font-sans text-base text-gray-500 leading-relaxed font-light">
              Four moves anyone can start — whatever team you're on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
            {[
              { Icon: Compass, title: "Find your real stage", body: "Pick one thing your team does every week and map it to the six stages — honestly. Most of us overestimate by a stage. You can't move up until you know where you stand." },
              { Icon: RefreshCw, title: "Stop throwing away gold", body: "Every chat you have with AI is gold you delete the second you close the tab. Save what works: turn one repeated task into a reusable recipe your whole team can run tomorrow." },
              { Icon: ShieldCheck, title: "Put one task on autopilot — with a safety net", body: "Pick one repetitive job and let AI own it end to end, with one simple check it must pass before anything ships. That's the leap from 'AI helps me' to 'AI does it.'" },
              { Icon: Database, title: "Find the data only you have", body: "Everyone rents the same AI. Your edge is the information only your company holds. Name one dataset you're sitting on — then imagine what an AI that learned from it could do." },
            ].map((card, i) => (
              <ScrollReveal
                key={card.title}
                delay={i * 0.08}
                className="group relative flex gap-4 p-6 rounded-xl bg-white border border-[rgba(11,30,58,0.06)] hover:border-[rgba(47,99,255,0.35)] hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300"
              >
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <div className="p-3 bg-blue-50 rounded-lg text-[var(--color-accent)] h-12 w-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    <card.Icon size={20} />
                  </div>
                  <span className="font-mono text-[11px] font-bold text-[var(--color-accent)]">0{i + 1}</span>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-[var(--color-ink)] mb-2 leading-snug">{card.title}</h3>
                  <p className="font-sans text-sm text-gray-500 leading-relaxed">{card.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. THE THESIS (#thesis) */}
      <section id="thesis" className="py-10 md:py-14 px-6 bg-white border-b border-[var(--color-border-subtle)]">
        <div className={`${CONTAINER} space-y-10 md:space-y-14`}>
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-widest text-blue-600 font-semibold mb-4">The Thesis</p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-ink)] leading-snug">
              Everyone has the same AI. So why will some teams pull ahead — and others disappear?
            </h2>
          </div>
          {[
            { tag: "Thesis One", quote: "“The AI is no longer the hard part.”", body: "The breakthrough happened years ago — and the same powerful models are now one click away for everyone on Earth. Owning a smarter model isn't an advantage anymore. It's the price of entry." },
            { tag: "Thesis Two", quote: "“Capability is free. Trust is everything.”", body: "The model will do almost anything. Whether you can trust it — to be right, to be safe, to be yours — is the only thing that separates a flashy demo from a real business." },
            { tag: "Thesis Three", quote: "“Stop renting an AI that learned from everyone. Start building one that learns from you.”", body: "Your data — your customers, your history, your way of working — is the one thing no competitor can buy. That is your real edge, and it's sitting unused right now." },
          ].map((t) => (
            <ScrollReveal key={t.tag} className="relative border-l-4 border-[var(--color-accent)] pl-6 md:pl-10 max-w-4xl">
              <span className="font-mono text-xs text-blue-500 uppercase tracking-widest font-semibold block mb-4">{t.tag}</span>
              <blockquote className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-ink)] leading-snug">
                {t.quote}
              </blockquote>
              <p className="font-sans text-base md:text-lg text-gray-500 mt-6 leading-relaxed font-light">{t.body}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 7. THE HOLY GRAIL (#grail) — INVERTED */}
      <section id="grail" className="cinematic-bg-dark text-white py-10 md:py-14 px-6 relative overflow-hidden">
        <ClimbMotif summitGlow={true} />
        <div className={`relative z-10 ${CONTAINER} text-center`}>
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 mb-6 py-1 px-3.5 bg-blue-500/10 border border-blue-500/20 rounded-full">
              <Sparkles size={14} className="text-[var(--color-accent)] animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold">Stage 6</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-tight max-w-3xl mx-auto">
              What does the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">final stage</span> actually look like?
            </h2>

            <div className="mt-10 max-w-2xl mx-auto text-slate-300 text-lg sm:text-xl font-light leading-relaxed space-y-6">
              <p>
                A company that gets better while everyone's asleep. AI that runs the work, learns from how it went, and sharpens itself overnight — on data and know-how no competitor can buy.
              </p>
              <p className="text-white font-semibold font-display text-xl sm:text-2xl pt-6 border-t border-slate-800 tracking-tight">
                It isn't a smarter model. It's a business that compounds — getting sharper every single day on what only you know.
              </p>
              <p className="font-mono text-sm text-gray-500 pt-4">That's Stage 6. And it's closer than you think.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 8. ABOUT THE AUTHOR (#speaker) */}
      <section id="speaker" className="py-10 md:py-14 px-6 border-b border-[var(--color-border-subtle)]">
        <div className={`${CONTAINER} flex flex-col md:flex-row items-center gap-12 md:gap-16`}>
          <div className="relative shrink-0">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden ring-1 ring-[var(--color-border-subtle)] shadow-xl shadow-blue-900/10">
              <img src="/img/avishay-portrait.png" alt="Avishay Meron" className="w-full h-full object-cover object-top" />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-[var(--color-accent)] text-white rounded-xl px-3 py-2 shadow-lg flex items-center gap-1.5">
              <Award size={16} />
              <span className="font-mono text-[10px] uppercase tracking-widest font-semibold">10+ AI patents</span>
            </div>
          </div>

          <ScrollReveal className="flex-1">
            <p className="font-mono text-xs uppercase tracking-widest text-blue-600 font-semibold mb-4">The Speaker</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-3">Who's presenting — and why listen?</h2>
            <p className="font-display text-xl md:text-2xl font-semibold text-[var(--color-ink)] leading-tight">Avishay Meron</p>
            <p className="font-display text-base md:text-lg text-[var(--color-accent)] font-medium mb-6">CEO &amp; Founder, AM Consulting</p>
            <div className="font-sans text-gray-600 leading-relaxed text-base space-y-4 font-light">
              <p>
                Avishay Meron has been “taming” artificial intelligence for over a decade, bringing rich and unique experience to the forefront of technology. As CEO and Founder of AM Consulting, he guides organizations through the adoption and implementation of AI solutions.
              </p>
              <p>
                With over 10 patents in the field of AI, he specializes in making complex AI concepts accessible to any audience — transforming technology into a practical, everyday work partner.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 9. CLOSE (#close) */}
      <section id="close" className="py-10 md:py-14 px-6 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <ClimbMotif />
        </div>
        <div className={`relative z-10 ${CONTAINER} text-center`}>
          <ScrollReveal>
            <p className="font-mono text-xs uppercase tracking-widest text-gray-400 font-medium mb-6">In Closing</p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-ink)] leading-snug max-w-2xl mx-auto mb-8">
              So — where does that leave you?
            </h2>
            <p className="font-sans text-lg sm:text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-light mb-8">
              You walked in thinking this was a story about smarter software. It's the biggest shift in how work gets done in our lifetimes — and you're holding the map: your stage, what's blocking you, and four moves to start Monday.
            </p>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-8" />
            <p className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-ink)] leading-snug max-w-2xl mx-auto">
              JFrog is further ahead than you think —{" "}
              <span className="text-[var(--color-accent)] font-display italic">and the next move is yours to make.</span>
            </p>
          </ScrollReveal>
        </div>
      </section>

    </main>
  );
}
