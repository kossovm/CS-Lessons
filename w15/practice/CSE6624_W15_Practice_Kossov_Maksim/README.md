# Tezjol Scooters — CSE6624 exam project

**Name:** Maksim Kossov
**Group:** ____
**Contact email:** ____

A four-page static site for Tezjol Scooters, a fictional electric scooter rental in
Almaty (my niche, 15). Front end only: HTML, CSS, vanilla JS — no frameworks, no build step.

## How to open
Install nothing beyond a browser and the Live Server extension. Open this folder in
VS Code → right-click `index.html` → **Open with Live Server**.

## Pages
| Page | What is on it |
| --- | --- |
| `index.html` | Hero, how it works (3 steps), fleet, booking form |
| `zones.html` | Six parking zones with a live filter |
| `tips.html` | Riding and parking rules |
| `quiz.html` | Five-question rider test with score |

All four share one header, nav and footer and one stylesheet, `css/styles.css`.

## Features
- Semantic layout: `header`, `nav`, `main`, `section`, `article`, `footer`, one `h1` per page
- Flexbox for the header bar and fleet row; Grid for the steps, zone cards and form
- Responsive: breakpoints at **900px** (3 → 2 columns) and **600px** (1 column, nav collapses into a Menu button)
- Booking form with `label`/`for`, `required`, `type="email"`, `min`/`max` on minutes
- Seed colours in CSS custom properties — change `--hue` in `:root` and every page recolours

## JS interactions
1. **Menu toggle** (`js/nav.js`, every page) — below 600px the Menu button opens and closes the nav and updates `aria-expanded`
2. **Booking confirmation** (`js/booking.js`) — on a valid submit, `preventDefault()` keeps the page and a status line shows the zone, minutes and price
3. **Zone filter** (`js/zones.js`) — filters by name or district on every keystroke, case-insensitive
4. **Rider test** (`js/quiz.js`) — one question at a time, right/wrong marked, score and progress bar, Play again

## Storage / fetch
`zones.html` keeps the last filter in `localStorage` under `tezjol-niche15-zone-filter`, so
reopening the page restores it. Both reads and writes are in `try/catch`: in private mode the
filter still works, it is just not remembered.

## Accessibility notes
- Skip link to `#main` on every page, visible on keyboard focus
- `:focus-visible` outline on links, buttons, inputs and selects
- Every input has a label; the image has a descriptive `alt`
- Quiz answers are real `<button>`s (Tab + Enter work) and right/wrong is shown with ✓ / ✕, not colour alone
- `aria-current="page"` marks the current page in the nav; `aria-live` announces the booking result and filter count

## AI disclosure
AI was used to draft the markup, the scripts and this README. I wrote the brand, all
page copy, the zone data and the quiz questions, chose the layout and the colours, and I
can explain and change every file.

## Known limitations
- No backend: the booking form confirms on the page and does not send anything
- Zone data is a hard-coded array; the next step would be `fetch("zones.json")`
