import Link from "next/link";
import HeroGoldScramble from "@/components/HeroGoldScramble";
import ScrollReveal from "@/components/ScrollReveal";

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
        <ScrollReveal>
          <p className="eyebrow">{meta}</p>
        </ScrollReveal>
        <h1 className="hero-headline">
          <HeroGoldScramble text={title} />
        </h1>
        <ScrollReveal className="reveal-down">
          <p className="cv-core-tags">{skillTagsLine}</p>
        </ScrollReveal>

        <ScrollReveal className="cta-row" stagger>
          <Link className="button button-gold reveal reveal-right" href="/contact">
            Contact
          </Link>
          <a
            className="button button-secondary reveal reveal-left"
            href="https://www.linkedin.com/in/jonathan-lecoz/?locale=en_US"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
