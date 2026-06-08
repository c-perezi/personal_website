import { useCallback } from "react";
import { hero } from "../data/content";
import PixelDino from "./PixelDino";

function Hero() {
  const handleCTAClick = useCallback((e) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-14 overflow-hidden bg-bg"
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#111827 1px, transparent 1px), linear-gradient(90deg, #111827 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-3xl text-center">
        {/* Course badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-xs text-muted font-mono mb-8 tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
          ICOM 5015 · Programming Portfolio
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-text tracking-tight mb-4 leading-[1.1]">
          <span className="relative inline-block">
            {hero.name}
            <span
              className="absolute left-0 -bottom-1 h-[3px] bg-accent animate-underline-sweep rounded-full"
              aria-hidden="true"
            />
          </span>
        </h1>

        <p className="font-heading text-base sm:text-lg text-muted font-medium mb-4 tracking-wide">
          {hero.title}
        </p>

        <p className="font-body text-sm sm:text-base text-muted leading-relaxed mb-10 max-w-xl mx-auto">
          {hero.intro}
        </p>

        <a
          href="#contact"
          onClick={handleCTAClick}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-white text-sm font-medium font-heading transition-colors duration-150 hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        >
          {hero.ctaText}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>

      {/* Dino herd — adapted to light palette */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-6 left-0">
          <PixelDino color="#4F46E5" pixel={4} duration={9} delay={0} />
        </div>
        <div className="absolute bottom-14 left-0">
          <PixelDino color="#6366F1" pixel={3} duration={7} delay={2} />
        </div>
        <div className="absolute bottom-24 left-0">
          <PixelDino color="#A5B4FC" pixel={2} duration={11} delay={5} frameSpeed={280} />
        </div>
        <div className="absolute bottom-10 left-0">
          <PixelDino color="#C7D2FE" eyeColor="#4F46E5" pixel={3} duration={10} delay={3} reverse />
        </div>
        <div className="absolute bottom-32 left-0">
          <PixelDino color="#E0E7FF" eyeColor="#4F46E5" pixel={2} duration={13} delay={7} frameSpeed={400} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
