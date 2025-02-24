/* 히든 효과 */
const hiddenTop = document.querySelector(".hidden-top");
const hiddenBottom = document.querySelector(".hidden-bottom");
const menuFold = document.querySelector(".menu__fold");
const menuUl = document.querySelector(".nav__menu ul");

menuFold.addEventListener("mouseenter", () => {
  menuUl.classList.remove("active");
  menuFold.classList.add("active");
});

menuUl.addEventListener("mouseleave", () => {
  menuUl.classList.add("active");
  menuFold.classList.remove("active");
});

window.addEventListener("scroll", () => {
  menuFold.classList.remove("active");
  menuUl.classList.add("active");
});
