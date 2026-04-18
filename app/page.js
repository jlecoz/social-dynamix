import Link from "next/link";
import { headers } from "next/headers";
import { getSiteConfig } from "@/config/getSiteConfig";
import ScrollReveal from "@/components/ScrollReveal";

const cv = {
  name: "Jonathan Le Coz",
  title: "Experiential Designer",
  meta: "20+ years of creative arts, brand design and web technology",
  location: "Manchester, United Kingdom",
  phone: "+44 793 163 7144",
  email: "jonathan.lecoz@gmail.com",
  languages: [
    { label: "English", level: 5 },
    { label: "French", level: 5 },
    { label: "Spanish", level: 1 },
  ],
  skillTags: [
    "Product Leadership",
    "Human-centered Design",
    "Customer Innovation",
  ],
  /** LinkedIn-aligned: one card per employer; multiple roles share logo + timeline rail */
  experienceGroups: [
    {
      key: "imperial",
      orgDisplay: "Imperial Brands PLC",
      orgUrl: "https://www.imperialbrandsplc.com",
      logoDomain: "imperialbrandsplc.com",
      companyTagline: "Full-time · 3 yrs 4 mos · Bristol, United Kingdom",
      roles: [
        {
          title: "Director of Digital Experience",
          periodLine: "Jan 2021 – Present · 3 yrs 4 mos",
          workMode: "Hybrid",
          bullets: [
            "Advocate for design thinking and design linking. I support Product Owners, Engineers and Designers throughout the NGP pillar to work smart and deliver value for our experience across multiple product lines.",
            "Establish, maintain and scale design processes and tools to drive efficiency and velocity internally and with external partners.",
            "Review, assess and prioritise design activity with Delivery Managers and Product Owners so design supports the high-level delivery roadmap.",
            "Lead and manage talented teams through the research and design process to produce high-quality work that materially impacts partners and customers.",
            "Mentor the internal design team — hire, nurture, mentor and challenge a growing in-house team alongside external design partners.",
            "Oversee vision and governance of the design system, supporting day-to-day communication and contribution across the business.",
          ],
        },
        {
          title: "Experience Design Lead",
          periodLine: "Jan 2022 – Dec 2022 · 1 yr",
          location: "Manchester Area, United Kingdom",
          bullets: [],
          skills: "Product Strategy, Web Design, and +8 skills",
        },
      ],
    },
    {
      key: "autotrader",
      orgDisplay: "Auto Trader UK",
      orgUrl: "https://www.autotrader.co.uk",
      logoDomain: "autotrader.co.uk",
      companyTagline: "Full-time · 3 yrs 10 mos · United Kingdom",
      roles: [
        {
          title: "Experience Design Lead",
          periodLine: "Jul 2021 – Oct 2022 · 1 yr 4 mos",
          bullets: [
            "Helped cross-functional teams understand and define pain points and potential gains for the Digital Retailing offer for retailers and customers.",
            "Line-managed and mentored product designers; supported designers to deliver their best work and grow their careers.",
            "Delivered designs and specifications for funnel experiences (Part Exchange, Finance, Reservations) in parallel with squad delivery.",
            "Led UX/UI direction for the Digital Retailing initiative piloted across retailers in the Auto Trader UK ecosystem.",
          ],
          skills: "Product Strategy, Web Design, and +8 skills",
        },
        {
          title: "Principal Product Designer",
          periodLine: "Nov 2020 – Jun 2021 · 8 mos",
          location: "Manchester Area, United Kingdom",
          summary:
            "Digital Retailing and Onward Journey — CORE/B2B. Direction of the post-sale journey customers and suppliers engage with in the Auto Trader ecosystem.",
          bullets: [],
          skills: "Product Strategy, Web Design, +8 skills",
        },
      ],
    },
    {
      key: "booking",
      orgDisplay: "Booking.com",
      orgUrl: "https://www.booking.com",
      logoDomain: "booking.com",
      companyTagline: "Full-time · 2 yrs 2 mos · Manchester Area, United Kingdom",
      roles: [
        {
          title: "Design Lead",
          periodLine: "Oct 2018 – Nov 2020 · 2 yrs 2 mos",
          bullets: [
            "Used data-informed discovery and experimentation to influence stakeholders and turn systems thinking into experiences that improved convenience, loyalty and engagement.",
            "Led two UX designers to define and deliver solutions for pain points across the ground transport business.",
            "Partnered with product and engineering leads on epics, user stories, prioritisation and backlog refinement.",
            "Contributed to cross-business initiatives including design systems, process training, onboarding and recruitment.",
          ],
          skills: "Product Strategy, Web Design, and +8 skills",
          featured: "Featured project: Booking.com One Million — social wall campaign.",
        },
      ],
    },
    {
      key: "intuit",
      orgDisplay: "Intuit",
      orgUrl: "https://www.intuit.com",
      logoDomain: "intuit.com",
      companyTagline: "Full-time · 1 yr 3 mos · Paris, France",
      roles: [
        {
          title: "Principal Product Designer",
          periodLine: "Jun 2017 – Aug 2018 · 1 yr 3 mos",
          bullets: [
            "Built deep customer empathy around financial problems so people could save time, make money and gain confidence.",
            "Led cross-functional teams through design studios for invoicing, checkout and related workflows across markets.",
            "Coordinated rapid experimentation and international design work across France, Germany, Australia and other locales.",
          ],
          skills: "Product Strategy, Web Design, and +8 skills",
          featured: "Featured project: QuickBooks — customer-facing launch and localisation work.",
        },
      ],
    },
    {
      key: "jwt-paris",
      orgDisplay: "JWT Paris",
      orgUrl: "https://www.wundermanthompson.com",
      logoDomain: "wpp.com",
      companyTagline: "Oct 2015 – Apr 2017",
      roles: [{ title: "Lead UX Designer", periodLine: "", bullets: [] }],
    },
    {
      key: "graphite",
      orgDisplay: "Graphite",
      logoDomain: "graphite.com",
      companyTagline: "Jun 2011 – Aug 2015",
      roles: [{ title: "Senior UI/UX Designer", periodLine: "", bullets: [] }],
    },
    {
      key: "goodman-heathcote",
      orgDisplay: "Goodman Heathcote Management",
      logoDomain: "linkedin.com",
      companyTagline: "Sep 2010 – Jun 2011",
      roles: [{ title: "Graphic and Web Designer", periodLine: "", bullets: [] }],
    },
    {
      key: "vertigo",
      orgDisplay: "Agence Vertigo",
      logoDomain: "linkedin.com",
      companyTagline: "Jan 2008 – Sep 2010",
      roles: [{ title: "Freelance Consultant", periodLine: "", bullets: [] }],
    },
    {
      key: "urban-medium",
      orgDisplay: "Urban Medium",
      logoDomain: "linkedin.com",
      companyTagline: "Jul 2008 – Sep 2009",
      roles: [
        {
          title: "Sr. Designer / Jr. Programmer",
          periodLine: "",
          summary:
            "Graphic programming — Flash, Visual Basic, PHP, Photoshop, Illustrator, SQL.",
          bullets: [],
        },
      ],
    },
    {
      key: "hypnotic",
      orgDisplay: "Hypnotic Talent Agency",
      logoDomain: "linkedin.com",
      companyTagline: "Sep 2006 – Sep 2007",
      roles: [{ title: "Freelance Consultant", periodLine: "", bullets: [] }],
    },
  ],
  knowledge: [
    "Focusing on customer-driven innovation through an outside-in approach to user-centered design and design thinking methodology, driving ideation to the best possible solutions to customers’ wicked problems.",
    "Using fail-fast principles and lean UX techniques based on field research, usability testing and interaction design to monitor, measure and optimize user workflows and validate assumptions.",
    "Helping align product roadmaps with business objectives by collaborating with local and central teams to produce seamless end-to-end experiences that bolster global brand strategy and standards.",
    "Defining OKR/KPI metrics with product leaders to increase visibility to usage and conversion/retention linked to UX/CX contribution.",
    "Industry UI/UX principles coupled with modern web technologies for efficient and engaging end-to-end experiences that are usable, useful and desirable.",
  ],
  education: [
    {
      label: "Certifications (20 certificates in varying subjects)",
      org: "The Interaction Design Foundation",
      period: "2017 - 2018",
    },
    {
      label: "Bachelor of Science in Computer Sciences (Minor: Communication Design)",
      org: "California State University Chico",
      period: "2004 - 2006",
    },
  ],
};

const works = [
  {
    title: "Ser.vi",
    blurb: "Product design and digital experience.",
    href: "https://get.ser.vi",
  },
  {
    title: "QuickBooks",
    blurb: "Intuit — invoicing, expenses, and SMB finance workflows.",
    href: "https://www.quickbooks.fr",
  },
  {
    title: "Booking.com",
    blurb: "Ground transport — discovery, experimentation, and delivery.",
    href: "https://www.booking.com",
  },
  {
    title: "Auto Trader UK",
    blurb: "Digital retailing — funnels and dealer-facing journeys.",
    href: "https://www.autotrader.co.uk",
  },
  {
    title: "Imperial NGP",
    blurb: "Next-generation products — design systems and multi-brand platforms.",
    href: "https://www.imperialbrandsplc.com",
  },
];

function HeroSection() {
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
        <p className="eyebrow">{cv.meta}</p>
        <h1 className="hero-headline">
          <span className="gold">{cv.title}</span>
        </h1>
        <p className="cv-core-tags">{cv.skillTags.join(" • ")}</p>

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

function ExperienceSection() {
  return (
    <section className="section" id="experience">
      <ScrollReveal>
        <p className="section-label">Experience</p>
        <h2 className="section-headline">
          Design leadership across <span className="gold">product and platform.</span>
        </h2>
      </ScrollReveal>

      <ScrollReveal stagger className="cv-timeline">
        {cv.experienceGroups.map((group) => {
          const faviconSrc = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(group.logoDomain)}&sz=128`;
          return (
            <article key={group.key} className="cv-role cv-role--linkedin reveal">
              <div className="cv-role-layout">
                <div className="cv-role-logo">
                  <img
                    className="cv-role-logo-img"
                    src={faviconSrc}
                    alt=""
                    width={48}
                    height={48}
                    loading="lazy"
                  />
                </div>
                <div className="cv-role-main">
                  <div className="cv-role-company-block">
                    <h3 className="cv-role-company-heading">
                      {group.orgUrl ? (
                        <a className="cv-role-company" href={group.orgUrl} target="_blank" rel="noopener noreferrer">
                          {group.orgDisplay}
                        </a>
                      ) : (
                        <span className="cv-role-company">{group.orgDisplay}</span>
                      )}
                    </h3>
                    {group.companyTagline ? (
                      <p className="cv-role-company-meta">{group.companyTagline}</p>
                    ) : null}
                  </div>
                  <div className="cv-role-positions-rail">
                    {group.roles.map((role, idx) => (
                      <div key={`${group.key}-${role.title}-${idx}`} className="cv-role-position">
                        <div className="cv-role-job-block">
                          <h4 className="cv-role-job-title">{role.title}</h4>
                          {role.periodLine ? <p className="cv-role-job-dates">{role.periodLine}</p> : null}
                          {role.location ? <p className="cv-role-work-mode">{role.location}</p> : null}
                          {role.workMode ? <p className="cv-role-work-mode">{role.workMode}</p> : null}
                          {role.summary ? <p className="cv-role-summary">{role.summary}</p> : null}
                          {role.bullets?.length ? (
                            <div className="cv-role-timeline">
                              <ul className="cv-bullets-timeline">
                                {role.bullets.map((b) => (
                                  <li key={b}>{b}</li>
                                ))}
                              </ul>
                            </div>
                          ) : null}
                          {role.skills ? <p className="cv-role-skills">Skills: {role.skills}</p> : null}
                          {role.featured ? <p className="cv-role-featured">{role.featured}</p> : null}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </ScrollReveal>
    </section>
  );
}

function WorksSection() {
  return (
    <section className="section" id="works">
      <ScrollReveal>
        <p className="section-label">Works</p>
        <h2 className="section-headline">
          Selected collaborations across <span className="gold">product and platform.</span>
        </h2>
        <p className="section-intro">
          A snapshot of organisations and programmes where design leadership shaped outcomes end to end.
        </p>
      </ScrollReveal>

      <ScrollReveal stagger className="cv-work-grid">
        {works.map((item) => (
          <a
            key={item.title}
            className="cv-work-card reveal"
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>{item.title}</h3>
            <p>{item.blurb}</p>
          </a>
        ))}
      </ScrollReveal>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className="section section-services" id="skills">
      <ScrollReveal>
        <p className="section-label">Knowledge &amp; Skills</p>
        <p className="section-intro">
          Creative, collaborative and efficient — focused on customer-driven innovation and measurable outcomes.
        </p>
      </ScrollReveal>

      <div className="cv-split">
        <ScrollReveal className="cv-split-left">
          <h3 className="cv-subhead">Key skills</h3>
          <div className="skills-wheel" aria-label="Skills attributes: passionate, bold, social, funny">
            <img src="/img/profile.svg" alt="Skills profile" className="skills-wheel-img" />
          </div>
          <div className="cv-tags">
            {cv.skillTags.map((t) => (
              <span key={t} className="cv-tag">
                {t}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal className="cv-split-right">
          <h3 className="cv-subhead">Knowledge</h3>
          <ul className="cv-knowledge">
            {cv.knowledge.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section className="section" id="education">
      <ScrollReveal>
        <p className="section-label">Education</p>
        <h2 className="section-headline">
          Computer sciences, <span className="gold">communication design</span> and continuous learning.
        </h2>
      </ScrollReveal>

      <ScrollReveal stagger className="cv-edu">
        {cv.education.map((e) => (
          <div key={`${e.org}-${e.period}`} className="cv-edu-row reveal">
            <div>
              <h3>{e.label}</h3>
              <p className="cv-edu-org">{e.org}</p>
            </div>
            <div className="cv-edu-period">{e.period}</div>
          </div>
        ))}
      </ScrollReveal>
    </section>
  );
}

function LanguagesSection() {
  return (
    <section className="section" id="languages">
      <ScrollReveal>
        <h2 className="languages-title">Languages</h2>
        <div className="languages-rule" aria-hidden="true" />
      </ScrollReveal>

      <ScrollReveal stagger className="languages-list">
        {cv.languages.map((lang) => (
          <div key={lang.label} className="languages-row reveal">
            <div className="languages-label">{lang.label}</div>
            <div
              className="languages-dots"
              role="img"
              aria-label={`${lang.label}: ${lang.level} out of 5`}
            >
              {Array.from({ length: 5 }, (_, i) => (
                <span
                  // eslint-disable-next-line react/no-array-index-key
                  key={`${lang.label}-${i}`}
                  className={`languages-dot ${i < lang.level ? "is-on" : "is-off"}`}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        ))}
      </ScrollReveal>
    </section>
  );
}

function ContactCTA({ siteConfig }) {
  return (
    <section className="section section-contact-cta">
      <ScrollReveal>
        <h2 className="section-headline">
          Available for <span className="gold">product design leadership</span> and advisory work.
        </h2>
        <p className="section-intro">
          Based in {cv.location}. Reach out via email and I&rsquo;ll respond as soon as I can.
        </p>
        <div className="cta-row" style={{ justifyContent: "center" }}>
          <Link className="button button-gold" href="/contact">
            Contact
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}

function JonnyHome({ siteConfig }) {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <WorksSection />
      <SkillsSection />
      <EducationSection />
      <LanguagesSection />
      <ContactCTA siteConfig={siteConfig} />
    </>
  );
}

function MainHome() {
  return (
    <>
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
        <ScrollReveal>
          <h2 className="section-headline">
            Want to move faster with <span className="gold">less risk?</span>
          </h2>
          <p className="section-intro">Tell us what you&rsquo;re building and where you&rsquo;re stuck.</p>
          <div className="cta-row" style={{ justifyContent: "center" }}>
            <Link className="button button-gold" href="/contact">
              Contact
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}

export default async function HomePage() {
  const host = (await headers()).get("host") || "";
  const siteConfig = getSiteConfig(host);
  const isJonny = host.toLowerCase().startsWith("jonny.");
  return isJonny ? <JonnyHome siteConfig={siteConfig} /> : <MainHome />;
}
