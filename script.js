(function () {
  "use strict";
  var menuButton = document.querySelector(".menu");
  var nav = document.querySelector("nav");
  if (menuButton && nav) {
    menuButton.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.textContent = open ? "×" : "☰";
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.textContent = "☰";
      });
    });
  }
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
  var art = document.querySelector(".orbit-art");
  if (art && window.matchMedia && window.matchMedia("(pointer: fine)").matches) {
    document.addEventListener("pointermove", function (e) {
      var x = (e.clientX / window.innerWidth - .5) * 8;
      var y = (e.clientY / window.innerHeight - .5) * 8;
      art.style.transform = "translate(" + x + "px," + y + "px)";
    });
  }
})();