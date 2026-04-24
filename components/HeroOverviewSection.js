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

      <ScrollReveal className="hero-overview-bio-band reveal-down">
        <div className="hero-overview-bio">
          <div className="hero-overview-bio-inner">
            <p>
              For as long as I can recall, <strong>visuals, interaction and technology</strong> have been{" "}
              <strong>constant source of inspiration in my life!</strong>
            </p>
            <p>
              From as early on as my first <strong>Atari</strong> desktop when I was 4, to my <strong>NES</strong> at 9
              with Ninja Turtles and Mario Bros, <strong>SEGA</strong> with Sonic, Mortal Kombat and Streets of Rage, to
              the <strong>Playstation 2</strong> and <strong>N64</strong> when I was 16.
            </p>
            <p>
              I was fortune enough to grow up and be{" "}
              <strong>bathed in digital motion graphics and human-computer interactions</strong> for so many of my
              formative years; where coming now to this point in my career (and life), I seek to forge into a
              professional pathway that <strong>truly unlocks the power of my imagination and curiosity</strong>.
            </p>
            <p>
              In today’s society, our <strong>digital channels have become the primary sense input</strong> through which
              people communicate, relate and bond. As <strong>we all need to feel that connection</strong>; the design to
              those experiences truly is the glue that binds us.
            </p>
            <p>
              I am currently exploring <strong>several passion areas</strong> that touch XD such as{" "}
              <strong>AR/VR</strong> experiences, cognitive neural behaviours, motion capturing, machine learning, haptic
              wearable, multimodal I/O and sensory immersion.
            </p>
            <p>Our mind's true innovation drives us to make what is unbelievable into real.</p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
