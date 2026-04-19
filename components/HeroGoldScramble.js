"use client";

import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { buildSegment } from "@/components/scrambleText";

const REVEAL_MS = 1600;

/**
 * Timed scramble-to-reveal for the hero gold title (above the fold; not scroll-linked).
 */
export default function HeroGoldScramble({ text, className = "gold" }) {
  const reduceMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [tick, setTick] = useState(0);

  useLayoutEffect(() => {
    if (reduceMotion === true) setProgress(1);
  }, [reduceMotion]);

  useEffect(() => {
    if (reduceMotion === true) {
      return undefined;
    }
    const t0 = performance.now();
    let raf;
    const loop = (now) => {
      const p = Math.min(1, (now - t0) / REVEAL_MS);
      setProgress(p);
      setTick(Math.floor(now / 45));
      if (p < 1) raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [reduceMotion]);

  const display = useMemo(() => {
    if (reduceMotion === true) return text;
    const total = text.length;
    const cutoff = Math.min(total, Math.ceil(progress * total));
    return buildSegment(text, 0, cutoff, tick);
  }, [text, progress, tick, reduceMotion]);

  return (
    <span className={className} aria-label={text}>
      {display}
    </span>
  );
}
