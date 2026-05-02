function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark py-8 text-center">
      <p className="text-cream-light text-sm">
        &copy; {year} All rights reserved.
      </p>
      <p className="text-gold text-xs mt-2">
         Hecho con ❤️ en 🇵🇷
      </p>
    </footer>
  );
}

export default Footer;
