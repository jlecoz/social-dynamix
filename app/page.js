import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import ScrollReveal from "@/components/ScrollReveal";

const placeholders = {
  hero: "/img/tridium-labs.png",
  cards: [
    "/img/adidas-webcommerce.png",
    "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop&q=80",
  ],
  work: [
    "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop&q=80",
    "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&h=600&fit=crop&q=80",
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&q=80",
  ],
  story: "/img/tridium-tribe.png",
  collective: [
    "/img/founder-avatar.png",
    "/img/louise-cto.png",
    "/img/neal-creative-director.png",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&q=80",
  ],
};

function HeroSection() {
  return (
    <section className="hero" id="home">
      <img className="hero-bg" src={placeholders.hero} alt="" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content">
        <h1 className="hero-headline">
          We work with brands to{" "}
          <span className="gold">set the trends of tomorrow</span>
        </h1>
        <p className="lead">
          We build immersive experiences for the world&rsquo;s boldest brands.
        </p>
        <div className="cta-row">
          <Link className="button button-gold" href="#work">
            Coming Soon
          </Link>
        </div>
      </div>
      <div className="hero-glow" aria-hidden="true" />
    </section>
  );
}

function WhatWeDoSection() {
  const cards = [
    {
      title: "Immersive Commerce",
      copy: "We turn products into experiences. AR, 3D, and spatial technology that lets your customers touch what they desire to have but haven\u2019t yet bought.",
      image: placeholders.cards[0],
    },
    {
      title: "Creative Studio",
      copy: "Strategy. Campaigns. Content. End-to-end creative production for fashion, automotive, and entertainment.",
      image: placeholders.cards[1],
    },
    {
      title: "Art & Culture",
      copy: "We represent artists. We curate exhibitions. We merge physical craft with digital dimension.",
      image: placeholders.cards[2],
    },
  ];

  return (
    <section className="section" id="what-we-do">
      <ScrollReveal>
        <h2 className="section-label">What We Do</h2>
        <p className="section-intro">
          The talent behind <span className="gold">our community.</span>
        </p>
      </ScrollReveal>
      <ScrollReveal stagger className="card-trio">
        {cards.map((card) => (
          <div key={card.title} className="card-panel reveal">
            <div className="card-image-wrap">
              <img src={card.image} alt={card.title} />
            </div>
            <h3>{card.title}</h3>
            <p>{card.copy}</p>
          </div>
        ))}
      </ScrollReveal>
    </section>
  );
}

function FeaturedWorkSection() {
  const tiles = [
    {
      title: "AR/VR Enhanced Commerce",
      category: "Immersive Commerce",
      description: "3D product viewer built for marketplace web commerce. luxury products in spatial 3D interactive experiences.",
      image: placeholders.work[0],
    },
    {
      title: "Interactive Artist Exhibition",
      category: "Art & Culture",
      description: "Digitally enhanced gallery installation blending photography, light, and interactive projection.",
      image: placeholders.work[1],
    },
    {
      title: "Brand Campaign",
      category: "Creative Studio",
      description: "Full creative direction for a lifestyle brand launch. End-to-end design, web and video services from strategy to delivery.",
      image: placeholders.work[2],
    },
  ];

  return (
    <section className="section" id="work">
      <ScrollReveal>
        <h2 className="section-headline">
          Trend setters. <span className="gold">Cross section of computer science and art.</span>
        </h2>
      </ScrollReveal>
      <ScrollReveal stagger className="work-grid">
        {tiles.map((tile) => (
          <div key={tile.title} className="work-tile reveal">
            <img className="work-tile-bg" src={tile.image} alt={tile.title} />
            <div className="work-tile-inner">
              <span className="work-category">{tile.category}</span>
              <h3>{tile.title}</h3>
              <p>{tile.description}</p>
            </div>
          </div>
        ))}
      </ScrollReveal>
    </section>
  );
}

function StorySection() {
  return null;
}

function ServicesSection() {
  const services = [
    { name: "Immersive Commerce", desc: "AR and 3D product experiences that turn browsers into buyers." },
    { name: "Brand Strategy & Campaigns", desc: "From concept to culture. Creative direction that moves markets." },
    { name: "Content Production", desc: "Film, motion, 3D, editorial. Whatever the story needs." },
    { name: "Artist Representation", desc: "We find, sign, and amplify artists ready for the digital age." },
    { name: "Exhibition & Event Design", desc: "Installations that people walk through and never forget." },
    { name: "Custom Hardware", desc: "Performance workstations built by hand for creators and creative labs." },
    { name: "SaaS & API Solutions", desc: "Plug our immersive technology into your platform. Subscription-based." },
    { name: "Digital Transformation", desc: "We help legacy brands step into the next dimension." },
  ];

  return (
    <section className="section section-services" id="services">
      <ScrollReveal>
        <p className="section-label">Services</p>
        <p className="section-intro">What we bring to the table.</p>
      </ScrollReveal>
      <ScrollReveal stagger className="services-list">
        {services.map((s) => (
          <div key={s.name} className="service-row reveal">
            <h4>{s.name}</h4>
            <p>{s.desc}</p>
          </div>
        ))}
      </ScrollReveal>
    </section>
  );
}

function CollectiveSection() {
  const members = [
    { role: "Founder & CEO", image: placeholders.collective[0] },
    { role: "Co-Founder & CTO", image: placeholders.collective[2] },
  ];

  return (
    <section className="section" id="collective">
      <ScrollReveal>
        <p className="section-label">The Collective</p>
        <h2 className="section-headline">
          The talent behind <span className="gold">our community.</span>
        </h2>
        <p className="section-intro">
          Tridium is more than a studio. It&rsquo;s a network of artists,
          technologists, and cultural catalysts from around the world.
        </p>
      </ScrollReveal>
      <ScrollReveal stagger className="collective-grid">
        {members.map((m) => (
          <div key={m.role} className="collective-member reveal">
            <div className="member-avatar">
              <img src={m.image} alt={m.role} />
            </div>
            <span className="member-role">{m.role}</span>
          </div>
        ))}
      </ScrollReveal>
    </section>
  );
}

function PartnersSection() {
  return (
    <section className="section section-partners" id="partners">
      <ScrollReveal>
        <p className="partners-text">
          Defining tomorrow&rsquo;s culture, today
        </p>
      </ScrollReveal>
    </section>
  );
}

function ContactCTA() {
  const paths = [
    { label: "For Brands", action: "Partner with us", href: "/contact" },
    { label: "For Artists", action: "Join the collective", href: "/contact" },
    { label: "For Everyone Else", action: "Say hello", href: "/contact" },
  ];

  return (
    <section className="section section-contact-cta" id="contact">
      <ScrollReveal>
        <h2 className="section-headline">
          Let&rsquo;s build something that{" "}
          <span className="gold">stands the test of time.</span>
        </h2>
        <p className="section-intro">
          Whether you&rsquo;re a brand, an artist, or a dreamer with a vision
          &mdash; we want to hear from you.
        </p>
      </ScrollReveal>
      <ScrollReveal stagger className="contact-paths">
        {paths.map((p) => (
          <Link key={p.label} href={p.href} className="contact-path-card reveal">
            <span className="path-label">{p.label}</span>
            <span className="path-action">{p.action} &rarr;</span>
          </Link>
        ))}
      </ScrollReveal>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatWeDoSection />
      <FeaturedWorkSection />
      <StorySection />
      <ServicesSection />
      <CollectiveSection />
      <PartnersSection />
      <ContactCTA />
    </>
  );
}
