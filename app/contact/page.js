import { siteConfig } from "@/config/siteConfig";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Tridium Creative Lab. Whether you're a brand, an artist, or a dreamer with a vision — we want to hear from you.",
  openGraph: {
    title: "Contact | Tridium Creative Lab",
    description:
      "Get in touch with Tridium Creative Lab. Whether you're a brand, an artist, or a dreamer with a vision — we want to hear from you.",
    url: "/contact",
  },
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="section">
      <p className="section-label">Contact</p>
      <h1 className="section-headline">
        Let&rsquo;s build something <span className="gold">together.</span>
      </h1>
      <p className="section-intro" style={{ marginBottom: "2rem" }}>
        Send us a quick message and we can discuss your project goals, timing,
        and budget.
      </p>

      <div className="content-card">
        <form className="contact-form" action={`mailto:${siteConfig.contactEmail}`}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="6" required />

          <button type="submit" className="button button-gold" style={{ marginTop: "0.5rem" }}>
            Send Message
          </button>
        </form>

        <p className="contact-alt">
          Prefer email? Reach us at{" "}
          <a href={`mailto:${siteConfig.contactEmail}`}>
            {siteConfig.contactEmail}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
