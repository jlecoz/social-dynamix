"use client";

import { useEffect, useMemo, useState } from "react";
import { useReducedMotion, useScroll, useMotionValueEvent } from "framer-motion";

const CHARSET =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

/** Deterministic scramble so server render matches hydration (progress = 0). */
function scrambleAt(index) {
  const x = Math.sin(index * 12.9898 + 78.233) * 43758.5453123;
  const f = x - Math.floor(x);
  return CHARSET[Math.floor(f * CHARSET.length) % CHARSET.length];
}

function buildDisplay(text, progress) {
  if (!text) return "";
  const len = text.length;
  const cutoff = Math.min(len, Math.ceil(progress * len));
  let out = "";
  for (let i = 0; i < len; i++) {
    const c = text[i];
    if (i < cutoff) {
      out += c;
      continue;
    }
    if (/\s/.test(c)) {
      out += c;
      continue;
    }
    out += scrambleAt(i);
  }
  return out;
}

/**
 * Reveals text left-to-right based on Framer Motion scroll progress on `containerRef`.
 */
export default function ScrollDecryptText({
  text,
  className = "",
  containerRef,
  offset = ["start 0.9", "start 0.12"],
  ariaHidden = true,
}) {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset,
  });

  const [progress, setProgress] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setProgress(v);
  });

  useEffect(() => {
    if (reduceMotion === true) return;
    setProgress(scrollYProgress.get());
  }, [scrollYProgress, reduceMotion]);

  const display = useMemo(() => {
    if (reduceMotion === true) return text;
    return buildDisplay(text, progress);
  }, [text, progress, reduceMotion]);

  return (
    <span className={className} aria-hidden={ariaHidden}>
      {display}
    </span>
  );
}
