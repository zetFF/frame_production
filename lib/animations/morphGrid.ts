import gsap from "gsap";

/**
 * Grid kartu morph: entrance scale+rotate dari tengah (stagger "from center"),
 * parallax vertikal seragam saat scroll, dan judul yang "terbuka" via clip-path.
 *
 * @param morph elemen root section (punya .morph-card dan .morph-title)
 */
export function initMorphGrid(morph: HTMLDivElement) {
  const cards = morph.querySelectorAll(".morph-card");

  gsap.from(Array.from(cards), {
    scrollTrigger: { trigger: morph, start: "top 80%" },
    scale: 0.5,
    opacity: 0,
    rotation: (i) => (i % 2 === 0 ? -15 : 15),
    stagger: { amount: 0.8, from: "center" },
    duration: 1,
    ease: "back.out(1.7)",
  });

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
