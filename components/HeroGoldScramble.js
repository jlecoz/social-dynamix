"use client";

export default function HeroGoldScramble({ text, className = "gold" }) {
  return (
    <span className={className} aria-label={text}>
      {text}
    </span>
  );
}
