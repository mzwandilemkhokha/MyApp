gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".container anim");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".section appear",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: () => "+=" + document.querySelector(".section appear").offsetWidth
  }
});

