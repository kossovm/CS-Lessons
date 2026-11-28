# ANSWERS.md — Defence Question Bank (Brief 7.2 + Workbook 1–10)

**1. Why did you choose this niche / what is unique vs a classmate?**
Niche 15 (Electric scooter rental) comes from my personal seed (`ID2=94, M=5, L=11 → (94+5+11) mod 24 + 1 = 15`). I localized it specifically for Almaty (**Tezjol Scooters**): real districts (Almaly, Bostandyk, Medeu), Satbayev campus and Dostyk Plaza parking hubs, 90 ₸/min tariff, 25/15/6 km/h speed table, custom SVG scooter icon, and a 5-question rider safety quiz.

**2. Walk me through your folder structure.**
Root has 4 pages (`index.html`, `zones.html`, `tips.html`, `quiz.html`) and docs (`README.md`, `DEFENCE_NOTES.md`, `DEMO_SCRIPT.md`, `ANSWERS.md`). `css/tokens.css` holds shared seed variables (`--hue`, `--accent-hue`, `--gap`) linked on every page; `css/styles.css` styles Home/Tips/Quiz; `css/bootstrap-theme.css` applies seed overrides to Bootstrap 5.3 on `zones.html`. `data/zones.json` stores the zone dataset fetched by `js/zones.js`. `js/` keeps one focused module per feature (`nav.js`, `booking.js`, `zones.js`, `quiz.js`). `images/` holds `scooter.svg`, and `screenshots/` holds evidence captures.

**3. Where is your seed used in CSS? Change the primary button color live.**
In `css/tokens.css` inside `:root`: `--hue: 3;` (`hsl(3, 65%, 40%)`) and `--accent-hue: 54;` (`hsl(54, 70%, 45%)`). Every colour variable derives from `--hue`, and `css/bootstrap-theme.css` maps `--bs-primary` and `.btn-primary`'s `--bs-btn-bg` to `var(--brand)`. Changing `--hue: 3;` to `200;` recolours all four pages and Bootstrap buttons at once.

**4. Where is your responsive breakpoint defined?**
At the bottom of `css/styles.css`: `@media (max-width: 900px)` switches the 3-step Grid to 2 columns and stacks the booking+support grid; `@media (max-width: 600px)` drops steps and the form to 1 column and collapses the nav into the Menu button. On `zones.html`, Bootstrap's `md` (`768px`) and `lg` (`992px`) breakpoints handle `col-md-6 col-lg-4` cards and `navbar-expand-md`. Every page has `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`.

**5. Why did you choose Flexbox vs Grid here?**
Flexbox is one-dimensional (one row/axis): used for the header bar (`margin-right: auto` on `.brand` pushes nav right) and `.fleet-row`. CSS Grid is two-dimensional (rows and columns aligned together): used for `.steps` (`repeat(3, 1fr)`), `.book-layout`, `.form`, and Bootstrap's 12-column grid on `zones.html`.

**6. How does your form validation work? (Break it on purpose and fix.)**
`#book-form` uses `novalidate` so `js/booking.js` controls validation consistently on `submit`: `e.preventDefault()` stops page reload, then it checks `name.length < 2`, `EMAIL_PATTERN.test(email)`, `minutes` between `10` and `180`, and `agreeEl.checked`. Invalid fields receive `.is-invalid` + `aria-invalid="true"`, errors render as a text list in `#book-errors` (`role="alert"`), and focus moves to the first invalid field. On valid input, `#book-msg` (`role="status"`) shows the client-side confirmation and `minutes * 90 ₸`. Same pattern on `#custom-stop-form` in `zones.js`.

**7. Explain one JS function: parameters and DOM nodes (`zones.js`).**
`renderZones(items)` takes an array of zone objects (`items`), clears `#list` via `listEl.textContent = ""`, handles the empty state if `items.length === 0`, and loops through `items` creating Bootstrap column/card nodes (`div`, `article`, `h3`, `span`, `p`, `button`) via `document.createElement` and `textContent` (avoiding XSS from `innerHTML`), wiring each button's `click` listener to `addSavedStop` / `removeSavedStop`, and updating `#count`.

**8. Which semantic tags did you use and why not only `<div>`?**
`<header>`, `<nav>`, one `<main>` per page, `<section>`, `<article>`, `<aside>`, `<footer>`, `<table>`/`<caption>`/`<thead>`/`<th scope>`, `<label for>`. Landmarks let screen readers and keyboard users jump directly between page regions, whereas `<div>` carries no semantic meaning.

**9. How do you know your paths work on another computer, and what happens if `fetch()` or `localStorage` fails?**
All paths are lowercase relative paths without spaces (`css/tokens.css`, `images/scooter.svg`, `./data/zones.json`). In `zones.js`, `fetch()` explicitly checks `if (!res.ok) throw new Error(...)` and falls back to `FALLBACK_ZONES` with a visible alert; all `localStorage` reads/writes are wrapped in `try/catch` so private/blocked browsers keep working without crashing.

**10. Did you use AI? What would you add with one more day?**
Yes — disclosed in `README.md`. AI helped draft boilerplate and audit contrast; I designed the Almaty niche content, seed architecture (`tokens.css` shared with Bootstrap), explicit JS validation, and tested all flows live. With one more day: connect reservations to a real backend API, add an interactive Almaty map, and add automated browser tests.
