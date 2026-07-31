import gsap from "gsap";

/**
 * Timeline vertikal: garis tengah "tumbuh" dari atas ke bawah mengikuti scroll,
 * tiap item slide-in dari kiri/kanan bergantian, dot pop-in, dan judul entrance.
 *
 * @param timeline elemen root section (punya .tl-line, .tl-item > .tl-dot, .tl-title)
 */
export function initTimeline(timeline: HTMLDivElement) {
  const line = timeline.querySelector(".tl-line");
  if (line) {
    gsap.fromTo(
      line,
      { scaleY: 0, transformOrigin: "top center" },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: timeline,
          start: "top 60%",
          end: "bottom 80%",
          scrub: true,
        },
      },
    );
  }

  const items = timeline.querySelectorAll(".tl-item");
  items.forEach((item, i) => {
    gsap.from(item, {
      x: i % 2 === 0 ? -100 : 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: { trigger: item, start: "top 80%" },
    });

    const dot = item.querySelector(".tl-dot");
    if (dot) {
      gsap.from(dot, {
        scale: 0,
        duration: 0.5,
        ease: "back.out(2)",
        scrollTrigger: { trigger: item, start: "top 80%" },
      });
    }
  });

  const tlTitle = timeline.querySelector(".tl-title");
  if (tlTitle) {
    gsap.from(tlTitle, {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: { trigger: timeline, start: "top 80%" },
    });
  }
}
