const Box = document.getElementById("gsap-box");

// SECTION heading
let size = Box.getBoundingClientRect().top + "px";
gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: Box,
    start: "0% 10%",
    end: "100% 10%",
    scrub: 1,
    // scrub: false,
    // markers: true,
    markers: false,
    // pin: true,
    // toggleActions: "play reverse play reverse",
  },
});
tl.to(Box, {
  y: -50,
  // scale: 1.1,
  autoAlpha: 0,
  duration: 0.5,
  ease: "none",
});

// SECTION ROCKET
const rocket = document.getElementById("rocket");
const container = document.getElementById("container");

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: rocket,
    start: "top bottom",
    end: "bottom top",
    scrub: 2,
    // markers: true,
    markers: false,
  },
});
tl2.to(rocket, {
  x: () => {
    return (
      container.getBoundingClientRect().width -
      rocket.getBoundingClientRect().width
    );
  },
});

window.addEventListener("resize", () => {
  let progress = tl2.totalProgress();
  tl2.progress(0);
  tl2.invalidate();
  tl2.totalProgress(progress);
});
