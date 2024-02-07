const root = document.querySelector(":root");

window.addEventListener("mousemove", (para) => {
  let x = para.clientX;
  let y = para.clientY;
  // console.log(x);
  // console.log(y);
  let vh = window.innerHeight;
  let vw = window.innerWidth;
  // console.log(vh);
  // console.log(vw);

  let ox = Math.round(((x - vw / 2) / (vw / 2)) * 10);
  let oy = Math.round(((y - vh / 2) / (vh / 2)) * -10);

  root.style.setProperty("--x", ox + "deg");
  root.style.setProperty("--y", oy + "deg");

  // console.log(ox);
  // console.log(oy);
});
