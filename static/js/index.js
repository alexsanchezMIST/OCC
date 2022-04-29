// ********************
// LANGUAGE TOGGLE
// ********************

const toggle = document.querySelector("#toggle");
const toggleButton = document.querySelector("#toggle-btn");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("is-red");
  toggleButton.classList.toggle("is-clicked");
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
