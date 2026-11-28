// Booking form: explicit client-side JS validation + clear DOM error/success states.
// No backend is used; confirmation is displayed client-side.
(function () {
  const bookForm = document.getElementById("book-form");
  const nameEl = document.getElementById("name");
  const emailEl = document.getElementById("email");
  const zoneEl = document.getElementById("zone");
  const minutesEl = document.getElementById("minutes");
  const agreeEl = document.getElementById("agree");
  const errorsEl = document.getElementById("book-errors");
  const msgEl = document.getElementById("book-msg");

  if (!bookForm || !nameEl || !emailEl || !zoneEl || !minutesEl || !agreeEl || !errorsEl || !msgEl) {
    return;
  }

  const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function markField(input, isInvalid) {
    input.classList.toggle("is-invalid", isInvalid);
    input.setAttribute("aria-invalid", String(isInvalid));
  }

  function clearFeedback() {
    [nameEl, emailEl, minutesEl].forEach(function (el) {
      markField(el, false);
    });
    agreeEl.setAttribute("aria-invalid", "false");
    errorsEl.textContent = "";
    errorsEl.hidden = true;
    msgEl.textContent = "";
    msgEl.hidden = true;
  }

  function showErrors(errors, firstBadEl) {
    errorsEl.textContent = "";

    const heading = document.createElement("p");
    heading.textContent = "Please fix the following before reserving:";
    const list = document.createElement("ul");

    for (const text of errors) {
      const li = document.createElement("li");
      li.textContent = text;
      list.appendChild(li);
    }

    errorsEl.append(heading, list);
    errorsEl.hidden = false;

    if (firstBadEl) {
      firstBadEl.focus();
    }
  }

  bookForm.addEventListener("submit", function (e) {
    e.preventDefault();
    clearFeedback();

    const errors = [];
    let firstBadEl = null;

    const name = nameEl.value.trim();
    if (name.length < 2) {
      errors.push("Name must be at least 2 characters.");
      markField(nameEl, true);
      firstBadEl = firstBadEl || nameEl;
    }

    const email = emailEl.value.trim();
    if (!EMAIL_PATTERN.test(email)) {
      errors.push("Enter a valid email address (for example, rider@example.com).");
      markField(emailEl, true);
      firstBadEl = firstBadEl || emailEl;
    }

    const rawMinutes = minutesEl.value.trim();
    const minutes = Number(rawMinutes);
    if (rawMinutes === "" || Number.isNaN(minutes) || minutes < 10 || minutes > 180) {
      errors.push("Minutes must be a number between 10 and 180.");
      markField(minutesEl, true);
      firstBadEl = firstBadEl || minutesEl;
    }

    if (!agreeEl.checked) {
      errors.push("Confirm that you will park inside a marked zone.");
      agreeEl.setAttribute("aria-invalid", "true");
      firstBadEl = firstBadEl || agreeEl;
    }

    if (errors.length > 0) {
      showErrors(errors, firstBadEl);
      return;
    }

    const zoneName = zoneEl.options[zoneEl.selectedIndex].text;
    const price = minutes * 90;

    msgEl.textContent =
      "Reservation confirmed (client-side demo): " +
      name +
      ", " +
      minutes +
      " min in " +
      zoneName +
      " — estimated total " +
      price +
      " ₸.";
    msgEl.hidden = false;
    bookForm.reset();
  });
})();
