import gsap from "gsap";

/**
 * Angka statistik naik dari 0 ke nilai target (data-target) saat section masuk viewport,
 * plus entrance stagger untuk tiap item.
 *
 * @param counter elemen root section (punya .count-item, tiap item punya .count-number[data-target])
 */
export function initCounterStats(counter: HTMLDivElement) {
  const items = counter.querySelectorAll(".count-item");

  gsap.from(Array.from(items), {
    scrollTrigger: { trigger: counter, start: "top 75%" },
    y: 60,
    opacity: 0,
    stagger: 0.15,
    duration: 0.8,
    ease: "power3.out",
  });

  items.forEach((item) => {
    const numberEl = item.querySelector(".count-number");
    if (!numberEl) return;

    const target = parseInt(numberEl.getAttribute("data-target") || "0");
    const obj = { val: 0 };

    gsap.to(obj, {
      val: target,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: { trigger: counter, start: "top 75%" },
      onUpdate: () => {
        numberEl.textContent = Math.round(obj.val).toLocaleString();
      },
    });
  });
}
