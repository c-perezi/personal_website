import { useCallback } from "react";
import { hero } from "../data/content";
import PixelDino from "./PixelDino";

function Hero() {
  const handleCTAClick = useCallback((e) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 pt-16 overflow-hidden"
    >
      <div className="max-w-3xl text-center">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-cream mb-4">
          <span className="relative inline-block">
            {hero.name}
            <span
              className="absolute left-0 bottom-0 h-1 bg-gold animate-underline-sweep"
              aria-hidden="true"
            />
          </span>
        </h1>

        <p className="font-heading text-lg sm:text-xl text-cream-light mb-4">
          {hero.title}
        </p>

        <p className="font-body text-base sm:text-lg text-cream leading-relaxed mb-8 max-w-2xl mx-auto">
          {hero.intro}
        </p>

        <a
          href="#contact"
          onClick={handleCTAClick}
          className="inline-block px-8 py-3 bg-red text-cream font-heading font-semibold rounded-lg transition-colors duration-200 hover:bg-orange focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy"
        >
          {hero.ctaText}
        </a>
      </div>

      {/* Pixelated dino herd walking across the bottom */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Lead dino — large green, bottom */}
        <div className="absolute bottom-6 left-0">
          <PixelDino color="#4ade80" pixel={4} duration={9} delay={0} />
        </div>
        {/* Orange dino — mid-size, slightly higher, faster */}
        <div className="absolute bottom-14 left-0">
          <PixelDino color="#F77F00" pixel={3} duration={7} delay={2} />
        </div>
        {/* Gold dino — small, higher up, staggered */}
        <div className="absolute bottom-24 left-0">
          <PixelDino color="#FCBF49" pixel={2} duration={11} delay={5} frameSpeed={280} />
        </div>
        {/* Red dino — going the other way */}
        <div className="absolute bottom-10 left-0">
          <PixelDino color="#D62828" pixel={3} duration={10} delay={3} reverse />
        </div>
        {/* Tiny cream dino — high up, slow */}
        <div className="absolute bottom-32 left-0">
          <PixelDino color="#EAE2B7" eyeColor="#003049" pixel={2} duration={13} delay={7} frameSpeed={400} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
