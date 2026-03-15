function ProjectCard({ title, description, tags, link, image }) {
  return (
    <article className="bg-navy-dark rounded-lg p-6 hover:border-orange border border-transparent transition-all duration-300 hover:-translate-y-1">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded mb-4"
          loading="lazy"
        />
      )}
      <h3 className="font-heading text-orange text-lg mb-2">{title}</h3>
      <p className="text-cream-light text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-navy text-gold px-2 py-1 rounded"
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
          className="text-orange text-sm mt-4 inline-block hover:underline"
        >
          View Project →
        </a>
      )}
    </article>
  );
}

export default ProjectCard;
