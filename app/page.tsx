"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    id: 1,
    title: "Event Rehat Sejenak Bersama Alqur'an",
    category: "Livestreaming",
    image: "/images/rsba.png",
    year: "2025",
  },
  {
    id: 2,
    title: "Event Syawalan Organisasi KBM & EIC",
    category: "Livestreaming",
    image: "/images/syawalan-organisasi.png",
    year: "2026",
  },
  {
    id: 3,
    title: "Event Peresmian Balai Prawirotaman III",
    category: "Livestreaming",
    image: "/images/peresmian-balai.png",
    year: "2026",
  },
  {
    id: 4,
    title: "Event Peresmian Balai Prawirotaman III",
    category: "Livestreaming",
    image: "/images/peresmian-balai2.png",
    year: "2026",
  },
  {
    id: 5,
    title: "Testing | Talkshow Santai KBM & EIC",
    category: "Record",
    image: "/images/testing-talkshow.png",
    year: "2026",
  },
  {
    id: 6,
    title: "Talkshow Santai bersama CEO 1010DRY",
    category: "Record",
    image: "/images/talkshow-tenten.png",
    year: "2026",
  },
  {
    id: 7,
    title: "Talkshow Santai bersama Dosen STMIK El Rahma Yogyakarta",
    category: "Record",
    image: "/images/talkshow-etikabisnis.png",
    year: "2026",
  },
];

const works = [
  {
    id: 1,
    title: "Photography On Stage",
    category: "Photography",
    image: "/images/photography.png",
  },
  {
    id: 2,
    title: "Desain Grafis Progress",
    category: "Design",
    image: "/images/canva-progress.png",
  },
  {
    id: 3,
    title: "Livestreaming Multicam",
    category: "Livestreaming",
    image: "/images/foh-image.png",
  },
  {
    id: 4,
    title: "Cinematic & Documenter Take Video",
    category: "Videography",
    image: "/images/videography.png",
  },
  {
    id: 5,
    title: "Editing Video",
    category: "Video",
    image: "/images/streaming.png",
  },
];

const morphImages = [
  { h: "h-[300px]", label: "Event RSBA", image: "/images/foh-tahsin.png" },
  {
    h: "h-[400px]",
    label: "Syawalan KBM & EIC",
    image: "/images/campers-valdo.png",
  },
  {
    h: "h-[300px]",
    label: "Talkshow Event ",
    image: "/images/sapto-ngedit.png",
  },
  { h: "h-[400px]", label: "Streaming", image: "/images/streaming2.png" },
  { h: "h-[300px]", label: "Editing", image: "/images/fotbar-pdd-tahsin.png" },
  {
    h: "h-[400px]",
    label: "Behind The Scene",
    image: "/images/foh-image1.png",
  },
];

export default function Home() {
  const heroRef = useRef<HTMLHeadingElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const horizontalRef = useRef<HTMLDivElement | null>(null);
  const pinSectionRef = useRef<HTMLDivElement | null>(null);
  const revealRef = useRef<HTMLDivElement | null>(null);
  const splitTextRef = useRef<HTMLHeadingElement | null>(null);
  const parallaxRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLElement | null>(null);

  const floatingObjsRef = useRef<HTMLDivElement | null>(null);
  const counterRef = useRef<HTMLDivElement | null>(null);
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const morphRef = useRef<HTMLDivElement | null>(null);

  const windowRevealRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<HTMLDivElement | null>(null);

  const cursorRef = useRef<HTMLDivElement | null>(null);
  const cursorDotRef = useRef<HTMLDivElement | null>(null);
  const heroSectionRef = useRef<HTMLElement | null>(null);

  // decorated section refs
  const revealDecorRef = useRef<HTMLDivElement | null>(null);
  const splitDecorRef = useRef<HTMLDivElement | null>(null);
  const parallaxDecorRef = useRef<HTMLDivElement | null>(null);
  const heroDecorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // ============================================
    // 🔥 CUSTOM MAGNETIC CURSOR
    // ============================================
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    if (cursor && cursorDot) {
      let mouseX = 0,
        mouseY = 0,
        cursorX = 0,
        cursorY = 0,
        dotX = 0,
        dotY = 0;

      window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });

      gsap.ticker.add(() => {
        cursorX += (mouseX - cursorX) * 0.08;
        cursorY += (mouseY - cursorY) * 0.08;
        dotX += (mouseX - dotX) * 0.35;
        dotY += (mouseY - dotY) * 0.35;
        gsap.set(cursor, { x: cursorX - 20, y: cursorY - 20 });
        gsap.set(cursorDot, { x: dotX - 4, y: dotY - 4 });
      });

      const hoverTargets = document.querySelectorAll(
        "a, button, .morph-card, .float-obj, h1, h2",
      );
      hoverTargets.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          gsap.to(cursor, {
            scale: 2.5,
            opacity: 0.6,
            borderColor: "rgba(168,85,247,0.8)",
            duration: 0.3,
            ease: "power2.out",
          });
        });
        el.addEventListener("mouseleave", () => {
          gsap.to(cursor, {
            scale: 1,
            opacity: 1,
            borderColor: "rgba(255,255,255,0.5)",
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }

    // ============================================
    // 🔥 HERO 3D TILT EFFECT
    // ============================================
    const heroSection = heroSectionRef.current;
    const heroText = heroRef.current;

    if (heroSection && heroText) {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = heroSection.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const x = e.clientX - rect.left - centerX;
        const y = e.clientY - rect.top - centerY;

        gsap.to(heroText, {
          rotateX: -(y / centerY) * 12,
          rotateY: (x / centerX) * 12,
          transformPerspective: 800,
          ease: "power2.out",
          duration: 0.6,
        });

        gsap.to(".hero-glow", {
          x: (x / centerX) * 40,
          y: (y / centerY) * 40,
          duration: 0.8,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(heroText, {
          rotateX: 0,
          rotateY: 0,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
        });
        gsap.to(".hero-glow", { x: 0, y: 0, duration: 1, ease: "power3.out" });
      };

      heroSection.addEventListener("mousemove", handleMouseMove);
      heroSection.addEventListener("mouseleave", handleMouseLeave);
    }

    // ============================================
    // 🎨 HERO DECOR ANIMATIONS
    // ============================================
    const heroDecor = heroDecorRef.current;
    if (heroDecor) {
      // Corner brackets fade + scale in
      gsap.from(heroDecor.querySelectorAll(".hero-corner"), {
        scale: 0,
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: "expo.out",
        delay: 0.3,
      });

      // Side labels slide in
      gsap.from(heroDecor.querySelectorAll(".hero-side-label"), {
        x: (i) => (i % 2 === 0 ? -40 : 40),
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        delay: 0.6,
      });

      // Tag pills pop in
      gsap.from(heroDecor.querySelectorAll(".hero-tag"), {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: 0.8,
      });

      // Diagonal lines draw in
      gsap.from(heroDecor.querySelectorAll(".hero-line"), {
        scaleX: 0,
        opacity: 0,
        stagger: 0.08,
        duration: 1,
        ease: "power3.inOut",
        delay: 0.5,
        transformOrigin: "left center",
      });

      // Floating dots randomize position on scroll
      gsap.from(heroDecor.querySelectorAll(".hero-dot"), {
        scale: 0,
        opacity: 0,
        stagger: 0.05,
        duration: 0.6,
        ease: "back.out(2)",
        delay: 1,
      });

      // Slow orbit for the big ring
      gsap.to(heroDecor.querySelector(".hero-orbit"), {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: "none",
        transformOrigin: "center center",
      });

      // Counter-orbit inner ring
      gsap.to(heroDecor.querySelector(".hero-orbit-inner"), {
        rotation: -360,
        duration: 18,
        repeat: -1,
        ease: "none",
        transformOrigin: "center center",
      });

      // Pulsing small circle
      gsap.to(heroDecor.querySelectorAll(".hero-pulse"), {
        scale: 1.5,
        opacity: 0,
        duration: 1.8,
        repeat: -1,
        ease: "power2.out",
        stagger: 0.6,
      });

      // Bottom bar slide up
      gsap.from(heroDecor.querySelector(".hero-bottom-bar"), {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 1.2,
      });
    }

    const hero = heroRef.current;
    const text = textRef.current;
    const projectsEl = projectsRef.current;
    const horizontal = horizontalRef.current;
    const pin = pinSectionRef.current;

    if (!hero || !text || !projectsEl || !horizontal || !pin) return;

    gsap.from(hero, {
      opacity: 0,
      scale: 0.8,
      duration: 1.5,
      ease: "power3.out",
    });

    gsap.from(text, {
      scrollTrigger: { trigger: text, start: "top 80%" },
      y: 100,
      opacity: 0,
      duration: 1.2,
    });

    gsap.from(Array.from(projectsEl.children), {
      scrollTrigger: { trigger: projectsEl, start: "top 80%" },
      y: 100,
      opacity: 0,
      stagger: 0.2,
    });

    gsap.to(horizontal, {
      x: () => -(horizontal.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: horizontal,
        start: "top top",
        end: () => "+=" + horizontal.scrollWidth,
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          const fadeStart = 0.8;
          const opacity =
            self.progress < fadeStart
              ? 1
              : 1 - (self.progress - fadeStart) / (1 - fadeStart);
          gsap.set(horizontal, { opacity });
        },
      },
    });

    gsap.from(pin, {
      scrollTrigger: {
        trigger: pin,
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
      opacity: 0,
      y: 200,
    });

    // FULLSCREEN REVEAL
    const reveal = revealRef.current;
    if (reveal) {
      const image = reveal.querySelector(".reveal-image");
      const revealText = reveal.querySelector(".reveal-text");
      const overlay = reveal.querySelector(".reveal-overlay");

      if (image && revealText) {
        gsap.fromTo(
          reveal,
          { clipPath: "inset(10% 10% 10% 10% round 32px)" },
          {
            clipPath: "inset(0% 0% 0% 0% round 0px)",
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: reveal,
              start: "top bottom",
              end: "top top",
              scrub: true,
            },
          },
        );
        gsap.fromTo(
          image,
          { scale: 1.3, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: reveal,
              start: "top bottom",
              end: "top top",
              scrub: true,
            },
          },
        );
        gsap.from(revealText, {
          y: 80,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: reveal, start: "top 60%" },
        });
        if (overlay) {
          gsap.fromTo(
            overlay,
            { opacity: 0.7 },
            {
              opacity: 0.4,
              ease: "none",
              scrollTrigger: {
                trigger: reveal,
                start: "top top",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        }
      }

      const revealDecor = revealDecorRef.current;
      if (revealDecor) {
        gsap.from(revealDecor.querySelectorAll(".reveal-shape"), {
          scale: 0,
          opacity: 0,
          stagger: 0.1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: { trigger: reveal, start: "top 50%" },
        });
        gsap.from(revealDecor.querySelectorAll(".reveal-label"), {
          y: 20,
          opacity: 0,
          stagger: 0.08,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: reveal, start: "top 50%" },
        });
        gsap.to(revealDecor.querySelector(".orbit-ring"), {
          rotation: 360,
          duration: 20,
          repeat: -1,
          ease: "none",
          transformOrigin: "center center",
        });
        gsap.to(revealDecor.querySelector(".orbit-ring-2"), {
          rotation: -360,
          duration: 14,
          repeat: -1,
          ease: "none",
          transformOrigin: "center center",
        });
      }
    }

    // SPLIT TEXT
    const split = splitTextRef.current;
    if (split) {
      const chars = split.innerText.split("");
      split.innerHTML = chars
        .map((char) =>
          char === " "
            ? `<span class="char">&nbsp;</span>`
            : `<span class="char">${char}</span>`,
        )
        .join("");
      gsap.from(split.querySelectorAll(".char"), {
        scrollTrigger: { trigger: split, start: "top 80%" },
        y: 100,
        opacity: 0,
        stagger: 0.05,
        duration: 0.8,
        ease: "power3.out",
      });
    }

    const splitDecor = splitDecorRef.current;
    if (splitDecor) {
      const splitSection = split?.closest("section");
      gsap.from(splitDecor.querySelectorAll(".split-shape"), {
        scale: 0,
        opacity: 0,
        rotation: (i) => (i % 2 === 0 ? -30 : 30),
        stagger: 0.12,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: splitSection || splitDecor,
          start: "top 80%",
        },
      });
      gsap.from(splitDecor.querySelectorAll(".split-label"), {
        x: (i) => (i % 2 === 0 ? -30 : 30),
        opacity: 0,
        stagger: 0.1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: splitSection || splitDecor,
          start: "top 75%",
        },
      });
      gsap.to(splitDecor.querySelectorAll(".split-shape"), {
        y: (i) => (i % 2 === 0 ? -60 : 60),
        ease: "none",
        scrollTrigger: {
          trigger: splitSection || splitDecor,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // PARALLAX
    const parallax = parallaxRef.current;
    if (parallax) {
      const bg = parallax.querySelector(".parallax-bg");
      const fg = parallax.querySelector(".parallax-fg");
      if (bg && fg) {
        gsap.to(bg, {
          y: 200,
          scrollTrigger: {
            trigger: parallax,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
        gsap.to(fg, {
          y: -150,
          scrollTrigger: {
            trigger: parallax,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
      const parallaxDecor = parallaxDecorRef.current;
      if (parallaxDecor) {
        const decorItems = parallaxDecor.querySelectorAll(".px-decor-item");
        decorItems.forEach((item, i) => {
          gsap.to(item, {
            y: i % 3 === 0 ? -80 : i % 3 === 1 ? 80 : -50,
            ease: "none",
            scrollTrigger: {
              trigger: parallax,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });
        gsap.from(Array.from(decorItems), {
          opacity: 0,
          scale: 0.5,
          stagger: 0.1,
          duration: 1,
          ease: "back.out(1.5)",
          scrollTrigger: { trigger: parallax, start: "top 70%" },
        });
      }
    }

    // FLOATING OBJECTS
    const floatingObjs = floatingObjsRef.current;
    if (floatingObjs) {
      const items = floatingObjs.querySelectorAll(".float-obj");
      items.forEach((item, i) => {
        const speed = (i % 3 === 0 ? -1 : i % 3 === 1 ? -2 : -0.5) * 120;
        gsap.to(item, {
          y: speed,
          ease: "none",
          scrollTrigger: {
            trigger: floatingObjs,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
        gsap.to(item, {
          rotation: i % 2 === 0 ? 45 : -45,
          ease: "none",
          scrollTrigger: {
            trigger: floatingObjs,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
      const floatTitle = floatingObjs.querySelector(".float-title");
      if (floatTitle) {
        gsap.from(floatTitle, {
          y: 80,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: floatingObjs, start: "top 70%" },
        });
      }
    }

    // COUNTER
    const counter = counterRef.current;
    if (counter) {
      const items = counter.querySelectorAll(".count-item");
      gsap.from(Array.from(items), {
        scrollTrigger: { trigger: counter, start: "top 75%" },
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      });
      items.forEach((item) => {
        const numberEl = item.querySelector(".count-number");
        if (!numberEl) return;
        const target = parseInt(numberEl.getAttribute("data-target") || "0");
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: { trigger: counter, start: "top 75%" },
          onUpdate: () => {
            numberEl.textContent = Math.round(obj.val).toLocaleString();
          },
        });
      });
    }

    // MARQUEE
    const marquee = marqueeRef.current;
    if (marquee) {
      const track = marquee.querySelector(".marquee-track");
      if (track) {
        const clone = track.cloneNode(true) as HTMLElement;
        marquee.appendChild(clone);
        gsap.to([track, clone], {
          xPercent: -100,
          repeat: -1,
          duration: 18,
          ease: "none",
        });
        gsap.from(marquee, {
          opacity: 0,
          y: 40,
          duration: 1,
          scrollTrigger: { trigger: marquee, start: "top 85%" },
        });
      }
    }

    // MORPH GRID
    const morph = morphRef.current;
    if (morph) {
      const cards = morph.querySelectorAll(".morph-card");

      // Animasi masuk — tetap dengan efek stagger
      gsap.from(Array.from(cards), {
        scrollTrigger: { trigger: morph, start: "top 80%" },
        scale: 0.5,
        opacity: 0,
        rotation: (i) => (i % 2 === 0 ? -15 : 15),
        stagger: { amount: 0.8, from: "center" },
        duration: 1,
        ease: "back.out(1.7)",
      });

      // Parallax seragam — semua kartu bergerak dengan nilai y yang sama
      gsap.to(Array.from(cards), {
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: morph,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Animasi title
      const morphTitle = morph.querySelector(".morph-title");
      if (morphTitle) {
        gsap.from(morphTitle, {
          clipPath: "inset(0% 100% 0% 0%)",
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: { trigger: morph, start: "top 75%" },
        });
      }
    }

    // WINDOW REVEAL
    const windowReveal = windowRevealRef.current;
    if (windowReveal) {
      gsap.fromTo(
        windowReveal,
        { clipPath: "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)" },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: windowReveal,
            start: "top 85%",
            end: "top 20%",
            scrub: 1.5,
          },
        },
      );
      const inner = windowReveal.querySelector(".window-inner");
      if (inner) {
        gsap.from(inner, {
          opacity: 0,
          scale: 0.92,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: { trigger: windowReveal, start: "top 50%" },
        });
      }
    }

    // TIMELINE
    const timeline = timelineRef.current;
    if (timeline) {
      const line = timeline.querySelector(".tl-line");
      if (line) {
        gsap.fromTo(
          line,
          { scaleY: 0, transformOrigin: "top center" },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: timeline,
              start: "top 60%",
              end: "bottom 80%",
              scrub: true,
            },
          },
        );
      }
      const items = timeline.querySelectorAll(".tl-item");
      items.forEach((item, i) => {
        gsap.from(item, {
          x: i % 2 === 0 ? -100 : 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: item, start: "top 80%" },
        });
        const dot = item.querySelector(".tl-dot");
        if (dot)
          gsap.from(dot, {
            scale: 0,
            duration: 0.5,
            ease: "back.out(2)",
            scrollTrigger: { trigger: item, start: "top 80%" },
          });
      });
      const tlTitle = timeline.querySelector(".tl-title");
      if (tlTitle)
        gsap.from(tlTitle, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: timeline, start: "top 80%" },
        });
    }

    // FOOTER
    const footer = footerRef.current;
    if (footer) {
      const bigText = footer.querySelector(".footer-big-text");
      if (bigText)
        gsap.from(bigText, {
          y: 120,
          opacity: 0,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: { trigger: footer, start: "top 80%" },
        });
      gsap.from(Array.from(footer.querySelectorAll(".footer-link")), {
        y: 40,
        opacity: 0,
        stagger: 0.08,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: footer, start: "top 75%" },
      });
      const bottomBar = footer.querySelector(".footer-bottom");
      if (bottomBar)
        gsap.from(bottomBar, {
          opacity: 0,
          y: 20,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: { trigger: footer, start: "top 60%" },
        });
      footer.querySelectorAll(".footer-line").forEach((line) => {
        gsap.fromTo(
          line,
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1,
            duration: 1.2,
            ease: "power3.inOut",
            scrollTrigger: { trigger: footer, start: "top 80%" },
          },
        );
      });
    }
  }, []);

  return (
    <main className="bg-black text-white overflow-hidden cursor-none">
      {/* CUSTOM CURSOR */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-white/50 pointer-events-none z-[9999] mix-blend-difference"
        style={{ willChange: "transform" }}
      />
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-[9999] mix-blend-difference"
        style={{ willChange: "transform" }}
      />

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute w-[800px] h-[800px] bg-purple-500/20 blur-[200px] top-[-200px] left-[-200px]" />
        <div className="absolute w-[600px] h-[600px] bg-blue-500/20 blur-[200px] bottom-[-200px] right-[-200px]" />
      </div>

      {/* ============================================ */}
      {/* 🔥 HERO — dengan dekorasi baru              */}
      {/* ============================================ */}
      <section
        ref={heroSectionRef}
        className="h-screen flex items-center justify-center relative overflow-hidden cursor-none"
      >
        {/* Glow background */}
        <div className="hero-glow absolute w-[600px] h-[600px] bg-purple-500/30 blur-[120px] rounded-full pointer-events-none" />
        <div className="hero-glow absolute w-[400px] h-[400px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />

        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* ── DEKORASI HERO ── */}
        <div
          ref={heroDecorRef}
          className="absolute inset-0 pointer-events-none overflow-hidden"
        >
          {/* === ORBIT RINGS === */}
          {/* Ring besar mengelilingi layar */}
          <div
            className="hero-orbit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[780px] h-[780px] rounded-full"
            style={{ border: "1px dashed rgba(168,85,247,0.12)" }}
          />
          {/* Ring dalam lebih kecil */}
          <div
            className="hero-orbit-inner absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full"
            style={{ border: "1px dashed rgba(255,255,255,0.06)" }}
          />

          {/* === CORNER BRACKETS === */}
          {/* Kiri atas */}
          <div
            className="hero-corner absolute top-8 left-8 w-10 h-10 border-l-2 border-t-2 border-white/20"
            style={{ borderRadius: "4px 0 0 0" }}
          />
          {/* Kanan atas */}
          <div
            className="hero-corner absolute top-8 right-8 w-10 h-10 border-r-2 border-t-2 border-white/20"
            style={{ borderRadius: "0 4px 0 0" }}
          />
          {/* Kiri bawah */}
          <div
            className="hero-corner absolute bottom-8 left-8 w-10 h-10 border-l-2 border-b-2 border-white/20"
            style={{ borderRadius: "0 0 0 4px" }}
          />
          {/* Kanan bawah */}
          <div
            className="hero-corner absolute bottom-8 right-8 w-10 h-10 border-r-2 border-b-2 border-white/20"
            style={{ borderRadius: "0 0 4px 0" }}
          />

          {/* === HORIZONTAL LINES === */}
          <div className="hero-line absolute left-0 top-[30%] w-[12%] h-px bg-white/10 origin-left" />
          <div
            className="hero-line absolute right-0 top-[30%] w-[12%] h-px bg-white/10"
            style={{ transformOrigin: "right center" }}
          />
          <div className="hero-line absolute left-0 top-[70%] w-[8%] h-px bg-purple-400/20 origin-left" />
          <div
            className="hero-line absolute right-0 top-[70%] w-[8%] h-px bg-purple-400/20"
            style={{ transformOrigin: "right center" }}
          />

          {/* === TAG PILLS === */}
          {/* Kiri tengah atas */}
          <div className="hero-tag absolute top-[28%] left-16 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400/60" />
            <span className="text-[9px] tracking-[0.4em] uppercase text-white/25 font-mono">
              Multimedia
            </span>
          </div>
          {/* Kanan tengah atas */}
          <div className="hero-tag absolute top-[28%] right-16 flex items-center gap-2">
            <span className="text-[9px] tracking-[0.4em] uppercase text-white/25 font-mono">
              Creative
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400/60" />
          </div>
          {/* Kiri tengah bawah */}
          <div className="hero-tag absolute top-[72%] left-16 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
            <span className="text-[9px] tracking-[0.4em] uppercase text-white/20 font-mono">
              Visual
            </span>
          </div>
          {/* Kanan tengah bawah */}
          <div className="hero-tag absolute top-[72%] right-16 flex items-center gap-2">
            <span className="text-[9px] tracking-[0.4em] uppercase text-white/20 font-mono">
              Simple
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
          </div>

          {/* === FLOATING DOTS TERSEBAR === */}
          <div className="hero-dot absolute top-[18%] left-[22%] w-1 h-1 rounded-full bg-purple-400/50" />
          <div className="hero-dot absolute top-[22%] right-[28%] w-1.5 h-1.5 rounded-full bg-white/20" />
          <div className="hero-dot absolute top-[78%] left-[30%] w-1 h-1 rounded-full bg-blue-400/40" />
          <div className="hero-dot absolute top-[75%] right-[20%] w-1 h-1 rounded-full bg-purple-300/50" />
          <div className="hero-dot absolute top-[45%] left-[8%] w-2 h-2 rounded-full bg-white/10" />
          <div className="hero-dot absolute top-[50%] right-[8%] w-2 h-2 rounded-full bg-purple-400/15" />

          {/* === PULSING DOT (live indicator feel) === */}
          <div className="absolute top-[18%] left-[22%]">
            <div className="hero-pulse absolute w-4 h-4 rounded-full bg-purple-400/20 -translate-x-1/2 -translate-y-1/2" />
          </div>
          <div className="absolute top-[75%] right-[22%]">
            <div
              className="hero-pulse absolute w-3 h-3 rounded-full bg-blue-400/15 -translate-x-1/2 -translate-y-1/2"
              style={{ animationDelay: "0.6s" }}
            />
          </div>

          {/* === DIAMOND SHAPES === */}
          <div className="hero-corner absolute top-[22%] left-[42%] w-2 h-2 bg-purple-400/30 rotate-45" />
          <div className="hero-corner absolute bottom-[22%] right-[42%] w-2 h-2 bg-white/20 rotate-45" />
          <div className="hero-corner absolute top-[50%] left-[14%] w-1.5 h-1.5 bg-blue-400/30 rotate-45" />
          <div className="hero-corner absolute top-[48%] right-[14%] w-1.5 h-1.5 bg-purple-300/30 rotate-45" />

          {/* === CROSSHAIR kecil === */}
          <div className="hero-dot absolute top-[35%] left-[18%] opacity-20">
            <div className="absolute w-4 h-px bg-white top-0 left-0" />
            <div className="absolute w-px h-4 bg-white top-[-8px] left-[8px]" />
          </div>
          <div className="hero-dot absolute top-[62%] right-[18%] opacity-15">
            <div className="absolute w-3 h-px bg-purple-300 top-0 left-0" />
            <div className="absolute w-px h-3 bg-purple-300 top-[-6px] left-[6px]" />
          </div>

          {/* === DOT GRID pojok dalam === */}
          <div className="hero-corner absolute top-20 left-20 grid grid-cols-3 gap-[8px]">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="w-[2px] h-[2px] rounded-full bg-white/15"
              />
            ))}
          </div>
          <div className="hero-corner absolute bottom-20 right-20 grid grid-cols-3 gap-[8px]">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="w-[2px] h-[2px] rounded-full bg-white/10"
              />
            ))}
          </div>

          {/* === BOTTOM BAR — metadata strip === */}
          <div className="hero-bottom-bar absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-8">
            <div className="w-px h-4 bg-white/10" />
            <span className="text-[9px] tracking-[0.5em] uppercase text-white/20 font-mono">
              Frame Production
            </span>
            <div className="w-1 h-1 rounded-full bg-purple-400/40" />
            <span className="text-[9px] tracking-[0.5em] uppercase text-white/15 font-mono">
              Yogyakarta, 2026
            </span>
            <div className="w-px h-4 bg-white/10" />
          </div>

          {/* === NOMOR POJOK editorial === */}
          <span className="hero-tag absolute top-8 left-1/2 -translate-x-1/2 text-[9px] text-white/15 font-mono tracking-[0.5em]">
            01 / HERO
          </span>
        </div>

        {/* Teks utama */}
        <div style={{ perspective: "800px" }}>
          <h1
            ref={heroRef}
            className="text-7xl md:text-9xl font-bold tracking-tighter text-center select-none relative z-10"
            style={{ transformStyle: "preserve-3d", willChange: "transform" }}
          >
            FRAME PRODUCTION
          </h1>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 z-10">
          <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-white/50 origin-top animate-[scaleY_1.5s_ease-in-out_infinite_alternate]" />
        </div>
      </section>

      {/* TEXT */}
      <section className="h-screen flex items-center justify-center">
        <p
          ref={textRef}
          className="text-2xl md:text-6xl text-center tracking-tighter max-w-3xl"
        >
          Apa yang telah kami lakukan selama ini?
        </p>
      </section>

      {/* PROJECTS */}
      <section className="min-h-screen px-10 py-40">
        <div ref={projectsRef} className="grid md:grid-cols-2 gap-20">
          {projects.map((project) => (
            <div key={project.id}>
              <div className="relative h-[400px] rounded-3xl overflow-hidden group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute top-5 left-5 text-xs tracking-widest uppercase bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {project.category}
                </span>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <h2 className="text-3xl tracking-tight">{project.title}</h2>
                <span className="text-neutral-600 text-sm">{project.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HORIZONTAL SCROLL */}
      <section className="h-screen overflow-hidden">
        <div
          ref={horizontalRef}
          className="flex h-full items-center gap-8 px-20"
          style={{ width: "max-content" }}
        >
          {works.map((work) => (
            <div
              key={work.id}
              className="relative min-w-[500px] h-[340px] rounded-3xl overflow-hidden group flex-shrink-0"
            >
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <span className="absolute top-5 left-5 text-xs tracking-widest uppercase bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                {work.category}
              </span>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl font-medium tracking-tight leading-snug">
                  {work.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PINNED */}
      <section className="h-[250vh] flex items-center justify-center">
        <div ref={pinSectionRef}>
          <h2 className="text-6xl text-center max-w-4xl tracking-tighter">
            Kenapa harus memilih program layanan kami?
          </h2>
        </div>
      </section>

      {/* FULLSCREEN REVEAL */}
      <section
        ref={revealRef}
        className="relative w-full h-screen flex items-center justify-center overflow-hidden"
        style={{ clipPath: "inset(10% 10% 10% 10% round 32px)" }}
      >
        <div
          className="reveal-image absolute inset-0 bg-black w-full h-full"
          style={{ willChange: "transform, opacity" }}
        />
        <div className="reveal-overlay absolute inset-0 bg-black/70 z-10" />

        <div
          ref={revealDecorRef}
          className="absolute inset-0 z-20 pointer-events-none overflow-hidden"
        >
          <div
            className="orbit-ring absolute top-[-120px] right-[-120px] w-[420px] h-[420px] rounded-full border border-white/8"
            style={{ borderStyle: "dashed" }}
          />
          <div
            className="orbit-ring-2 absolute bottom-[-80px] left-[-80px] w-[280px] h-[280px] rounded-full border border-purple-400/15"
            style={{ borderStyle: "dashed" }}
          />
          <div className="reveal-shape absolute top-10 left-10 grid grid-cols-4 gap-[10px]">
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={i}
                className="w-[3px] h-[3px] rounded-full bg-white/20"
              />
            ))}
          </div>
          <div className="reveal-shape absolute bottom-10 right-10 grid grid-cols-4 gap-[10px]">
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={i}
                className="w-[3px] h-[3px] rounded-full bg-white/15"
              />
            ))}
          </div>
        </div>

        <div className="reveal-text relative z-30 text-center px-10">
          <p className="text-xs tracking-[0.5em] uppercase text-white/40 font-mono mb-6">
            — Keunggulan Kami —
          </p>
          <h2 className="text-4xl md:text-7xl font-normal tracking-tight mb-6">
            Murah Cepat Efisien
          </h2>
          <p className="text-neutral-300 text-lg md:text-xl max-w-xl mx-auto">
            memiliki banyak output yang dapat di lihat oleh audiens
          </p>
          <div className="flex items-center justify-center gap-4 mt-10">
            {["Photography", "Videography", "Livestreaming"].map((tag) => (
              <span
                key={tag}
                className="text-[11px] tracking-widest uppercase border border-white/20 rounded-full px-5 py-2 text-white/50 font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="h-screen flex items-center justify-center px-10 relative overflow-hidden">
        {/* ── DEKORASI SPLIT TEXT ── */}
        <div
          ref={splitDecorRef}
          className="absolute inset-0 pointer-events-none"
        >
          {/* Teks vertikal kiri — rotated typography */}

          {/* Diamond kecil tersebar */}
          <div className="split-shape absolute top-[25%] right-[18%] w-2 h-2 bg-purple-400/30 rotate-45" />
          <div className="split-shape absolute bottom-[28%] left-[18%] w-1.5 h-1.5 bg-white/20 rotate-45" />
          <div className="split-shape absolute top-[60%] right-[10%] w-1 h-1 bg-blue-400/40 rotate-45" />

          {/* Nomor pojok — editorial style */}
          <span className="split-label absolute top-8 left-10 text-[10px] text-white/15 font-mono tracking-widest">
            03 /
          </span>
          <span className="split-label absolute top-8 right-10 text-[10px] text-white/15 font-mono tracking-widest">
            SKILLS
          </span>

          {/* Plus crosshair kecil */}
          <div className="split-shape absolute top-[40%] left-[12%] opacity-20">
            <div className="absolute w-4 h-px bg-white top-1/2 left-0" />
            <div className="absolute w-px h-4 bg-white left-1/2 top-0" />
          </div>
          <div className="split-shape absolute bottom-[40%] right-[12%] opacity-15">
            <div className="absolute w-3 h-px bg-purple-300 top-1/2 left-0" />
            <div className="absolute w-px h-3 bg-purple-300 left-1/2 top-0" />
          </div>
        </div>

        {/* Teks utama */}
        <h2
          ref={splitTextRef}
          className="text-5xl md:text-7xl text-center max-w-4xl tracking-tight leading-tight relative z-10"
        >
          berpengalaman dalam bidang Multimedia
        </h2>
      </section>

      {/* FLOATING PARALLAX OBJECTS */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div ref={floatingObjsRef} className="relative w-full h-full">
          <div className="float-obj absolute top-[10%] left-[8%] w-24 h-24 border border-purple-500/40 rounded-xl opacity-60" />
          <div className="float-obj absolute top-[20%] right-[12%] w-16 h-16 bg-blue-500/20 rounded-full" />
          <div className="float-obj absolute top-[60%] left-[15%] w-10 h-10 bg-purple-400/30 rotate-45" />
          <div className="float-obj absolute bottom-[15%] right-[20%] w-32 h-32 border border-white/10 rounded-3xl" />
          <div className="float-obj absolute top-[40%] left-[60%] w-6 h-6 bg-white/20 rounded-full" />
          <div className="float-obj absolute bottom-[30%] left-[35%] w-20 h-20 border border-blue-400/30 rotate-12" />
          <div className="float-obj absolute top-[15%] left-[45%] w-3 h-3 bg-purple-300/60 rounded-full" />
          <div className="float-obj absolute bottom-[20%] right-[40%] w-14 h-14 border-2 border-white/5 rounded-2xl rotate-45" />
          <div className="float-title absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-10">
            <p className="text-neutral-500 text-sm tracking-[0.3em] uppercase mb-4">
              Fundamental Rancang Art Media Production
            </p>
            <h2 className="text-5xl md:text-7xl max-w-3xl tracking-tight leading-tight">
              Apa bukti layanan kami selama ini?
            </h2>
          </div>
        </div>
      </section>

      {/* ANIMATED COUNTER */}
      <section className="min-h-screen flex items-center justify-center px-10 py-40">
        <div ref={counterRef} className="w-full max-w-5xl">
          <p className="text-neutral-500 text-sm tracking-[0.3em] uppercase text-center mb-20">
            Portofolio FRAME PRODUCTION
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 text-center">
            {[
              { label: "Projek nyata", target: 14, suffix: "+" },
              { label: "Klien Suka", target: 3, suffix: "" },
              { label: "Jam terbang", target: 142, suffix: "" },
              { label: "Awards Won", target: 1, suffix: "" },
            ].map((stat) => (
              <div key={stat.label} className="count-item">
                <div className="flex items-end justify-center gap-1 mb-3">
                  <span
                    className="count-number text-5xl md:text-7xl font-bold tabular-nums"
                    data-target={stat.target}
                  >
                    0
                  </span>
                  <span className="text-3xl md:text-5xl font-bold text-purple-400 mb-1">
                    {stat.suffix}
                  </span>
                </div>
                <p className="text-neutral-500 text-sm tracking-widest uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="py-24 overflow-hidden">
        <div ref={marqueeRef} className="flex whitespace-nowrap">
          <div className="marquee-track flex items-center gap-16 pr-16">
            {[
              "Kelompok Bisnis Mahasiswa",
              "Elrahma Islamic Center",
              "STMIK El Rahma Yogyakarta",
              "Van Audio Production",
            ].map((item) => (
              <span
                key={item}
                className="text-3xl md:text-5xl font-bold text-white/20 hover:text-white transition-colors duration-300 cursor-default"
              >
                {item}
                <span className="text-purple-500 mx-8">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* MORPH GRID */}
      <section className="min-h-screen px-4 sm:px-6 md:px-10 py-20 md:py-40 overflow-hidden">
        <div ref={morphRef} className="max-w-6xl mx-auto">
          <h2 className="morph-title text-4xl sm:text-5xl md:text-7xl font-bold mb-10 md:mb-20 overflow-hidden tracking-tighter">
            Capture the Moments
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {morphImages.map((card, i) => (
              <div
                key={i}
                className="morph-card aspect-square bg-neutral-900 rounded-3xl relative overflow-hidden group cursor-pointer"
              >
                {/* Foto — tampil jika image diisi */}
                {card.image && (
                  <Image
                    src={card.image}
                    alt={card.label}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                )}

                {/* Placeholder jika belum ada foto */}
                {!card.image && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-20">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="3" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                    <span className="text-xs tracking-widest uppercase font-mono">
                      Add Photo
                    </span>
                  </div>
                )}

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Label */}
                <span className="absolute bottom-6 left-6 text-lg font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  {card.label}
                </span>

                {/* Badge kategori */}
                <span className="absolute top-5 left-5 text-[10px] tracking-widest uppercase bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {card.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARALLAX */}
      <section className="h-[150vh] relative flex items-center justify-center overflow-hidden">
        <div ref={parallaxRef} className="w-full h-full relative">
          <div className="parallax-bg absolute inset-0 bg-purple-500/20 blur-3xl" />
          <div
            ref={parallaxDecorRef}
            className="absolute inset-0 pointer-events-none overflow-hidden"
          >
            <div className="px-decor-item absolute top-[18%] left-[6%] flex flex-col gap-1">
              <span className="text-[9px] tracking-[0.5em] uppercase text-white/20 font-mono">
                Depth
              </span>
              <div className="w-6 h-px bg-white/15" />
            </div>
            <div className="px-decor-item absolute bottom-[18%] right-[6%] flex flex-col items-end gap-1">
              <div className="w-6 h-px bg-purple-400/20" />
              <span className="text-[9px] tracking-[0.5em] uppercase text-white/20 font-mono">
                Motion
              </span>
            </div>
            <div className="px-decor-item absolute top-[12%] left-1/2 -translate-x-1/2 grid grid-cols-6 gap-[8px]">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="w-[2px] h-[2px] rounded-full bg-white/15"
                />
              ))}
            </div>
            <div className="px-decor-item absolute bottom-[12%] left-1/2 -translate-x-1/2 grid grid-cols-6 gap-[8px]">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="w-[2px] h-[2px] rounded-full bg-white/10"
                />
              ))}
            </div>
          </div>
          <div className="parallax-fg relative z-10 flex flex-col items-center justify-center h-full gap-6">
            <p className="text-[10px] tracking-[0.6em] uppercase text-white/30 font-mono">
              — apa yang kami tawarkan? —
            </p>
            <h2 className="text-5xl md:text-7xl text-center tracking-tighter">
              Solusi untuk event anda
            </h2>
          </div>
        </div>
      </section>

      {/* WINDOW OPEN REVEAL */}
      <div
        ref={windowRevealRef}
        className="relative w-full min-h-screen bg-white text-black overflow-hidden"
        style={{ clipPath: "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)" }}
      >
        <div className="window-inner w-full h-full px-10 md:px-20 py-32 flex flex-col justify-center">
          <p className="text-xs tracking-[0.4em] uppercase text-neutral-400 mb-6">
            Dengan harga
          </p>
          <h2 className="text-5xl md:text-8xl font-bold leading-tight tracking-tighter max-w-4xl mb-16">
            mulai dari
            <br />
            Rp. 1.500.000 - Rp. 1.800.000
          </h2>
          <div className="grid md:grid-cols-3 gap-10 border-t border-black/10 pt-16">
            {[
              {
                num: "01",
                title: "Photography & Videography",
                desc: "sudah mendapatkan layanan Photography dan Videography dengan harga yang terjangkau",
              },
              {
                num: "02",
                title: "Desain Grafis & Video Editing",
                desc: "terintegrasi dengan proses desain grafis dan video editing yang profesional untuk hasil yang memuaskan",
              },
              {
                num: "03",
                title: "Livestreaming multi kamera",
                desc: "menyediakan layanan livestreaming multi kamera untuk memastikan setiap momen penting dapat disiarkan secara langsung dengan kualitas terbaik",
              },
            ].map((col) => (
              <div key={col.num}>
                <span className="text-xs text-neutral-400 mb-4 block">
                  {col.num}
                </span>
                <h3 className="text-xl font-bold mb-3 tracking-tight">
                  {col.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {col.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TIMELINE */}
      <section className="min-h-screen bg-white px-10 md:px-20 py-40 overflow-hidden">
        <div ref={timelineRef} className="max-w-4xl mx-auto">
          <p className="text-neutral-400 text-xs tracking-[0.4em] uppercase mb-4">
            Proses yang dikerjakan
          </p>
          <h2 className="tl-title text-5xl md:text-7xl font-bold tracking-tighter text-black mb-24">
            Bagaimana kami bekerja?
          </h2>
          <div className="relative">
            <div className="tl-line absolute left-1/2 -translate-x-1/2 w-px h-full bg-black/10 origin-top" />
            {[
              {
                year: "1",
                title: "Berkomunikasi dengan klien",
                desc: "menentukan kebutuhan klien, tujuan acara, dan hasil yang diharapkan untuk memastikan pemahaman yang jelas tentang proyek.",
                side: "left",
              },
              {
                year: "2",
                title: "Diskusi dengan tim produksi",
                desc: "berkolaborasi dengan tim produksi untuk merancang konsep kreatif, menentukan kebutuhan teknis, dan menyusun rencana kerja yang efisien.",
                side: "right",
              },
              {
                year: "3",
                title: "mempersiapkan alat yang dibutuhkan",
                desc: "memastikan semua peralatan yang diperlukan untuk fotografi, videografi, desain grafis, video editing, dan livestreaming siap digunakan dan dalam kondisi optimal.",
                side: "left",
              },
              {
                year: "4",
                title: "terjun ke lapangan",
                desc: "melaksanakan proses produksi di lokasi acara, termasuk pengambilan gambar, pengelolaan desain grafis, video editing, dan pengaturan livestreaming untuk memastikan setiap momen terekam dengan baik.",
                side: "right",
              },
              {
                year: "5",
                title: "Proses Editing dan Post-Production",
                desc: "melakukan proses editing dan post-production untuk memastikan hasil akhir yang berkualitas tinggi, termasuk penyuntingan video, pengolahan gambar, dan penyesuaian desain grafis sesuai dengan kebutuhan klien.",
                side: "left",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`tl-item relative flex items-start mb-20 ${item.side === "left" ? "flex-row pr-[55%]" : "flex-row-reverse pl-[55%]"}`}
              >
                <div className="tl-dot absolute left-1/2 -translate-x-1/2 top-2 w-3 h-3 rounded-full bg-white border-2 border-black z-10" />
                <div
                  className={item.side === "right" ? "text-right" : "text-left"}
                >
                  <span className="text-xs text-purple-400 tracking-widest block mb-2">
                    {item.year}
                  </span>
                  <h3 className="text-2xl font-bold mb-2 text-black tracking-tighter">
                    {item.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        ref={footerRef}
        className="relative bg-black text-white px-10 md:px-20 pt-32 pb-12 overflow-hidden"
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-500/10 blur-[120px] pointer-events-none" />
        <div className="footer-line w-full h-px bg-white/10 mb-20 origin-left" />
        <div className="overflow-hidden mb-20">
          <h2 className="footer-big-text text-6xl md:text-[10vw] font-bold leading-none tracking-tighter">
            Ceritakan
            <br />
            <span className="text-white/20">eventmu dengan</span>
            <br />
            <span
              className="text-transparent"
              style={
                {
                  WebkitTextStroke: "1px rgba(255,255,255,0.3)",
                } as React.CSSProperties
              }
            >
              cara terbaik
            </span>
          </h2>
        </div>
        <div className="mb-24">
          <a
            href="mailto:hello@frameproduction.com"
            className="footer-link inline-flex items-center gap-4 border border-white/20 rounded-full px-8 py-4 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500 group"
          >
            Start a Project
            <span className="w-2 h-2 rounded-full bg-purple-400 group-hover:bg-black transition-colors duration-300" />
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2 md:col-span-1">
            <p className="text-lg font-bold tracking-tighter mb-4">
              FRAME PRODUCTION
            </p>
            <p className="text-neutral-600 text-sm leading-relaxed tracking-tight max-w-xs">
              Layanan Multimedia Photography, Videography, Desain Grafis, Video
              Edit, & Livestreaming Multicamera
            </p>
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-neutral-600 mb-6">
              Work
            </p>
            <ul className="space-y-3">
              {["Projects", "Case Studies", "Selected Works", "Awards"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="footer-link text-sm text-neutral-400 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-neutral-600 mb-6">
              Studio
            </p>
            <ul className="space-y-3">
              {["About", "Process", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="footer-link text-sm text-neutral-400 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-neutral-600 mb-6">
              Social
            </p>
            <ul className="space-y-3">
              {["Instagram", "Twitter / X", "LinkedIn", "Dribbble"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="footer-link text-sm text-neutral-400 hover:text-white transition-colors duration-300 inline-flex items-center gap-2 group"
                    >
                      {item}
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-purple-400 text-xs">
                        ↗
                      </span>
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
        <div className="footer-line w-full h-px bg-white/10 mb-8 origin-left" />
        <div className="footer-bottom flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-neutral-700 text-xs tracking-widest uppercase">
            © 2026 FRAME Production. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a
              href="#"
              className="text-neutral-700 text-xs tracking-widest uppercase hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-neutral-700 text-xs tracking-widest uppercase hover:text-white transition-colors duration-300"
            >
              Terms of Use
            </a>
            <span className="text-neutral-700 text-xs tracking-widest uppercase">
              Yogyakarta, Indonesia, IDN
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
