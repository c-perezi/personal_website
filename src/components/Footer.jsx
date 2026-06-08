function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 px-6 border-t border-border bg-surface">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs text-muted">
          © {year} Carla N. Pérez. All rights reserved.
        </p>
        <p className="text-xs text-muted">
          Hecho con ❤️ en 🇵🇷 · Built with React & Tailwind
        </p>
      </div>
    </footer>
  );
}

export default Footer;
