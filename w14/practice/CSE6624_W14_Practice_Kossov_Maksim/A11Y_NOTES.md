# Week 14 · Accessibility notes — Todo-lite

**Name:** Maksim Kossov
**Group:** ____

Page audited: my Week 12 Lab todo list, copied here and fixed.

## Five checks I performed

1. **Keyboard only — FIXED.** Tabbing through the Week 12 version, the tasks could not be
   reached: "mark done" was a click handler on the `<li>`. Each task text is now a
   `<button>` with `aria-pressed`, so Tab reaches it, Enter and Space toggle it, and a
   screen reader says "pressed / not pressed".
2. **Focus visibility — FIXED.** Added the `:focus-visible` rule for `a`, `button`, `input`,
   `select`, `textarea` (3px outline in the accent colour, 2px offset). Every Tab stop is visible.
3. **Labels — FIXED.** The input's label was screen-reader-only. It is now visible above the
   field, still tied by `for="item"`. The × buttons keep `aria-label="Delete task: …"`, since
   "×" alone means nothing when read aloud.
4. **Headings and landmarks — VERIFIED.** One `h1`, no skipped levels; `header`, `main`,
   `footer` present. Added a skip link to `#main` as the first Tab stop.
5. **Contrast — VERIFIED.** Measured in DevTools: body text 12.3:1, muted hint and label
   text 7.7:1, white on the red Add button 6.9:1 — all above the 4.5:1 minimum.

Bonus: changes are announced through a hidden `role="status"` region ("Added: …",
"Deleted: …"), and after a delete the focus returns to the input instead of being lost.

## Images
The page has no images, so there is no `alt` to fix.
