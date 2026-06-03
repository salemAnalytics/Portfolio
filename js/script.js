document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const navMenu = document.getElementById("nav-menu");

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      const icon = menuBtn.querySelector("i");
      if (navMenu.classList.contains("active")) {
        icon.classList.replace("fa-bars", "fa-xmark");
      } else {
        icon.classList.replace("fa-xmark", "fa-bars");
      }
    });
  }

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      menuBtn.querySelector("i").classList.replace("fa-xmark", "fa-bars");
    });
  });
});
