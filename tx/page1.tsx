"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    id: 1,
    title: "Rehat Sejenak Bersama Alqur'an",
    category: "Livestreaming",
    image: "/images/rsba.png",
    year: "2025",
  },
  {
    id: 2,
    title: "Syawalan Organisasi KBM & EIC",
    category: "Livestreaming",
    image: "/images/syawalan-organisasi.png",
    year: "2026",
  },
  {
    id: 3,
    title: "Peresmian Balai Prawirotaman III",
    category: "Livestreaming",
    image: "/images/peresmian-balai.png",
    year: "2026",
  },
  {
    id: 4,
    title: "Peresmian Balai Prawirotaman III",
    category: "Livestreaming",
    image: "/images/peresmian-balai2.png",
    year: "2026",
  },
];

// ============================================
// 🖼️ TAMBAHKAN GAMBAR HORIZONTAL SCROLL DI SINI
// Cukup tambah objek baru ke array ini
// ============================================
const works = [
  {
    id: 1,
    title: "Behind the Lens",
    category: "Photography",
    image: "/images/work1.jpg",
  },
  {
    id: 2,
    title: "Motion Reel",
    category: "Video",
    image: "/images/work2.jpg",
  },
  {
    id: 3,
    title: "Live Coverage",
    category: "Livestreaming",
    image: "/images/work3.jpg",
  },
  {
    id: 4,
    title: "Event Documentation",
    category: "Photography",
    image: "/images/work4.jpg",
  },
  {
    id: 5,
    title: "Studio Session",
    category: "Video",
    image: "/images/work5.jpg",
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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // ============================================
    // 🔥 CUSTOM MAGNETIC CURSOR
    // ============================================
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    if (cursor && cursorDot) {
      let mouseX = 0;
      let mouseY = 0;
      let cursorX = 0;
      let cursorY = 0;
      let dotX = 0;
      let dotY = 0;

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

        const rotateX = -(y / centerY) * 12;
        const rotateY = (x / centerX) * 12;

        gsap.to(heroText, {
          rotateX,
          rotateY,
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
        gsap.to(".hero-glow", {
          x: 0,
          y: 0,
          duration: 1,
          ease: "power3.out",
        });
      };

      heroSection.addEventListener("mousemove", handleMouseMove);
      heroSection.addEventListener("mouseleave", handleMouseLeave);
    }

    const hero = heroRef.current;
    const text = textRef.current;
    const projectsEl = projectsRef.current;
    const horizontal = horizontalRef.current;
    const pin = pinSectionRef.current;

    if (!hero || !text || !projectsEl || !horizontal || !pin) return;

    // HERO
    gsap.from(hero, {
      opacity: 0,
      scale: 0.8,
      duration: 1.5,
      ease: "power3.out",
    });

    // TEXT
    gsap.from(text, {
      scrollTrigger: { trigger: text, start: "top 80%" },
      y: 100,
      opacity: 0,
      duration: 1.2,
    });

    // PROJECTS
    gsap.from(Array.from(projectsEl.children), {
      scrollTrigger: { trigger: projectsEl, start: "top 80%" },
      y: 100,
      opacity: 0,
      stagger: 0.2,
    });

    // 🔥 HORIZONTAL SCROLL
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

    // 🔥 PIN SECTION
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

    // 🔥 FULLSCREEN REVEAL
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

    // PARALLAX BG
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
    }

    // ============================================
    // 🔥 FLOATING PARALLAX OBJECTS
    // ============================================
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

    // ============================================
    // 🔥 ANIMATED COUNTER SECTION
    // ============================================
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

    // ============================================
    // 🔥 MARQUEE / TICKER SECTION
    // ============================================
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

    // ============================================
    // 🔥 MORPH / SCALE GRID SECTION
    // ============================================
    const morph = morphRef.current;
    if (morph) {
      const cards = morph.querySelectorAll(".morph-card");

      gsap.from(Array.from(cards), {
        scrollTrigger: { trigger: morph, start: "top 80%" },
        scale: 0.5,
        opacity: 0,
        rotation: (i) => (i % 2 === 0 ? -15 : 15),
        stagger: {
          amount: 0.8,
          from: "center",
        },
        duration: 1,
        ease: "back.out(1.7)",
      });

      Array.from(cards).forEach((card, i) => {
        const depth = (i % 3) * 40 - 40;
        gsap.to(card, {
          y: depth,
          ease: "none",
          scrollTrigger: {
            trigger: morph,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

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

    // ============================================
    // 🔥 WINDOW OPEN REVEAL
    // ============================================
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
          scrollTrigger: {
            trigger: windowReveal,
            start: "top 50%",
          },
        });
      }
    }

    // ============================================
    // 🔥 TIMELINE SECTION
    // ============================================
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
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
          },
        });

        const dot = item.querySelector(".tl-dot");
        if (dot) {
          gsap.from(dot, {
            scale: 0,
            duration: 0.5,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
            },
          });
        }
      });

      const tlTitle = timeline.querySelector(".tl-title");
      if (tlTitle) {
        gsap.from(tlTitle, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: timeline, start: "top 80%" },
        });
      }
    }

    // ============================================
    // 🔥 FOOTER ANIMATIONS
    // ============================================
    const footer = footerRef.current;
    if (footer) {
      const bigText = footer.querySelector(".footer-big-text");
      if (bigText) {
        gsap.from(bigText, {
          y: 120,
          opacity: 0,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: { trigger: footer, start: "top 80%" },
        });
      }

      const links = footer.querySelectorAll(".footer-link");
      gsap.from(Array.from(links), {
        y: 40,
        opacity: 0,
        stagger: 0.08,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: footer, start: "top 75%" },
      });

      const bottomBar = footer.querySelector(".footer-bottom");
      if (bottomBar) {
        gsap.from(bottomBar, {
          opacity: 0,
          y: 20,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: { trigger: footer, start: "top 60%" },
        });
      }

      const lines = footer.querySelectorAll(".footer-line");
      lines.forEach((line) => {
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

      {/* HERO */}
      <section
        ref={heroSectionRef}
        className="h-screen flex items-center justify-center relative overflow-hidden cursor-none"
      >
        <div className="hero-glow absolute w-[600px] h-[600px] bg-purple-500/30 blur-[120px] rounded-full pointer-events-none" />
        <div className="hero-glow absolute w-[400px] h-[400px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />

        <div style={{ perspective: "800px" }}>
          <h1
            ref={heroRef}
            className="text-7xl md:text-9xl font-bold tracking-tighter text-center select-none"
            style={{ transformStyle: "preserve-3d", willChange: "transform" }}
          >
            FRAME PRODUCTION
          </h1>
        </div>

        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-white/50 origin-top animate-[scaleY_1.5s_ease-in-out_infinite_alternate]" />
        </div>
      </section>

      {/* TEXT */}
      <section className="h-screen flex items-center justify-center">
        <p ref={textRef} className="text-2xl md:text-4xl text-center max-w-xl">
          Apa yang telah kami lakukan selama ini?
        </p>
      </section>

      {/* PROJECTS */}
      <section className="min-h-screen px-10 py-80">
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
                <h2 className="text-3xl">{project.title}</h2>
                <span className="text-neutral-600 text-sm">{project.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================ */}
      {/* 🔥 HORIZONTAL SCROLL — dengan gambar        */}
      {/* ============================================ */}
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
              {/* Gambar */}
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="500px"
              />

              {/* Overlay gelap dari bawah */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Badge kategori — pojok kiri atas */}
              <span className="absolute top-5 left-5 text-xs tracking-widest uppercase bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                {work.category}
              </span>

              {/* Judul — pojok kiri bawah */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl font-semibold leading-snug">
                  {work.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PINNED */}
      <section className="h-[200vh] flex items-center justify-center">
        <div ref={pinSectionRef}>
          <h2 className="text-6xl text-center max-w-4xl">
            We create immersive digital worlds
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
          className="reveal-image absolute inset-0 bg-neutral-800 w-full h-full"
          style={{ willChange: "transform, opacity" }}
        />
        <div className="reveal-overlay absolute inset-0 bg-black/70 z-10" />
        <div className="reveal-text relative z-20 text-center px-10">
          <h2 className="text-4xl md:text-7xl font-bold mb-6">
            Crafting Visual Experiences
          </h2>
          <p className="text-neutral-300 text-lg md:text-xl max-w-xl mx-auto">
            Every interaction is carefully designed to feel natural, responsive,
            and immersive.
          </p>
        </div>
      </section>

      {/* SPLIT TEXT */}
      <section className="h-screen flex items-center justify-center px-10">
        <h2
          ref={splitTextRef}
          className="text-5xl md:text-7xl text-center max-w-4xl leading-tight"
        >
          Digital experiences crafted with precision
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
              In Motion
            </p>
            <h2 className="text-5xl md:text-7xl font-bold max-w-3xl leading-tight">
              Objects that breathe with your scroll
            </h2>
          </div>
        </div>
      </section>

      {/* ANIMATED COUNTER */}
      <section className="min-h-screen flex items-center justify-center px-10 py-40">
        <div ref={counterRef} className="w-full max-w-5xl">
          <p className="text-neutral-500 text-sm tracking-[0.3em] uppercase text-center mb-20">
            By the numbers
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 text-center">
            {[
              { label: "Projects Shipped", target: 248, suffix: "+" },
              { label: "Happy Clients", target: 94, suffix: "" },
              { label: "Hours Crafted", target: 18400, suffix: "" },
              { label: "Awards Won", target: 31, suffix: "" },
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
      <section className="py-24 overflow-hidden border-y border-white/5">
        <div ref={marqueeRef} className="flex whitespace-nowrap">
          <div className="marquee-track flex items-center gap-16 pr-16">
            {[
              "Branding",
              "Motion Design",
              "Web Development",
              "3D Visualization",
              "UI/UX Design",
              "Creative Direction",
              "Interactive Media",
              "Digital Strategy",
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
      <section className="min-h-screen px-10 py-40 overflow-hidden">
        <div ref={morphRef} className="max-w-6xl mx-auto">
          <h2 className="morph-title text-5xl md:text-7xl font-bold mb-20 overflow-hidden">
            Selected Works
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { h: "h-[300px]", label: "Identity" },
              { h: "h-[500px]", label: "Motion" },
              { h: "h-[300px]", label: "Web" },
              { h: "h-[400px]", label: "3D" },
              { h: "h-[300px]", label: "Brand" },
              { h: "h-[400px]", label: "Digital" },
            ].map((card, i) => (
              <div
                key={i}
                className={`morph-card ${card.h} bg-neutral-900 rounded-3xl relative overflow-hidden group cursor-pointer`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute bottom-6 left-6 text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0 transition-transform">
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
          <div className="parallax-fg relative z-10 flex items-center justify-center h-full">
            <h2 className="text-5xl md:text-7xl text-center">
              Depth & Motion Experience
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
            Our Approach
          </p>
          <h2 className="text-5xl md:text-8xl font-bold leading-tight max-w-4xl mb-16">
            We think
            <br />
            differently.
          </h2>

          <div className="grid md:grid-cols-3 gap-10 border-t border-black/10 pt-16">
            {[
              {
                num: "01",
                title: "Research First",
                desc: "Every project begins with deep understanding — of your audience, your goals, and the landscape.",
              },
              {
                num: "02",
                title: "Design with Intent",
                desc: "No decoration for its own sake. Every element serves a purpose, drives a feeling, creates meaning.",
              },
              {
                num: "03",
                title: "Build to Last",
                desc: "We craft experiences that age well — technically sound, performant, and built for humans.",
              },
            ].map((col) => (
              <div key={col.num}>
                <span className="text-xs text-neutral-400 font-mono mb-4 block">
                  {col.num}
                </span>
                <h3 className="text-xl font-bold mb-3">{col.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {col.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TIMELINE */}
      <section className="min-h-screen bg-black px-10 md:px-20 py-40 overflow-hidden">
        <div ref={timelineRef} className="max-w-4xl mx-auto">
          <p className="text-neutral-600 text-xs tracking-[0.4em] uppercase mb-4">
            Our Process
          </p>
          <h2 className="tl-title text-5xl md:text-7xl font-bold mb-24">
            How we work
          </h2>

          <div className="relative">
            <div className="tl-line absolute left-1/2 -translate-x-1/2 w-px h-full bg-white/10 origin-top" />

            {[
              {
                year: "Week 01–02",
                title: "Discovery",
                desc: "Deep-dive workshops, stakeholder interviews, competitive analysis, and defining success metrics.",
                side: "left",
              },
              {
                year: "Week 03–04",
                title: "Strategy",
                desc: "Information architecture, user flows, content strategy, and technical scoping.",
                side: "right",
              },
              {
                year: "Week 05–07",
                title: "Design",
                desc: "Wireframes to high-fidelity. Motion principles, design system, and interactive prototypes.",
                side: "left",
              },
              {
                year: "Week 08–11",
                title: "Build",
                desc: "Component-driven development, CMS integration, performance optimization.",
                side: "right",
              },
              {
                year: "Week 12",
                title: "Launch",
                desc: "QA, accessibility audit, analytics setup, staged rollout, and post-launch monitoring.",
                side: "left",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`tl-item relative flex items-start mb-20 ${
                  item.side === "left"
                    ? "flex-row pr-[55%]"
                    : "flex-row-reverse pl-[55%]"
                }`}
              >
                <div className="tl-dot absolute left-1/2 -translate-x-1/2 top-2 w-3 h-3 rounded-full bg-white border-2 border-black z-10" />
                <div
                  className={
                    item.side === "right" ? "text-right" : "text-left"
                  }
                >
                  <span className="text-xs text-purple-400 font-mono tracking-widest block mb-2">
                    {item.year}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
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
            Lets create
            <br />
            <span className="text-white/20">something</span>
            <br />
            <span
              className="text-transparent"
              style={
                {
                  WebkitTextStroke: "1px rgba(255,255,255,0.3)",
                } as React.CSSProperties
              }
            >
              extraordinary.
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
            <p className="text-neutral-600 text-sm leading-relaxed max-w-xs">
              We design and build digital experiences that move people —
              literally and emotionally.
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
            © 2025 Frame Production. All rights reserved.
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
              Jakarta, Indonesia 🇮🇩
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
