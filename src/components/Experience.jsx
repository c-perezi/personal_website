import { experience } from "../data/content";
import ExperienceCard from "./ExperienceCard";
import useScrollAnimation from "../hooks/useScrollAnimation";

function Experience() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="experience"
      ref={ref}
      className={`py-20 px-6 max-w-6xl mx-auto transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <h2 className="font-heading text-3xl text-cream mb-12 text-center">
        Experience
      </h2>

      {experience.length > 0 ? (
        <div className="relative">
          {/* Vertical timeline line - visible on desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-orange/30 -translate-x-1/2" />

          <div className="flex flex-col gap-10 lg:gap-12">
            {experience.map((entry, index) => (
              <div
                key={entry.id}
                className={`relative lg:flex lg:items-start lg:gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline dot - visible on desktop */}
                <div className="hidden lg:block absolute left-1/2 top-6 w-3 h-3 rounded-full bg-orange -translate-x-1/2 z-10" />

                {/* Card container */}
                <div className="lg:w-1/2">
                  <ExperienceCard
                    company={entry.company}
                    role={entry.role}
                    period={entry.period}
                    description={entry.description}
                    technologies={entry.technologies}
                  />
                </div>

                {/* Spacer for the other side */}
                <div className="hidden lg:block lg:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-cream-light">
          No experience entries to display yet. Check back soon!
        </p>
      )}
    </section>
  );
}

export default Experience;
