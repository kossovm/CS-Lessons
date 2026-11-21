console.log("W13 lab loaded");

const root = document.getElementById("list");

async function load() {
  try {
    const res = await fetch("./data.json");

    // fetch does NOT reject on 404 or 500 — it resolves with ok === false.
    // Without this check a missing file would fall into res.json() and throw
    // a confusing parse error instead of a clear HTTP one.
    if (!res.ok) {
      throw new Error("HTTP " + res.status);
    }

    const items = await res.json();
    render(items);
    console.table(items);
  } catch (err) {
    showError(err);
  }
}

function render(items) {
  root.className = "cards";
  root.innerHTML = "";

  for (const item of items) {
    const card = document.createElement("div");
    card.className = "card";

    const title = document.createElement("h2");
    title.textContent = item.title;

    const blurb = document.createElement("p");
    blurb.textContent = item.blurb;

    // textContent, not innerHTML: the JSON is inserted as text, never parsed
    // as markup.
    card.appendChild(title);
    card.appendChild(blurb);
    root.appendChild(card);
  }
}

function showError(err) {
  root.className = "error";
  root.textContent =
    "Could not load data.json — open the folder with Live Server (http), " +
    "not by double-clicking the file. Details: " + err.message;
  console.error(err);
}

load();
