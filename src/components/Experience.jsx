import { experience } from "../data/content";
import ExperienceCard from "./ExperienceCard";
import useScrollAnimation from "../hooks/useScrollAnimation";

function Experience() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="experience"
      ref={ref}
      className={`py-24 px-6 bg-subtle transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Background</SectionLabel>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text mb-12">
          Experience
        </h2>

        {experience.length > 0 ? (
          <div className="relative">
            {/* Vertical timeline spine */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

            <div className="flex flex-col gap-8 lg:gap-10">
              {experience.map((entry, index) => (
                <div
                  key={entry.id}
                  className={`relative lg:flex lg:items-start lg:gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="hidden lg:flex absolute left-1/2 top-6 -translate-x-1/2 z-10 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-subtle" />

                  <div className="lg:w-1/2">
                    <ExperienceCard
                      company={entry.company}
                      role={entry.role}
                      period={entry.period}
                      description={entry.description}
                      technologies={entry.technologies}
                    />
                  </div>
                  <div className="hidden lg:block lg:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-sm text-muted text-center py-12">No entries yet.</p>
        )}
      </div>
    </section>
  );
}

function SectionLabel({ children }) {
  return (
    <p className="text-xs font-semibold text-accent uppercase tracking-widest font-mono mb-2">
      {children}
    </p>
  );
}

export default Experience;
