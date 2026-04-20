"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion, useScroll, useMotionValueEvent } from "framer-motion";
import { buildSegment } from "@/components/scrambleText";

const DEFAULT_BEFORE = "Design leadership across ";
const DEFAULT_GOLD = "product and platform.";

/**
 * Scroll-linked decrypt for section headlines and intros.
 * Scroll target is this element so progress tracks as it moves through the viewport.
 *
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
  const elRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const singleMode = text != null && text !== "";

  const { scrollYProgress } = useScroll({
    target: elRef,
    offset: ["start 0.9", "start 0.18"],
  });

  const [progress, setProgress] = useState(() => scrollYProgress.get());
  const [tick, setTick] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => setProgress(v));

  useEffect(() => {
    if (reduceMotion === true || progress >= 0.999) return undefined;
    let raf;
    const loop = (t) => {
      setTick(Math.floor(t / 45));
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [progress, reduceMotion]);

  const full = singleMode ? text : beforeProp + goldProp;

  const rendered = useMemo(() => {
    if (singleMode) {
      if (reduceMotion === true) {
        return { kind: "single", body: text };
      }
      const total = text.length;
      const cutoff = Math.min(total, Math.ceil(progress * total));
      return {
        kind: "single",
        body: buildSegment(text, 0, cutoff, tick),
      };
    }
    if (reduceMotion === true) {
      return {
        kind: "split",
        beforeText: beforeProp,
        goldText: goldProp,
      };
    }
    const total = beforeProp.length + goldProp.length;
    const cutoff = Math.min(total, Math.ceil(progress * total));
    return {
      kind: "split",
      beforeText: buildSegment(beforeProp, 0, cutoff, tick),
      goldText: buildSegment(goldProp, beforeProp.length, cutoff, tick),
    };
  }, [
    singleMode,
    text,
    progress,
    tick,
    reduceMotion,
    beforeProp,
    goldProp,
  ]);

  if (rendered.kind === "single") {
    return (
      <Tag ref={elRef} className={className} aria-label={full}>
        {rendered.body}
      </Tag>
    );
  }

  return (
    <Tag ref={elRef} className={className} aria-label={full}>
      {rendered.beforeText}
      <span className="gold">{rendered.goldText}</span>
    </Tag>
  );
}
