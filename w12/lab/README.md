# CSE6624 — Week 12 Lab: Todo-lite with DOM only

**Name:** Maksim Kossov
**Group:** ____

## What it does
Add a task with the form, click the row to mark it done (CSS `line-through`),
press × to delete it. When the last task goes, the empty-state message comes back.
No frameworks, no storage — the list lives only until you refresh.

## The two event details that matter
**`e.preventDefault()` on submit.** A form submit reloads the page by default,
which would wipe the list every time you add to it.

**`e.stopPropagation()` on delete.** The × button is inside the `<li>`, and the
`<li>` has its own click handler that toggles `done`. A click on × bubbles up
through the row, so without `stopPropagation` every delete would also toggle the
task done on its way out. The method ends the bubble at the button.

## Files
- `index.html` — form, list, empty-state message
- `styles.css` — shared base plus the task styling
- `main.js` — add, toggle, delete, empty state

## How to run
Live Server on `index.html`. Add two tasks, click one (struck through), delete the
other, then delete the rest — the empty message reappears.

## AI disclosure
AI used for: drafting the markup, the JS and this README.
I rewrote: the copy, the done-state styling and the aria-label wording.
