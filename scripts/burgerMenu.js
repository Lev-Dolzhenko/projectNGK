const burgerBtn = document.querySelector(".burger-btn");
const menu = document.querySelector(".header-nav--mobile");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
  menu.classList.toggle("active");
  document.body.classList.toggle("block");
});
