import { useState } from "react";
import { projects } from "../data/content";
import filterProjects from "../utils/filterProjects";
import ProjectCard from "./ProjectCard";
import useScrollAnimation from "../hooks/useScrollAnimation";

const tabs = [
  { key: "devops", label: "DevOps" },
  { key: "ai", label: "AI" },
];

function Projects() {
  const [activeTab, setActiveTab] = useState("devops");
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });
  const filtered = filterProjects(projects, activeTab);

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-20 px-6 max-w-6xl mx-auto transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <h2 className="font-heading text-3xl text-cream mb-8 text-center">
        Projects
      </h2>

      <div className="flex justify-center gap-4 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-5 py-2 rounded font-heading text-sm transition-colors duration-200 ${
              activeTab === tab.key
                ? "bg-orange text-navy-dark"
                : "bg-navy text-cream hover:text-orange"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
              image={project.image}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-cream-light">
          No projects to display yet. Check back soon!
        </p>
      )}
    </section>
  );
}

export default Projects;
