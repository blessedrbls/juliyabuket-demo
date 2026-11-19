# Juliya Buket — flower shop demo site

A demo website for **Juliya Buket**, a flower shop in Kyiv (Obolon district). The site UI is in Ukrainian.

**Live demo:** https://blessedrbls.github.io/juliyabuket-demo/

## Features
- Mobile-first, static HTML/CSS/vanilla JS — no frameworks, no build step
- Catalog with price filters (under ₴1000, ₴1000–2000, ₴2000–3000, ₴3000–5000, balloons)
- Order form in a modal, pre-filled with the selected bouquet (delivery or pickup, date, time, card text)
- Demo submission only — no data is sent anywhere
- Embedded Google Map, opening hours, contacts

## Editing the catalog
All bouquets live in [`data.js`](data.js): `photo`, `name`, `price`, `category`.
Put photos into `images/` using the file names from `data.js` (e.g. `images/2500.jpg`).
If a photo is missing, the card shows a styled placeholder. The hero uses `images/magazyn.jpg`.

## Run locally
```bash
python3 -m http.server 8000
```
Then open http://localhost:8000.
