# CSE6624 — Week 13 Lab: study spots from JSON

**Name:** Maksim Kossov
**Group:** ____

## Live Server is required
`fetch("./data.json")` fails when the page is opened as `file:///…` — the browser
treats every local file as a separate origin and blocks the request. **Open the
folder in VS Code and use Live Server**, so the page is served over
`http://127.0.0.1:5500`. Then DevTools → Network shows `data.json` with status 200.

## What it does
`data.json` holds an array of four objects (`id`, `title`, `blurb`). On load the
page fetches it, parses it with `res.json()`, and builds one card per object with
`createElement` and `textContent`.

## Error handling
Two separate failures are covered:
- **`!res.ok`** — the file is missing or the server answers 404/500. `fetch` does
  **not** reject on a bad status; it resolves with `ok === false`, so the check is
  explicit and throws `HTTP 404`.
- **`catch`** — no network, blocked origin (`file://`), or invalid JSON.

Either way the card grid is replaced by one red block telling the reader to use
Live Server. To see it, rename `data.json` and reload.

## Files
- `index.html` — shell with an empty `#list`
- `data.json` — the four study spots
- `styles.css` — shared base plus the card grid
- `main.js` — fetch, render, error path

## AI disclosure
AI used for: drafting the markup, the fetch logic and this README.
I rewrote: the four study spots and their blurbs, and the error wording.
