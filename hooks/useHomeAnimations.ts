import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  initCustomCursor,
  initHeroEntrance,
  initHeroTilt,
  initHeroDecor,
  initTextIntro,
  initProjectsGrid,
  initHorizontalScroll,
  initPinSection,
  initFullscreenReveal,
  initRevealDecor,
  initSplitTextReveal,
  initSplitDecor,
  initParallaxLayers,
  initParallaxDecor,
  initFloatingObjects,
  initCounterStats,
  initMarquee,
  initMorphGrid,
  initWindowReveal,
  initTimeline,
  initFooter,
} from "@/lib/animations";

export type HomeAnimationRefs = {
  cursorRef: RefObject<HTMLDivElement | null>;
  cursorDotRef: RefObject<HTMLDivElement | null>;
  heroSectionRef: RefObject<HTMLElement | null>;
  heroRef: RefObject<HTMLHeadingElement | null>;
  heroDecorRef: RefObject<HTMLDivElement | null>;
  textRef: RefObject<HTMLParagraphElement | null>;
  projectsRef: RefObject<HTMLDivElement | null>;
  horizontalRef: RefObject<HTMLDivElement | null>;
  pinSectionRef: RefObject<HTMLDivElement | null>;
  revealRef: RefObject<HTMLDivElement | null>;
  revealDecorRef: RefObject<HTMLDivElement | null>;
  splitTextRef: RefObject<HTMLHeadingElement | null>;
  splitDecorRef: RefObject<HTMLDivElement | null>;
  parallaxRef: RefObject<HTMLDivElement | null>;
  parallaxDecorRef: RefObject<HTMLDivElement | null>;
  floatingObjsRef: RefObject<HTMLDivElement | null>;
  counterRef: RefObject<HTMLDivElement | null>;
  marqueeRef: RefObject<HTMLDivElement | null>;
  morphRef: RefObject<HTMLDivElement | null>;
  windowRevealRef: RefObject<HTMLDivElement | null>;
  timelineRef: RefObject<HTMLDivElement | null>;
  footerRef: RefObject<HTMLElement | null>;
};

/**
 * Menjalankan seluruh animasi GSAP/ScrollTrigger halaman Home.
 * Satu-satunya tempat yang tahu urutan section & elemen apa yang butuh animasi apa —
 * page.tsx sendiri tinggal render JSX + pasang ref.
 */
export function useHomeAnimations(refs: HomeAnimationRefs) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cleanups: Array<() => void> = [];

    // Cursor
    if (refs.cursorRef.current && refs.cursorDotRef.current) {
      cleanups.push(
        initCustomCursor(refs.cursorRef.current, refs.cursorDotRef.current),
      );
    }

    // Hero
    if (refs.heroSectionRef.current && refs.heroRef.current) {
      cleanups.push(
        initHeroTilt(refs.heroSectionRef.current, refs.heroRef.current),
      );
    }
    if (refs.heroDecorRef.current) {
      initHeroDecor(refs.heroDecorRef.current);
    }

    // Sisa animasi butuh elemen inti yang sama seperti versi original —
    // kalau salah satu belum ter-render, hentikan di sini.
    if (
      !refs.heroRef.current ||
      !refs.textRef.current ||
      !refs.projectsRef.current ||
      !refs.horizontalRef.current ||
      !refs.pinSectionRef.current
    ) {
      return () => cleanups.forEach((fn) => fn());
    }

    initHeroEntrance(refs.heroRef.current);
    initTextIntro(refs.textRef.current);
    initProjectsGrid(refs.projectsRef.current);
    initHorizontalScroll(refs.horizontalRef.current);
    initPinSection(refs.pinSectionRef.current);

    // Fullscreen reveal
    if (refs.revealRef.current) {
      initFullscreenReveal(refs.revealRef.current);
      if (refs.revealDecorRef.current) {
        initRevealDecor(refs.revealRef.current, refs.revealDecorRef.current);
      }
    }

    // Split text
    if (refs.splitTextRef.current) {
      initSplitTextReveal(refs.splitTextRef.current);
      if (refs.splitDecorRef.current) {
        initSplitDecor(refs.splitTextRef.current, refs.splitDecorRef.current);
      }
    }

    // Floating objects
    if (refs.floatingObjsRef.current) {
      initFloatingObjects(refs.floatingObjsRef.current);
    }

    // Counter
    if (refs.counterRef.current) {
      initCounterStats(refs.counterRef.current);
    }

    // Marquee
    if (refs.marqueeRef.current) {
      cleanups.push(initMarquee(refs.marqueeRef.current));
    }

    // Morph grid
    if (refs.morphRef.current) {
      initMorphGrid(refs.morphRef.current);
    }

    // Parallax
    if (refs.parallaxRef.current) {
      initParallaxLayers(refs.parallaxRef.current);
      if (refs.parallaxDecorRef.current) {
        initParallaxDecor(
          refs.parallaxRef.current,
          refs.parallaxDecorRef.current,
        );
      }
    }

    // Window reveal
    if (refs.windowRevealRef.current) {
      initWindowReveal(refs.windowRevealRef.current);
    }

    // Timeline
    if (refs.timelineRef.current) {
      initTimeline(refs.timelineRef.current);
    }

    // Footer
    if (refs.footerRef.current) {
      initFooter(refs.footerRef.current);
    }

    return () => {
      cleanups.forEach((fn) => fn());
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
