# SIS-4 · Week 13 · Accessibility fix + ID watermark

**Name:** Maksim Kossov
**Student ID:** [STUDENT ID]
**Niche:** 15 — Electric scooter rental
**Seed:** Hue=3, Accent=54
**Watermark:** CSE6624 | Maksim Kossov | [STUDENT ID] | niche-15

## What is here
- `before.html` — the deliberately broken Tezjol "lost and found" contact page
- `index.html` — the same page repaired, with an **Accessibility notes** list of the 7 fixes
- `styles.css`, `main.js` — styling with the seed colours; the submit message

## The fixes (details in the page itself)
1. Placeholder-only inputs → real `<label for>` on every field
2. `div` with `onclick` → `<button type="submit">` (Tab, Enter, Space work)
3. #bbb on white (≈1.9:1) → seed dark red (≈12:1)
4. `outline: none` → `:focus-visible` outline in the accent colour
5. Two `h1` + jump to `h4` → one `h1`, then `h2`
6. Missing `alt` on the logo → `alt=""`, because it is decorative next to the brand name
7. Added `lang`, viewport, landmarks and a skip link

## Keyboard check
Tab from the top: skip link → name → email → scooter number → message → Send →
the `before.html` link. Every stop shows the accent outline. Enter on Send submits.

## Watermark
In the footer banner on `index.html`, white on the seed dark red, readable on screenshots.

## How to open
Live Server on `index.html`; open `before.html` next to it for the comparison.

## Screenshots
`/screenshots`: VS Code with `index.html` open, and DevTools with the footer selected.

## AI disclosure
AI used for: drafting both pages and the CSS. I wrote the scenario, chose the
fixes and wrote the notes, and I can explain each one.
