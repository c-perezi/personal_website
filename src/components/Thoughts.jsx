import { thoughts } from "../data/content";
import ThoughtCard from "./ThoughtCard";
import useScrollAnimation from "../hooks/useScrollAnimation";

function Thoughts() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="thoughts"
      ref={ref}
      className={`py-24 px-6 max-w-5xl mx-auto transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <SectionLabel>Reflections</SectionLabel>
      <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text mb-12">
        Thoughts
      </h2>

      {thoughts.length > 0 ? (
        <div className="flex flex-col gap-4">
          {thoughts.map((thought) => (
            <ThoughtCard
              key={thought.id}
              title={thought.title}
              excerpt={thought.excerpt}
              date={thought.date}
              readTime={thought.readTime}
              content={thought.content}
              link={thought.link}
            />
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted text-center py-12">No reflections yet.</p>
      )}
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

export default Thoughts;
