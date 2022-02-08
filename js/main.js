let burger = document.querySelector(".header__burger");
let nav = document.querySelector(".header__nav");

burger.addEventListener("click", () => {
  burger.classList.toggle("header__burger--opened");
  nav.classList.toggle("header__nav--opened");
})