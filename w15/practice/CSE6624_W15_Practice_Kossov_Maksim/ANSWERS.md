# ANSWERS.md — defence questions 1–5

**1. Walk me through your folder structure.**
Root: `index.html`, `zones.html`, `tips.html`, `quiz.html`. `css/styles.css` is the only
stylesheet — every page links it. `js/` has one file per feature: `nav.js` on every page,
`booking.js` on Home, `zones.js` on Parking zones, `quiz.js` on Rider test. `images/` holds
`scooter.svg`, `screenshots/` the desktop and mobile captures. All paths are relative, so the
folder works from any location.

**2. Where is your responsive breakpoint defined?**
At the bottom of `css/styles.css`. `@media (max-width: 900px)` takes the steps and zone cards
from three columns to two. `@media (max-width: 600px)` makes them and the form one column,
shows the Menu button and hides the nav until it is opened. The `<meta name="viewport">` in
every page is what makes these work on a real phone.

**3. Why did you choose Flexbox vs Grid here?**
The header is one row with a brand on one side and links on the other — one axis, so Flexbox,
with `margin-right: auto` on the brand to push the nav right. The steps, zone cards and form
are a grid of equal tracks that must line up in rows and columns, so Grid —
`repeat(3, 1fr)` — and one line in a media query changes the column count.

**4. What happens when this button is clicked?**
*Menu:* `nav.js` toggles the class `is-open` on `#site-nav`; CSS shows the nav only when that
class is there; the script also sets `aria-expanded`.
*Reserve:* the browser checks `required`, the email format and `min` / `max` first. Only if all
pass does `submit` fire; `booking.js` calls `preventDefault()`, computes `minutes × 90`, writes
the confirmation into the status line and resets the form.

**5. Change this colour / spacing live.**
Colour: in `:root`, `--hue: 3` → `200`. Every colour is `hsl(var(--hue), …)`, so header, hero,
buttons, borders and text all change from one number.
Spacing: `--gap: 1rem` → `2rem` widens the space between steps and zone cards at once.
