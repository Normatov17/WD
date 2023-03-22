AOS.init();

// media
const menuHumburger = document.querySelector(".menu-burger");
const menuLinks = document.querySelector(".menu-Links");

menuHumburger.addEventListener("click", (e) => {
    menuLinks.classList.toggle("open");
});