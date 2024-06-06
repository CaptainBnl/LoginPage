const closeIcon = document.querySelector("#close-icon");
const menuIcon = document.querySelector("#menu-icon");
const tl = gsap.timeline();

tl.to(".overlay", {
  right: 0,
  duration: 0.7,
})

tl.from(".overlay .links h4", {
  x: 200,
  duration: 0.8,
  stagger: .2,
  opacity: 0,
})
tl.from(closeIcon, {
  opacity: 0,
})

tl.pause();

menuIcon.addEventListener("click", () => tl.play())

closeIcon.addEventListener("click", () => tl.reverse())