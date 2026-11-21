console.log("W12 lab loaded");

const form = document.getElementById("form");
const item = document.getElementById("item");
const list = document.getElementById("list");
const empty = document.getElementById("empty");

function updateEmptyState() {
  // hidden is a boolean attribute, so this shows the message only on an empty list.
  empty.hidden = list.children.length > 0;
}

function addTask(text) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.className = "text";
  span.textContent = text;

  const del = document.createElement("button");
  del.type = "button";
  del.className = "del";
  del.textContent = "×";
  del.setAttribute("aria-label", "Delete task: " + text);

  // Clicking anywhere on the row toggles done.
  li.addEventListener("click", function () {
    li.classList.toggle("done");
  });

  // The delete button sits INSIDE the li, so its click would bubble up to the
  // row handler above and toggle done on the way out. stopPropagation ends the
  // bubble here, so deleting never toggles.
  del.addEventListener("click", function (e) {
    e.stopPropagation();
    li.remove();
    updateEmptyState();
  });

  li.appendChild(span);
  li.appendChild(del);
  list.appendChild(li);
  updateEmptyState();
}

form.addEventListener("submit", function (e) {
  e.preventDefault(); // otherwise the page reloads and the list is gone

  const text = item.value.trim();
  if (!text) {
    return;
  }

  addTask(text);
  item.value = "";
  item.focus();
});

updateEmptyState();
