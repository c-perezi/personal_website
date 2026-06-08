function ExperienceCard({ company, role, period, description, technologies }) {
  return (
    <article className="bg-surface rounded-xl border border-border p-6">
      <div className="flex items-start justify-between gap-4 mb-1 flex-wrap">
        <h3 className="font-heading text-base font-semibold text-text leading-snug">
          {company}
        </h3>
        <span className="text-xs font-mono text-muted whitespace-nowrap shrink-0 mt-0.5">
          {period}
        </span>
      </div>
      <p className="text-sm font-medium text-accent mb-3">{role}</p>
      <p className="text-sm text-muted leading-relaxed mb-4">{description}</p>
      {technologies?.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-2 py-0.5 rounded-md bg-subtle border border-border text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

export default ExperienceCard;
