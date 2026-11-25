# DEMO_SCRIPT.md — Tezjol Scooters (≤ 4 minutes)

**0:00 — Intro (30 s).** Maksim Kossov. Tezjol Scooters — a fictional electric scooter
rental in Almaty, my niche 15. Folder: four HTML pages, `css/styles.css`, `js/` with one
file per feature, `images/`, `screenshots/`, README.

**0:30 — Page walkthrough (50 s).** Home → Parking zones → Riding tips → Rider test. Same
header and nav on all four; the current page is underlined (`aria-current="page"`).

**1:20 — Layout + responsive proof (40 s).** Header bar is Flexbox: the brand has
`margin-right: auto` and pushes the nav right. Steps, zone cards and the form are Grid.
DevTools → device toolbar → 375px: one column, nav folds into the Menu button.
Breakpoints at the bottom of `styles.css`: 900px and 600px.

**2:00 — JavaScript feature (40 s).** On 375px press Menu — nav opens, `aria-expanded`
flips. Back on Home: press Reserve empty — the browser blocks it. Fill it in, 12 minutes →
"Reserved: 12 minutes from Almaly — about 1080 ₸", no page reload.

**2:40 — localStorage (30 s).** Parking zones: type `almaly` → 2 of 6. Press F5 — the
filter is still there. DevTools → Application → Local Storage → `tezjol-niche15-zone-filter`.

**3:10 — Accessibility highlight (30 s).** Tab from the top: the first stop is the skip
link, every stop has a yellow outline. Rider test answers are buttons; right and wrong
show ✓ / ✕, not colour alone.

**3:40 — Closing (20 s).** With one more day: load the zones from `zones.json` with
`fetch`, and send the booking to a real backend.

## Live changes, if asked
- Colour: `css/styles.css` → `:root` → `--hue: 3;` → `200;` → save → the whole site turns blue.
- String: `index.html` → hero `<h1>` → change the text → save.
- `console.log` on submit: `js/booking.js`, first line inside the submit handler.

Timed once on a phone timer before the defence: ____ min ____ s.
