// Parking zones: live filter + the last filter remembered in localStorage.

const zones = [
  { name: "Abay / Furmanov",  district: "Almaly",    slots: 12, note: "Under the metro entrance canopy" },
  { name: "Green Bazaar",     district: "Almaly",    slots: 8,  note: "East wall, away from the stalls" },
  { name: "Satbayev campus",  district: "Bostandyk", slots: 20, note: "Between GUK and the library" },
  { name: "Mega Alma-Ata",    district: "Bostandyk", slots: 15, note: "North car park, row A" },
  { name: "Medeu lower gate", district: "Medeu",     slots: 6,  note: "Last zone before the climb" },
  { name: "Dostyk Plaza",     district: "Medeu",     slots: 10, note: "Street side, not the courtyard" }
];

// localStorage throws in private mode or when site data is blocked,
// so both calls are wrapped: the worst case is the filter is not remembered.
const STORE_KEY = "tezjol-niche15-zone-filter";

function readSavedFilter() {
  try {
    return localStorage.getItem(STORE_KEY) || "";
  } catch (err) {
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

const qEl = document.getElementById("q");
const listEl = document.getElementById("list");
const countEl = document.getElementById("count");
const noteEl = document.getElementById("store-note");

function renderZones(items) {
  listEl.textContent = "";

  if (items.length === 0) {
    const empty = document.createElement("p");
    empty.className = "zone-empty";
    empty.textContent = "No parking zone matches that name or district.";
    listEl.appendChild(empty);
  }

  for (const zone of items) {
    const card = document.createElement("article");
    card.className = "card";

    const title = document.createElement("h2");
    title.textContent = zone.name;

    const district = document.createElement("p");
    district.textContent = zone.district + " district";

    const detail = document.createElement("p");
    detail.className = "note";
    detail.textContent = zone.slots + " slots — " + zone.note;

    card.append(title, district, detail);
    listEl.appendChild(card);
  }

  countEl.textContent = "Showing " + items.length + " of " + zones.length + " zones";
}

function applyFilter(raw) {
  const q = raw.trim().toLowerCase(); // lowercase BOTH sides of the comparison
  const matches = zones.filter(function (zone) {
    return zone.name.toLowerCase().includes(q) || zone.district.toLowerCase().includes(q);
  });
  renderZones(matches);
}

qEl.addEventListener("input", function () {
  applyFilter(qEl.value);
  noteEl.textContent = saveFilter(qEl.value)
    ? "Filter saved — it will still be here next time."
    : "Storage is blocked in this browser, so the filter is not remembered.";
});

document.getElementById("clear").addEventListener("click", function () {
  qEl.value = "";
  applyFilter("");
  saveFilter("");
  noteEl.textContent = "";
  qEl.focus();
});

const restored = readSavedFilter();
qEl.value = restored;
applyFilter(restored);
if (restored) {
  noteEl.textContent = 'Restored your last filter: "' + restored + '"';
}
