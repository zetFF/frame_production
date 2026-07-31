import gsap from "gsap";

/**
 * Footer: teks besar naik dari bawah, link-link entrance stagger,
 * bottom bar fade-in, dan garis horizontal "menggambar" dari kiri ke kanan.
 *
 * @param footer elemen root footer (punya .footer-big-text, .footer-link, .footer-bottom, .footer-line)
 */
export function initFooter(footer: HTMLElement) {
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

  gsap.from(Array.from(footer.querySelectorAll(".footer-link")), {
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
