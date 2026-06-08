import { skills } from "../data/content";
import useScrollAnimation from "../hooks/useScrollAnimation";

function Skills() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-24 px-6 bg-subtle transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Toolkit</SectionLabel>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((group) => (
            <div key={group.category}>
              <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-3 font-mono">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-2.5 py-1 rounded-md border border-border bg-surface text-text"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
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

export default Skills;
