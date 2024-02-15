let circle = document.getElementById("cursor");
let heading = document.getElementById("gsap-box");

window.addEventListener("mousemove", (e) => {
  let cursorx = e.pageX;
  let cursory = e.pageY;

  let circlewidth = getComputedStyle(circle).width.slice(0, -2);

  circle.style.left = cursorx - circlewidth / 2 + "px";
  circle.style.top = cursory - circlewidth / 2 + "px";
});

heading.addEventListener("mouseover", (e) => {
  circle.style.scale = "1";
  circle.style.opacity = "1";
});
heading.addEventListener("mouseout", (e) => {
  circle.style.scale = "0";
  circle.style.opacity = "0";
});
