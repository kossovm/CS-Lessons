console.log("W11 practice loaded");

// An array of objects. Each object has two properties: name and room.
const clubs = [
  { name: "Robotics", room: "GUK201" },
  { name: "Debate", room: "GUK105" },
  { name: "Web Club", room: "GUK4" }
];

const list = document.getElementById("list");

function renderClubs(items) {
  // Clear first, otherwise every call appends on top of the previous one.
  list.innerHTML = "";

  for (const club of items) {
    const li = document.createElement("li");
    // textContent, not innerHTML: the text is inserted as text, never as markup.
    li.textContent = club.name + " — " + club.room;
    list.appendChild(li);
  }
}

renderClubs(clubs);
console.table(clubs);
