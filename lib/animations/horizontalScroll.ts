import gsap from "gsap";

/**
 * Section "works" di-pin lalu digeser secara horizontal mengikuti scroll vertikal,
 * dengan fade-out di 20% terakhir progress.
 *
 * @param horizontal elemen track yang berisi kartu-kartu works (lebar = max-content)
 */
export function initHorizontalScroll(horizontal: HTMLDivElement) {
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
}

/**
 * Section penyangga (pin placeholder) fade + slide-up saat discroll.
 *
 * @param pin elemen konten di dalam section pin
 */
export function initPinSection(pin: HTMLDivElement) {
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
}
