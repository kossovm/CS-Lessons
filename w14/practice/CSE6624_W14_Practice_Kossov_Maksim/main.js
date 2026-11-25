console.log("W14 practice loaded");

const form = document.getElementById("form");
const item = document.getElementById("item");
const list = document.getElementById("list");
const empty = document.getElementById("empty");
const announce = document.getElementById("announce");

function updateEmptyState() {
  empty.hidden = list.children.length > 0;
}

// Screen readers read role="status" aloud when its text changes.
function say(text) {
  announce.textContent = text;
}

function addTask(text) {
  const li = document.createElement("li");

  // FIX: the toggle used to be a click handler on the <li> — invisible to
  // Tab and Enter. A real <button> is focusable and keyboard-operable for free,
  // and aria-pressed tells a screen reader whether the task is done.
  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "toggle";
  toggle.textContent = text;
  toggle.setAttribute("aria-pressed", "false");

  toggle.addEventListener("click", function () {
    const done = li.classList.toggle("done");
    toggle.setAttribute("aria-pressed", String(done));
    say(text + (done ? " marked done" : " marked not done"));
  });

  const del = document.createElement("button");
  del.type = "button";
  del.className = "del";
  del.textContent = "×";
  del.setAttribute("aria-label", "Delete task: " + text);

  del.addEventListener("click", function () {
    li.remove();
    updateEmptyState();
    say("Deleted: " + text);
    item.focus(); // focus would otherwise be lost with the removed button
  });

  li.appendChild(toggle);
  li.appendChild(del);
  list.appendChild(li);
  updateEmptyState();
  say("Added: " + text);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const text = item.value.trim();
  if (!text) {
    return;
  }
  addTask(text);
  item.value = "";
  item.focus();
});

updateEmptyState();
