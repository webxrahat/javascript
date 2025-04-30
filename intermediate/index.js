// console.log("connect");

const divOne = document.querySelector(".div-1");

divOne.addEventListener("click", function () {
  // console.log("click");

  gsap.to(divOne, {
    x: 500,

    backgroundColor: "#fa0112",
    duration: 3,
    delay: 0.5,
    ease: "power2.inOut",
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
  });
  // gsap.from(divOne, {
  //   x: 100,

  //   backgroundColor: "#fa0112",
  //   duration: 3,
  //   delay: 0.5,
  //   ease: "power2.inOut",
  //   repeat: -1,
  // });
});

gsap.registerPlugin(SplitText);

gsap.set("h1", { opacity: 1 });

let split = SplitText.create("#heading", { type: "chars" });
//now animate each character into place from 20px below, fading in:
gsap.from(split.chars, {
  y: 20,
  autoAlpha: 0,
  stagger: 0.05,
});
