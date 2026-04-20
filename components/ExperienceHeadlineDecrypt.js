"use client";

const DEFAULT_BEFORE = "Design leadership across ";
const DEFAULT_GOLD = "product and platform.";

/**
 * Static headline/label renderer.
 * Two modes:
 * - `text` — single block (e.g. intro paragraph), no gold span
 * - `before` + `gold` — headline with trailing gold span
 */
export default function ExperienceHeadlineDecrypt({
  text,
  before: beforeProp = DEFAULT_BEFORE,
  gold: goldProp = DEFAULT_GOLD,
  as: Tag = "h2",
  className = "section-headline",
}) {
  const singleMode = text != null && text !== "";
  const full = singleMode ? text : beforeProp + goldProp;

  if (singleMode) {
    return (
      <Tag className={className} aria-label={full}>
        {text}
      </Tag>
    );
  }

  return (
    <Tag className={className} aria-label={full}>
      {beforeProp}
      <span className="gold">{goldProp}</span>
    </Tag>
  );
}
