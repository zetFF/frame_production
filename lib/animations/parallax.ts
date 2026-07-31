import gsap from "gsap";

/**
 * Parallax dua lapis: background bergerak turun (lambat), foreground bergerak naik (lebih cepat)
 * saat section di-scroll.
 *
 * @param parallax elemen root section parallax (punya .parallax-bg dan .parallax-fg)
 */
export function initParallaxLayers(parallax: HTMLDivElement) {
  const bg = parallax.querySelector(".parallax-bg");
  const fg = parallax.querySelector(".parallax-fg");
  if (!bg || !fg) return;

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

/**
 * Dekorasi kecil (label "Depth"/"Motion", dot grid) yang bergerak dengan
 * kecepatan berbeda-beda mengikuti index, plus entrance pop-in.
 *
 * @param parallax      elemen root section parallax (dipakai sebagai scroll trigger)
 * @param parallaxDecor elemen pembungkus dekorasi (punya .px-decor-item)
 */
export function initParallaxDecor(
  parallax: HTMLDivElement,
  parallaxDecor: HTMLDivElement,
) {
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
