// Mobile menu toggle — shared by Home, Tips and Rider test.
// (Parking zones uses Bootstrap 5.3 collapse via bootstrap.bundle.min.js.)
(function () {
  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.getElementById("site-nav");
  if (!navToggle || !siteNav) return;

  navToggle.addEventListener("click", function () {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
})();
