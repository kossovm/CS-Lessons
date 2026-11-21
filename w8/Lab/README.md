# CSE6624 — Week 08 Lab: Attestation 1 milestone polish

**Name:** Maksim Kossov
**Group:** ____
**Student ID:** 20XXXXXX94
**Niche:** 15 — Electric scooter rental
**Seed:** Hue=3, Accent=54
**Watermark:** CSE6624 | Maksim Kossov | 20XXXXXX94 | niche-15

## Topic
A two-page site for Tezjol Scooters, a fictional electric scooter rental in Almaty:
how renting works, and how to ride and park without blocking the pavement.

## Files
- `index.html` — home: hero, three-step Grid, fleet section with image
- `tips.html` — riding and parking tips
- `styles.css` — shared stylesheet, Flex for the header and hero, Grid for the steps
- `images/scooter.svg` — scooter illustration
- `CHECKLIST.md` — Attestation 1 self-checklist, filled honestly

## Layout approach
Flex and Grid both. Flex for one-axis rows (header, hero); Grid for the three
"How it works" cards.

## How to open
Live Server on `index.html`. Nav links go both ways between the two pages.

## Breakpoints
- **900px** — the three "How it works" cards become two columns
- **600px** — one column, the header stacks, the scooter image stops floating

## Form
`Book a scooter` on the home page: name, email, pick-up zone (`select`), minutes
(`number` with min/max) and a required agreement checkbox. `method="get" action="#"`,
no backend this week — the values appear in the query string on submit.

## What remains for the attestation itself
The small JS feature (mobile nav toggle or filter) and the `screenshots/` folder.

## AI disclosure
AI used for: drafting the markup and this README.
I rewrote: the brand, all page copy, the riding rules and the palette decisions.
