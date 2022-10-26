const btnHamburger = document.getElementById("btnHamburger");
const body = document.querySelector("body");
const menuMobile = document.getElementById("menuMobile");
const overlay = document.getElementById("overlay");

btnHamburger.addEventListener("click", () => {
  if (!btnHamburger.classList.contains("open")) {
    btnHamburger.classList.add("open");
    menuMobile.classList.add("show");
    overlay.classList.add("show");
    body.classList.add("noscroll");
  } else {
    btnHamburger.classList.remove("open");
    menuMobile.classList.remove("show");
    overlay.classList.remove("show");
    body.classList.remove("noscroll");
  }
});
