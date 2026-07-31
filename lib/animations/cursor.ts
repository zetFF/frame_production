import gsap from "gsap";

/**
 * Custom magnetic cursor: lingkaran besar (lerp lambat) + dot kecil (lerp cepat),
 * plus efek scale/opacity saat hover ke elemen interaktif.
 *
 * @param cursor    elemen lingkaran cursor utama
 * @param cursorDot elemen dot kecil di tengah cursor
 * @returns cleanup function — panggil saat unmount untuk melepas event listener
 */
export function initCustomCursor(
  cursor: HTMLDivElement,
  cursorDot: HTMLDivElement,
) {
  let mouseX = 0,
    mouseY = 0,
    cursorX = 0,
    cursorY = 0,
    dotX = 0,
    dotY = 0;

  const handleMouseMove = (e: MouseEvent) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  };

  window.addEventListener("mousemove", handleMouseMove);

  const tick = () => {
    cursorX += (mouseX - cursorX) * 0.08;
    cursorY += (mouseY - cursorY) * 0.08;
    dotX += (mouseX - dotX) * 0.35;
    dotY += (mouseY - dotY) * 0.35;
    gsap.set(cursor, { x: cursorX - 20, y: cursorY - 20 });
    gsap.set(cursorDot, { x: dotX - 4, y: dotY - 4 });
  };
  gsap.ticker.add(tick);

  const hoverTargets = document.querySelectorAll(
    "a, button, .morph-card, .float-obj, h1, h2",
  );

  const handleEnter = () => {
    gsap.to(cursor, {
      scale: 2.5,
      opacity: 0.6,
      borderColor: "rgba(168,85,247,0.8)",
      duration: 0.3,
      ease: "power2.out",
    });
  };
  const handleLeave = () => {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
      borderColor: "rgba(255,255,255,0.5)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  hoverTargets.forEach((el) => {
    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mouseleave", handleLeave);
  });

  // cleanup
  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
    gsap.ticker.remove(tick);
    hoverTargets.forEach((el) => {
      el.removeEventListener("mouseenter", handleEnter);
      el.removeEventListener("mouseleave", handleLeave);
    });
  };
}
