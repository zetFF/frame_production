import gsap from "gsap";

/**
 * Memecah teks judul jadi span per-karakter lalu animasikan naik satu-satu.
 * Elemen DOM-nya dimodifikasi langsung (innerHTML diganti jadi span-span).
 *
 * @param split elemen heading yang teksnya mau dipecah
 */
export function initSplitTextReveal(split: HTMLHeadingElement) {
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

/**
 * Dekorasi di sekitar split text: shape diamond/crosshair pop-in + slide,
 * label editorial slide-in, dan parallax ringan saat scroll.
 *
 * @param split      elemen heading split text (dipakai untuk cari section terdekat)
 * @param splitDecor elemen pembungkus dekorasi (punya .split-shape, .split-label)
 */
export function initSplitDecor(
  split: HTMLHeadingElement,
  splitDecor: HTMLDivElement,
) {
  const splitSection = split.closest("section");

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
