import gsap from "gsap";

/**
 * Elemen-elemen dekoratif (.float-obj) bergerak naik/turun dengan kecepatan
 * berbeda per index (parallax vertikal) sekaligus rotasi mengikuti scroll.
 *
 * @param floatingObjs elemen root section (punya .float-obj dan .float-title)
 */
export function initFloatingObjects(floatingObjs: HTMLDivElement) {
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
