# Defence notes — what the JavaScript does

- **`js/nav.js` — menu toggle.** Below 600px CSS hides the nav. The Menu button toggles the
  class `is-open` on `#site-nav` and sets `aria-expanded` to `true` / `false`, so a screen
  reader knows whether the menu is open.
- **`js/booking.js` — booking confirmation.** The browser validates first (`required`,
  `type="email"`, `min="10"` / `max="180"`); the `submit` event fires only when all fields
  pass. The handler calls `preventDefault()`, computes the price as `minutes × 90 ₸`, writes
  the confirmation into a `role="status"` line and resets the form.
- **`js/zones.js` — filter + localStorage.** Six zone objects in an array. On every `input`
  event the query and each zone's name and district are lowercased, `filter()` returns a new
  array and `renderZones()` rebuilds the cards with `createElement` + `textContent`. The query
  is saved to `localStorage` inside `try/catch` and restored on load.

Also on the site: `js/quiz.js`, the five-question rider test (state = `current` + `score`,
`classList` marks right and wrong, Play again resets both).
