import gsap from "gsap";

/**
 * Marquee tak berujung: track di-clone lalu keduanya digeser bareng (xPercent -100, repeat infinite)
 * supaya terlihat looping mulus.
 *
 * @param marquee elemen root section (punya .marquee-track)
 * @returns cleanup function — melepas clone node yang ditambahkan
 */
export function initMarquee(marquee: HTMLDivElement) {
  const track = marquee.querySelector(".marquee-track");
  if (!track) return () => {};

  const clone = track.cloneNode(true) as HTMLElement;
  marquee.appendChild(clone);

  gsap.to([track, clone], {
    xPercent: -100,
    repeat: -1,
    duration: 18,
    ease: "none",
  });

  gsap.from(marquee, {
    opacity: 0,
    y: 40,
    duration: 1,
    scrollTrigger: { trigger: marquee, start: "top 85%" },
  });

  return () => {
    clone.remove();
  };
}
