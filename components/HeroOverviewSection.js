"use client";

import Link from "next/link";
import { useRef } from "react";
import ScrollDecryptText from "@/components/ScrollDecryptText";

/** Stagger decrypt slightly so lines feel sequential while sharing one scroll range */
const OFFSET_META = ["start 0.92", "start 0.14"];
const OFFSET_TITLE = ["start 0.88", "start 0.11"];
const OFFSET_TAGS = ["start 0.84", "start 0.08"];

export default function HeroOverviewSection({ meta, title, skillTagsLine }) {
  const sectionRef = useRef(null);

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
        <p className="eyebrow" aria-label={meta}>
          <ScrollDecryptText
            text={meta}
            containerRef={sectionRef}
            offset={OFFSET_META}
          />
        </p>
        <h1 className="hero-headline" aria-label={title}>
          <span className="gold">
            <ScrollDecryptText
              text={title}
              containerRef={sectionRef}
              offset={OFFSET_TITLE}
            />
          </span>
        </h1>
        <p className="cv-core-tags" aria-label={skillTagsLine}>
          <ScrollDecryptText
            text={skillTagsLine}
            containerRef={sectionRef}
            offset={OFFSET_TAGS}
          />
        </p>

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
