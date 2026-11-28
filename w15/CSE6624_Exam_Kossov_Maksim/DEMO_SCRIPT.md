# DEMO_SCRIPT.md — Tezjol Scooters (5–7 minute Exam Defence)

1. **0:00–0:30 — Identity, Seed & README.**
   State: Maksim Kossov, ID `07********94`, group `CS City U CSE6624`, Niche 15 (Electric scooter rental in Almaty). Show `README.md` with the seed math (`ID2=94, M=5, L=11 → Hue 3, Accent 54`) and watermark `CSE6624 | Maksim Kossov | 07********94 | niche-15`. Show clean folder tree in VS Code (`index/zones/tips/quiz.html`, `css/tokens.css`, `css/styles.css`, `css/bootstrap-theme.css`, `data/zones.json`, `js/`, `images/`, `screenshots/`).

2. **0:30–1:30 — Home walkthrough & Watermark.**
   Open `index.html` via Live Server (`http://127.0.0.1:5500`). Explain the Almaty target audience, hero CTA, 3-step Grid, Fleet Flexbox row, and Almaty Rider Hub contact block. Scroll to the footer and point out the exact watermark string `CSE6624 | Maksim Kossov | 07********94 | niche-15`.

3. **1:30–3:00 — Key pages, Bootstrap & Responsive resize.**
   - Open `zones.html`: explain that this page uses **Bootstrap 5.3** (`navbar`, `row g-3`, `col-md-6 col-lg-4`, `card`, `list-group`) customized with `css/tokens.css` + `css/bootstrap-theme.css` so it uses seed Hue 3 / Accent 54 instead of default Bootstrap blue.
   - Open `tips.html`: point out semantic lists (`<ul>`/`<ol>`) and the tariff `<table>` (`<caption>`, `<thead>`, `<th scope="col/row">`).
   - Open `quiz.html`: show 1–2 questions with keyboard `Tab`/`Enter` and `✓` / `✕` feedback.
   - Switch DevTools to mobile (`~375px`): show zero horizontal scroll, 1-column cards, and working collapsible menus (custom `nav.js` on Home and Bootstrap `collapse` on Zones).

4. **3:00–4:30 — Live JS: `fetch()`, Filter, `localStorage` & Form Validation.**
   - On `zones.html`: type `almaly` then `ALMALY` (case-insensitive filter). Click **Save stop** on a zone card, submit a custom stop (test empty submit first to trigger JS error, then add a valid stop), and press **F5** — both the filter and saved stops persist.
   - On `index.html`: submit the booking form with **bad values** (empty name, bad email, unchecked box) → show the accessible JS error box (`role="alert"`) and focus jump. Then enter valid values (`12` minutes) → show the client-side confirmation (`1080 ₸`) without page reload. Emphasize: *"This is a client-side confirmation; there is no backend server."*

5. **4:30–5:30 — DevTools proof, Accessibility & Screenshots.**
   - Open DevTools **Console** (0 errors), **Network** (`data/zones.json` → `200 OK`), and **Application → Local Storage** (`tezjol-niche15-zone-filter` and `tezjol-niche15-saved-zones`).
   - Press `Tab` from the top of the page to demonstrate the skip link and mustard `:focus-visible` outline.
   - Open the `screenshots/` folder in VS Code to confirm ownership captures.

6. **5:30–6:30 — Questions & Live Modification.**
   Ready to modify live on request:
   - **Change seed colour:** `css/tokens.css` → `--hue: 3;` → `200;` → Save (`Ctrl+S`). All 4 pages (including Bootstrap buttons/navbar on `zones.html`) turn blue immediately.
   - **Change spacing:** `css/tokens.css` → `--gap: 1rem;` → `2rem;`.
   - **Add `console.log` on submit:** `js/booking.js`, right after `const price = minutes * 90;`, add `console.log("Booking:", name, zoneName, minutes, price);`.
   - **Break & fix form validation:** in `js/booking.js`, temporarily change `minutes < 10` to `minutes < 50` (or tweak `EMAIL_PATTERN`), demonstrate rejection, then restore.
   - **Trigger `fetch()` fallback:** temporarily rename `data/zones.json`, reload `zones.html` to show the `HTTP 404` alert banner + fallback.

Estimated timed rehearsal: 5 min 45 s (rehearse aloud twice on phone timer before defence).
