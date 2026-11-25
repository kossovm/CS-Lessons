// Booking form: the browser checks required / type / min / max first.
// The submit event fires only when every field is valid.
const bookForm = document.getElementById("book-form");
const bookMsg = document.getElementById("book-msg");

bookForm.addEventListener("submit", function (e) {
  e.preventDefault(); // no backend this term — stay on the page

  const zoneSelect = document.getElementById("zone");
  const zoneName = zoneSelect.options[zoneSelect.selectedIndex].text;
  const minutes = Number(document.getElementById("minutes").value);
  const price = minutes * 90;

  bookMsg.textContent =
    "Reserved: " + minutes + " minutes from " + zoneName + " — about " + price + " ₸.";
  bookForm.reset();
});
