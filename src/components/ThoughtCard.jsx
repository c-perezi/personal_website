import { useState } from "react";
import ReactMarkdown from "react-markdown";

function ThoughtCard({ title, excerpt, date, readTime, content, link }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="bg-surface rounded-xl border border-border overflow-hidden transition-all duration-200">
      <div className="p-6">
        <h3 className="font-heading text-base font-semibold text-text mb-2 leading-snug">
          {title}
        </h3>
        <p className="text-sm text-muted leading-relaxed mb-4">{excerpt}</p>
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <p className="text-xs font-mono text-muted">{date} · {readTime}</p>

          {content && (
            <button
              onClick={() => setExpanded((v) => !v)}
              className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:text-accent-hover transition-colors focus:outline-none"
              aria-expanded={expanded}
            >
              {expanded ? "Collapse" : "Read"}
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
          )}

          {!content && link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-accent hover:text-accent-hover transition-colors"
            >
              Read →
            </a>
          )}
        </div>
      </div>

      {/* Expanded markdown body */}
      {expanded && content && (
        <div className="px-6 pb-8 border-t border-border pt-5
          [&_h1]:font-heading [&_h1]:text-text [&_h1]:text-xl [&_h1]:font-bold [&_h1]:mb-4 [&_h1]:mt-2
          [&_h2]:font-heading [&_h2]:text-text [&_h2]:text-base [&_h2]:font-semibold [&_h2]:mb-3 [&_h2]:mt-6
          [&_h3]:font-heading [&_h3]:text-text [&_h3]:text-sm [&_h3]:font-semibold [&_h3]:mb-2 [&_h3]:mt-5
          [&_p]:text-sm [&_p]:text-muted [&_p]:mb-4 [&_p]:leading-relaxed
          [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_ul]:text-sm [&_ul]:text-muted
          [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-4 [&_ol]:text-sm [&_ol]:text-muted
          [&_li]:mb-1.5
          [&_strong]:text-text [&_strong]:font-semibold
          [&_em]:italic
          [&_hr]:border-border [&_hr]:my-6
          [&_blockquote]:border-l-2 [&_blockquote]:border-accent/40 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted [&_blockquote]:my-4
          [&_code]:bg-subtle [&_code]:text-text [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-xs [&_code]:font-mono [&_code]:border [&_code]:border-border
          [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2 [&_a]:hover:text-accent-hover">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      )}
    </article>
  );
}

export default ThoughtCard;
