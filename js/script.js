const burger = document.querySelector(".burger");
burger.addEventListener("click", () => {
  document.body.classList.toggle("menu-open");
});
const menu = document.querySelector(".menu");
menu.addEventListener("click", () => {
  document.body.classList.toggle("menu-open");
});
