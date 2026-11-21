# CSE6624 — Week 10 Lab: two small tools

**Name:** Maksim Kossov
**Group:** ____

## The two tools
- **Tip calculator** — reads the bill and the tip percent, computes
  `bill * (tipPct / 100)` for the tip and adds it for the total. With 1000 and 10 %
  it shows a tip of 100.00 and a total of 1100.00.
- **Grade average** — reads three grades and passes them to `average3(a, b, c)`,
  which returns `(a + b + c) / 3`. The result is printed with `toFixed(2)`.

## Files
- `index.html` — both tools, one section each
- `styles.css` — shared base plus the tool styling
- `main.js` — both tools and the shared validation helpers

## Validation
Each button checks its fields before any maths. A missing or non-numeric field
turns the output box red and prints a message instead of a result; the tip
calculator also rejects negative numbers.

The check is `value.trim() !== "" && !Number.isNaN(Number(value))`, in that order.
`Number("")` returns **0**, not `NaN`, so an empty field would silently compute a
tip of zero if the empty string were not rejected first.

## Why toFixed(2)
Division in JavaScript is always floating point — `(80 + 90 + 95) / 3` is
88.33333333333333. `toFixed(2)` is formatting for display only; the number itself
is unchanged.

## How to run
Live Server on `index.html`, then F12 → Console. Two lines are logged on load and
the tip calculation logs its inputs.

## AI disclosure
AI used for: drafting the markup, the JS and this README.
I rewrote: the validation messages, the layout and the tool copy.
