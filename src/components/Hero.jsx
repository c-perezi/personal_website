import { useCallback } from "react";
import { hero } from "../data/content";

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
      className="min-h-screen flex items-center justify-center px-4 pt-16"
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
    </section>
  );
}

export default Hero;
