// The browser validates required + type="email" before submit fires.
const contactForm = document.getElementById("contact");
const statusEl = document.getElementById("status");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault(); // no backend — confirm on the page
  statusEl.textContent = "Thanks — we will reply by email within a day.";
  contactForm.reset();
});
