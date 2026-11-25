// Mobile menu toggle — shared by every page.
// Below 600px the nav is hidden by CSS; the button adds or removes .is-open.
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.getElementById("site-nav");

navToggle.addEventListener("click", function () {
  const isOpen = siteNav.classList.toggle("is-open");
  // aria-expanded tells a screen reader whether the menu is open
  navToggle.setAttribute("aria-expanded", String(isOpen));
});
