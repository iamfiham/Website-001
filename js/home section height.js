let home = document.getElementById("home");
let nav = document.getElementById("nav");

window.addEventListener("load", (event) => {
  home.style.minHeight =
    window.innerHeight - nav.getBoundingClientRect().height + "px";
});

window.addEventListener("resize", () => {
  home.style.minHeight =
    window.innerHeight - nav.getBoundingClientRect().height + "px";
});
