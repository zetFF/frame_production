import gsap from "gsap";

/**
 * Teks pembuka ("Apa yang telah kami lakukan...") naik dari bawah saat masuk viewport.
 */
export function initTextIntro(text: HTMLParagraphElement) {
  gsap.from(text, {
    scrollTrigger: { trigger: text, start: "top 80%" },
    y: 100,
    opacity: 0,
    duration: 1.2,
  });
}

/**
 * Grid kartu projects entrance stagger (naik dari bawah satu-satu).
 *
 * @param projectsEl elemen grid pembungkus kartu-kartu project
 */
export function initProjectsGrid(projectsEl: HTMLDivElement) {
  gsap.from(Array.from(projectsEl.children), {
    scrollTrigger: { trigger: projectsEl, start: "top 80%" },
    y: 100,
    opacity: 0,
    stagger: 0.2,
  });
}
