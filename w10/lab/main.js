console.log("W10 lab loaded");
console.log("typeof 42 =>", typeof 42);

/* ---------- shared helpers ---------- */

function showResult(el, text) {
  el.classList.remove("is-error");
  el.textContent = text;
}

function showError(el, text) {
  el.classList.add("is-error");
  el.textContent = text;
}

// Returns true only when the field holds a real number.
// Number("") is 0, so the empty string has to be rejected separately.
function isFilledNumber(inputEl) {
  return inputEl.value.trim() !== "" && !Number.isNaN(Number(inputEl.value));
}

/* ---------- tool 1: tip calculator ---------- */

const billEl = document.getElementById("bill");
const tipEl = document.getElementById("tip");
const tipOut = document.getElementById("tip-out");

document.getElementById("tip-btn").addEventListener("click", function () {
  if (!isFilledNumber(billEl) || !isFilledNumber(tipEl)) {
    showError(tipOut, "Fill in the bill and the tip percent with numbers.");
    return;
  }

  const bill = Number(billEl.value);
  const tipPct = Number(tipEl.value);

  if (bill < 0 || tipPct < 0) {
    showError(tipOut, "Numbers cannot be negative.");
    return;
  }

  const tipAmount = bill * (tipPct / 100);
  const total = bill + tipAmount;

  showResult(
    tipOut,
    "Tip: " + tipAmount.toFixed(2) + "\n" +
    "Total: " + total.toFixed(2)
  );
});

/* ---------- tool 2: grade average ---------- */

function average3(a, b, c) {
  return (a + b + c) / 3;
}

const g1 = document.getElementById("g1");
const g2 = document.getElementById("g2");
const g3 = document.getElementById("g3");
const avgOut = document.getElementById("avg-out");

document.getElementById("avg-btn").addEventListener("click", function () {
  const fields = [g1, g2, g3];

  if (!fields.every(isFilledNumber)) {
    showError(avgOut, "All three grades are required, and must be numbers.");
    return;
  }

  const avg = average3(Number(g1.value), Number(g2.value), Number(g3.value));

  // Division in JS is always float, so toFixed(2) is for display only.
  showResult(avgOut, "Average: " + avg.toFixed(2));
});
