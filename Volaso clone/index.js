document.addEventListener('DOMContentLoaded', function() {
  const focusElement = document.getElementById('focusElement');
  focusElement.focus();
});


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


gsap.from(".page-2 h3",{
  y:-100,
  opacity:0,
  rotationX: 360,
  duration: 2,
  ease: "power2.inOut",
  scrollTrigger:{
      trigger:".page-2 h3",
      scroller:"body",
      start:"top 80%",
      scrub:2
  }

})

gsap.from(".page-2a img",{
  opacity:0,
  x:100,
  duration:2,
  scrollTrigger:{
      trigger:".page-2a img",
      scroller:"body",
      start:"top 50%",
      end:"top 30%",
      scrub:2
  }

})


gsap.from(".page-3 h1", {
  y:-100,
  opacity:0,
  rotationX: 360,
  duration: 2,
  ease: "power2.inOut",
  scrollTrigger:{
    trigger:".page-3 h1",
    scroller:"body",
    start:"top 80%",
    scrub:2
}
});

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function() {
  let pages = gsap.utils.toArray('#page');

  pages.forEach((page, i) => {
    if (i !== pages.length - 1) { 
      ScrollTrigger.create({
        trigger: page,
        pin: true,
        pinSpacing: false,
        start: 'top top',
        end: () => `+=${page.clientHeight}`
      });
    }
  });
});


gsap.from(".container", {
  x: -900,
  duration:2.5,
  ease: "slow(0.7,0.7,false)",
  scrollTrigger: {
      trigger: ".container",
      scroller: "body",
      start: "top 50%",
      end: "bottom 80%",
      scrub: true
  }
});

gsap.from("#w1",{
  opacity:0,
  y:-100,
  duration:2,
  scrollTrigger:{
      trigger:"#w1",
      scroller:"body",

      start:"top 80%",
      scrub:2
  }

})

gsap.from("#w2",{
  opacity:0.5,
  y:100,
  duration:2,
  scrollTrigger:{
      trigger:"#w2",
      scroller:"body",
      start:"top 40%",
      end:"top 50%",
      scrub:5
  }

})

gsap.from("#w3",{
  opacity:0,
  y:-100,
  duration:2,
  scrollTrigger:{
      trigger:"#w3",
      scroller:"body",
      start:"top 80%",
      scrub:2
  }

})

var crsr = document.querySelector(".cursor");
document.addEventListener("mousemove", function (dets) {
  gsap.to(crsr,{
      x:dets.x,
      y:dets.y,
      duration:1,
      ease:"back.out"
  })
  // crsr.style.left = dets.x + "px";
  // crsr.style.top = dets.y + "px";
  crsrbr.style.left = dets.x - 210 + "px";
  crsrbr.style.top = dets.y - 210 + "px";
});


const crsrbr = document.querySelector(".cursor-blur");
document.addEventListener("mousemove", function (dets) {});



// function loaderAnimation() {
//   var loader = document.querySelector('#loader')
//   setTimeout(() =>{
//       loader.style.top = "-100%"
//   },6200)
// }

// loaderAnimation()

function loaderAnimation() {
  var loader = document.querySelector('#loader');
  setTimeout(() => {
    loader.style.top = "-100%";
  }, 6700);
}

document.addEventListener('DOMContentLoaded', () => {
  loaderAnimation();
});


let heroBg = document.querySelector('.hero');

        setInterval(() => {
            heroBg.style.backgroundImage = "url(img/a-sleek-and-modern-website-design-featuring-an-ola-7tCES3T8SkOKZcSnMiIIKA-RamuD-tuTRKcMlG3Gszn1w.jpeg)"
            
            setTimeout(() => {
                heroBg.style.backgroundImage = "url(img/-RamuD-tuTRKcMlG3Gszn1w.jpeg)"
            }, 1000);
        }, 2200);
