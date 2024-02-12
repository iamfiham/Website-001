let circle = document.getElementById("cursor");
let heading = document.getElementById("gsap-box");
let body = document.body;

window.addEventListener("mousemove", (e) => {
  let cursorx = e.pageX;
  let cursory = e.pageY;

  let tophead = window.scrollY + heading.getBoundingClientRect().top;
  let lefthead = heading.getBoundingClientRect().left;
  let righthead = lefthead + heading.getBoundingClientRect().width;
  let bottomhead = tophead + heading.getBoundingClientRect().height;

  // console.log("x" + cursorx);
  // console.log("y" + cursory);
  // console.log("top" + tophead);
  // console.log("left" + lefthead);
  // console.log("right" + righthead);
  // console.log("bottom" + bottomhead);

  let circlewidth = getComputedStyle(circle).width.slice(0, -2);

  circle.style.left = cursorx - circlewidth / 2 + "px";
  circle.style.top = cursory - circlewidth / 2 + "px";

  if (
    tophead < cursory &&
    cursory < bottomhead &&
    lefthead < cursorx &&
    cursorx < righthead
  ) {
    cursor.style.scale = "1";
    body.style.cursor = "none";
  } else {
    cursor.style.scale = "0";
    body.style.cursor = "auto";
  }
});
