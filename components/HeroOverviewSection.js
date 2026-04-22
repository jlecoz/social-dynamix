"use client";

import { useRef } from "react";
import Link from "next/link";
import HeroGoldScramble from "@/components/HeroGoldScramble";
import ScrollReveal from "@/components/ScrollReveal";
import { useScrollParallax } from "@/lib/useScrollParallax";

export default function HeroOverviewSection({ meta, title, skillTagsLine }) {
  const sectionRef = useRef(null);

  useScrollParallax(
    () => {
      const root = sectionRef.current;
      if (!root) return null;
      return {
        root,
        bg: root.querySelector(".hero-bg-embed"),
        fg: root.querySelector(".hero-content"),
      };
    },
    { bgRate: 0.22, fgRate: -0.075, bgScale: 1.08, maxTravel: 200 }
  );

  return (
    <section ref={sectionRef} className="hero hero-cv" id="overview">
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
        <div className="hero-cv-avatar">
          <img
            className="hero-cv-avatar-img"
            src="/img/hero-jonathan-portrait.png"
            alt="Jonathan Le Coz, Experiential Designer"
            width={330}
            height={330}
            loading="eager"
            decoding="async"
          />
        </div>
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
