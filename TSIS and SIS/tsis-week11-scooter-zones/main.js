console.log("Tezjol parking zones loaded — niche 15");

/* ---------- data: array of objects, one per parking zone ---------- */

const zones = [
  { name: "Abay / Furmanov",  district: "Almaly",     slots: 12, note: "Under the metro entrance canopy" },
  { name: "Green Bazaar",     district: "Almaly",     slots: 8,  note: "East wall, away from the stalls" },
  { name: "Satbayev campus",  district: "Bostandyk",  slots: 20, note: "Between GUK and the library" },
  { name: "Mega Alma-Ata",    district: "Bostandyk",  slots: 15, note: "North car park, row A" },
  { name: "Medeu lower gate", district: "Medeu",      slots: 6,  note: "Last zone before the climb" },
  { name: "Dostyk Plaza",     district: "Medeu",      slots: 10, note: "Street side, not the courtyard" }
];

/* ---------- localStorage, wrapped so a blocked store cannot break the page ----------
   Reading or writing localStorage THROWS in private mode or when site data is
   blocked. Every call goes through these two helpers, so the worst case is that
   the filter is not remembered — the filtering itself still works. */

const STORE_KEY = "tezjol.zoneFilter";

function readSavedFilter() {
  try {
    return localStorage.getItem(STORE_KEY) || "";
  } catch (err) {
    console.warn("localStorage unavailable, filter will not be remembered:", err.name);
    return "";
  }
}

function saveFilter(value) {
  try {
    localStorage.setItem(STORE_KEY, value);
    return true;
  } catch (err) {
    return false;
  }
}

/* ---------- elements ---------- */

const qEl = document.getElementById("q");
const listEl = document.getElementById("list");
const countEl = document.getElementById("count");
const clearBtn = document.getElementById("clear");
const storeNoteEl = document.getElementById("store-note");

/* ---------- rendering ---------- */

function renderZones(items) {
  listEl.innerHTML = "";

  if (items.length === 0) {
    const col = document.createElement("div");
    col.className = "col-12";
    const box = document.createElement("div");
    box.className = "zone-empty rounded-3 p-3";
    box.textContent = "No parking zone matches that name or district.";
    col.appendChild(box);
    listEl.appendChild(col);
  } else {
    for (const zone of items) {
      const col = document.createElement("div");
      col.className = "col-md-6 col-lg-4";

      const card = document.createElement("div");
      card.className = "card h-100 zone-card";

      const body = document.createElement("div");
      body.className = "card-body";

      const title = document.createElement("h2");
      title.className = "card-title h6";
      title.textContent = zone.name;

      const district = document.createElement("p");
      district.className = "card-text mb-1";
      district.textContent = zone.district + " district";

      const note = document.createElement("p");
      note.className = "card-text text-body-secondary small mb-0";
      note.textContent = zone.slots + " slots — " + zone.note;

      body.appendChild(title);
      body.appendChild(district);
      body.appendChild(note);
      card.appendChild(body);
      col.appendChild(card);
      listEl.appendChild(col);
    }
  }

  countEl.textContent = "Showing " + items.length + " of " + zones.length + " zones";
}

function applyFilter(raw) {
  // Lowercase BOTH sides, otherwise "ALMALY" would not match "Almaly".
  const q = raw.trim().toLowerCase();

  // filter() returns a NEW array; `zones` is never modified, which is why
  // clearing the box brings every zone back.
  const matches = zones.filter(function (zone) {
    return (
      zone.name.toLowerCase().includes(q) ||
      zone.district.toLowerCase().includes(q)
    );
  });

  renderZones(matches);
}

/* ---------- events ---------- */

qEl.addEventListener("input", function () {
  applyFilter(qEl.value);
  const saved = saveFilter(qEl.value);
  storeNoteEl.textContent = saved
    ? "Filter saved — it will still be here next time."
    : "Storage is blocked in this browser, so the filter is not remembered.";
});

clearBtn.addEventListener("click", function () {
  qEl.value = "";
  applyFilter("");
  saveFilter("");
  qEl.focus();
});

/* ---------- start: restore the last filter, if any ---------- */

const restored = readSavedFilter();
qEl.value = restored;
applyFilter(restored);
storeNoteEl.textContent = restored
  ? 'Restored your last filter: "' + restored + '"'
  : "";
console.table(zones);
