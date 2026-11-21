# CSE6624 — Week 11 Lab: filterable club directory

**Name:** Maksim Kossov
**Group:** ____

## The data shape
`clubs` is an **array of objects**. Each object is one club with two properties,
both strings:

```js
const clubs = [
  { name: "Robotics", room: "GUK201" },
  ...
];
```

- `name` — the club's name, the only property the filter searches
- `room` — the room it meets in, shown after an em dash

Five objects in the array. Nothing about the list is written in `index.html`;
`<ul id="list">` starts empty and `renderClubs()` fills it.

## How the filter works
The input fires on every keystroke (`input` event, not `change`), so the list
updates live. `clubs.filter(...)` returns a **new** array of the clubs whose name
contains the query — the original `clubs` array is never modified, which is why
clearing the box brings everything back.

Both sides are lowercased before comparing, so "web", "Web" and "WEB" all match.
An empty query makes `includes("")` true for every club, so the full list shows
with no special case needed.

## Why textContent and not innerHTML
`li.textContent = ...` inserts the value as text. `innerHTML` would parse it as
markup, which becomes a security problem the moment the data stops being a hard
coded array.

## How to run
Live Server on `index.html`. Type "web" → one club. Type "WEB" → the same club.
Clear the box → all five. Console shows `console.table(clubs)` on load.

## AI disclosure
AI used for: drafting the markup, the JS and this README.
I rewrote: the club data, the empty-state message and the counter line.
