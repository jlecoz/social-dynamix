import Link from "next/link";
import { headers } from "next/headers";
import ContactCTA from "@/components/ContactCTA";
import ScrollReveal from "@/components/ScrollReveal";
import HeroOverviewSection from "@/components/HeroOverviewSection";
import ExperienceHeadlineDecrypt from "@/components/ExperienceHeadlineDecrypt";
import ContactCtaBackground from "@/components/ContactCtaBackground";
import FlippableWorkCover from "@/components/FlippableWorkCover";
import MainSectionParallax from "@/components/MainSectionParallax";
import PitchPresenceImage from "@/components/PitchPresenceImage";
import WorksCardsTimeline from "@/components/WorksCardsTimeline";
import { worksProjects } from "@/config/worksProjects";

import { cv, linkedInRecommendationsUrl } from "@/config/cvData";

const works = worksProjects;

function getRecommendationQuoteParagraphs(recommendation) {
  if (recommendation.quoteParagraphs) return recommendation.quoteParagraphs;

  const quote = recommendation.quote || "";

  return quote
    .replace(/\s+/g, " ")
    .trim()
    .split(/(?<=[.!?])\s+/)
    .filter(Boolean);
}

function RecommendationQuote({ recommendation }) {
  const paragraphs = getRecommendationQuoteParagraphs(recommendation);
  const readMoreAfterParagraph = recommendation.readMoreAfterParagraph;

  if (!readMoreAfterParagraph || readMoreAfterParagraph >= paragraphs.length) {
    return (
      <blockquote className="cv-rec-quote">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </blockquote>
    );
  }

  const visibleParagraphs = paragraphs.slice(0, readMoreAfterParagraph);
  const hiddenParagraphs = paragraphs.slice(readMoreAfterParagraph);

  return (
    <blockquote className="cv-rec-quote">
      {visibleParagraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <details className="cv-rec-read-more">
        <summary>Read more</summary>
        <div className="cv-rec-read-more-content">
          {hiddenParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </details>
    </blockquote>
  );
}

function WorksSection() {
  return (
    <section className="section" id="works">
      <WorksCardsTimeline>
        <div className="section-services-inner">
          <ScrollReveal>
            <ExperienceHeadlineDecrypt as="p" className="section-label" text="WORKS" decrypt />
            <ExperienceHeadlineDecrypt before="A few curated collaborations across " gold="product and platform." />
          </ScrollReveal>
          <p className="section-intro">
            A snapshot of organisations and programmes where my design leadership shaped outcomes end to end.
          </p>
          <p className="works-card-instruction">
            <strong>Click on a card</strong> to learn more.
          </p>

          <ScrollReveal stagger className="cv-work-grid">
            {works.map((item) => (
              <article
                key={`${item.title}-${item.client ?? ""}`}
                className={`cv-work-card card__content reveal${item.coverImage ? " cv-work-card--split" : ""}`}
              >
                {item.coverImage ? (
                  <FlippableWorkCover item={item}>
                    <div className="cv-work-card-copy">
                      <h3>{item.title}</h3>
                      {item.client ? <h4 className="cv-work-client">{item.client}</h4> : null}
                      <p>{item.blurb}</p>
                      <div className="cv-work-card-actions">
                        <Link href={`/works/${item.slug}`} className="button button-secondary">
                          Learn more
                        </Link>
                        <a
                          className="cv-work-card-external"
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Client site →
                        </a>
                      </div>
                    </div>
                  </FlippableWorkCover>
                ) : (
                  <>
                    <h3>{item.title}</h3>
                    {item.client ? <h4 className="cv-work-client">{item.client}</h4> : null}
                    <p>{item.blurb}</p>
                    <div className="cv-work-card-actions">
                      <Link href={`/works/${item.slug}`} className="button button-secondary">
                        Learn more
                      </Link>
                      <a
                        className="cv-work-card-external"
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Client site →
                      </a>
                    </div>
                  </>
                )}
              </article>
            ))}
          </ScrollReveal>
        </div>
      </WorksCardsTimeline>
    </section>
  );
}

function RecommendationsSection() {
  const recCount = cv.recommendations.length;

  return (
    <section className="section" id="recommendations">
      <div className="section-services-inner">
        <ScrollReveal>
          <ExperienceHeadlineDecrypt as="p" className="section-label" text="RECOMMENDATIONS" decrypt />
          <h2 className="section-headline">
            What colleagues say about <span className="gold">working together.</span>
          </h2>
        </ScrollReveal>

        <div
          id="recommendation-cards"
          className="rec-stack-cards"
          style={{ "--numcards": recCount }}
        >
          {cv.recommendations.map((r, i) => (
            <div
              key={r.name}
              className="rec-stack-card"
              style={{ "--index": i + 1 }}
            >
              <div className="rec-stack-card__content cv-edu-row cv-edu-row--rec">
                <div className="cv-rec-body">
                  {r.portrait ? (
                    <img
                      className="cv-rec-avatar cv-rec-avatar--photo"
                      src={r.portrait}
                      alt={`${r.name} portrait`}
                      width={56}
                      height={56}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <span className="cv-rec-avatar" aria-hidden="true">
                      {r.initials}
                    </span>
                  )}
                  <div className="cv-rec-copy">
                    <h3>{r.name}</h3>
                    {r.title ? <p className="cv-edu-org">{r.title}</p> : null}
                    <div className="cv-edu-period cv-rec-meta">{r.meta}</div>
                    <RecommendationQuote recommendation={r} />
                  </div>
                </div>
              </div>
              {/* Scroll runway below quote; overlap happens here so the next card stacks without covering text */}
              <div className="rec-stack-card__slack" aria-hidden="true" />
            </div>
          ))}
        </div>

        <ScrollReveal>
          <div className="cv-experience-more">
            <a
              className="cv-experience-more-link"
              href={linkedInRecommendationsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Show all recommendations on LinkedIn"
            >
              <span>Show all</span>
              <span className="cv-experience-more-arrow" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function PitchSection() {
  return (
    <section className="section cv-pitch-section" id="pitch">
      <div className="section-services-inner">
        <ScrollReveal className="cv-pitch-card reveal-down">
          <h2 className="cv-pitch-headline">
            I build teams that make
            <br />
            complex things feel simple.
          </h2>
          <p className="cv-pitch-copy">
            <strong>10 years leading UX</strong> across SaaS, ecommerce, and digital products - from{" "}
            <strong>pixels to strategy</strong>, from <strong>solo contributor to team builder</strong>.
          </p>
          <p className="cv-pitch-copy">
            During my current endeavor, I have <strong>built our Digital R&amp;D from the ground up.</strong> Taking a
            team of two ad-hoc designers into a <strong>full-blown in-house design agency</strong> with 3 Product
            Designers, 3 UX Researchers, 1 Systems Design Lead and 3 Front-end engineers.
          </p>
          <div className="cv-pitch-avatar-target is-settled" aria-hidden="true">
            <PitchPresenceImage src="/img/pitch-jonathan-harvest.webp" alt="" width={1024} height={576} />
          </div>
          <p className="cv-pitch-copy">
            My team, located in Amsterdam, worked{" "}
            <strong>hand in hand with two large external digital partners</strong>{" "}
            located in London, Publicis Sapient and Live &amp; Breathe. Together, we{" "}
            <strong>defined, shaped, tested, delivered and measured the experiences</strong> for blu.com and pulze.com
            under Imperial Brands PLC.
          </p>
          <p className="cv-pitch-copy">
            The organisation was lacking in tools and processes to make design efficient, consistent and robust.
            Negotiating the contracts, working with leadership and stakeholders across departments, and putting in place
            the requests and governance models. I brought UserTesting.com, Figma, and Hotjar to Imperial to evolve their
            old legacy design workflows and systems, drastically improving file structure and visibility and injecting
            human-centric consumer culture to the core of the business&apos; digital pathways and channels.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

function JonnyHome() {
  return (
    <>
      <MainSectionParallax />
      <HeroOverviewSection
        meta={cv.meta}
        title={cv.title}
        skillTagsLine={cv.skillTags.join(" • ")}
      />
      <PitchSection />
      <WorksSection />
      <RecommendationsSection />
      <ContactCTA />
    </>
  );
}

function MainHome() {
  return (
    <>
      <MainSectionParallax />
      <section className="sdx-hero">
        <div className="sdx-hero-inner">
          <p className="sdx-kicker">Social Dynamix</p>
          <h1 className="sdx-title">
            Design-led product strategy <span className="sdx-title-accent">&amp; delivery.</span>
          </h1>
          <p className="sdx-subtitle">
            We help teams ship clearer roadmaps, stronger experiences, and measurable outcomes.
          </p>
          <div className="sdx-cta">
            <a className="button button-gold" href="#services">
              See services
            </a>
            <a className="button button-secondary" href="https://jonny.socialdynamix.co">
              Jonny&rsquo;s CV
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <ScrollReveal>
          <p className="section-label">What we do</p>
          <h2 className="section-headline">
            Strategy, systems, and execution <span className="gold">that teams can run.</span>
          </h2>
          <p className="section-intro">
            From discovery to delivery: aligning stakeholders, reducing risk, and improving usability and conversion.
          </p>
        </ScrollReveal>

        <ScrollReveal stagger className="sdx-grid">
          {[
            { title: "Product strategy", body: "Roadmaps, positioning, OKRs, and decision frameworks." },
            { title: "UX & UI design", body: "Flows, prototypes, design systems, and ship-ready specs." },
            { title: "Research & validation", body: "Interviews, usability testing, and rapid experiments." },
          ].map((c) => (
            <div key={c.title} className="sdx-card reveal">
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </ScrollReveal>
      </section>

      <section className="section" id="work">
        <ScrollReveal>
          <p className="section-label">Work</p>
          <h2 className="section-headline">
            A pragmatic approach to <span className="gold">complex products.</span>
          </h2>
          <p className="section-intro">
            Need a hands-on design lead or an advisory partner? We can plug into squads quickly.
          </p>
        </ScrollReveal>
      </section>

      <section className="section section-contact-cta">
        <ContactCtaBackground />
        <div className="section-services-inner section-contact-cta-inner">
          <ScrollReveal stagger>
            <h2 className="section-headline contact-cta-headline-shimmer reveal reveal-fade">
              Want to move faster with <span className="gold">less risk?</span>
            </h2>
            <p className="section-intro reveal reveal-down">
              Tell us what you&rsquo;re building and where you&rsquo;re stuck.
            </p>
            <div className="cta-row reveal reveal-down" style={{ justifyContent: "center" }}>
              <Link className="button button-gold" href="/contact">
                Contact
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

export default async function HomePage() {
  const host = (await headers()).get("host") || "";
  const isJonny = host.toLowerCase().startsWith("jonny.");
  return isJonny ? <JonnyHome /> : <MainHome />;
}
