console.log("W11 lab loaded");

// Five club objects. Same shape as Practice 11: { name, room }.
const clubs = [
  { name: "Robotics", room: "GUK201" },
  { name: "Debate", room: "GUK105" },
  { name: "Web Club", room: "GUK714" },
  { name: "Photo Lab", room: "GUK312" },
  { name: "Chess", room: "GUK118" }
];

const list = document.getElementById("list");
const count = document.getElementById("count");
const qEl = document.getElementById("q");

function renderClubs(items) {
  list.innerHTML = "";

  if (items.length === 0) {
    const li = document.createElement("li");
    li.className = "empty";
    li.textContent = "Nothing matches that name.";
    list.appendChild(li);
  } else {
    for (const club of items) {
      const li = document.createElement("li");
      li.textContent = club.name + " — " + club.room;
      list.appendChild(li);
    }
  }

  count.textContent = "Showing " + items.length + " of " + clubs.length + " clubs";
}

qEl.addEventListener("input", function () {
  // toLowerCase on BOTH sides, otherwise "WEB" would not match "Web Club".
  const q = qEl.value.trim().toLowerCase();

  // An empty query means every club passes the test, so the full list shows.
  const filtered = clubs.filter(function (c) {
    return c.name.toLowerCase().includes(q);
  });

  renderClubs(filtered);
});

renderClubs(clubs);
console.table(clubs);
