import { useState } from "react";
import { projects, featureFlags } from "../data/content";
import filterProjects from "../utils/filterProjects";
import ProjectCard from "./ProjectCard";
import useScrollAnimation from "../hooks/useScrollAnimation";

const allTabs = [
  { key: "devops", label: "DevOps" },
  { key: "ai",     label: "AI"     },
];

function Projects() {
  const tabs = featureFlags.showDevOpsProjects
    ? allTabs
    : allTabs.filter((t) => t.key !== "devops");
  const [activeTab, setActiveTab] = useState(tabs[0].key);
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });
  const filtered = filterProjects(projects, activeTab);

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-24 px-6 max-w-5xl mx-auto transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <SectionLabel>Work</SectionLabel>
      <div className="flex items-end justify-between mb-8 gap-4 flex-wrap">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text">
          Projects
        </h2>

        {/* Tab pills */}
        {tabs.length > 1 && (
          <div className="flex gap-1 p-1 rounded-lg bg-subtle border border-border">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors duration-150 ${
                  activeTab === tab.key
                    ? "bg-surface text-text shadow-sm border border-border"
                    : "text-muted hover:text-text"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
              image={project.image}
              wip={project.wip}
            />
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted text-center py-12">No projects to display yet.</p>
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

export default Projects;
