import { thoughts } from "../data/content";
import ThoughtCard from "./ThoughtCard";
import useScrollAnimation from "../hooks/useScrollAnimation";

function Thoughts() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="thoughts"
      ref={ref}
      className={`py-20 px-6 max-w-6xl mx-auto transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <h2 className="font-heading text-3xl text-cream mb-12 text-center">
        Thoughts
      </h2>

      {thoughts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {thoughts.map((thought) => (
            <ThoughtCard
              key={thought.id}
              title={thought.title}
              excerpt={thought.excerpt}
              date={thought.date}
              readTime={thought.readTime}
              link={thought.link}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-cream-light">
          No thoughts to display yet. Check back soon!
        </p>
      )}
    </section>
  );
}

export default Thoughts;
