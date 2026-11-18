# Top Mountain Resort — website

One-page site for Top Mountain Resort, Diyatalawa, built from the Figma Make design
"Bootstrap Import Setup" (React + Vite, plain CSS, lucide-react icons — no Bootstrap).

## Run it

```
npm install
npm run dev       # http://localhost:5173
npm run build     # production files in dist/
npm run preview   # serve the production build
```

## Where things live

| What | File |
| --- | --- |
| Text, prices, stays, photos, phone number | `src/data/content.js` |
| Enquiry checks and the WhatsApp message | `src/lib/enquiry.js` |
| Page sections (header, hero, stays, …) | `src/sections/` |
| Pop-ups (enquiry, stay details, film, photo viewer) | `src/modals/` |
| Logo, eyebrow label, accessible modal | `src/components/` |
| All styling | `src/styles.css` |
| Photos, fonts, film, favicon | `public/` |

## How enquiries work

There is no backend. "Plan your escape", "Enquire about a stay" and the other booking buttons open
the enquiry form. Once the dates are valid it shows **Send enquiry on WhatsApp**, which opens
`wa.me/94777368264` with the dates, guests and chosen stay filled in. Change the number in
`src/data/content.js` (`contact`).
