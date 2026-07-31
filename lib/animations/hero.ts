import gsap from "gsap";

/**
 * Efek 3D tilt pada teks hero mengikuti posisi mouse, plus pergerakan glow background.
 *
 * @param heroSection elemen section hero (area yang dipantau mousemove-nya)
 * @param heroText    elemen judul hero yang di-tilt
 * @returns cleanup function
 */
export function initHeroTilt(
  heroSection: HTMLElement,
  heroText: HTMLHeadingElement,
) {
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

  return () => {
    heroSection.removeEventListener("mousemove", handleMouseMove);
    heroSection.removeEventListener("mouseleave", handleMouseLeave);
  };
}

/**
 * Semua animasi entrance/loop untuk elemen dekorasi hero:
 * corner brackets, side labels, tag pills, diagonal lines,
 * floating dots, orbit rings, pulsing dot, bottom bar.
 *
 * Tidak butuh cleanup manual — semua di-drive oleh ScrollTrigger
 * yang otomatis dibersihkan lewat ScrollTrigger.getAll() di level hook utama.
 */
export function initHeroDecor(heroDecor: HTMLDivElement) {
  gsap.from(heroDecor.querySelectorAll(".hero-corner"), {
    scale: 0,
    opacity: 0,
    stagger: 0.1,
    duration: 1.2,
    ease: "expo.out",
    delay: 0.3,
  });

  gsap.from(heroDecor.querySelectorAll(".hero-side-label"), {
    x: (i) => (i % 2 === 0 ? -40 : 40),
    opacity: 0,
    stagger: 0.15,
    duration: 1,
    ease: "power3.out",
    delay: 0.6,
  });

  gsap.from(heroDecor.querySelectorAll(".hero-tag"), {
    y: 20,
    opacity: 0,
    stagger: 0.1,
    duration: 0.8,
    ease: "back.out(1.7)",
    delay: 0.8,
  });

  gsap.from(heroDecor.querySelectorAll(".hero-line"), {
    scaleX: 0,
    opacity: 0,
    stagger: 0.08,
    duration: 1,
    ease: "power3.inOut",
    delay: 0.5,
    transformOrigin: "left center",
  });

  gsap.from(heroDecor.querySelectorAll(".hero-dot"), {
    scale: 0,
    opacity: 0,
    stagger: 0.05,
    duration: 0.6,
    ease: "back.out(2)",
    delay: 1,
  });

  gsap.to(heroDecor.querySelector(".hero-orbit"), {
    rotation: 360,
    duration: 30,
    repeat: -1,
    ease: "none",
    transformOrigin: "center center",
  });

  gsap.to(heroDecor.querySelector(".hero-orbit-inner"), {
    rotation: -360,
    duration: 18,
    repeat: -1,
    ease: "none",
    transformOrigin: "center center",
  });

  gsap.to(heroDecor.querySelectorAll(".hero-pulse"), {
    scale: 1.5,
    opacity: 0,
    duration: 1.8,
    repeat: -1,
    ease: "power2.out",
    stagger: 0.6,
  });

  gsap.from(heroDecor.querySelector(".hero-bottom-bar"), {
    y: 20,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    delay: 1.2,
  });
}

/**
 * Entrance sederhana untuk judul hero saat pertama kali mount (scale + fade).
 */
export function initHeroEntrance(hero: HTMLHeadingElement) {
  gsap.from(hero, {
    opacity: 0,
    scale: 0.8,
    duration: 1.5,
    ease: "power3.out",
  });
}
