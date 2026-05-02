import { useState } from "react";
import { contact } from "../data/content";
import validateContactForm from "../utils/validateContactForm";
import useScrollAnimation from "../hooks/useScrollAnimation";

function Contact() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { valid, errors: validationErrors } = validateContactForm(formData);

    if (!valid) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus("sending");

    setTimeout(() => {
      // Simulate success (change to false to test error path)
      const success = true;
      if (success) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    }, 1500);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-20 px-4 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-cream text-center mb-12">
          Contact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-5">
              <label htmlFor="contact-name" className="block text-cream mb-1 text-sm">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                disabled={status === "sending"}
                className="w-full px-4 py-2 rounded bg-navy border border-navy-dark focus:border-orange focus:outline-none text-cream"
              />
              {errors.name && (
                <p className="text-red text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div className="mb-5">
              <label htmlFor="contact-email" className="block text-cream mb-1 text-sm">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                disabled={status === "sending"}
                className="w-full px-4 py-2 rounded bg-navy border border-navy-dark focus:border-orange focus:outline-none text-cream"
              />
              {errors.email && (
                <p className="text-red text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className="mb-5">
              <label htmlFor="contact-message" className="block text-cream mb-1 text-sm">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                disabled={status === "sending"}
                className="w-full px-4 py-2 rounded bg-navy border border-navy-dark focus:border-orange focus:outline-none text-cream resize-y"
              />
              {errors.message && (
                <p className="text-red text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="px-6 py-2 rounded bg-red hover:bg-orange text-cream font-semibold transition-colors duration-200 disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "sent" && (
              <p className="text-gold mt-4">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red mt-4">
                Failed to send message. Please try again.
              </p>
            )}
          </form>

          {/* Social Links */}
          <div className="flex flex-col justify-center">
            <p className="text-cream mb-4">
              Feel free to reach out via the form or connect with me on social media.
            </p>
            <p className="text-cream-light mb-6">{contact.email}</p>
            <div className="flex gap-4">
              {contact.social.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange hover:text-gold transition-colors duration-200"
                >
                  {link.icon === "github" && <GitHubIcon />}
                  {link.icon === "linkedin" && <LinkedInIcon />}
                  {link.icon === "calendly" && <CalendlyIcon />}
                  <span className="ml-2">{link.platform}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GitHubIcon() {
  return (
    <svg
      className="inline-block w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      className="inline-block w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function CalendlyIcon() {
  return (
    <svg
      className="inline-block w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
      <circle cx="8" cy="14" r="1.5" />
      <circle cx="12" cy="14" r="1.5" />
      <circle cx="16" cy="14" r="1.5" />
      <circle cx="8" cy="18" r="1.5" />
      <circle cx="12" cy="18" r="1.5" />
    </svg>
  );
}

export default Contact;
