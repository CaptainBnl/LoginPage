const menu = document.querySelector("#menu-icon");
const close_icon = document.querySelector("#close-icon");
const tl = gsap.timeline();

  tl.to(".overley", {
    right: 0,
    duration: 0.7,
  })

  tl.from(".overley .links h3", {
    x: 150,
    duration: 0.7,
    stagger: 0.2,
    opacity: 0,
  })

  tl.from(".overley .icons i", {
    opacity: 0,
  })

  tl.pause()

  menu.addEventListener("click", () => {
    tl.play()
  })

  close_icon.addEventListener("click", () => {
    tl.reverse()
  })