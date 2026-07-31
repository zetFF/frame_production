import gsap from "gsap";

/**
 * Section putih "terbuka" dari titik ke persegi penuh via clip-path polygon,
 * lalu konten di dalamnya (.window-inner) fade + scale-in.
 *
 * @param windowReveal elemen root section (punya .window-inner)
 */
export function initWindowReveal(windowReveal: HTMLDivElement) {
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
