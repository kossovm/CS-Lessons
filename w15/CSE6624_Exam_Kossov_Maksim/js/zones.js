// Parking zones: fetch('./data/zones.json') with fallback + live filter
// + dynamic "My saved stops" list (add / remove / clear) persisted in localStorage.
(function () {
  const FILTER_KEY = "tezjol-niche15-zone-filter";
  const SAVED_KEY = "tezjol-niche15-saved-zones";

  // Built-in fallback used ONLY if fetch('./data/zones.json') fails (e.g. file:// or missing file)
  const FALLBACK_ZONES = [
    { id: "abay-furmanov", name: "Abay / Furmanov", district: "Almaly", slots: 12, note: "Under the metro entrance canopy" },
    { id: "green-bazaar", name: "Green Bazaar", district: "Almaly", slots: 8, note: "East wall, away from the stalls" },
    { id: "satbayev-campus", name: "Satbayev campus", district: "Bostandyk", slots: 20, note: "Between GUK and the library" },
    { id: "mega-alma-ata", name: "Mega Alma-Ata", district: "Bostandyk", slots: 15, note: "North car park, row A" },
    { id: "medeu-lower-gate", name: "Medeu lower gate", district: "Medeu", slots: 6, note: "Last zone before the climb" },
    { id: "dostyk-plaza", name: "Dostyk Plaza", district: "Medeu", slots: 10, note: "Street side, not the courtyard" }
  ];

  const qEl = document.getElementById("q");
  const clearFilterBtn = document.getElementById("clear");
  const listEl = document.getElementById("list");
  const countEl = document.getElementById("count");
  const noteEl = document.getElementById("store-note");
  const fetchAlertEl = document.getElementById("fetch-alert");

  const customFormEl = document.getElementById("custom-stop-form");
  const customNameEl = document.getElementById("custom-name");
  const customDistrictEl = document.getElementById("custom-district");
  const customErrorEl = document.getElementById("custom-error");
  const savedListEl = document.getElementById("saved-list");
  const savedCountEl = document.getElementById("saved-count");
  const savedStatusEl = document.getElementById("saved-status");
  const clearSavedBtn = document.getElementById("clear-saved");

  // Graceful exit if expected DOM elements are missing
  if (
    !qEl || !clearFilterBtn || !listEl || !countEl || !noteEl || !fetchAlertEl ||
    !customFormEl || !customNameEl || !customDistrictEl || !customErrorEl ||
    !savedListEl || !savedCountEl || !savedStatusEl || !clearSavedBtn
  ) {
    return;
  }

  let zones = [];
  let savedStops = [];

  /* ---------- safe localStorage helpers (try/catch for private mode) ---------- */

  function readFilter() {
    try {
      return localStorage.getItem(FILTER_KEY) || "";
    } catch (err) {
      return "";
    }
  }

  function writeFilter(value) {
    try {
      localStorage.setItem(FILTER_KEY, value);
      return true;
    } catch (err) {
      return false;
    }
  }

  function readSavedStops() {
    try {
      const raw = localStorage.getItem(SAVED_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (err) {
      return [];
    }
  }

  function writeSavedStops(items) {
    try {
      localStorage.setItem(SAVED_KEY, JSON.stringify(items));
      return true;
    } catch (err) {
      return false;
    }
  }

  /* ---------- dynamic saved stops list (add / remove + persist) ---------- */

  function isStopSaved(id) {
    return savedStops.some(function (stop) {
      return stop.id === id;
    });
  }

  function hasStopName(name) {
    const normalized = name.trim().toLowerCase();
    return savedStops.some(function (stop) {
      return stop.name.trim().toLowerCase() === normalized;
    });
  }

  function showCustomError(text) {
    customErrorEl.textContent = text;
    customErrorEl.classList.remove("d-none");
    customNameEl.classList.add("is-invalid");
    customNameEl.setAttribute("aria-invalid", "true");
    customNameEl.focus();
  }

  function clearCustomError() {
    customErrorEl.textContent = "";
    customErrorEl.classList.add("d-none");
    customNameEl.classList.remove("is-invalid");
    customNameEl.setAttribute("aria-invalid", "false");
  }

  function addSavedStop(stop) {
    if (isStopSaved(stop.id)) {
      savedStatusEl.textContent = '"' + stop.name + '" is already in your saved stops.';
      return;
    }
    savedStops.push(stop);
    const ok = writeSavedStops(savedStops);
    savedStatusEl.textContent = ok
      ? 'Added "' + stop.name + '" and saved to localStorage.'
      : 'Added "' + stop.name + '" (storage is blocked, so it will not persist).';
    renderSavedStops();
    applyFilter(qEl.value);
  }

  function removeSavedStop(id) {
    const target = savedStops.find(function (s) { return s.id === id; });
    savedStops = savedStops.filter(function (s) { return s.id !== id; });
    writeSavedStops(savedStops);
    savedStatusEl.textContent = target ? 'Removed "' + target.name + '".' : "";
    renderSavedStops();
    applyFilter(qEl.value);
  }

  function renderSavedStops() {
    savedListEl.textContent = "";
    savedCountEl.textContent = String(savedStops.length);

    if (savedStops.length === 0) {
      const empty = document.createElement("li");
      empty.className = "list-group-item text-body-secondary";
      empty.textContent = "No saved stops yet. Save a zone above or add your own stop.";
      savedListEl.appendChild(empty);
      return;
    }

    for (const stop of savedStops) {
      const li = document.createElement("li");
      li.className = "list-group-item d-flex justify-content-between align-items-center gap-2";

      const info = document.createElement("div");
      const nameEl = document.createElement("strong");
      nameEl.textContent = stop.name;

      const badge = document.createElement("span");
      badge.className = "badge seed-badge ms-2";
      badge.textContent = stop.district;

      info.append(nameEl, badge);

      const removeBtn = document.createElement("button");
      removeBtn.type = "button";
      removeBtn.className = "btn btn-sm btn-outline-primary";
      removeBtn.textContent = "Remove";
      removeBtn.setAttribute("aria-label", "Remove " + stop.name);
      removeBtn.addEventListener("click", function () {
        removeSavedStop(stop.id);
      });

      li.append(info, removeBtn);
      savedListEl.appendChild(li);
    }
  }

  /* ---------- zone cards + live filter ---------- */

  function renderZones(items) {
    listEl.textContent = "";

    if (items.length === 0) {
      const col = document.createElement("div");
      col.className = "col-12";
      const box = document.createElement("div");
      box.className = "alert alert-light border border-secondary-subtle mb-0";
      box.textContent = "No parking zone matches that name or district.";
      col.appendChild(box);
      listEl.appendChild(col);
    }

    for (const zone of items) {
      const col = document.createElement("div");
      col.className = "col-md-6 col-lg-4";

      const card = document.createElement("article");
      card.className = "card h-100 seed-card shadow-sm";

      const body = document.createElement("div");
      body.className = "card-body d-flex flex-column";

      const headerRow = document.createElement("div");
      headerRow.className = "d-flex justify-content-between align-items-start gap-2 mb-1";

      const title = document.createElement("h3");
      title.className = "h5 card-title mb-0";
      title.textContent = zone.name;

      const badge = document.createElement("span");
      badge.className = "badge seed-badge";
      badge.textContent = zone.district;

      headerRow.append(title, badge);

      const detail = document.createElement("p");
      detail.className = "card-text small text-body-secondary mb-3 flex-grow-1";
      detail.textContent = zone.slots + " slots — " + zone.note;

      const saveBtn = document.createElement("button");
      saveBtn.type = "button";
      const alreadySaved = isStopSaved(zone.id);
      saveBtn.className = alreadySaved
        ? "btn btn-sm btn-outline-primary align-self-start"
        : "btn btn-sm btn-primary align-self-start";
      saveBtn.textContent = alreadySaved ? "Saved ✓ (remove)" : "Save stop";
      saveBtn.addEventListener("click", function () {
        if (isStopSaved(zone.id)) {
          removeSavedStop(zone.id);
        } else {
          addSavedStop({ id: zone.id, name: zone.name, district: zone.district });
        }
      });

      body.append(headerRow, detail, saveBtn);
      card.appendChild(body);
      col.appendChild(card);
      listEl.appendChild(col);
    }

    countEl.textContent = "Showing " + items.length + " of " + zones.length + " zones";
  }

  function applyFilter(raw) {
    const q = raw.trim().toLowerCase(); // lowercase BOTH sides of the comparison
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
    noteEl.textContent = writeFilter(qEl.value)
      ? "Filter saved — it will still be here after reload."
      : "Storage is blocked in this browser, so the filter is not remembered.";
  });

  clearFilterBtn.addEventListener("click", function () {
    qEl.value = "";
    applyFilter("");
    writeFilter("");
    noteEl.textContent = "";
    qEl.focus();
  });

  customFormEl.addEventListener("submit", function (e) {
    e.preventDefault();
    clearCustomError();

    const name = customNameEl.value.trim();
    const district = customDistrictEl.value;

    if (name.length < 2) {
      showCustomError("Stop name must be at least 2 characters.");
      return;
    }

    if (hasStopName(name)) {
      showCustomError('"' + name + '" is already in your saved stops.');
      return;
    }

    const id = "custom-" + name.toLowerCase().replace(/[^a-z0-9]+/g, "-") + "-" + Date.now();
    addSavedStop({ id: id, name: name, district: district });
    customFormEl.reset();
    customNameEl.focus();
  });

  clearSavedBtn.addEventListener("click", function () {
    clearCustomError();
    savedStops = [];
    writeSavedStops(savedStops);
    savedStatusEl.textContent = "Cleared all saved stops.";
    renderSavedStops();
    applyFilter(qEl.value);
  });

  /* ---------- load JSON with fetch() + explicit HTTP check + fallback ---------- */

  async function loadZones() {
    try {
      const res = await fetch("./data/zones.json");
      // fetch() does not throw on 404 — check res.ok explicitly
      if (!res.ok) {
        throw new Error("HTTP " + res.status);
      }
      const data = await res.json();
      if (!Array.isArray(data)) {
        throw new Error("Invalid JSON format");
      }
      zones = data;
      fetchAlertEl.classList.add("d-none");
    } catch (err) {
      zones = FALLBACK_ZONES;
      fetchAlertEl.textContent =
        "Could not load data/zones.json (" +
        err.message +
        "). Open the folder with Live Server (http://), not file://. Showing built-in offline fallback.";
      fetchAlertEl.classList.remove("d-none");
    }

    savedStops = readSavedStops();
    renderSavedStops();

    const restored = readFilter();
    qEl.value = restored;
    applyFilter(restored);
    if (restored) {
      noteEl.textContent = 'Restored your last filter: "' + restored + '"';
    }
  }

  loadZones();
})();
