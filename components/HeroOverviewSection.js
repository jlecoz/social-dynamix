import Link from "next/link";
import HeroGoldScramble from "@/components/HeroGoldScramble";

export default function HeroOverviewSection({ meta, title, skillTagsLine }) {
  return (
    <section className="hero hero-cv" id="overview">
      <div className="hero-bg-embed" aria-hidden="true">
        <iframe
          className="hero-bg-iframe"
          src="/animations/digital_ronin_bg.html"
          title=""
          loading="eager"
        />
        <div className="hero-bg-dim" />
      </div>
      <div className="hero-content">
        <p className="eyebrow">{meta}</p>
        <h1 className="hero-headline">
          <HeroGoldScramble text={title} />
        </h1>
        <p className="cv-core-tags">{skillTagsLine}</p>

        <div className="cta-row">
          <Link className="button button-gold" href="/contact">
            Contact
          </Link>
          <a
            className="button button-secondary"
            href="https://www.linkedin.com/in/jonathan-lecoz/?locale=en_US"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
