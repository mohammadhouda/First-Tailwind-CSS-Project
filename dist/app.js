const menuBtn = document.querySelector(".menu");
const mobile_menu = document.querySelector(".mobile-menu");

menuBtn.addEventListener("click", () => {
  mobile_menu.classList.toggle("hidden");
});
