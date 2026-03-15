function ExperienceCard({ company, role, period, description, technologies }) {
  return (
    <article className="bg-navy-dark rounded-lg p-6">
      <h3 className="font-heading text-orange text-lg font-semibold mb-1">
        {company}
      </h3>
      <p className="text-cream font-medium mb-1">{role}</p>
      <p className="text-gold text-sm mb-3">{period}</p>
      <p className="text-cream-light text-sm mb-4">{description}</p>
      {technologies && technologies.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-navy text-gold px-2 py-1 rounded"
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
