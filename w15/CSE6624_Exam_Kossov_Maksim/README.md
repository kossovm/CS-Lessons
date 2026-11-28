# CSE6624 Exam Project — Tezjol Scooters

- **Student:** Maksim Kossov
- **ID:** 07********94
- **Group:** CS City U CSE6624
- **Contact email:** kossovm@outlook.com
- **GitHub repository:** https://github.com/kossovm/CS-Lessons
- **Niche:** 15 — Electric scooter rental (city)
- **Seed:** Hue=3 (`hsl(3, 65%, 40%)`), Accent=54 (`hsl(54, 70%, 45%)`) — calculated from `ID2=94`, `M=5` (May), `L=11` (K)
- **Watermark:** `CSE6624 | Maksim Kossov | 07********94 | niche-15`

A four-page responsive static web application for **Tezjol Scooters**, a fictional electric scooter rental service in Almaty. Built strictly with semantic HTML5, CSS3 (Flexbox, Grid, custom properties), optional Bootstrap 5.3 on `zones.html`, and vanilla JavaScript — no React, no Node.js, no database, no build step.

## How to run
Install nothing beyond a modern browser and the VS Code **Live Server** extension.
1. Open `CSE6624_Exam_Kossov_Maksim` in VS Code.
2. Right-click `index.html` → **Open with Live Server** (`http://127.0.0.1:5500/...`).
3. **Note on `fetch()`:** Live Server (`http://`) allows `zones.html` to fetch `data/zones.json` cleanly (`200 OK`). If opened directly via `file://` or if `data/zones.json` is missing, a warning alert explains the error and built-in offline fallback data keeps the page working.

## Pages
| Page | Styling | Content & interactive features |
| --- | --- | --- |
| `index.html` | Custom CSS (`tokens.css` + `styles.css`) | Hero & CTA, 3-step How it works Grid, Fleet Flexbox row, JS-validated booking form, Almaty Rider Hub contact card |
| `zones.html` | **Bootstrap 5.3** + `tokens.css` + `bootstrap-theme.css` | `fetch('./data/zones.json')` cards, live filter, dynamic "My saved stops" list (add/remove/clear) persisted in `localStorage` |
| `tips.html` | Custom CSS (`tokens.css` + `styles.css`) | Riding checklists (`<ul>`, `<ol>`) and semantic speed-limit & tariff `<table>` (`caption`, `thead`, `th scope`) |
| `quiz.html` | Custom CSS (`tokens.css` + `styles.css`) | Five-question interactive rider test with score, progress bar, keyboard support, and Play again |

Every page shares the same navigation structure, seed palette (`css/tokens.css`), and exact watermark footer.

## Features
- **Semantic HTML5:** `<header>`, `<nav>`, `<main>` (one per page), `<section>`, `<article>`, `<aside>`, `<footer>`, single `<h1>` per page, semantic data table on `tips.html`.
- **Responsive CSS & Seed Theme:** Custom breakpoints at `900px` and `600px` in `css/styles.css`; Bootstrap `md` (`768px`) and `lg` (`992px`) breakpoints on `zones.html`; zero horizontal overflow at `375px` and `1200px`. All colours derive from `--hue: 3` and `--accent-hue: 54` in `css/tokens.css`.
- **Bootstrap 5.3 customization (`zones.html`):** Uses Bootstrap `navbar`, `navbar-toggler` + `collapse`, `container`, `row g-3`, `col-md-6 col-lg-4`, `card`, `form-control`, `form-select`, `btn-primary`, `btn-outline-primary`, `alert`, `list-group`, and `badge`, themed with `css/bootstrap-theme.css` so it matches the seed palette rather than default Bootstrap blue.
- **Explicit client-side JS form validation (`js/booking.js`, `js/zones.js`):** Validates name length (`>= 2`), email pattern, numeric range (`10–180`), agreement checkbox, and duplicate stop names, outputting clear text errors in `role="alert"` containers and marking invalid inputs with `aria-invalid="true"`. Valid booking submission displays a client-side confirmation message (no backend).
- **JavaScript interactivity & graceful failure:**
  1. Mobile navigation toggle (`js/nav.js` + Bootstrap `collapse` on `zones.html`)
  2. Booking form validation & fare estimator (`js/booking.js`)
  3. `fetch('./data/zones.json')` + live case-insensitive zone filter (`js/zones.js`)
  4. Dynamic "My saved stops" add/remove/clear list persisted in `localStorage` (`js/zones.js`)
  5. Five-question Rider test (`js/quiz.js`)
  All scripts wrap DOM lookups with null checks and `localStorage` calls with `try/catch`.

## Storage & fetch
- `fetch('./data/zones.json')` checks `if (!res.ok) throw new Error("HTTP " + res.status)` before parsing JSON and falls back cleanly on error.
- `localStorage` stores two keys inside `try/catch`:
  - `tezjol-niche15-zone-filter` — last filter query
  - `tezjol-niche15-saved-zones` — JSON array of saved stops (`JSON.stringify` / `JSON.parse`)

## Accessibility notes
- Keyboard-focusable skip link (`Skip to content`) to `#main` on every page.
- Visible mustard `:focus-visible` outline (`3px solid var(--accent)`) across both custom CSS and Bootstrap controls.
- Paired `<label for="...">` on every input/select, descriptive `alt` on `images/scooter.svg` (original custom SVG asset).
- Form validation errors and quiz outcomes are communicated in text (`role="alert"`, `aria-live="polite"`, `✓` / `✕` icons), never by colour alone.

## AI tools used
AI (Claude / Gemini) was used as a helper to draft boilerplate markup/scripts, check contrast ratios, and polish documentation. I computed the personal seed (`Hue=3`, `Accent=54`, `niche-15`), authored the Almaty Tezjol niche copy and parking dataset, structured the shared `tokens.css` layer across custom CSS and Bootstrap 5.3, verified all JS validation and `fetch`/`localStorage` flows, and can explain and modify every file live.

## Screenshots
See `/screenshots` (capture and keep at least 4 fresh screenshots from your own machine before final submission):
- `01-vscode-home.png` — VS Code showing `index.html` with visible watermark footer
- `02-devtools-mobile.png` — Chrome DevTools mobile view (~375px)
- `03-zones-js.png` — `zones.html` with live filter, saved stops, and DevTools Local Storage
- `04-form-validation.png` — `index.html` showing JS validation error or client-side confirmation state

## Known limitations
- Front-end only: the booking form displays a client-side confirmation message and does not send emails or store data on a server.
- Saved stops live in browser `localStorage` and are local to the current browser.
