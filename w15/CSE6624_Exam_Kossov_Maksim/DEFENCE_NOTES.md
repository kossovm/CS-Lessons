# Defence notes — CSE6624 Exam Project

**Watermark:** `CSE6624 | Maksim Kossov | 07********94 | niche-15`
**Seed math:** `ID2=94`, `M=5`, `L=11` → `Hue=(94×7+5×13) mod 360 = 3`, `Accent=(3+40+11) mod 360 = 54`, `Niche=(94+5+11) mod 24 + 1 = 15`.

## What the JavaScript does
1. **`js/zones.js` — `fetch()` JSON + live filter + dynamic `localStorage` list.**
   - `loadZones()` fetches `./data/zones.json`, checks `if (!res.ok) throw new Error("HTTP " + res.status)`, and parses JSON. On error (404 or `file://`), shows `#fetch-alert` and loads `FALLBACK_ZONES`.
   - `applyFilter()` lowercases both the input query and `zone.name`/`zone.district`, filters the array, and builds Bootstrap cards using `createElement` + `textContent` (no untrusted `innerHTML`).
   - "My saved stops" supports saving/removing zone cards, adding validated custom stops via `#custom-stop-form`, removing items, and clearing all, persisted in `localStorage` (`tezjol-niche15-saved-zones`) via `JSON.stringify` / `JSON.parse` inside `try/catch`.
2. **`js/booking.js` — explicit client-side JS form validation & price calculator.**
   - Uses `novalidate` on `#book-form` so custom JS validates every submit: name (`>= 2` chars), email regex (`EMAIL_PATTERN`), minutes (`10–180`), and required checkbox.
   - Displays all failed checks as a text list inside `#book-errors` (`role="alert"`), sets `aria-invalid="true"` + `.is-invalid`, and focuses the first invalid control. On success, shows a client-side confirmation with `minutes × 90 ₸` and resets the form.
3. **`js/nav.js` & `js/quiz.js` — responsive menu & 5-question rider test.**
   - `nav.js` toggles `.is-open` on `#site-nav` below `600px` and updates `aria-expanded` (while `zones.html` uses Bootstrap `collapse`).
   - `quiz.js` manages `current` and `score`, creates `<button>` choices via `createElement`, marks `.is-correct` / `.is-wrong` (`✓` / `✕`), and resets on Play again.
   - All four scripts guard DOM lookups against `null` so missing elements fail gracefully without crashing the page.
