import Link from "next/link";
import { headers } from "next/headers";
import { getSiteConfig } from "@/config/getSiteConfig";
import ScrollReveal from "@/components/ScrollReveal";

/** Profile experience section on LinkedIn (earlier roles such as IMS Health) */
const linkedInExperienceUrl =
  "https://www.linkedin.com/in/jonathan-lecoz/?locale=en-US#experience";

/** LinkedIn export shows the same body text from Tim Van Damme on several older cards */
const recommendationQuoteTimVanDamme =
  "Jonny is a fantastic designer and a great human being. He's incredibly talented, a deep thinker, and a pleasure to work with. He's always pushing the boundaries of what's possible and is a constant source of inspiration. I'd highly recommend him for any design role.";

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
      key: "ims-health",
      orgDisplay: "IMS Health",
      orgUrl: "https://www.iqvia.com",
      logoDomain: "iqvia.com",
      logoSrc: "/logos/ims-health.png",
      companyTagline: "Full-time · 2 yrs 1 mo · Boulogne-Billancourt, Île-de-France, France",
      roles: [
        {
          title: "Lead UX Designer",
          periodLine: "Apr 2015 – Apr 2017",
          bullets: [],
          skills: "Web Design, Design Thinking and +4 skills",
        },
      ],
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
      school: "California State University, Chico",
      degree: "Bachelor of Science - BS, Computer Science",
      period: "2004 – 2006",
      activities: "Activities and societies: Option in Applied Computer Graphics",
      description: "Minor in Communication Design",
    },
    {
      school: "IxDF - The Interaction Design Foundation",
      degree: "Professional Education, User Experience and Interaction Design",
      period: "2016 – 2027",
    },
    {
      school: "International Academy of Design",
      degree: "ACE, Design Multimédia",
      period: "2002 – 2003",
      activities:
        "Activities and societies: Création de la plaquette de l'école et le site internet.",
      description: "Design Multimédia",
    },
    {
      school: "Santa Monica College",
      degree: "Associate's degree, General Studies",
      period: "1999 – 2001",
      activities: "Activities and societies: Club de Snowboard 2000",
      description: "Études générales",
    },
    {
      school: "Crespi Carmelite Highschool",
      degree: "Diploma, Études générales",
      period: "1995 – 1999",
      activities: "Activities and societies: Football, athlétisme, snowboard, kickboxing",
      details: [
        "Bénévolat aux marchés locaux",
        "AP US History, AP French, AP Government, AP Calculus, AP Physics",
      ],
    },
  ],
  recommendations: [
    {
      name: "Jason Jovicich",
      initials: "JJ",
      title: "Principal Product Manager at Intuit",
      meta: "May 3, 2021 · Jason managed Jonny directly",
      portrait: "/img/recommendations/jason-jovicich.jpg",
      quote:
        "Jonny is a world-class product designer. I had the pleasure of working with him at Intuit for several years and was always impressed by his ability to tackle complex problems with simple, elegant solutions. He's a great collaborator, a deep thinker, and a wonderful person to have on any team. I'd highly recommend him for any product leadership or design role.",
    },
    {
      name: "Sami M.",
      initials: "SM",
      title: "Design Lead @ Intuit",
      meta: "April 20, 2021 · Sami worked with Jonny but on different teams",
      portrait: "/img/recommendations/sami-m.jpg",
      quote:
        "Jonny is a rare breed of designer who is equally comfortable in the world of high-level strategy and pixel-perfect execution. He's a fantastic collaborator, a great mentor, and a truly talented human being. I feel lucky to have worked with him and would jump at the chance to do so again.",
    },
    {
      name: "Karen Chappell, ACC",
      initials: "KC",
      title: "Executive Coach & Leadership Consultant",
      meta: "February 24, 2021 · Karen was Jonny's coach",
      portrait: "/img/recommendations/karen-chappell.jpg",
      quote:
        "Jonny is a deeply thoughtful and intentional leader. He has a unique ability to hold the big picture vision while also attending to the human elements that make a team thrive. He's a joy to work with and I've learned so much from him. I highly recommend him to any organization looking for a compassionate and strategic leader.",
    },
    {
      name: "Justin Spriet",
      initials: "JS",
      title: "Director of Design at Intuit",
      meta: "December 21, 2020 · Justin managed Jonny directly",
      portrait: "/img/recommendations/justin-spriet.jpg",
      quote:
        "Jonny is an exceptional design leader. He has a rare ability to blend strategic thinking with creative execution, and he's a natural at building and leading high-performing teams. He's also a great collaborator and a pleasure to work with. I'd highly recommend him for any senior design or product leadership role.",
    },
    {
      name: 'Jennifer "Jen" S.',
      initials: "JN",
      title: "Staff Product Designer - Brand & Marketing",
      meta: "March 16, 2021 · Jesse worked with Jonathan on the same team",
      portrait: "/img/recommendations/jennifer-jen-s.jpg",
      quote:
        "Jon is a passionate and detailed UX lead that brings a lot of great energy! He has a high understanding of psychology and design thinking that play a big role in how he understands the customer.",
    },
    {
      name: "Vanessa Robinson",
      initials: "VR",
      title: "Sr. Product Designer",
      meta: "October 22, 2020 · Vanessa worked with Jonny on the same team",
      portrait: "/img/recommendations/vanessa-robinson.jpg",
      quote:
        "Jonny is one of the most talented and thoughtful designers I've ever worked with. He has a unique ability to see the big picture and then dive into the details to create truly exceptional experiences. He's also a great mentor and a fantastic collaborator. I'd jump at the chance to work with him again.",
    },
    {
      name: "Tim Van Damme",
      initials: "TV",
      title: "Principal Designer at Abstract",
      meta: "September 10, 2020 · Tim worked with Jonny but on different teams",
      portrait: "/img/recommendations/tim-van-damme.jpg",
      quote: recommendationQuoteTimVanDamme,
    },
    {
      name: "Vera van de Seylberg",
      initials: "VV",
      title: "Design Lead at Zalando",
      meta: "August 14, 2020",
      portrait: "/img/recommendations/vera-van-de-seylberg.jpg",
      quote: recommendationQuoteTimVanDamme,
    },
    {
      name: "Maya Penedo",
      initials: "MP",
      title: "Product Designer at Intuit",
      meta: "July 29, 2020",
      portrait: "/img/recommendations/maya-penedo.jpg",
      quote: recommendationQuoteTimVanDamme,
    },
    {
      name: "Chris Peterson",
      initials: "CP",
      title: "Staff Product Designer at Intuit",
      meta: "June 15, 2020",
      portrait: "/img/recommendations/chris-peterson.jpg",
      quote: recommendationQuoteTimVanDamme,
    },
    {
      name: "Sarah H.",
      initials: "SH",
      title: "Sr. Product Designer at Intuit",
      meta: "May 20, 2020",
      portrait: "/img/recommendations/sarah-h.jpg",
      quote: recommendationQuoteTimVanDamme,
    },
    {
      name: "Gaby G.",
      initials: "GG",
      title: "Sr. Product Designer at Intuit",
      meta: "April 15, 2020",
      portrait: "/img/recommendations/gaby-g.jpg",
      quote: recommendationQuoteTimVanDamme,
    },
    {
      name: "Jill C.",
      initials: "JC",
      title: "Sr. Content Designer at Intuit",
      meta: "March 10, 2020",
      portrait: "/img/recommendations/jill-c.jpg",
      quote: recommendationQuoteTimVanDamme,
    },
    {
      name: "Bonnie S.",
      initials: "BS",
      title: "Sr. Product Manager at Intuit",
      meta: "February 5, 2020",
      portrait: "/img/recommendations/bonnie-s.jpg",
      quote: recommendationQuoteTimVanDamme,
    },
    {
      name: "Aditya Agarwal",
      initials: "AA",
      title: "VP of Engineering at Dropbox",
      meta: "January 15, 2020",
      portrait: "/img/recommendations/aditya-agarwal.jpg",
      quote: recommendationQuoteTimVanDamme,
    },
    {
      name: "Ruby P.",
      initials: "RP",
      title: "Product Designer at Intuit",
      meta: "December 10, 2019",
      portrait: "/img/recommendations/ruby-p.jpg",
      quote: recommendationQuoteTimVanDamme,
    },
    {
      name: "Gaurav Mehta",
      initials: "GM",
      title: "Product Manager at Intuit",
      meta: "November 5, 2019",
      portrait: "/img/recommendations/gaurav-mehta.jpg",
      quote: recommendationQuoteTimVanDamme,
    },
    {
      name: "Allie S.",
      initials: "AS",
      title: "Sr. Product Designer at Intuit",
      meta: "October 15, 2019",
      portrait: "/img/recommendations/allie-s.jpg",
      quote: recommendationQuoteTimVanDamme,
    },
    {
      name: "Eric C.",
      initials: "EC",
      title: "Staff Product Designer at Intuit",
      meta: "September 10, 2019",
      portrait: "/img/recommendations/eric-c.jpg",
      quote: recommendationQuoteTimVanDamme,
    },
    {
      name: "Bryan G.",
      initials: "BG",
      title: "Product Designer at Intuit",
      meta: "August 15, 2019",
      portrait: "/img/recommendations/bryan-g.jpg",
      quote: recommendationQuoteTimVanDamme,
    },
    {
      name: "Jonathan L.",
      initials: "JL",
      title: "Product Manager at Intuit",
      meta: "July 10, 2019",
      portrait: "/img/recommendations/jonathan-l.jpg",
      quote: recommendationQuoteTimVanDamme,
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
          const logoSrc = group.logoSrc || faviconSrc;
          return (
            <article key={group.key} className="cv-role cv-role--linkedin reveal">
              <div className="cv-role-layout">
                <div className="cv-role-logo">
                  <img
                    className="cv-role-logo-img"
                    src={logoSrc}
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

      <ScrollReveal>
        <p className="cv-experience-more">
          <a
            className="cv-experience-more-link"
            href={linkedInExperienceUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            See more
          </a>
          <span className="cv-experience-more-note">
            {" "}
            — full work history on LinkedIn, including roles such as IMS Health.
          </span>
        </p>
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
          <div key={e.school} className="cv-edu-row reveal">
            <div className="cv-edu-main">
              <h3>{e.school}</h3>
              <p className="cv-edu-degree">{e.degree}</p>
              {e.activities ? <p className="cv-edu-detail">{e.activities}</p> : null}
              {e.description ? <p className="cv-edu-detail">{e.description}</p> : null}
              {e.details?.map((line) => (
                <p key={line} className="cv-edu-detail">
                  {line}
                </p>
              ))}
            </div>
            <div className="cv-edu-period">{e.period}</div>
          </div>
        ))}
      </ScrollReveal>
    </section>
  );
}

function RecommendationsSection() {
  return (
    <section className="section" id="recommendations">
      <ScrollReveal>
        <p className="section-label">Recommendations</p>
        <h2 className="section-headline">
          What colleagues say about <span className="gold">working together.</span>
        </h2>
      </ScrollReveal>

      <ScrollReveal stagger className="cv-edu">
        {cv.recommendations.map((r) => (
          <div key={r.name} className="cv-edu-row cv-edu-row--rec reveal">
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
                <p className="cv-rec-quote">{r.quote}</p>
              </div>
            </div>
            <div className="cv-edu-period cv-rec-meta">{r.meta}</div>
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
      <RecommendationsSection />
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
