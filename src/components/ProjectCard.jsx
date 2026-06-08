function ProjectCard({ title, description, tags, link, image, wip }) {
  return (
    <article className="group bg-surface rounded-xl border border-border p-6 hover:border-accent/40 transition-all duration-200 hover:-translate-y-0.5 flex flex-col gap-4">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-36 object-cover rounded-lg"
          loading="lazy"
        />
      )}

      <div className="flex-1">
        <div className="flex items-start gap-2 mb-1.5 flex-wrap">
          <h3 className="font-heading text-base font-semibold text-text leading-snug">
            {title}
          </h3>
          {wip && (
            <span className="shrink-0 text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded-md border border-amber-300 bg-amber-50 text-amber-700">
              WIP
            </span>
          )}
        </div>
        <p className="text-sm text-muted leading-relaxed">{description}</p>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono px-2 py-0.5 rounded-md bg-subtle border border-border text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent-hover transition-colors"
        >
          View on GitHub
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>
      )}
    </article>
  );
}

export default ProjectCard;
