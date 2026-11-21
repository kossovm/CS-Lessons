// Two logs that run as soon as the page loads.
console.log("W10 practice loaded");
console.log("typeof 42 =>", typeof 42);

const billEl = document.getElementById("bill");
const tipEl = document.getElementById("tip");
const out = document.getElementById("out");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  // .value is always a string, so Number() converts it before any maths.
  const bill = Number(billEl.value);
  const tipPct = Number(tipEl.value);

  // Number("") is 0, not NaN — so the empty check has to come first.
  if (billEl.value === "" || tipEl.value === "") {
    out.textContent = "Fill in both fields.";
    return;
  }

  if (Number.isNaN(bill) || Number.isNaN(tipPct)) {
    out.textContent = "Please enter valid numbers.";
    return;
  }

  const tipAmount = bill * (tipPct / 100);
  const total = bill + tipAmount;

  console.log("bill:", bill, "tip%:", tipPct, "tip:", tipAmount);

  out.textContent =
    "Tip: " + tipAmount.toFixed(2) + "\n" +
    "Total: " + total.toFixed(2);
});
