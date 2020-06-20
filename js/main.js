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


// ScrollTrigger animations
let tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".details_wrapper",
        start: "top center"
    }
});

tl1.from(".details_h1", {y: 300, opacity: 0, duration: 1})
   .from(".detail1_h2", {y: 300, opacity: 0, duration: 1})
   .from(".siema_1", {y: 300, opacity: 0, duration: 1});

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".detail2",
        start: "top center"
    }
});

tl2.from(".detail2_h2", {y: 300, opacity: 0, duration: 1})
   .from(".siema_2", {y: 300, opacity: 0, duration: 1});

let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".detail3",
        start: "top center"
    }
});

tl3.from(".detail3_h2", {y: 300, opacity: 0, duration: 1})
   .from(".siema_3", {y: 300, opacity: 0, duration: 1});

let tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".detail4",
        start: "top center"
    }
});

tl4.from(".detail4_h2", {y: 100, opacity: 0, duration: 1});

let tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".detail_pattern",
        scrub: true,
        start: "top bottom"
    }
});

tl5.from(".detail_pattern", {x: 250})

// Siema carousel
const siemas = document.querySelectorAll('.siema');

for(const siema of siemas) {
  new Siema({
    selector: siema
  })
}