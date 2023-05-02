burger = document.querySelector(".burger-res");
navbar = document.querySelector(".navbar");
navList = document.querySelector(".nav-list");
rightNav = document.querySelector(".rightNav");

burger.addEventListener("click", () => {
  rightNav.classList.toggle("visible-res");
  navList.classList.toggle("visible-res");
  navbar.classList.toggle("h-nav-res");
});
