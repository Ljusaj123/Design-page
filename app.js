const nav = document.querySelector(".navigation");
const hamburger = document.querySelector(".navigation-menu");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("show");
  hamburger.classList.toggle("is-active");
});
