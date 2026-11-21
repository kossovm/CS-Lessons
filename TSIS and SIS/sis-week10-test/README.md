# SIS-3 · Week 10 · Tezjol Rider Test (interactive niche quiz)

**Name:** Maksim Kossov
**Student ID:** [STUDENT ID]
**Niche:** 15 — Electric scooter rental
**Seed:** Hue=3, Accent=54
**Watermark:** CSE6624 | Maksim Kossov | [STUDENT ID] | niche-15

## What it is
A five-question quiz about my niche: tariff, where you may ride, how a ride is ended,
the fleet speed limit, and what to do with a low battery. Vanilla JS and the DOM only —
no libraries, no framework, no build step.

## The five DOM updates
1. `textContent` on the question, the progress line and the score
2. `createElement` + `appendChild` builds one `<button>` per answer option
3. `classList.add("is-correct" / "is-wrong")` colours the options after a click
4. `hidden` swaps the question card for the result screen
5. "Play again" resets `current` and `score` and re-renders from scratch

Score and progress are on screen the whole time: a counter, a running score, and a
progress bar whose width is set from `current / questions.length`.

## Data shape
`questions` is an array of objects:

```js
{ q: "…", options: ["…"], answer: 1, why: "…" }
```

`answer` is the **index** into `options`, not the text — comparing indexes avoids
string-matching bugs when two options read similarly.

## Accessibility
Each option is a real `<button>`, so Tab and Enter work with no extra code. The
correct/wrong state is carried by a ✓ / ✕ prefix as well as colour, so it survives
a colour-blind reader or a black and white printout.

## How to open
Open `index.html` in a browser (Live Server recommended). No internet needed.

## Screenshots
See `/screenshots` — VS Code with `main.js` open and the running page with the
watermark readable.

## AI disclosure
AI used for: drafting the markup, the quiz engine and this README.
I wrote / rewrote: all five questions and explanations, the scoring copy and the
colour decisions.
