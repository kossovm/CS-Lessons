console.log("W13 practice loaded");

// One named key for this page. Keep the name unique — every site on the same
// origin shares one localStorage, so a generic name like "note" collides.
const KEY = "cse6624-w13-note";

const input = document.getElementById("input");
const out = document.getElementById("out");

function show() {
  // getItem returns null when the key is absent, so || supplies a fallback.
  const value = localStorage.getItem(KEY);
  out.textContent = value || "(empty)";
  console.log("read", KEY, "=>", value);
}

document.getElementById("save").addEventListener("click", function () {
  // localStorage only stores strings. input.value is already a string here.
  localStorage.setItem(KEY, input.value);
  show();
});

document.getElementById("clear").addEventListener("click", function () {
  localStorage.removeItem(KEY);
  input.value = "";
  show();
});

// On load: read what was saved last time and put it on the page.
show();
input.value = localStorage.getItem(KEY) || "";
