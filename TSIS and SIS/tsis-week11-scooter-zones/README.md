# Attestation 2 direction — Tezjol parking zones (TSIS-4 demo)

**Name:** Maksim Kossov
**Student ID:** [STUDENT ID]
**Niche:** 15 — Electric scooter rental
**Seed:** Hue=3, Accent=54
**Watermark:** CSE6624 | Maksim Kossov | [STUDENT ID] | niche-15

## The JS feature
A live filter over the parking zones. Typing in the search box filters six zone
objects by **name or district** and re-renders the card grid on every keystroke.
The last filter is kept in `localStorage`, so reopening the page restores it.

## Answers to the TSIS-4 question bank

**Which DOM method did you use to update the page?**
`document.createElement` for each card, `appendChild` to put it in the grid,
`textContent` for every piece of text, and `innerHTML = ""` to clear the grid
before a re-render. No `innerHTML` is used to insert data — only to empty a node.

**What happens if localStorage is disabled?**
Nothing breaks. Reading and writing `localStorage` throws in private mode or when
site data is blocked, so both calls are wrapped in `try / catch` (`readSavedFilter`
and `saveFilter`). On failure the page filters exactly as before and shows the line
"Storage is blocked in this browser, so the filter is not remembered."

**How is your feature different from a classmate's?**
It searches two fields instead of one (name **and** district), has a real empty
state, a live count line, a Clear button, and it persists across reloads. The data
is my niche — Almaty parking zones for a scooter rental.

## Files
- `index.html` — navbar, filter, card grid
- `custom.css` — seed colour overrides on top of Bootstrap
- `main.js` — the filter, the renderer and the storage helpers

## How to open
Live Server on `index.html` (needs internet for the Bootstrap CDN).
Type "almaly" → 2 zones. Type "ALMALY" → the same 2. Clear → all 6.
Reload the page — the filter you typed is still there.

## AI disclosure
AI used for: drafting the markup, the filter and this README.
I wrote / rewrote: the zone data, the notes, and the storage-failure wording.
