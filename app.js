const btnHamburger = document.querySelector("#menuMobile");

const menuMobile = document.querySelector(".menu-mobile");

btnHamburger.addEventListener("click", function () {
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
  } else {
    menuMobile.classList.add("open");
  }
});
