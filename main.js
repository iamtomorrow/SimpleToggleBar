let menuButton = document.querySelector(".menu-icon-container");
let menuContainer = document.querySelector(".menu-container");
let toggled = false;

menuButton.addEventListener("click", () => {
  if (toggled === false) {
    menuContainer.classList.add("menu-active");
    toggled = !toggled;
  } else {
    menuContainer.classList.remove("menu-active");
    toggled = !toggled;
  }
});
