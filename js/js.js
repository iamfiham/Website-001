const root = document.querySelector(':root');

window.addEventListener("resize", () => { 
    console.log(element.getBoundingClientRect().top);
    console.log(element.getBoundingClientRect().bottom);
    console.log(element.getBoundingClientRect().height);
 });

window.addEventListener("mousemove", (para) => { 
    let x = para.clientX;
    let y = para.clientY;
    // console.log(x);
    // console.log(y);
    let vh = window.innerHeight;
    let vw = window.innerWidth;
    // console.log(vh);
    // console.log(vw);
    
    let ox = ((x - vw/2)/(vw/2)*30);
    let oy = ((y - vh/2)/(vh/2)*-30);

    root.style.setProperty("--x", ox + "deg")
    root.style.setProperty("--y", oy + "deg")

    // console.log(ox);
    // console.log(oy);
    
 });
