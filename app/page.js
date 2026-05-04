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

function getWorkCoverStyle(item) {
  if (!item.coverImageWidth || !item.coverImageHeight) return undefined;

  return {
    "--cv-work-cover-ratio": `${item.coverImageWidth} / ${item.coverImageHeight}`,
  };
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
            A snapshot of organisations and programmes where design leadership shaped outcomes end to end.
          </p>

          <ScrollReveal stagger className="cv-work-grid">
            {works.map((item) => (
              <article
                key={`${item.title}-${item.client ?? ""}`}
                className={`cv-work-card card__content reveal${item.coverImage ? " cv-work-card--split" : ""}`}
                style={getWorkCoverStyle(item)}
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
                    <p className="cv-rec-quote">{r.quote}</p>
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
            10 years leading UX across SaaS, ecommerce, and digital products - from pixels to strategy, from solo
            contributor to team builder.
          </p>
          <div className="cv-pitch-avatar-target is-settled" aria-hidden="true">
            <PitchPresenceImage src="/img/pitch-jonathan-harvest.webp" alt="" width={1024} height={576} />
          </div>
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
