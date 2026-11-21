# CSE6624 — Maksim Kossov — 20XXXXXX94

Niche: 15 — Electric scooter rental
Seed: Hue=3, Accent=54
Watermark: CSE6624 | Maksim Kossov | 20XXXXXX94 | niche-15

## Seed arithmetic
- ID2 = 94, M = 5 (born May), L = 11 (surname Kossov, K is the 11th letter)
- Hue = (94 * 7 + 5 * 13) mod 360 = 723 mod 360 = **3**
- Accent = (3 + 40 + 11) mod 360 = **54**
- Niche index = (94 + 5 + 11) mod 24 = 110 mod 24 = **14** -> niche **15**

```css
:root {
  --hue: 3;
  --accent-hue: 54;
  --brand: hsl(3, 65%, 40%);
  --accent: hsl(54, 70%, 45%);
}
```
Every colour on every page is derived from those two numbers. Changing `--hue`
repaints the whole site.

## How to open
Open any `index.html` in a browser (Live Server recommended).

## Deliverables in this repo
- `sis-week3-business-card/` — SIS-1, digital business card for Tezjol Scooters
  (fictional brand in niche 15). Semantic header/main/footer + 3 sections,
  logo with alt text, contact block, watermark in footer.
- `sis-week6-css-art/` — SIS-2, CSS art of a scooter built from 7 HTML elements,
  no image files. Grid layout around the art, hover animation on the headlight.
- `styles-base.css` — the shared token block copied into the top of every page's
  stylesheet.

## Screenshots
See `/screenshots` — VS Code with the file open and browser DevTools, watermark readable.

## AI disclosure
AI used for: drafting the markup, the CSS art geometry and this README.
I wrote / rewrote: the brand, the three facts, the contact details, the caption text
and the palette decisions.
