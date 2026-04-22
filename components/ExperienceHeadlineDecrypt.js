"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { buildSegment } from "@/components/scrambleText";

const DEFAULT_BEFORE = "Design leadership across ";
const DEFAULT_GOLD = "product and platform.";

/**
 * Headline/label renderer.
 * Two modes:
 * - `text` — single block (e.g. intro paragraph), no gold span
 * - `before` + `gold` — headline with trailing gold span
 *
 * Optional:
 * - `decrypt` — scroll-linked decrypt/scramble reveal (recommended for short labels)
 */
export default function ExperienceHeadlineDecrypt({
  text,
  before: beforeProp = DEFAULT_BEFORE,
  gold: goldProp = DEFAULT_GOLD,
  as: Tag = "h2",
  className = "section-headline",
  decrypt = false,
}) {
  const elRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const singleMode = text != null && text !== "";
  const full = singleMode ? text : beforeProp + goldProp;

  const shouldDecrypt = decrypt === true && singleMode && reduceMotion !== true;

  const { scrollYProgress } = useScroll({
    target: elRef,
    offset: ["start 0.92", "start 0.3"],
  });

  const [progress, setProgress] = useState(() => scrollYProgress.get());
  const [tick, setTick] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (shouldDecrypt) setProgress(v);
  });

  useEffect(() => {
    if (!shouldDecrypt || progress >= 0.999) return undefined;
    let raf;
    const loop = (t) => {
      setTick(Math.floor(t / 45));
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [shouldDecrypt, progress]);

  const decryptedText = useMemo(() => {
    if (!shouldDecrypt) return text;
    const total = text.length;
    const cutoff = Math.min(total, Math.ceil(progress * total));
    return buildSegment(text, 0, cutoff, tick);
  }, [shouldDecrypt, text, progress, tick]);

  if (singleMode) {
    return (
      <Tag ref={elRef} className={className} aria-label={full}>
        {decryptedText}
      </Tag>
    );
  }

  return (
    <Tag ref={elRef} className={className} aria-label={full}>
      {beforeProp}
      <span className="gold">{goldProp}</span>
    </Tag>
  );
}
