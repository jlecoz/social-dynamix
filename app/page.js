import Link from "next/link";
import { headers } from "next/headers";
import { getSiteConfig } from "@/config/getSiteConfig";
import ScrollReveal from "@/components/ScrollReveal";

const cv = {
  name: "Jonathan Le Coz",
  title: "Experience Design Leader",
  meta: "20+ years of arts, design, and technology",
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
    "User-centered Design",
    "Customer Innovation",
    "Cross Collaboration",
    "Squad Communication",
  ],
  experience: [
    {
      role: "Director of Digital Experience Design",
      org: "Imperial Brands",
      period: "2021 - present",
      bullets: [
        "Advocate for design thinking and design linking, supporting Product Owners, Engineers and Designers throughout the NGP pillar to work smart and drive the vision for user experience across multiple product lines.",
        "Develop, maintain and scale design processes and tools to drive efficiency and velocity internally and with external partners.",
        "Review, assess and prioritize design activity with Delivery Managers, Product Owners and Engineers to ensure design supports the digital delivery roadmap.",
        "Build out the internal design team — growing in-house capability across UX and UI; hire, nurture, stretch and challenge the team alongside existing design partners.",
        "Own the vision and governance of the Breeze design system, delivering a multi-brand, white-label framework supporting day-to-day experimentation and optimization across CMS tools and multi-market localisation.",
      ],
    },
    {
      role: "Experience Design Lead",
      org: "Auto Trader UK",
      orgUrl: "https://www.autotrader.co.uk",
      period: "2020 - 2021",
      bullets: [
        "Helped cross-functional teams understand and define pain points and potential gains for the Digital Retailing offer for retailers and customers.",
        "Line-managed and mentored 3 product designers; led 7 other designers to deliver their best work and grow their careers.",
        "Delivered designs/specifications for funnel experiences (Part Exchange, Finance, Reservation) and the MVP Digital Retailing experience piloted across retailers.",
      ],
    },
    {
      role: "Design Lead",
      org: "Booking.com",
      orgUrl: "https://www.booking.com",
      period: "2018 - 2020",
      bullets: [
        "Steered discovery and experimentation to influence stakeholders and deliver customer-focused end-to-end experiences increasing convenience, loyalty and engagement.",
        "Led 3 UX designers to define and deliver solutions for pain points across the ground transport business.",
        "Partnered with product/engineering leads on epics, user stories, prioritisation and backlog refinement; contributed to C-level initiatives (Design Systems, processes, onboarding, recruitment).",
      ],
    },
    {
      role: "Principal Product Designer",
      org: "Intuit France (QuickBooks)",
      orgUrl: "https://www.quickbooks.fr",
      period: "2017 - 2018",
      bullets: [
        "Uncovered customer problems around finances to help people save time, make money and gain confidence.",
        "Led cross-functional teams through research-informed design studios to ideate, prototype and refine workflows (invoicing, expenses, reports, taxes).",
        "Coordinated rapid experimentation to pressure-test assumptions and align solutions with expectations and local laws (GDPR, VAT anti-fraud, MTD UK).",
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

function HeroSection() {
  return (
    <section className="hero hero-cv" id="overview">
      <div className="hero-content">
        <p className="eyebrow">{cv.meta}</p>
        <h1 className="hero-headline">
          {cv.name}
          <br />
          <span className="gold">{cv.title}</span>
        </h1>
        <p className="cv-core-tags">{cv.skillTags.join(" • ")}</p>
        <p className="lead">
          {cv.location} &bull;{" "}
          <a href={`mailto:${cv.email}`}>{cv.email}</a> &bull;{" "}
          <a href="tel:+447931637144">{cv.phone}</a>
        </p>

        <div className="cta-row">
          <Link className="button button-gold" href="#experience">
            View experience
          </Link>
          <Link className="button button-secondary" href="/contact">
            Contact
          </Link>
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
        {cv.experience.map((item) => (
          <article key={`${item.role}-${item.org}`} className="cv-role reveal">
            <header className="cv-role-head">
              <div className="cv-role-title">
                <h3>{item.role}</h3>
                <p className="cv-role-org">
                  {item.orgUrl ? (
                    <a href={item.orgUrl} target="_blank" rel="noopener noreferrer">
                      {item.org}
                    </a>
                  ) : (
                    item.org
                  )}
                </p>
              </div>
              <div className="cv-role-period">{item.period}</div>
            </header>
            <ul className="cv-bullets">
              {item.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </article>
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
          <SkillsWheelSvg />
          <h3 className="cv-subhead">Key skills</h3>
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
          <div className="cv-knowledge">
            {cv.knowledge.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function SkillsWheelSvg() {
  // Geometry: r=110 -> circumference ≈ 691.150
  const C = 691.150;
  const seg = {
    passionate: 270,
    bold: 170,
    social: 170,
    funny: 81.15,
  };
  const offsets = {
    passionate: 0,
    bold: -seg.passionate,
    social: -(seg.passionate + seg.bold),
    funny: -(seg.passionate + seg.bold + seg.social),
  };

  const boundaries = [
    seg.passionate,
    seg.passionate + seg.bold,
    seg.passionate + seg.bold + seg.social,
    seg.passionate + seg.bold + seg.social + seg.funny,
  ].map((len) => -90 + (len / C) * 360);

  // Label arcs are tuned to visually match the reference image.
  // Note: some arcs intentionally run "backwards" so the word reads correctly.
  const labelArcs = [
    { id: "arc-passionate", start: -20, end: 72, text: "PASSIONATE", dy: -4 },
    { id: "arc-bold", start: 98, end: 150, text: "BOLD", dy: -4 },
    { id: "arc-social", start: 202, end: 268, text: "SOCIAL", dy: -4 },
    // Left side: path runs top->bottom (clockwise) so text reads bottom-up visually like the reference.
    { id: "arc-funny", start: 128, end: 232, text: "FUNNY", dy: -4 },
  ];

  const polar = (cx, cy, r, deg) => {
    const a = (Math.PI / 180) * deg;
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
  };

  const arcPath = (cx, cy, r, startDeg, endDeg) => {
    const start = polar(cx, cy, r, startDeg);
    const end = polar(cx, cy, r, endDeg);
    const largeArc = Math.abs(endDeg - startDeg) > 180 ? 1 : 0;
    const sweep = 1;
    return `M ${start.x.toFixed(3)} ${start.y.toFixed(3)} A ${r} ${r} 0 ${largeArc} ${sweep} ${end.x.toFixed(
      3
    )} ${end.y.toFixed(3)}`;
  };

  return (
    <div className="skills-wheel" aria-label="Skills attributes: passionate, bold, social, funny">
      <svg viewBox="0 0 320 320" role="img" aria-hidden="true">
        <defs>
          {labelArcs.map((a) => (
            <path
              key={a.id}
              id={a.id}
              d={arcPath(160, 160, 152, a.start, a.end)}
              fill="none"
            />
          ))}
        </defs>

        {/* Outer/inner soft rings */}
        <circle cx="160" cy="160" r="132" fill="none" stroke="#E6E6E6" strokeWidth="6" />
        <circle cx="160" cy="160" r="88" fill="none" stroke="#E6E6E6" strokeWidth="10" />

        {/* Donut segments (base grey underlay + colored arcs) */}
        <circle
          cx="160"
          cy="160"
          r="110"
          fill="none"
          stroke="#E6E6E6"
          strokeWidth="40"
          transform="rotate(-90 160 160)"
        />

        <circle
          cx="160"
          cy="160"
          r="110"
          fill="none"
          stroke="#244F8E"
          strokeWidth="40"
          strokeDasharray={`${seg.passionate} ${C - seg.passionate}`}
          strokeDashoffset={offsets.passionate}
          transform="rotate(-90 160 160)"
        />
        <circle
          cx="160"
          cy="160"
          r="110"
          fill="none"
          stroke="#3AA0C9"
          strokeWidth="40"
          strokeDasharray={`${seg.bold} ${C - seg.bold}`}
          strokeDashoffset={offsets.bold}
          transform="rotate(-90 160 160)"
        />
        <circle
          cx="160"
          cy="160"
          r="110"
          fill="none"
          stroke="#2E67A2"
          strokeWidth="40"
          strokeDasharray={`${seg.social} ${C - seg.social}`}
          strokeDashoffset={offsets.social}
          transform="rotate(-90 160 160)"
        />
        <circle
          cx="160"
          cy="160"
          r="110"
          fill="none"
          stroke="#3AA0C9"
          strokeWidth="40"
          strokeDasharray={`${seg.funny} ${C - seg.funny}`}
          strokeDashoffset={offsets.funny}
          transform="rotate(-90 160 160)"
        />

        {/* White dividers */}
        {boundaries.map((deg) => {
          const a = polar(160, 160, 90, deg);
          const b = polar(160, 160, 130, deg);
          return (
            <line
              key={deg}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="#FFFFFF"
              strokeWidth="6"
              strokeLinecap="round"
            />
          );
        })}

        {/* Center hole */}
        <circle cx="160" cy="160" r="70" fill="#FFFFFF" />

        {/* Curved labels */}
        <g
          fill="#111111"
          fontFamily="var(--font-body)"
          fontSize="18"
          letterSpacing="2.8"
          style={{ textTransform: "uppercase" }}
        >
          {labelArcs.map((a) => (
            <text key={a.id}>
              <textPath
                href={`#${a.id}`}
                startOffset="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                dy={a.dy}
              >
                {a.text}
              </textPath>
            </text>
          ))}
        </g>
      </svg>
    </div>
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
          <a className="button button-secondary" href={`mailto:${siteConfig.contactEmail}`}>
            {siteConfig.contactEmail}
          </a>
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
