console.log("W12 practice loaded");

/* ---------- counter ---------- */

const countEl = document.getElementById("count");

document.getElementById("inc").addEventListener("click", function () {
  // textContent is always a string, so Number() converts before adding.
  countEl.textContent = String(Number(countEl.textContent) + 1);
});

/* ---------- notes ---------- */

const form = document.getElementById("form");
const item = document.getElementById("item");
const list = document.getElementById("list");

form.addEventListener("submit", function (e) {
  // Without this the browser submits the form and reloads the page,
  // which wipes the list before you can see it.
  e.preventDefault();

  const text = item.value.trim();
  if (!text) {
    return;
  }

  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);

  item.value = "";
  item.focus();
});

document.getElementById("clear").addEventListener("click", function () {
  list.innerHTML = "";
});
