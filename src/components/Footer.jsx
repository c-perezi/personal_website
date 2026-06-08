function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 px-6 border-t border-border bg-surface">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs text-muted">
          © {year} Carla N. Pérez. All rights reserved.
        </p>
        <p className="text-xs text-muted">
          Hecho con ❤️ en 🇵🇷 · Built with React & Tailwind · GitHub Page partially generated with{" "}
          <a
            href="https://kiro.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Kiro
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
