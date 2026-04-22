"use client";

import { useEffect, useRef } from "react";

/**
 * Scroll-driven card scaling via View Timeline API (see web.dev scroll-driven animations).
 * Sets --numcards on #cards (reserved for layout hooks; scroll runway padding removed from CSS).
 */
export default function WorksCardsTimeline({ children }) {
  const cardsWrapperRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const ViewTimelineCtor = window.ViewTimeline;
    const cardsWrapper = cardsWrapperRef.current;
    if (!cardsWrapper || !ViewTimelineCtor || typeof CSS === "undefined" || typeof CSS.percent !== "function") {
      return undefined;
    }

    const cards = cardsWrapper.querySelectorAll(".card__content");
    if (!cards.length) return undefined;

    const numCards = cards.length;
    cardsWrapper.style.setProperty("--numcards", String(numCards));

    let viewTimeline;
    try {
      viewTimeline = new ViewTimelineCtor({
        subject: cardsWrapper,
        axis: "block",
      });
    } catch {
      return undefined;
    }

    const animations = [];

    cards.forEach((card, index0) => {
      const index = index0 + 1;
      const reverseIndex0 = numCards - index;

      let anim;
      try {
        anim = card.animate(
          {
            transform: [`scale(1)`, `scale(${1 - 0.1 * reverseIndex0})`],
          },
          {
            timeline: viewTimeline,
            fill: "forwards",
            rangeStart: `exit-crossing ${CSS.percent((index0 / numCards) * 100)}`,
            rangeEnd: `exit-crossing ${CSS.percent((index / numCards) * 100)}`,
          }
        );
      } catch {
        return;
      }
      if (anim) animations.push(anim);
    });

    return () => {
      animations.forEach((a) => {
        try {
          a.cancel();
        } catch {
          /* ignore */
        }
      });
      cardsWrapper.style.removeProperty("--numcards");
    };
  }, []);

  return (
    <div id="cards" ref={cardsWrapperRef} className="cards-scroll-driver">
      {children}
    </div>
  );
}
