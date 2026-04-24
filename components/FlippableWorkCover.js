"use client";

import Link from "next/link";
import { useId, useState } from "react";

export default function FlippableWorkCover({ item }) {
  const panelId = useId();
  const [flipped, setFlipped] = useState(false);

  if (!item?.coverImage) return null;

  return (
    <div className={`cv-work-card-cover cv-work-card-cover--flip ${flipped ? "is-flipped" : ""}`}>
      <button
        type="button"
        className="cv-work-card-cover-toggle"
        aria-label={flipped ? `Show ${item.title} cover image` : `Show ${item.title} details`}
        aria-expanded={flipped}
        aria-controls={panelId}
        onClick={() => setFlipped((v) => !v)}
      >
        <span className="sr-only">{flipped ? "Show image" : "Show details"}</span>
      </button>

      <div id={panelId} className="cv-work-card-cover-flip">
        <div className="cv-work-card-cover-face cv-work-card-cover-front" aria-hidden={flipped}>
          <img
            className="cv-work-card-cover-img"
            src={item.coverImage}
            alt={item.coverAlt || ""}
            loading="lazy"
            decoding="async"
            width={440}
            height={440}
          />
        </div>

        <div className="cv-work-card-cover-face cv-work-card-cover-back" aria-hidden={!flipped}>
          <div className="cv-work-card-back-inner">
            <h3 className="cv-work-card-back-title">{item.title}</h3>
            {item.client ? <p className="cv-work-card-back-client">{item.client}</p> : null}
            {item.blurb ? <p className="cv-work-card-back-blurb">{item.blurb}</p> : null}
            <div className="cv-work-card-back-actions">
              <Link href={`/works/${item.slug}`} className="button button-secondary">
                Learn more
              </Link>
              <a className="cv-work-card-external" href={item.href} target="_blank" rel="noopener noreferrer">
                Client site →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

