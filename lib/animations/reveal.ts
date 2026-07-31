import gsap from "gsap";

/**
 * Section "fullscreen reveal": clip-path membuka dari rounded box ke full screen,
 * image zoom-out + fade-in, teks naik dari bawah, overlay menipis saat di-scroll.
 *
 * @param reveal elemen root section reveal (punya .reveal-image, .reveal-text, .reveal-overlay)
 */
export function initFullscreenReveal(reveal: HTMLDivElement) {
  const image = reveal.querySelector(".reveal-image");
  const revealText = reveal.querySelector(".reveal-text");
  const overlay = reveal.querySelector(".reveal-overlay");

  if (!image || !revealText) return;

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

/**
 * Dekorasi section reveal: shape pop-in, label naik, dua orbit ring berputar berlawanan arah.
 *
 * @param reveal      elemen root section reveal (dipakai sebagai scroll trigger)
 * @param revealDecor elemen pembungkus dekorasi (punya .reveal-shape, .reveal-label, .orbit-ring, .orbit-ring-2)
 */
export function initRevealDecor(
  reveal: HTMLDivElement,
  revealDecor: HTMLDivElement,
) {
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
