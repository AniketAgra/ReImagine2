gsap.to(".nav", {
  backgroundColor: "black",
  duration: 0.1,
  height: "100px",
  scrollTrigger: {
    trigger: ".nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 2,
  },
});

gsap.to("#main", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

const crsr = document.querySelector(".cursor");
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  crsrbr.style.left = dets.x - 210 + "px";
  crsrbr.style.top = dets.y - 210 + "px";
});

const crsrbr = document.querySelector(".cursor-blur");
document.addEventListener("mousemove", function (dets) {});
