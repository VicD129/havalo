// Collapse
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "flex") {
        content.style.display = "none";
        } else {
            content.style.display = "flex";
        }
    });
}


// Animations

// let tl0 = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".links_block",
//         start: "top center"
//     }
// });

// tl0.from(".links_block", {y: -300, opacity: 0, duration: 1.5, delay: 1});

gsap.to('.logo', {
    duration: 1.5,
    delay: 2,
    scale: 1
});

// Marquee GSAP
let marquee = document.querySelectorAll('.marquee-text');

// added event listener because it doesn't get the right width
addEventListener("load", function () {
 marquee.forEach(el => {
  // set a default rate, the higher the value, the faster it is
  let rate = 50;
  // get the width of the element
  let distance = 4000;
  // get the margin-right of the element
  let style = window.getComputedStyle(el);
  let marginRight = parseInt(style.marginRight) || 0;
  // get the total width of the element
  let totalDistance = distance + marginRight;
  // get the duration of the animation 
  // for a better explanation, see the quoted codepen in the first comment
  let time = totalDistance / rate;
  // get the parent of the element
  let container = el.parentElement;

  gsap.to('.hero-marquee', {
    duration: 2,
    opacity: 1
  });

  gsap.to(container, time, {
   repeat: -1,
   x: '-'+totalDistance,
   ease: Linear.easeNone,
  });
 });
});


// gsap.to('.marquee_wrapper', {
//     duration: 1.5,
//     delay: 2,
//     opacity: 1
// });

let tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".details_wrapper",
        start: "top center"
    }
});

tl1.from(".details_h1", {y: 300, opacity: 0, duration: 1})
   .from(".detail1_h2", {y: 300, opacity: 0, duration: 1})
   .from(".glide1", {y: 300, opacity: 0, duration: 1});

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".detail2",
        start: "top center"
    }
});

tl2.from(".detail2_h2", {y: 300, opacity: 0, duration: 1})
   .from(".glide2", {y: 300, opacity: 0, duration: 1});

let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".detail3",
        start: "top center"
    }
});

tl3.from(".detail3_h2", {y: 300, opacity: 0, duration: 1})
   .from(".glide3", {y: 300, opacity: 0, duration: 1});

let tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".detail4",
        start: "top bottom"
    }
});

tl4.from(".detail4_h2", {y: 300, opacity: 0, duration: 1})
   .from(".glide4", {y: 300, opacity: 0, duration: 1});

let tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".detail5",
        start: "top bottom"
    }
});

tl5.from(".detail5_h2", {y: 300, opacity: 0, duration: 1})
   .from(".glide5", {y: 300, opacity: 0, duration: 1});

let tl6 = gsap.timeline({
    scrollTrigger: {
        trigger: ".detail6",
        start: "top bottom"
    }
});

tl6.from(".detail6_h2", {y: 300, opacity: 0, duration: 1})
   .from(".glide6", {y: 300, opacity: 0, duration: 1});

let tl7 = gsap.timeline({
    scrollTrigger: {
        trigger: ".detail7",
        start: "top bottom"
    }
});

tl7.from(".detail7_h2", {y: 300, opacity: 0, duration: 1})
   .from(".glide7", {y: 300, opacity: 0, duration: 1});

let tl8 = gsap.timeline({
    scrollTrigger: {
        trigger: ".detail8",
        start: "top bottom"
    }
});

tl7.from(".detail8_h2", {y: 300, opacity: 0, duration: 1})
   .from(".glide8", {y: 300, opacity: 0, duration: 1});

// Glidejs carousel
new Glide('.glide.glide1', {
    autoplay: 3000,
    animationDuration: 1500,
    rewindDuration: 2000
}).mount();

new Glide('.glide.glide2', {
    autoplay: 3000,
    animationDuration: 1500,
    rewindDuration: 2000
}).mount();

new Glide('.glide.glide3', {
    autoplay: 3000,
    animationDuration: 1500,
    rewindDuration: 2000
}).mount();

new Glide('.glide.glide4', {
    autoplay: 3000,
    animationDuration: 1500,
    rewindDuration: 2000
}).mount();

new Glide('.glide.glide5', {
    autoplay: 3000,
    animationDuration: 1500,
    rewindDuration: 2000
}).mount();

// new Glide('.glide.glide6', {
//     autoplay: 3000,
//     animationDuration: 1500,
//     rewindDuration: 2000
// }).mount();

new Glide('.glide.glide7', {
    autoplay: 3000,
    animationDuration: 1500,
    rewindDuration: 2000
}).mount();

new Glide('.glide.glide8', {
    autoplay: 3000,
    animationDuration: 1500,
    rewindDuration: 2000
}).mount();