import { useState } from "react";
import ReactMarkdown from "react-markdown";

function ThoughtCard({ title, excerpt, date, readTime, content, link }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="bg-navy-dark rounded-lg overflow-hidden">
      {/* Card header — always visible */}
      <div className="p-6">
        <h3 className="font-heading text-orange text-lg font-semibold mb-2">
          {title}
        </h3>
        <p className="text-cream-light text-sm mb-4">{excerpt}</p>
        <p className="text-gold text-sm mb-4">
          {date} · {readTime}
        </p>

        {content && (
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="text-orange text-sm hover:underline focus:outline-none focus:underline"
            aria-expanded={expanded}
          >
            {expanded ? "Collapse ↑" : "Read More ↓"}
          </button>
        )}

        {!content && link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange text-sm hover:underline"
          >
            Read More →
          </a>
        )}
      </div>

      {/* Expandable markdown panel */}
      {expanded && content && (
        <div className="px-6 pb-8 border-t border-navy pt-6
          [&_h1]:font-heading [&_h1]:text-cream [&_h1]:text-xl [&_h1]:font-bold [&_h1]:mb-4
          [&_h2]:font-heading [&_h2]:text-cream [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:mb-3 [&_h2]:mt-6
          [&_h3]:font-heading [&_h3]:text-orange [&_h3]:font-semibold [&_h3]:mb-2 [&_h3]:mt-4
          [&_p]:text-cream-light [&_p]:text-sm [&_p]:mb-4 [&_p]:leading-relaxed
          [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_ul]:text-cream-light [&_ul]:text-sm
          [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-4 [&_ol]:text-cream-light [&_ol]:text-sm
          [&_li]:mb-1
          [&_strong]:text-gold [&_strong]:font-semibold
          [&_em]:italic [&_em]:text-cream-light
          [&_hr]:border-navy [&_hr]:my-6
          [&_blockquote]:border-l-2 [&_blockquote]:border-gold [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-cream-light [&_blockquote]:my-4
          [&_code]:bg-navy [&_code]:text-gold [&_code]:px-1 [&_code]:rounded [&_code]:text-xs
          [&_a]:text-orange [&_a]:underline [&_a]:hover:text-gold">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      )}
    </article>
  );
}

export default ThoughtCard;
