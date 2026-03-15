import { useState, useEffect, useCallback } from "react";
import { navLinks } from "../data/content";

function Navbar() {
  const [activeSection, setActiveSection] = useState(navLinks[0]?.href.slice(1) || "");
  const [menuOpen, setMenuOpen] = useState(false);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.slice(1));
    const observers = [];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        observers.push(el);
      }
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleClick = useCallback(
    (e, href) => {
      e.preventDefault();
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      setMenuOpen(false);
    },
    []
  );

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-navy-dark/95 backdrop-blur-sm border-b border-navy"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <a
          href="#hero"
          onClick={(e) => handleClick(e, "#hero")}
          className="font-heading text-lg font-bold text-orange"
        >
          AM
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
          {navLinks.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive = activeSection === sectionId;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`text-sm font-body transition-colors duration-200 ${
                    isActive
                      ? "text-orange font-semibold"
                      : "text-cream hover:text-orange"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Hamburger button for mobile */}
        <button
          type="button"
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`block w-6 h-0.5 bg-cream transition-transform duration-200 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-cream transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-cream transition-transform duration-200 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden bg-navy-dark border-t border-navy list-none m-0 p-0">
          {navLinks.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive = activeSection === sectionId;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`block px-6 py-3 text-sm font-body transition-colors duration-200 ${
                    isActive
                      ? "text-orange font-semibold bg-navy"
                      : "text-cream hover:text-orange hover:bg-navy"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
