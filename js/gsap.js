const Box = document.getElementById("gsap-box");
let size = Box.getBoundingClientRect().top + "px";
console.log(size);
gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: Box,
    start: "0% 130px",
    end: "150% 130px",
    scrub: 1,
    // scrub: false,
    //  markers: true,
    markers: false,
    // pin: true,
    toggleActions: "play reverse play reverse",
  },
});
tl.to(Box, {
  y: -50,
  // scale: 1.1,
  autoAlpha: 0,
  duration: 0.5,
});
