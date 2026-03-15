function ThoughtCard({ title, excerpt, date, readTime, link }) {
  return (
    <article className="bg-navy-dark rounded-lg p-6">
      <h3 className="font-heading text-orange text-lg font-semibold mb-2">
        {title}
      </h3>
      <p className="text-cream-light text-sm mb-4">{excerpt}</p>
      <p className="text-gold text-sm mb-3">
        {date} · {readTime}
      </p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange text-sm hover:underline"
        >
          Read More →
        </a>
      )}
    </article>
  );
}

export default ThoughtCard;
