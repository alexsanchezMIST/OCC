// ********************
// INITIALIZE AOS
// ********************

import { AOS } from "./aos.esm";

AOS.init({
  duration: 300,
  easing: "ease-in-out",
  once: true,
});

// ********************
// ANIMATE NAV
// ********************

const nav = document.querySelector(".nav");

window.onscroll = () => {
  if (window.scrollY > 0) {
    nav.classList.add("is-scrolled");
  } else {
    nav.classList.remove("is-scrolled");
  }
};
