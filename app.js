const btnHamburger = document.getElementById("btnHamburger");
const menuMobile = document.getElementById("menuMobile");
const overlay = document.getElementById("overlay");

btnHamburger.addEventListener("click", () => {
  btnHamburger.classList.toggle("close");
  overlay.classList.toggle("show");
  menuMobile.classList.toggle("show");
});
