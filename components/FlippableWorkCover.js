"use client";

import { useState } from "react";

export default function FlippableWorkCover({ item, children }) {
  const [flipped, setFlipped] = useState(false);
  const showBack = () => setFlipped(true);

  if (!item?.coverImage) return null;

  return (
    <div
      className={`cv-work-card-cover cv-work-card-cover--flip ${flipped ? "is-flipped" : ""}`}
      onMouseLeave={() => setFlipped(false)}
    >
      <button
        type="button"
        className="cv-work-card-flip-hotspot"
        aria-label={`Show ${item.title} details`}
        aria-pressed={flipped}
        onClick={showBack}
        onMouseEnter={showBack}
      >
        <span className="sr-only">Show details</span>
      </button>

      <div className="cv-work-card-cover-flip">
        <div className="cv-work-card-cover-face cv-work-card-cover-front">
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

        <div className="cv-work-card-cover-face cv-work-card-cover-back">
          {children}
        </div>
      </div>
    </div>
  );
}

